import { Drawer,  DrawerClose,
    DrawerContent,DrawerDescription,
    DrawerFooter, DrawerHeader,
    DrawerTitle, DrawerTrigger} from "./ui/drawer";
import { Button } from "./ui/button";
import Scene from "./Scene";  
export default function DrawrComp({indxCn, lss}){
    
    return(
<Drawer className="h-screen">

  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>

  <div className="h-3/4  items-center justify-center mx-auto">
  <DrawerTitle>{indxCn} data </DrawerTitle>


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

    {/* <DrawerHeader>
      <DrawerDescription>
        {lss.item}

      </DrawerDescription>
    </DrawerHeader> */}

    
    <DrawerFooter>
      {/* <Button>Submit</Button> */}
      <DrawerClose>
        {/* <Button variant="outline">Cancel</Button> */}
      </DrawerClose>
    </DrawerFooter>
  </div>

  </DrawerContent>

</Drawer>

)

}