export default function Meal({ name, imageurl }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageurl} className="max-h-50" />
    </div>
  );
}
