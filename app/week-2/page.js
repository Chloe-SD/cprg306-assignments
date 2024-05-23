import StudentInfo from "@/components/student-info";
import Header from "@/components/header";

export default function Page() {
    return (
      <main>
        <Header/>
        <div className="px-5">
          <h1>Shopping List</h1>
          <StudentInfo/>  
        </div>    
      </main>
    );
  }