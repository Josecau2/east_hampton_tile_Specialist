"use client"

import { useRef, useState } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/supa/supabase"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [fileError, setFileError] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    details: ""
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const newFiles = Array.from(files)
      if (selectedFiles.length + newFiles.length > 5) {
        setFileError("Maximum 5 files allowed in total.")
      } else {
        setFileError("")
        setSelectedFiles(prev => [...prev, ...newFiles])
      }
      // Reset input value to allow selecting the same file again if needed
      e.target.value = ""
    }
  }

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove))
    setFileError("")
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitSuccess(false)

    try {
      // Upload photos to Supabase Storage if any
      const photoUrls: string[] = []

      if (selectedFiles.length > 0) {
        for (const file of selectedFiles) {
          const fileName = `${Date.now()}-${file.name}`
          const { error: uploadError } = await supabase.storage
            .from('quote-photos')
            .upload(fileName, file)

          if (uploadError) {
            throw new Error(`Failed to upload ${file.name}: ${uploadError.message}`)
          }

          // Get public URL for the uploaded file
          const { data: { publicUrl } } = supabase.storage
            .from('quote-photos')
            .getPublicUrl(fileName)

          photoUrls.push(publicUrl)
        }
      }

      // Insert the quote submission into the database using the easthampton schema
      const { error } = await supabase
        .from('quotes')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            zip: formData.zip,
            project_details: formData.details,
            photo_urls: photoUrls
          }
        ])

      if (error) {
        throw error
      }

      setSubmitSuccess(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        details: ""
      })
      setSelectedFiles([])
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to submit quote request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <Card {...props}>
        <CardHeader>
          <CardTitle>Thank You!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Your quote request has been submitted successfully. We&apos;ll get back to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Request a Quote</CardTitle>
        <CardDescription>
          Send us your details and we&apos;ll get back to you with a preliminary estimate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {submitError && (
            <div className="mb-4 p-3 rounded-md bg-destructive/10 text-destructive text-sm">
              {submitError}
            </div>
          )}
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Field>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="address">Street Address</FieldLabel>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="zip">Zip Code</FieldLabel>
                <Input
                  id="zip"
                  type="text"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="details">Project Details</FieldLabel>
              <Textarea
                id="details"
                className="min-h-[100px]"
                value={formData.details}
                onChange={handleInputChange}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="photos">Project Photos (Optional)</FieldLabel>
              
              {/* Hidden Input */}
              <input 
                ref={fileInputRef}
                id="photos" 
                type="file" 
                multiple 
                accept="image/*"
                className="hidden"
                aria-label="Upload photos"
                onChange={handleFileChange}
              />

              {/* Custom Upload UI */}
              <div className="flex flex-col gap-3">
                {selectedFiles.length > 0 && (
                   <ul className="grid gap-2">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="flex items-center justify-between rounded-md border p-2 text-sm">
                        <span className="truncate max-w-[200px]">{file.name}</span>
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove file</span>
                        </Button>
                      </li>
                    ))}
                   </ul>
                )}

                {selectedFiles.length < 5 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={triggerFileInput} 
                    className="w-full gap-2 border-dashed"
                  >
                    <Upload className="h-4 w-4" />
                    {selectedFiles.length > 0 ? "Add more photos" : "Upload photos"}
                  </Button>
                )}
                
                {selectedFiles.length >= 5 && (
                  <p className="text-[0.8rem] text-muted-foreground italic">Maximum 5 photos reached.</p>
                )}
              </div>

              <p className="text-[0.8rem] text-muted-foreground mt-2">Upload up to 5 photos of the current space or inspiration images.</p>
              {fileError && <p className="text-[0.8rem] font-medium text-destructive">{fileError}</p>}
            </Field>

            <FieldGroup>
              <Field>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
