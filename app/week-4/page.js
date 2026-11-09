import NewItem from "./new-item"
import BackHome from "../components/back-home"

export default function Page() {
    return (
        <main>
            <div className="flex justify-center flex-col items-center p-4">
                <NewItem />
                <BackHome />
            </div>
        </main>

    )
}