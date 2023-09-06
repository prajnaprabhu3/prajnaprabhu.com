import { ReactNode } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
      <Navbar />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};
