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

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [fileError, setFileError] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Request a Quote</CardTitle>
        <CardDescription>
          Send us your details and we&apos;ll get back to you with a preliminary estimate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="Nestor Fajardo" required />
            </Field>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="address">Street Address</FieldLabel>
              <Input 
                id="address" 
                type="text" 
                placeholder="123 Main St" 
                required 
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Input 
                  id="city" 
                  type="text" 
                  placeholder="East Hampton" 
                  required 
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="zip">Zip Code</FieldLabel>
                <Input 
                  id="zip" 
                  type="text" 
                  placeholder="11937" 
                  required 
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="details">Project Details</FieldLabel>
              <Textarea 
                id="details" 
                placeholder="Describe your project (e.g. Master bathroom renovation, kitchen backsplash, 500 sq ft flooring...)"
                className="min-h-[100px]"
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
                <Button type="submit" className="w-full">Submit Request</Button>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
