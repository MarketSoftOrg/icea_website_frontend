// components/legal/ComplaintsSuggestionsPage.tsx
import { MessageCircle, Phone, Mail } from 'lucide-react';

interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  complaintsEmail?: string;
}

interface ComplaintsSuggestionsPageProps {
  company: CompanyInfo;
  lastUpdated?: string;
}

export default function ComplaintsSuggestionsPage({
  company,
  lastUpdated = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long' }),
}: ComplaintsSuggestionsPageProps) {
  const complaintsEmail = company.complaintsEmail || company.email;
  const whatsappLink = company.whatsapp
    ? `https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=Hola, tengo una queja o sugerencia sobre ${company.name}`
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8D8B5]/10 via-white to-[#F8D8B5]/20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#062B49] to-[#0A4A6B] text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <MessageCircle className="h-12 w-12 text-[#F8D8B5]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Quejas y Sugerencias</h1>
              <p className="text-xl text-[#F8D8B5]/90">Tu opinión nos ayuda a mejorar</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-lg leading-relaxed">
              En <strong>{company.name}</strong> estamos comprometidos con la mejora continua y valoramos tu opinión. Si
              tienes alguna queja, sugerencia o comentario, te invitamos a contactarnos.
            </p>
            <p className="text-sm text-[#F8D8B5] mt-4">
              <strong>Última actualización:</strong> {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Mensaje Principal */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo podemos mejorar?</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Estamos abiertos a recibir tus quejas y sugerencias para poder ofrecerte un mejor servicio. Tu
                retroalimentación es muy importante para nosotros y nos ayuda a crecer como empresa.
              </p>
            </section>

            {/* Canales de Contacto */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Contáctanos por:</h3>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Email */}
                <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Correo Electrónico</h4>
                  <p className="text-gray-600 text-sm mb-4">Envíanos un mensaje detallado</p>
                  <a
                    href={`mailto:${complaintsEmail}?subject=Queja/Sugerencia - ${company.name}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm break-all"
                  >
                    {complaintsEmail}
                  </a>
                </div>

                {/* Teléfono */}
                <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Teléfono</h4>
                  <p className="text-gray-600 text-sm mb-4">Llámanos directamente</p>
                  <a
                    href={`tel:${company.phone}`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    {company.phone}
                  </a>
                </div>

                {/* WhatsApp */}
                {whatsappLink && (
                  <div className="bg-amber-50 rounded-lg p-6 text-center border border-amber-200">
                    <MessageCircle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">WhatsApp</h4>
                    <p className="text-gray-600 text-sm mb-4">Mensaje rápido y directo</p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-amber-600 text-white w-12 h-12 rounded-lg hover:bg-amber-700 transition-colors"
                      aria-label="Enviar WhatsApp"
                    >
                      <MessageCircle className="h-6 w-6" />
                    </a>
                  </div>
                )}
              </div>
            </section>

            {/* Compromiso */}
            <section className="bg-gradient-to-r from-[#062B49] to-[#0A4A6B] text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Nuestro Compromiso</h3>
              <p className="text-lg mb-4 text-[#F8D8B5]">
                Nos comprometemos a revisar y responder a todas las quejas y sugerencias de manera oportuna y
                profesional.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
