import Header from "@/components/header";
import NewItem from "./new-item";

export default function Page() {
    return (
      <main>
        <Header/>
        <div className="flex justify-center w-max-content">
            <NewItem/>
        </div>
        
        
        
      </main>
    );
  }