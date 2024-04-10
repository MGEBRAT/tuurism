import About from "@/components/About/About";
import Country from "@/components/Country/Country";
import Main from "@/components/Main/Main";
import Phone from "@/components/Phone/Phone";
import Tours from "@/components/Tours/Tours";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Main />
    <About />
    <Tours />
    <Country />
    <Phone />
   </>
  );
}
