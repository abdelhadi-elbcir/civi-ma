"use client";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Tsp from "./components/Tsp";
import Preloader from "./components/Preloader";
import Partners from "./components/Partners";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return (
    <main>
      {
        loading ? <Preloader /> :
          <>
            <Hero />
            <Tsp />
            <Cards />
            <Partners/>
          </>
      }
    </main>
  );
}
