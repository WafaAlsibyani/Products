import { ReactNode } from "react";

interface CardActionsProps {
  children: ReactNode;
}

export function CardActions({ children }: CardActionsProps) {
  return (
    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
      {children}
    </div>
  );
}
