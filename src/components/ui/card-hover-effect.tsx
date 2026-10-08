import React, { ReactNode } from 'react';

export interface HoverEffectItem {
  key?: React.Key;
  title: string;
  description: string;
  link?: string;
  content?: ReactNode;
}

interface HoverEffectProps {
  items: HoverEffectItem[];
}

export function HoverEffect({ items }: HoverEffectProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
      {items.map((item) => {
        const card = (
          <div className="relative isolate h-full">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-1 z-0 rounded-[20px] bg-violet-400 opacity-0 blur-md transition duration-300 group-hover/card:opacity-45 group-focus-within/card:opacity-45" />
            <div className="relative z-10 h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.05)] transition duration-300 group-hover/card:-translate-y-1 group-hover/card:border-violet-300 group-hover/card:shadow-[0_16px_36px_rgba(139,92,246,0.18)] sm:p-5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-300" />
              <div className="relative h-full">
                {item.content ?? (
                  <div className="h-full">
                    <h3 className="mb-2 text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

        return (
          <li key={item.key ?? `${item.title}-${item.description}`} className="group/card h-full">
            {item.link ? (
              <a href={item.link} className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2">
                {card}
              </a>
            ) : card}
          </li>
        );
      })}
    </ul>
  );
}
