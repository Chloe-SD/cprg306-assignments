import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="mx-5">
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
          <Link href="/week-2">
            <button>Week 2</button>
          </Link>
          <br/>
          <Link href="/week-3">
            <button>Week 3</button>
          </Link>
          
          
      </div>
    </main>

  );
}
