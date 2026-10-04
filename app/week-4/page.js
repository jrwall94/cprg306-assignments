"use client";

import { useState } from "react";
import Counter from "./counter";

export default function Page() {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="p-4 min-h-screen flex items-center justify-center">
      <Counter quantity={quantity} setQuantity={setQuantity} />
    </main>
  );
}
