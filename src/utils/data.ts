import { AlertCircle, Clock, CreditCard, Search, Shield, Sparkles, Zap } from "lucide-react";
import { Activity } from "react";

export const layoutItems = [
  {
    id: 7,
    title: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with long battery life.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    tags: ["audio", "wireless", "gadgets"],
    category: "Electronics",
    price: 7999,
    rating: 4.5,
    inStock: true,
    createdAt: "2025-01-12"
  },
  {
    id: 2,
    title: "Mountain Bicycle",
    description: "Durable mountain bike designed for rough terrains.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    tags: ["fitness", "outdoor", "sports"],
    category: "Sports",
    price: 25999,
    rating: 4.2,
    inStock: false,
    createdAt: "2025-02-03"
  },
  {
    id: 9,
    title: "Coffee Mug",
    description: "Minimal ceramic coffee mug for daily use.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    tags: ["kitchen", "coffee", "lifestyle"],
    category: "Home",
    price: 399,
    rating: 4.7,
    inStock: true,
    createdAt: "2025-03-18"
  },
  {
    id: 1,
    title: "Smart Watch",
    description: "Fitness-focused smartwatch with heart-rate tracking.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    tags: ["wearable", "fitness", "tech"],
    category: "Electronics",
    price: 12999,
    rating: 4.3,
    inStock: true,
    createdAt: "2025-01-25"
  },
  {
    id: 5,
    title: "Gaming Keyboard",
    description: "Mechanical keyboard with RGB backlighting.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    tags: ["gaming", "accessories", "rgb"],
    category: "Computers",
    price: 5499,
    rating: 4.6,
    inStock: true,
    createdAt: "2025-02-14"
  },
  {
    id: 10,
    title: "Travel Backpack",
    description: "Spacious backpack suitable for travel and daily commute.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    tags: ["travel", "bags", "utility"],
    category: "Lifestyle",
    price: 3499,
    rating: 4.1,
    inStock: false,
    createdAt: "2025-03-01"
  },
  {
    id: 3,
    title: "Desk Plant",
    description: "Small indoor plant to enhance workspace aesthetics.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    tags: ["decor", "plants", "workspace"],
    category: "Home",
    price: 699,
    rating: 4.8,
    inStock: true,
    createdAt: "2025-01-08"
  },
  {
    id: 8,
    title: "DSLR Camera",
    description: "Professional DSLR camera for high-quality photography.",
    image: "https://images.unsplash.com/photo-1519183071298-a2962be96c8c",
    tags: ["camera", "photography", "pro"],
    category: "Electronics",
    price: 55999,
    rating: 4.4,
    inStock: true,
    createdAt: "2025-02-20"
  },
  {
    id: 4,
    title: "Notebook",
    description: "Hardcover notebook for notes and journaling.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    tags: ["stationery", "writing", "study"],
    category: "Office",
    price: 249,
    rating: 4.0,
    inStock: true,
    createdAt: "2025-03-10"
  },
  {
    id: 6,
    title: "Running Shoes",
    description: "Lightweight running shoes with breathable material.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    tags: ["running", "fitness", "footwear"],
    category: "Sports",
    price: 6999,
    rating: 4.5,
    inStock: false,
    createdAt: "2025-01-30"
  }
];

export const GridItems = [
  {
    id: 1,
    title: 'Dashboard that matters',
    description: 'Discover insights and trends with our advanced analytics dashboard.',
    imageSrc: '/images/bento-1.png', 
    span: 'col-span-1',
  },
  {
    id: 2,
    title: 'Automated emails',
    description: 'Send emails in bulk to everyone, with AI-powered suggestions.',
    imageSrc: '/images/bento-2.png',
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'Super fast Analytics',
    description: 'Get insights on your data with our blazing fast analytics dashboard.',
    imageSrc: '/images/bento-4.png',
    span: 'col-span-1',
  },
  {
    id: 4,
    title: 'Admin portal',
    description: 'Manage your data with our admin portal.',
    imageSrc: '/images/bento-5.png',
    span: 'col-span-2', 
  },
  {
    id: 5,
    title: '99.99% uptime SLA',
    description: 'We guarantee 99.99% uptime SLA for our platform.',
    imageSrc: '/images/bento-6.png',
    span: 'col-span-1', 
  },
];

export const Categories = [
  {
    id: 'auth',
    title: 'Auth',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    details: [
      { label: 'Status', value: 'Active', icon: Activity, status: 'success' },
      { label: 'API Calls', value: '2.4M', icon: Zap, status: 'neutral' },
      { label: 'Errors', value: '0.02%', icon: AlertCircle, status: 'success' },
      { label: 'Latency', value: '45ms', icon: Clock, status: 'success' }
    ]
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: CreditCard,
    color: 'from-emerald-500 to-teal-500',
    details: [
      { label: 'Status', value: 'Active', icon: Activity, status: 'success' },
      { label: 'API Calls', value: '890K', icon: Zap, status: 'neutral' },
      { label: 'Errors', value: '0.01%', icon: AlertCircle, status: 'success' },
      { label: 'Latency', value: '120ms', icon: Clock, status: 'warning' }
    ]
  },
  {
    id: 'search',
    title: 'Search',
    icon: Search,
    color: 'from-violet-500 to-purple-500',
    details: [
      { label: 'Status', value: 'Active', icon: Activity, status: 'success' },
      { label: 'API Calls', value: '5.2M', icon: Zap, status: 'neutral' },
      { label: 'Errors', value: '0.15%', icon: AlertCircle, status: 'warning' },
      { label: 'Latency', value: '85ms', icon: Clock, status: 'success' }
    ]
  },
  {
    id: 'ai',
    title: 'AI',
    icon: Sparkles,
    color: 'from-orange-500 to-pink-500',
    details: [
      { label: 'Status', value: 'Active', icon: Activity, status: 'success' },
      { label: 'API Calls', value: '1.8M', icon: Zap, status: 'neutral' },
      { label: 'Errors', value: '0.08%', icon: AlertCircle, status: 'success' },
      { label: 'Latency', value: '340ms', icon: Clock, status: 'warning' }
    ]
  }
];