"use client";

//State lifted up to parent component
export default function Counter({ quantity, setQuantity }) {
  //increment and decrement  logic

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-md max-w-xs">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-slate-700 text-sky-100 w-8 h-8 rounded-md hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        −
      </button>

      <span className="text-sky-100 text-lg w-6 text-center">{quantity}</span>

      <button
        type="button"
        onClick={increment}
        disabled={quantity === 20}
        className="bg-slate-700 text-sky-100 w-8 h-8 rounded-md hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
}
