"use client"

import type { Metadata } from "next";
import Image from "next/image";
import styled from "styled-components";
import { Poppins } from "next/font/google";
import './globals.css';
import logoLapad from '@/assets/logoLapad.svg';

//-- FONTE
const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin']})
const p = styled.p`
  font-size: 16px;
`

//-- BODY
const Body = styled.body`
  display: flex;
  flex-direction: column;
  width: full;
  align-items: center;
  margin: 5rem 0;

  background: linear-gradient(
    to bottom,
    hwb(31 11% 41% / 0.8) 10%,
    hsl(31, 69%, 35%) 23.5rem,
    hsl(44, 61%, 74%) 23.5rem,
    hsl(44, 61%, 74%)
  ) hsl(0, 0%, 100%);
  @media (min-width: 768px) {
    background: linear-gradient(
      hwb(31 11% 41% / 0.8) 10%,
      hsl(31, 69%, 35%) 23.5rem,
      hsl(44, 61%, 74%) 23.5rem,
      hsl(44, 61%, 74%)
    ) hsl(0, 0%, 100%);
  } 
`

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };



//-- ROOT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Body className={poppins.className}>

        <Image style={{marginBottom: `5rem`}} src={logoLapad} alt="." />

        {children}

      </Body>
    </html>
  );
}