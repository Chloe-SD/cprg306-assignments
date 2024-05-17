import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <span className="text-blue-500 hover:underline">Week 2</span>
        
      </Link>
    </div>

  );
}
