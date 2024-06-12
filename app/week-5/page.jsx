
import Header from "@/components/header";
import Item from "./item";
import ItemsList from "./item-list";

export default function Page() {
    return (
      <main>
        <Header/>
        <h1 className="text-2xl font-semibold flex justify-center">Shopping List</h1>
        <div className="px-5 flex-column justify-center">
          <p className=" flex justify-center">tip: Click on items to check them off as you shop<br/>
          feature: This list will adjust to your screen size!</p>
          
        </div>
        <ItemsList/>
      </main>
    );
  }