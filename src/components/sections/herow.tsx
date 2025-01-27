import { Button } from "../ui/button";
import { useState } from "react";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function HeroSectionGradientBackground() {

  const [data, setData] = useState("");
  const { toast } = useToast()


	const fetchData = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:5000/api/sensors`);
      // console.log(res.json())
      const data = await res.json();
      // console.log(JSON.stringify(data));
      toast({
        title: "Scheduledd: Catch up",
        description: JSON.stringify(data)
      })
    } catch (err) {
      console.log(err);
    }
	};




  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        {/* Gradients */}
        <Toaster />
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10 justify-center">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="text-4xl lg:text-5xl font-serif hover:text-6xl">My Portfolio</p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl hover:font-serif">
                  Mqhelisi Sibindi
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground hover:font-serif hover:text-2xl">
                  Industrial Engineering, Mechanical Systems Design, Software Development, Electrical/Electronic Design and Maintenance, 
                  Technical Writing
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
              <Button asChild>
  <Link  href="/modlview">Check Next Page</Link></Button>
  <Button asChild>
  <Link  href="/blgrvw">Check BLoog Page</Link></Button>
                <Button size={"lg"} onClick={fetchData}>Get More started</Button>
                <Button size={"lg"} variant={"outline"}
                  onClick={() => {
                    toast({
                      title: "Scheduled: Catch up",
                      description: "Friday, February 10, 2023 at 5:57 PM",
                    })
                  }}>
                  Learn Even  more
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

