//app/week-2/student-info.js- displays student name + Git-hub link 
import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p>Ebube Vincent Okutalukwe</p>
            <Link href="https://github.com/monterovincent">My Github Repository</Link>
        </div>
    )

}