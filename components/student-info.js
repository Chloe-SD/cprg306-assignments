import Link from "next/link";

const StudentInfo = () => {
    return (
        <div>
            <p>Hello! My name is Chloe</p>
            <nav>
                <Link href="https://github.com/Chloe-SD" target="_blank">
                    <span className="text-blue-500 hover:underline">Link to my GitHub</span>
                </Link>
            </nav>
            
        </div>
    );
};
export default StudentInfo;