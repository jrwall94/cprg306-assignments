"use client";
import Counter from "./new-item";

export default function NewItem() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Counter</h1>
            <Counter />
        </div>
    );
}