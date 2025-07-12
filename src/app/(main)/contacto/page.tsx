import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Esta es la página de Contacto DE ICEA. Generalmente contiene un
        formulario, un mapa o información de contacto.
      </p>
    </div>
  );
}
