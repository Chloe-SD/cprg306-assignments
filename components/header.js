import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-gradient-to-bl from-fuchsia-950 to-amber-400
        flex items-center space-x-10 justify-center 
        border-2 border-pink-700
        shadow-lg rounded-lg mb-5 p-2">
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