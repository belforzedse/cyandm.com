"use client";

import { faqs } from "../../data/global";
import { Breadcrumb } from "../../components/Breadcrumb";
import { useState } from "react";

const faqCategories = [
  { id: 1, name: "Ø¹Ù…ÙˆÙ…ÛŒ", slug: "general" },
  { id: 2, name: "Ø®Ø¯Ù…Ø§Øª", slug: "services" },
  { id: 3, name: "Ù‚ÛŒÙ…Øªâ€ŒÚ¯Ø°Ø§Ø±ÛŒ", slug: "pricing" },
  { id: 4, name: "Ù¾Ø´ØªÛŒØ¨Ø§Ù†ÛŒ", slug: "support" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <>
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={[
          { label: "Ø®Ø§Ù†Ù‡", href: "/" },
          { label: "Ø³ÙˆØ§Ù„Ø§Øª Ù…ØªØ¯Ø§ÙˆÙ„" },
        ]} />
      </div>

      <div className="container grid grid-flow-row-dense grid-cols-8 grid-rows-8 gap-4 justify-center align-middle [&_img]:min-w-[200px]">
        <div>
          <img src="/images/faq.png" alt="" />
          <img src="/images/faq.png" alt="" />
        </div>

        <div className="col-span-6">
          <div className="flex justify-center items-center rounded-3xl border-b-[3px] border-gray-3 py-4 bg-black-2">
            <ul className="flex justify-center [&>li]:m-[2px] [&_li]:px-[12px] [&_li]:py-[12px] [&>li]:bg-[#8f8f8f3d] [&>li]:rounded-[6px] [&>*:hover]:scale-110 [&>*:hover]:bg-cyn-1 delay-500">
              {faqCategories.map((cat) => (
                <li
                  key={cat.id}
                  className={`faqtab cursor-pointer ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          <section className="faq-con container">
            {faqCategories.map((cat) => (
              <div
                key={cat.id}
                className={`faqcontent ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <div className="faq-content">
                  <div className="faq-posts">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="faq-card">
                        <summary className="faq-question">{faq.question}</summary>
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div>
          <img src="/images/faq.png" alt="" />
          <img src="/images/faq.png" alt="" />
        </div>
      </div>
    </>
  );
}

