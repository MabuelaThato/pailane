import About from "./about";
import FAQS from "./faqs";
import Hero from "./hero";
import Process from "./process";
import Services from "./services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-centern w-full">
      <Hero />
      <About />
      <Services />
      <FAQS />
      <Process />
    </main>
  )
}