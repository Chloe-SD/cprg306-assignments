
import Header from "@/components/header";
import ItemsList from "../../components/item-list";
import itemsData from "../../public/items.json"

export default function Page() {
    return (
      <main>
        <Header/>
        <h1 className="text-2xl font-semibold flex justify-center">Shopping List</h1>
        
        <ItemsList itemsData={itemsData}/>
      </main>
    );
  }