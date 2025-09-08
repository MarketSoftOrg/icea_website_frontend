import type { ReactNode } from 'react';

export default function SucursalesLayout({ children }: { children: ReactNode }) {
  return <div className="bg-gray-100 min-h-screen flex flex-col">{children}</div>;
}
