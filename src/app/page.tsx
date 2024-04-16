"use client";
import About from "@/components/About/About";
import Country from "@/components/Country/Country";
import Main from "@/components/Main/Main";
import useSingleTours from "@/Hooks/useSingleTours";
import Phone from "@/components/Phone/Phone";
import Tours from "@/components/Tours/Tours";
import Alert from "@/components/Alert/Alert";


export default function Home() {

  

  return (
   <>
    <Main  />
    <About />
    <Tours  />
    <Country />
    <Phone />
    <Alert />
   </>
  );
}
