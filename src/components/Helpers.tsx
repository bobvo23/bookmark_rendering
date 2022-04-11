import React from "react";

export const Menu = "ul";
export const MenuItem = "button";

export const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="Page">{children}</div>
);
