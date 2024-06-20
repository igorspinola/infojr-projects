"use client"
import React, { createContext, useContext, useState } from "react";

// Definindo o tipo do estado e das funções de controle
interface FiltroContextType {
  Idioma: "es" | "it" | "fr" | "de" | null;
  Genero: number | null;
  filterIdioma: (e: any) => void;
  filterGenero: (e: any) => void;
}

// Estado inicial
const initialState: FiltroContextType = {
  Idioma: null,
  Genero: null,
  filterIdioma: (e: any) => {},
  filterGenero: (e: any) => {}
};
interface FiltroProps {
  children: React.ReactNode;
}
// Criando o contexto
const FiltroContext = createContext<FiltroContextType>(initialState);

// Criando o provider
export const FiltroProvider: React.FC<FiltroProps> = ({ children }) => {
  const [Idioma, setIdioma] = useState(null);
  const [Genero, setGenero] = useState(null);

  const filterIdioma = (e: any) => {
    setIdioma(e.target.value)
  };
  const filterGenero = (e: any) => {
    setGenero(e.target.value);
  }

  return (
    <FiltroContext.Provider value={{ Idioma, Genero, filterIdioma, filterGenero}}>
      {children}
    </FiltroContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFiltro = () => useContext(FiltroContext);