"use client"
import { useAuth } from "@/hooks/useAuth";
export default function Home() {
  const user = useAuth();
  if (!user) return null;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>HI from Home page</h1>
   
    </div>
  );
}
