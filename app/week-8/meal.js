export default function Meal({ name, imageurl }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
      <img
        src={imageurl}
        alt={name}
        className="h-40 w-full object-cover"
      />
      <h2 className="p-4 font-semibold text-slate-800">{name}</h2>
    </article>
  );
}
