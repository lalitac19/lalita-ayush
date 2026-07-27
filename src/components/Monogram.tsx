import monoDark from "@/assets/monogram-dark.png";
import monoLight from "@/assets/monogram-light.png";

export function Monogram({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <img
      src={light ? monoLight : monoDark}
      alt="Lalita and Ayush monogram"
      className={className}
      loading="lazy"
    />
  );
}
