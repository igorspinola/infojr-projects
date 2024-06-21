import React from "react";
//-- COMPONENTS
import Idiomas from "@/components/Idiomas";
import Generos from "@/components/Generos";
import NavBar from "@/components/NavBar";
import Lista from "@/components/Lista";


export default function Home() {
  return (
    <main className="flex flex-col justify-between">
     
      <Idiomas />
      <NavBar />
      <Generos />

      <Lista />
        
    </main>
  );
}
