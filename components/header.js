import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-gray-600 ">
            <p>Chloe's WebDev 2 Website</p>
            <Link href="/">
                <span className="text-blue-500 hover:underline">Home</span>
            </Link>
            
        </div>
    );
};
export default Header;