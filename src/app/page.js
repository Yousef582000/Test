import About from "@/_componentes/About";
import Hero from "@/_componentes/Hero";
import Last from "@/_componentes/Last";
import { Servicses } from "@/_componentes/Servicses";
import Text from "@/_componentes/Text";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
    <Hero/>
    <About/>
    <Servicses/>
    <Text/>
    <Last/>
    
    </div>
  );
}
