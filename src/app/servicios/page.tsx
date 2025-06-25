import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios',
};

export default function ServiciosPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Esta es la página de Servicios. Un lugar perfecto para listar las diferentes ofertas o características del
        proyecto.
      </p>
    </div>
  );
}
