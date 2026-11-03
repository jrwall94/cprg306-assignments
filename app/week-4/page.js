import NewItem from "./new-item"
import BackHome from "../components/backhome"

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