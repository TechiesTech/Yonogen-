import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Sets document <title>, meta description, canonical, and robots tags
 * for each page in the SPA. Resets to defaults on unmount.
 */
export function usePageMeta({
  title,
  description,
  canonical,
  noindex = false,
}: PageMetaOptions) {
  useEffect(() => {
    // --- Title ---
    const prevTitle = document.title;
    document.title = title;

    // --- Meta description ---
    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = descEl?.content ?? '';
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.name = 'description';
      document.head.appendChild(descEl);
    }
    descEl.content = description;

    // --- Canonical ---
    let canonEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonEl?.href ?? '';
    if (canonical) {
      if (!canonEl) {
        canonEl = document.createElement('link');
        canonEl.rel = 'canonical';
        document.head.appendChild(canonEl);
      }
      canonEl.href = canonical;
    }

    // --- Robots (noindex for 404 page) ---
    let robotsEl = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const prevRobots = robotsEl?.content ?? 'index, follow';
    if (!robotsEl) {
      robotsEl = document.createElement('meta');
      robotsEl.name = 'robots';
      document.head.appendChild(robotsEl);
    }
    robotsEl.content = noindex ? 'noindex, nofollow' : 'index, follow';

    return () => {
      // Restore defaults on unmount
      document.title = prevTitle;
      if (descEl) descEl.content = prevDesc;
      if (canonEl) canonEl.href = prevCanonical;
      if (robotsEl) robotsEl.content = prevRobots;
    };
  }, [title, description, canonical, noindex]);
}
