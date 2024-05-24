import Link from "next/link";

const StudentInfo = () => {
    return (
        <div>
            <p>Hello! My name is Chloe</p>
            <nav>
                <Link href="https://github.com/Chloe-SD" target="_blank">
                    <button>Link to my GitHub</button>
                </Link>
            </nav>
            
        </div>
    );
};
export default StudentInfo;