"use client";

import { useState } from "react";
import type { TeamMember } from "../data/types";

export function EmployeeCard({ member }: { member: TeamMember }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="fade-in-down" data-anim-delay="0.3">
      <div className="employ-card transition8 | relative w-full border-2 min-h-[420px] flex flex-col bg-black-2 rounded-3xl max-md:flex-col max-md:justify-center max-md:items-center max-md:p-4 max-md:gap-4">

        <div className={`front transition8 | ${isFlipped ? 'opacity-0' : 'opacity-100'} flex flex-col content-start justify-center gap-4 [&>img]:object-cover [&>img]:rounded-lg [&>img]:aspect-[9/10] [&>img]:max-lg:aspect-square`}>
          <img src={member.avatar} alt={member.name} />
          <div className="flex justify-between">
            <div className="employ-name flex flex-col gap-4">
              <span className="text-h4">{member.name}</span>
              <span className="employ-special">{member.role}</span>
            </div>
            <div className="flex items-center">
              <button className="employ_detail" onClick={() => setIsFlipped(true)}>
                اطلاعات بیشتر
              </button>
            </div>
          </div>
        </div>

        <div className={`behind-card | transition8 absolute w-full ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-start flex-col justify-start gap-8">
            <span className="behind-card_name h4">{member.name}</span>
            <span className="employ-card__special">{member.role}</span>
            <p className="employ-card__biography">{member.bio}</p>
            <button className="back-button my-7" onClick={() => setIsFlipped(false)}>
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
