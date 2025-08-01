import { Shield, Eye, Lock, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';

interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  privacyEmail?: string;
  description?: string;
}

interface PrivacyPolicyPageProps {
  company: CompanyInfo;
  lastUpdated?: string;
}

export default function PrivacyPolicy({
  company,
  lastUpdated = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long' }),
}: PrivacyPolicyPageProps) {
  const privacyEmail = company.privacyEmail || `privacidad@${company.email.split('@')[1]}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8D8B5]/10 via-white to-[#F8D8B5]/20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#062B49] to-[#0A4A6B] text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="h-12 w-12 text-[#F8D8B5]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Política de Privacidad</h1>
              <p className="text-xl text-[#F8D8B5]/90">Tu privacidad es nuestra prioridad</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-lg leading-relaxed">
              En <strong>{company.name}</strong> respetamos tu privacidad y nos comprometemos a proteger tus datos
              personales conforme a la{' '}
              <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>{' '}
              de México.
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
          {/* Navigation */}
          <div className="bg-gray-50 p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Contenido</h2>
            <nav className="flex flex-wrap gap-4 text-sm">
              <a href="#informacion" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Información que Recopilamos
              </a>
              <a href="#uso" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Uso de la Información
              </a>
              <a href="#derechos" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Tus Derechos
              </a>
              <a href="#contacto" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Contacto
              </a>
            </nav>
          </div>

          <div className="p-8 space-y-12">
            {/* Información que Recopilamos */}
            <section id="informacion" className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <Eye className="h-8 w-8 text-[#062B49] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Información que Recopilamos</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Información de Contacto</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Nombre completo</li>
                        <li>• Correo electrónico</li>
                        <li>• Número de teléfono</li>
                        <li>• Empresa (opcional)</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Datos de Navegación</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Dirección IP</li>
                        <li>• Tipo de navegador</li>
                        <li>• Páginas visitadas</li>
                        <li>• Tiempo de permanencia</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Uso de la Información */}
            <section id="uso" className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-[#062B49] mt-1 flex-shrink-0" />
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Uso de la Información</h2>

                  <div className="bg-gradient-to-r from-[#062B49]/5 to-[#F8D8B5]/20 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-4 text-[#062B49]">Utilizamos tus datos para:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#062B49] rounded-full"></div>
                        <span>Responder consultas y solicitudes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#062B49] rounded-full"></div>
                        <span>Mejorar nuestros servicios</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#062B49] rounded-full"></div>
                        <span>Enviar información relevante</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#062B49] rounded-full"></div>
                        <span>Cumplir obligaciones legales</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <p className="text-red-800">
                      <strong>Importante:</strong> No vendemos, intercambiamos ni transferimos tus datos personales a
                      terceros, excepto cuando sea requerido por autoridades competentes o para cumplir obligaciones
                      legales.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Derechos ARCO */}
            <section id="derechos" className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <Users className="h-8 w-8 text-[#062B49] mt-1 flex-shrink-0" />
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tus Derechos (Derechos ARCO)</h2>

                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <p className="text-green-800 mb-4">
                      Conforme a la <strong>LFPDPPP</strong>, tienes derecho a:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-[#062B49] mb-2">🔍 ACCEDER</h4>
                        <p className="text-sm text-gray-700">Conocer qué datos personales tenemos sobre ti</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-[#062B49] mb-2">✏️ RECTIFICAR</h4>
                        <p className="text-sm text-gray-700">Corregir datos incorrectos o incompletos</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-[#062B49] mb-2">🗑️ CANCELAR</h4>
                        <p className="text-sm text-gray-700">Eliminar tus datos cuando no sean necesarios</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-[#062B49] mb-2">🛑 OPONERSE</h4>
                        <p className="text-sm text-gray-700">Limitar el uso o tratamiento de tus datos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies y Seguridad */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-[#062B49]" />
                  <h3 className="text-xl font-semibold text-[#062B49]">Cookies</h3>
                </div>
                <p className="text-gray-700 mb-4">Este sitio utiliza cookies para:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mejorar la funcionalidad</li>
                  <li>• Analizar el tráfico web</li>
                  <li>• Personalizar contenido</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">Puedes desactivar las cookies en tu navegador.</p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-[#062B49]" />
                  <h3 className="text-xl font-semibold text-[#062B49]">Seguridad</h3>
                </div>
                <p className="text-gray-700 mb-4">Implementamos medidas de seguridad para proteger tus datos:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cifrado de datos</li>
                  <li>• Acceso restringido</li>
                  <li>• Monitoreo continuo</li>
                </ul>
              </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="scroll-mt-20">
              <div className="bg-gradient-to-r from-[#062B49] to-[#0A4A6B] text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="h-8 w-8 text-[#F8D8B5]" />
                  ¿Preguntas sobre tu Privacidad?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#F8D8B5]" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-[#F8D8B5]">{privacyEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#F8D8B5]" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-[#F8D8B5]">{company.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#F8D8B5]" />
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-[#F8D8B5] text-sm">{company.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Legal */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Esta política cumple con la{' '}
                <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong> de
                México.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Nos reservamos el derecho de actualizar esta política. Los cambios se publicarán en esta página.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
