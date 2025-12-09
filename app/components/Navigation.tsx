'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Виртуальный мир' },
  { href: '/gallery', label: 'Галерея' },
];

const isActive = (pathname: string, href: string) => {
  return pathname.endsWith(href === '/' ? href : href.slice(1));
};

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4">
      {links.map(({ href, label }) => (
        <Link 
          key={href}
          href={href} 
          className={`transition-opacity ${isActive(pathname, href) ? 'opacity-100' : 'opacity-50'}`}
        >
          {label}
        </Link>
      ))}
    </header>
  );
}
