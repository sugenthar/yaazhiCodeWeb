import { useCallback, useEffect, useState } from 'react';

/**
 * Tiny History API router for the nine canonical site routes.
 * Vite's dev server and preview both fall back to index.html for these paths.
 */
export const PAGES = [
  'home',
  'about',
  'features',
  'install',
  'learn',
  'language',
  'examples',
  'ide',
  'future',
];

export function pathFor(page = 'home', id = null) {
  const cleanPage = PAGES.includes(page) ? page : 'home';
  if (cleanPage === 'home') return '/';
  return `/${cleanPage}${id ? `/${encodeURIComponent(id)}` : ''}`;
}

function normalizeRoute(pathname) {
  const segments = pathname.split('/').filter(Boolean).map(decodeURIComponent);
  const raw = segments[0] || 'home';
  const page = PAGES.includes(raw) ? raw : null;
  return { page: page || 'home', id: segments[1] || null, notFound: Boolean(raw && !page) };
}

export function getRoute() {
  return normalizeRoute(window.location.pathname);
}

export function navigate(page, id = null, options = {}) {
  const target = pathFor(page, id);
  if (window.location.pathname + window.location.search !== target) {
    window.history.pushState({ page, id }, '', target);
  } else if (!options.replace) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function useRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const go = useCallback((page, id = null) => {
    navigate(page, id);
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return [route, go];
}
