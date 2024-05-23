import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-gray-600 flex items-center space-x-10 rounded mt-2">
            <p className="m-2 text-2xl">
                Chloe&apos;s WebDev 2 Website</p>
            <Link href="/">
                <button className="text-blue-500 hover:underline bg-red-100 rounded p-1">
                    Home</button>
            </Link>
            
        </div>
    );
};
export default Header;