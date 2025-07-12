import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acerca de',
};

export default function AcercaDePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Acerca de Nosotros ICEA</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Esta es la página Acerca de. Aquí puedes describir la historia o el propósito del proyecto que usará este
        template.
      </p>
    </div>
  );
}
