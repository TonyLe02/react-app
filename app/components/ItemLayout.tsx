import React from "react";

interface ItemLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ItemLayout: React.FC<ItemLayoutProps> = ({ children, className }) => {
  return <div className={`item-layout ${className}`}>{children}</div>;
};

export default ItemLayout;
