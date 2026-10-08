import React, { ReactNode, useState } from 'react';

export interface FocusCardItem {
  key?: React.Key;
  title: string;
  src: string;
  content?: ReactNode;
}

interface FocusCardsProps {
  cards: FocusCardItem[];
}

export function FocusCards({ cards }: FocusCardsProps) {
  const [focusedCard, setFocusedCard] = useState<number | null>(null);

  return (
    <ul
      className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5"
      onPointerLeave={() => setFocusedCard(null)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocusedCard(null);
        }
      }}
    >
      {cards.map((card, index) => (
        <li
          key={card.key ?? `${card.title}-${index}`}
          className={`h-full transition-all duration-300 ${
            focusedCard !== null && focusedCard !== index
              ? 'scale-[0.97] opacity-40 grayscale-[0.35]'
              : 'opacity-100'
          }`}
          onPointerEnter={() => setFocusedCard(index)}
          onFocusCapture={() => setFocusedCard(index)}
        >
          <article
            className={`group relative h-full overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 sm:p-5 ${
              focusedCard === index
                ? 'z-10 -translate-y-1 scale-[1.02] border-violet-400 shadow-[0_18px_42px_rgba(139,92,246,0.24)] ring-2 ring-violet-200'
                : 'border-slate-200/80'
            }`}
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-400 transition-opacity duration-300 ${
                focusedCard === index ? 'opacity-100' : 'opacity-50'
              }`}
            />
            {card.content ?? (
              <div className="flex items-center gap-4">
                <img
                  src={card.src}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover"
                />
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              </div>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}
