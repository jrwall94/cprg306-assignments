export default function Item({ name, quantity, category }) {
    return (
        <main>
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </main>
    );
}