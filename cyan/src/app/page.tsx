import { Hero } from "../components/Hero";
import { ServicesGrid } from "../components/ServicesGrid";

export default function HomePage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)]">
      <Hero />
      <ServicesGrid />
    </main>
  );
}
