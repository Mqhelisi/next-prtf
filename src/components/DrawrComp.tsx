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
import Scene from "./Scene"
export default function DrawrComp({indxCn, lss}){
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="h-full min-w-full mx-2.5 my-3.5">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="h-screen grid grid-rows-[70%_30%]">
      <div className="row-span-1 flex items-center justify-center border-dotted border-4"> 
        {/* Content for THE first row */}
        <Scene drwing = {lss.name} mtrl = {lss.item}/>
      </div>
      <div className="grid grid-cols-3 gap-4 rounded-lg mt-4"> 
        {/* Content for the second row */}
        <h3 className="text-base sm:text-lg font-semibold">
          Product named {indxCn + 1}
        </h3>
        <div className="border-x-4">
              <p className="mt-1 text-muted-foreground">
  Generating detailed CAD based Mechanical Designs for various purposes. 
  Products such as Construction, Processing Plants, Product Development.
        </p>    
        </div>

        <Button>asdunweimdwed</Button>
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

