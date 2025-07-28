import { Scale, Shield, Users, AlertTriangle, Mail, Phone, MapPin, Building } from 'lucide-react';

interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  industry?: string;
  jurisdiction?: string;
}

interface TermsConditionsPageProps {
  company: CompanyInfo;
  lastUpdated?: string;
}

export default function TermsConditions({
  company,
  lastUpdated = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long' }),
}: TermsConditionsPageProps) {
  const industry = company.industry || 'servicios comerciales';
  const jurisdiction = company.jurisdiction || 'Guadalajara, Jalisco, México';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8D8B5]/10 via-white to-[#F8D8B5]/20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#062B49] to-[#0A4A6B] text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="h-12 w-12 text-[#F8D8B5]" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Términos y Condiciones</h1>
              <p className="text-xl text-[#F8D8B5]/90">Condiciones de uso de nuestro sitio web</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-lg leading-relaxed">
              Al acceder y utilizar el sitio web de <strong>{company.name}</strong>, usted acepta cumplir con estos
              Términos y Condiciones. Si no está de acuerdo, por favor no utilice nuestro sitio.
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
              <a href="#descripcion" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Descripción del Servicio
              </a>
              <a href="#uso-permitido" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Uso Permitido
              </a>
              <a href="#propiedad" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Propiedad Intelectual
              </a>
              <a href="#responsabilidad" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Responsabilidad
              </a>
              <a href="#contacto" className="text-[#062B49] hover:text-[#F8D8B5] hover:underline">
                Contacto
              </a>
            </nav>
          </div>

          <div className="p-8 space-y-12">
            {/* Aceptación y Descripción */}
            <section id="descripcion" className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <Building className="h-8 w-8 text-[#062B49] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Descripción del Servicio</h2>

                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Sobre {company.name}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {company.name} es una empresa mexicana especializada en {industry}. Este sitio web proporciona
                      información sobre nuestra empresa, productos y servicios.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-[#062B49]">✅ Aceptación de Términos</h3>
                      <p className="text-gray-700 text-sm">
                        Al usar este sitio web, usted acepta automáticamente estos términos y condiciones en su
                        totalidad.
                      </p>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-[#062B49]">📋 Modificaciones</h3>
                      <p className="text-gray-700 text-sm">
                        Nos reservamos el derecho de modificar estos términos. Los cambios entrarán en vigor al
                        publicarse en el sitio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Uso Permitido y Prohibido */}
            <section id="uso-permitido" className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <Users className="h-8 w-8 text-[#062B49] mt-1 flex-shrink-0" />
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Uso del Sitio Web</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Uso Permitido */}
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-4 text-green-800 flex items-center gap-2">
                        <span className="text-green-600">✅</span> Uso Permitido
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Consultar información sobre productos y servicios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Contactarnos para consultas comerciales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Acceder a información pública de la empresa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Compartir contenido en redes sociales</span>
                        </li>
                      </ul>
                    </div>

                    {/* Uso Prohibido */}
                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-4 text-red-800 flex items-center gap-2">
                        <span className="text-red-600">❌</span> Uso Prohibido
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Usar el sitio para actividades ilegales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Intentar acceder a áreas restringidas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Copiar contenido sin autorización</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Interferir con el funcionamiento del sitio</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Propiedad Intelectual */}
            <section id="propiedad" className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-[#062B49] mt-1 flex-shrink-0" />
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Propiedad Intelectual</h2>

                  <div className="bg-gradient-to-r from-[#062B49]/5 to-[#F8D8B5]/20 rounded-lg p-6 mb-6">
                    <p className="text-gray-800 leading-relaxed">
                      Todo el contenido de este sitio web, incluyendo{' '}
                      <strong>textos, imágenes, logos, diseños y software</strong>, es propiedad de {company.name} o sus
                      licenciantes y está protegido por las leyes de derechos de autor de México.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Contenido de Usuario</h3>
                      <p className="text-gray-700 text-sm mb-3">Si envías contenido a través de formularios:</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Mantienes la propiedad de tu contenido</li>
                        <li>• Nos otorgas licencia para responder</li>
                        <li>• Eres responsable de no violar derechos de terceros</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Marcas Registradas</h3>
                      <p className="text-gray-700 text-sm mb-3">Las marcas y logos son propiedad de:</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• {company.name} y empresas afiliadas</li>
                        <li>• Sus respectivos propietarios</li>
                        <li>• Protegidas por ley mexicana</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitación de Responsabilidad */}
            <section id="responsabilidad" className="scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="h-8 w-8 text-[#062B49] mt-1 flex-shrink-0" />
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitación de Responsabilidad</h2>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6">
                    <h3 className="font-semibold text-lg mb-3 text-yellow-800">Importante: Limitaciones</h3>
                    <p className="text-yellow-800 mb-4">{company.name} no será responsable por:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-yellow-700 text-sm">
                        <li>• Interrupciones en el servicio del sitio web</li>
                        <li>• Errores u omisiones en el contenido</li>
                      </ul>
                      <ul className="space-y-2 text-yellow-700 text-sm">
                        <li>• Daños derivados del uso del sitio</li>
                        <li>• Enlaces a sitios web de terceros</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Indemnización</h3>
                    <p className="text-gray-700 text-sm">
                      Usted acepta indemnizar a {company.name} por cualquier reclamo derivado de su uso del sitio web o
                      violación de estos términos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ley Aplicable y Jurisdicción */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-[#062B49]" />
                  <h3 className="text-xl font-semibold text-[#062B49]">Ley Aplicable</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Estos términos se rigen por las <strong>leyes de México</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  Cualquier disputa será resuelta en los tribunales competentes de {jurisdiction}.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-[#062B49]" />
                  <h3 className="text-xl font-semibold text-[#062B49]">Terminación</h3>
                </div>
                <p className="text-gray-700 mb-4">Podemos terminar o suspender su acceso al sitio web:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Por violación de estos términos</li>
                  <li>• Sin previo aviso</li>
                  <li>• A nuestra discreción</li>
                </ul>
              </div>
            </section>

            {/* Disposiciones Generales */}
            <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Disposiciones Generales</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Divisibilidad</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Si alguna disposición de estos términos es inválida, las demás disposiciones permanecerán en vigor.
                  </p>

                  <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Acuerdo Completo</h3>
                  <p className="text-gray-700 text-sm">
                    Estos términos constituyen el acuerdo completo entre usted y {company.name}
                    respecto al uso de este sitio web.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Renuncia</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    La falta de ejercicio de cualquier derecho no constituye una renuncia a dicho derecho.
                  </p>

                  <h3 className="font-semibold text-lg mb-3 text-[#062B49]">Notificaciones</h3>
                  <p className="text-gray-700 text-sm">
                    Las notificaciones se realizarán a través del correo electrónico proporcionado o mediante avisos en
                    este sitio web.
                  </p>
                </div>
              </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="scroll-mt-20">
              <div className="bg-gradient-to-r from-[#062B49] to-[#0A4A6B] text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="h-8 w-8 text-[#F8D8B5]" />
                  ¿Preguntas sobre estos Términos?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#F8D8B5]" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-[#F8D8B5]">{company.email}</p>
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

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm">
                    <strong>Para consultas legales:</strong> Contacte a {company.email}
                    con el asunto Consulta Legal - Términos y Condiciones.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Legal */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Estos términos están sujetos a las <strong>leyes de los Estados Unidos Mexicanos</strong>.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Al continuar usando este sitio web, usted acepta estos términos en su totalidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
