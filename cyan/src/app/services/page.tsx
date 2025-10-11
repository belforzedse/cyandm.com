import { Breadcrumb } from "../../components/Breadcrumb";
import { ScrollDown } from "../../components/ScrollDown";
import { ServiceArchiveCard } from "../../components/ServiceArchiveCard";
import { services } from "../../data/global";

const breadcrumbItems = [
  { label: "خانه", href: "/" },
  { label: "خدمات سایان" },
];

export default function ServicesPage() {
  return (
    <main className="archive-project">
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="flex flex-col justify-center items-center p-8">
        <div className="bubble" aria-hidden>
          <div className="bubble-orange">
            <span className="orange" />
          </div>
          <div className="bubble-red">
            <span className="red" />
          </div>
          <div className="bubble-blue">
            <span className="blue" />
          </div>
          <div className="bubble-green">
            <span className="green" />
          </div>
          <div className="bubble-pink">
            <span className="pink" />
          </div>
          <div className="bubble-grey">
            <span className="grey" />
          </div>
        </div>
        <img src="/images/service.png" alt="خدمات سایان" />
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h1 className="h1">خدمات سایان</h1>
          <p className="h5">مشاهده خدمات</p>
          <ScrollDown />
        </div>
      </section>

      <div className="w-full">
        <div className="bubble-service" aria-hidden>
          <div className="bubble-fixed" id="fixed_bubble" />
        </div>
        <div className="service-pages container">
          {services.map((service) => (
            <ServiceArchiveCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
}
