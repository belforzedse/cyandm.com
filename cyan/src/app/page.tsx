import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Preloader } from "../components/Preloader";
import { ServicesGrid } from "../components/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="bg-[var(--background)] text-[var(--text)]">
        <Hero />
        <ServicesGrid />
      </main>
      <Footer />
    </>
  );
}
