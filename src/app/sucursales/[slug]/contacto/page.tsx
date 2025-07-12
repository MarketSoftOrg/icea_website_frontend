import { getSucursalBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
// Import desde la carpeta padre
import { SucursalPageWrapper } from "../../components/SucursalPageWrapper";

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sucursal = getSucursalBySlug(slug);

  if (!sucursal) {
    notFound();
  }

  // Mismo wrapper, diferente contenido
  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <h1 className="text-2xl font-bold mb-4">
        Contacto - Sucursal {sucursal.nombre}
      </h1>
      <p>Teléfono: {sucursal.telefono}</p>
      <p>Dirección: {sucursal.direccion}</p>
      {/* Formulario de contacto, etc. */}
    </SucursalPageWrapper>
  );
}
