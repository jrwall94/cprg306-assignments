//app/week-4/page.js , renders new-item.js component 

import NewItem from './new-item';

export default function Page() {
    return (
        <main className="p-4 min-h-screen flex items-center justify-center">
            <NewItem/>
        </main>
    );
}