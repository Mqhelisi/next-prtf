import { Copy } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Scene from "@/components/Scene"
 
export function DialogCloseButton() {
  return (
    <Dialog classN>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-w-fit" >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>


                {/* Icon Block */}
                <div className="flex h-3/4 hover:bg-stone-900">
    <Scene drwing = {lss.name} mtrl = {lss.item}/>
      <div className="ms-5 sm:ms-8">
        <h3 className="text-base sm:text-lg font-semibold">
          Product named 1
        </h3>
        <p className="mt-1 text-muted-foreground">
  Generating detailed CAD based Mechanical Designs for various purposes. 
  Products such as Construction, Processing Plants, Product Development.
        </p>
      </div>
    </div>


        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}