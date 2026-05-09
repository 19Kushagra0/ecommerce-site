import { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
};

export const Icon = ({
  icon: IconComponent,
  size = 24,
  className,
  ...props
}: IconProps) => {
  return <IconComponent size={size} className={className} {...props} />;
};
