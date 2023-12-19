import { ReactNode } from "react";

interface sectionProps {
  children: ReactNode;
  className: string;
  parentClassName?: string;
}

export const Section: React.FC<sectionProps> = ({
  children,
  className,
  parentClassName,
}) => {
  return (
    <div className={parentClassName}>
      <div className={className}>{children}</div>
    </div>
  );
};
