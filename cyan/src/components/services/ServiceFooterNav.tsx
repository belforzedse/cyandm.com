"use client";

type ServiceFooterNavProps = {
  onWorkStepsClick: () => void;
  onPortfolioClick: () => void;
  onFaqClick: () => void;
  onContactClick: () => void;
};

export function ServiceFooterNav({
  onWorkStepsClick,
  onPortfolioClick,
  onFaqClick,
  onContactClick,
}: ServiceFooterNavProps) {
  return (
    <div className="service-footer flex flex-wrap justify-center gap-4 py-10">
      <button type="button" className="primary-btn" id="workSteps" onClick={onWorkStepsClick}>
        مراحل کار
      </button>
      <button type="button" className="primary-btn" id="portfolio" onClick={onPortfolioClick}>
        نمونه کارها
      </button>
      <button type="button" className="primary-btn" id="faq" onClick={onFaqClick}>
        سوالات متداول
      </button>
      <button type="button" className="primary-btn" id="contact" onClick={onContactClick}>
        تماس با سایان
      </button>
    </div>
  );
}
