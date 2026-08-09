import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
};

const LOGO_RATIO = 1974 / 542;
const ICON_RATIO = 474 / 558;

/**
 * Linkline's actual print logo (broadcast tower + signal arcs, "LiNKliNE"
 * wordmark), extracted from the company's flyer artwork. On dark surfaces
 * (footer) it sits on a light chip since the source art has no light variant.
 */
export function Logo({ variant = "dark", showWordmark = true, className = "" }: LogoProps) {
  const height = showWordmark ? 40 : 40;
  const width = showWordmark ? height * LOGO_RATIO : height * ICON_RATIO;

  const img = (
    <Image
      src={showWordmark ? "/images/linkline-logo.png" : "/images/linkline-icon.png"}
      alt="Linkline Nigeria Limited"
      width={Math.round(width)}
      height={height}
      priority
      className="h-10 w-auto object-contain"
    />
  );

  if (variant === "light") {
    return (
      <span
        className={`inline-flex items-center rounded-xl bg-paper-50 px-3.5 py-2 shadow-sm ${className}`}
      >
        {img}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}
