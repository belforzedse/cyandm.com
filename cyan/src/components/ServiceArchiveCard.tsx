import type { CSSProperties } from "react";
import type { Service } from "../data/types";
import { contact } from "../data/global";

const FALLBACK_PRIMARY = "#15EDED";
const FALLBACK_SECONDARY = "#04B2E9";

export type ServiceArchiveCardProps = {
  service: Service;
};

export function ServiceArchiveCard({ service }: ServiceArchiveCardProps) {
  const primaryColor = service.ballFirstColor ?? FALLBACK_PRIMARY;
  const secondaryColor = service.ballSecondColor ?? FALLBACK_SECONDARY;
  const phoneNumber = contact.phoneNumbers[0];

  return (
    <article
      className="service-card flex items-center gap-12 w-full mb-12"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      } as CSSProperties}
    >
      <div className="service-card__media w-2/4 max-lg:w-full">
        <img src={service.heroImage} alt={service.title} />
      </div>
      <div className="service-card__body w-2/4 max-lg:w-full flex flex-col gap-4">
        <h2 className="text-h1">{service.title}</h2>
        <p className="service-card__lead">{service.description}</p>
        {service.highlights.length > 0 && (
          <ul className="service-card__highlights">
            {service.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        {phoneNumber && (
          <a href={`tel:${phoneNumber}`} className="callus flex items-center justify-center gap-4">
            تماس با سایان
            <i className="icon-call" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
