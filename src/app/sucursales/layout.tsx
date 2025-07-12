import { getSucursalBySlug } from "@/lib/data";
import type { Metadata } from "next";

const FooterSucursal = () => (
  <footer className="w-full bg-blue-950 text-white p-4 text-center text-sm">
    <p>
      © {new Date().getFullYear()} Sucursales Template.ui - Todos los derechos
      reservados.
    </p>
  </footer>
);

// generateMetadata debe ser async por convención de Next.js
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sucursal = getSucursalBySlug(params.slug);
  const nombre = sucursal
    ? `Sucursal ${sucursal.nombre}`
    : "Nuestras Sucursales";

  return {
    title: nombre,
    description: `Encuentra información sobre nuestra sucursal: ${nombre}`,
  };
}

// Layout con depuración mejorada
export default async function SucursalesLayout({
  children,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* NO pongas container aquí */}
      {children}
      <FooterSucursal />
    </div>
  );
}
