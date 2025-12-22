import type { ReactNode } from "react";

export type LayoutItemsType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  price: number;
  rating: number;
  inStock: boolean;
  createdAt: string; // ISO date string
};

export type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  content: ReactNode;
};

