"use client"

import { useEffect, useState } from "react"
// import { Terminal } from "@/components/terminal"
import { AdvancedTerminal } from "../components/advanced-terminal"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import LoginButton from '../components/LoginButton';
import { useOCAuth } from '@opencampus/ocid-connect-js';

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const { authState, ocAuth } = useOCAuth();

   // Ensure authState exists before accessing properties

   if (authState?.isLoading) {
    return <div>Loading...</div>;
  }

  if (authState?.error) {
    return <div>Error: {authState.error.message}</div>;
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono">
      <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
        <Hero />
        <Features />
        
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-green-400">{">"}</span> Try It Out
        </h2>
        
        <AdvancedTerminal className="w-[50%] h-[1000px] mx-auto" />
        <Footer />
      </div>
    </main>
  )
}

