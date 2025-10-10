import { Breadcrumb } from "../../components/Breadcrumb";
import { LandingSections } from "../../components/LandingSections";
import { PageHero } from "../../components/PageHero";
import { landingSections } from "../../data/global";

export default function LandingCampaignPage() {
  return (
    <main className="relative min-h-screen pb-16">
      <div className="container py-6">
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "کمپین و لندینگ" }]} />
      </div>
      <PageHero
        eyebrow="SERVICE"
        title="کمپین و لندینگ"
        description="این صفحه نسخهٔ Next.js از قالب `templates/landing.php` است و ساختار اصلی وردپرس را بازسازی می‌کند."
      />
      <LandingSections sections={landingSections.landing ?? []} />
    </main>
  );
}
