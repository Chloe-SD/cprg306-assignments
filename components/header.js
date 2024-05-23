import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-fuchsia-950 flex items-center space-x-10 
        shadow-lg rounded mb-5 p-2">
            <p className="text-2xl">
                Chloe&apos;s WebDev 2 Website</p>
            <Link href="/">
                <button>
                    Home</button>
            </Link>
            
        </div>
    );
};
export default Header;