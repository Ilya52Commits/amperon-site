import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

// При переходе на новую страницу React Router сам не прокручивает экран.
// Этот эффект возвращает его наверх, а если в адресе есть якорь (/#about),
// прокручивает к элементу с таким id.
function useScrollOnNavigation() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Если пользователь отключил анимации в системе, прыгаем без плавности.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
        return;
      }
    }

    // Переход на другую страницу: сразу наверх, без анимации.
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, key]);
}

export function Layout() {
  useScrollOnNavigation();

  return (
    <>
      <Header />
      {/* Outlet: сюда React Router подставляет текущую страницу */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
