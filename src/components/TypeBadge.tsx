import typeNameZhTw from "../data/typeName";

interface Props {
  type: string;
  size?: "sm" | "md";
}

function TypeBadge({ type, size = "md" }: Props) {
  const sizeClass =
    size === "sm" ? "px-1.5 py-0.5 text-[9px]" : "px-2 py-0.5 text-[10px]";
  return (
    <span
      className={`inline-block rounded font-mono font-bold text-[14px] tracking-wider text-white ${sizeClass}`}
      style={{ backgroundColor: `var(--color-type-${type})` }}
    >
      {typeNameZhTw[type]}
    </span>
  );
}

export default TypeBadge;
