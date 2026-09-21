type ApplicantTodosProps = {
  title?: string;
  items: string[];
};

/** Starter checklist only — delete this component when the product is real. */
export function ApplicantTodos({
  title = "To-dos for you",
  items,
}: ApplicantTodosProps) {
  return (
    <section className="border-base-content/20 rounded-xl border border-dashed p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-base-content/80 flex gap-3 text-sm leading-6"
          >
            <span
              className="border-base-content/30 mt-1 h-3.5 w-3.5 shrink-0 rounded-sm border"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
