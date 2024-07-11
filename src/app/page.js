"use client"

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div>

      <Hero />
      {/* Add other sections/components as needed */}
    </div>

  );
}
