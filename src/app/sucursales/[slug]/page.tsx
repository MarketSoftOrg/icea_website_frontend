import { getSucursalBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SucursalPageWrapper } from "../components/SucursalPageWrapper";

// Metadata se mantiene igual
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sucursal = getSucursalBySlug(slug);
  const nombre = sucursal
    ? `Sucursal ${sucursal.nombre}`
    : "Nuestras Sucursales";

  return {
    title: nombre,
    description: `Encuentra información sobre nuestra sucursal: ${nombre}`,
  };
}

// Page actualizada con wrapper
export default async function SucursalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Obtener slug
  const { slug } = await params;

  // 2. Buscar sucursal
  const sucursal = getSucursalBySlug(slug);

  // 3. Si no existe, 404
  if (!sucursal) {
    notFound();
  }

  // 4. USAR EL WRAPPER 👇
  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <h1 className="text-2xl font-bold mb-4">
        Bienvenido a Template.ui - Sucursal {sucursal.nombre}
      </h1>
      <p className="mb-4">{sucursal.descripcion}</p>
      <div className="space-y-2">
        <p>
          <strong>Dirección:</strong> {sucursal.direccion}
        </p>
        <p>
          <strong>Teléfono:</strong> {sucursal.telefono}
        </p>
        <p>
          <strong>Horario:</strong> {sucursal.horario}
        </p>
      </div>
    </SucursalPageWrapper>
  );
}
