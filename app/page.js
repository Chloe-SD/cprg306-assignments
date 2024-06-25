import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="mx-5 flex-col justify-center">
          <h1 className="flex justify-center">
            CPRG 306: Web Development 2 - Assignments
          </h1>
          <div className="flex  flex-wrap justify-center space-x-3">
            <Link href="/week-2">
              <button>Week 2</button>
            </Link>
            
            <Link href="/week-3">
              <button>Week 3</button>
            </Link>
            
            <Link href="/week-4">
              <button>Week 4</button>
            </Link>

            <Link href="/week-5">
              <button>Week 5</button>
            </Link>

            <Link href="/week-6">
              <button>Week 6</button>
            </Link>

            <Link href="/week-7">
              <button>Week 7</button>
            </Link>
          </div>
          
      </div>
    </main>

  );
}
