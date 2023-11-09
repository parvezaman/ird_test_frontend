import Image from "next/image";
import Navbar from "./components/Layout/Navbar";
import MidSection from "./components/Layout/MidSection";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <section>
        <Navbar />
      </section>
      <section>
        <MidSection />
      </section>
    </main>
  );
}
