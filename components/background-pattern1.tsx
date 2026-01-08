import { cn } from "@/lib/utils";

interface BackgroundPattern1Props {
  className?: string;
  /** Position of the gradient glow: 'top' | 'bottom' | 'center' */
  position?: "top" | "bottom" | "center";
  /** Intensity of the primary color (0-100, default 100) */
  intensity?: number;
  children?: React.ReactNode;
}

/**
 * A reusable radial gradient background that adds a subtle branded glow.
 * Use sparingly on key sections (hero, CTA) to draw attention.
 */
const BackgroundPattern1 = ({
  className,
  position = "top",
  intensity = 100,
  children,
}: BackgroundPattern1Props) => {
  const positionMap = {
    top: "50% 0%",
    bottom: "50% 100%",
    center: "50% 50%",
  };

  return (
    <div className={cn("relative", className)}>
      {/* Industrial amber glow - subtle but warm */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 80% 50% at ${positionMap[position]}, oklch(from var(--primary) l c h / ${intensity * 0.12}%) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export { BackgroundPattern1 };
