import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { SignupForm } from "@/components/signup-form"

interface QuoteDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function QuoteDialog({ children, ...props }: QuoteDialogProps) {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px] p-0 border-0">
        <DialogTitle className="sr-only">Request a Quote</DialogTitle>
        <DialogDescription className="sr-only">
          Fill out the form below to request a quote for your tile project.
        </DialogDescription>
        <SignupForm className="border-0 shadow-none" />
      </DialogContent>
    </Dialog>
  )
}
