import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

// При переходе на новую страницу React Router сам не прокручивает экран.
// Этот эффект возвращает его наверх, а если в адресе есть якорь (/#about),
// прокручивает к элементу с таким id.
function useScrollOnNavigation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
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
