import { Spinner } from "@/components/Spinna"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="mx-auto my-auto">
          <Spinner className="text-red-400">
            <span className="text-red-400">Loading with custom style</span>
          </Spinner>
        </div>
      );
  }