"use client";
import Form from "./new-item";


export default function NewItem() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50 p-4">
            <h1 className="text-xl font-semibold text-gray-900">Add Item</h1>
            <Form />
        </main>
    );
}
