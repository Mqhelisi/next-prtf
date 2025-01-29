import {
    BrainCogIcon,
    PackageIcon,
    ThumbsUpIcon,
    TrophyIcon,
    UsersIcon,
    ZapIcon,
  } from "lucide-react";
  
// import Upldr from "../ui/upld";

  export default function IconSection2ColsGrid() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-18 lg:py-10 text-center mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-4xl italic font-bold pb-6">
                Training and Proficiencies
                </p>
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-4 lg:gap-12">
              <div className="space-y-6 lg:space-y-10">
                {/* Icon Block */}
                <div className="flex hover:bg-stone-900">
                  <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Engineering Design
                    </h3>
                    <p className="mt-1 text-muted-foreground">
              Generating detailed CAD based Mechanical Designs for various purposes. 
              Products such as Construction, Processing Plants, Product Development.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex hover:bg-stone-900">
                  <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Computer Softwawre Development
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Coding of database-centered software using various
                      Programming Languages(Python, JavaScript) 
                      to build apps for Tailored Business Needs. 
                      Building Web Based Portfolios for 
                      individuals and companies.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex hover:bg-stone-900">
                  <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Strong empathy
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We&apos;ve user tested our own process by shipping over 1k
                      products for clients.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Col */}
              <div className="space-y-6 lg:space-y-10">
                {/* Icon Block */}
                <div className="flex hover:bg-stone-900">
                  <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Conquer the best
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We stay lean and help your product do one thing well.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex hover:bg-stone-900">
                  <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Designing for people
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We actively pursue the right balance between functionality
                      and aesthetics, creating delightful experiences.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex hover:bg-stone-900">
                  <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Simple and affordable
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      From boarding passes to movie tickets, there&apos;s pretty
                      much nothing you can&apos;t do.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        {/* <InputForm/> */}
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }
  
