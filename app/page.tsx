import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ParallaxContainer } from "@/components/parallax-container"
import { FloatingShapes } from "@/components/floating-shapes"
import { AnimatedSectionTitle } from "@/components/animated-section-title"
import {
  CheckCircle,
  Users,
  Target,
  BarChart3,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  HeadphonesIcon,
  Bot,
  ExternalLink,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-4 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/gestionx-new-logo.png" alt="GestionX" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </a>
            <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Agenda una cita
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-32 px-4 mt-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/tech-eye-bg.jpg)" }}
        ></div>
        {/* Overlay for transparency and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-purple-900/85"></div>
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-10 left-20 text-blue-400/20 text-4xl font-bold animate-float"
            style={{ animationDelay: "0s" }}
          >
            ×
          </div>
          <div
            className="absolute top-32 right-16 text-purple-400/20 text-6xl font-bold animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            ×
          </div>
          <div
            className="absolute bottom-40 left-32 text-cyan-400/20 text-5xl font-bold animate-float"
            style={{ animationDelay: "3s" }}
          >
            ×
          </div>
          <div
            className="absolute bottom-20 right-32 text-indigo-400/20 text-3xl font-bold animate-float"
            style={{ animationDelay: "4.5s" }}
          >
            ×
          </div>
          <div
            className="absolute top-1/2 left-10 text-pink-400/20 text-4xl font-bold animate-float"
            style={{ animationDelay: "2s" }}
          >
            ×
          </div>
          <div
            className="absolute top-1/3 right-1/4 text-blue-300/20 text-5xl font-bold animate-float"
            style={{ animationDelay: "6s" }}
          >
            ×
          </div>
        </div>
        <FloatingShapes />

        <ParallaxContainer speed={0.3} className="max-w-5xl mx-auto text-center relative z-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-outfit mb-8 leading-tight">
            Transforma la{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Experiencia
            </span>{" "}
            de tus clientes en tu activo más valioso,{" "}
            <span className="text-blue-400">utilizando IA para gestionar tus interacciones.</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-6">
              GestiónX orquesta, integra y gestiona, agentes virtuales y personas, a través de procesos y tecnología,
              para crear experiencias memorables y empáticas.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-8 py-4 rounded-3xl inline-block font-semibold text-base sm:text-lg mb-12 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 max-w-4xl mx-4 sm:mx-auto">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 flex-wrap">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="text-center text-sm sm:text-base">
                Ofrecemos a tus clientes un servicio rápido y de primera clase, 24/7 y con respuestas inmediatas. Agenda
                tu Consultoría Estratégica de CX
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-10 py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </ParallaxContainer>
      </section>

      {/* Strategic Partner Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

        <ParallaxContainer speed={0.2} className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-6 py-3 mb-8 font-semibold">
              <Shield className="w-5 h-5" />
              <span>Socio Estratégico Confiable</span>
            </div>
            <AnimatedSectionTitle className="text-3xl sm:text-4xl md:text-6xl font-bold font-outfit mb-8 text-gray-900 leading-tight">
              Somos tu{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                socio estratégico
              </span>{" "}
              en experiencia del cliente
            </AnimatedSectionTitle>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Descubre por qué las PYMES y startups en Paraguay nos eligen para potenciar su crecimiento.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-outfit text-gray-900 mb-8">
                Nuestras alianzas nos permiten entregar:
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                    title: "Escalabilidad y agilidad:",
                    description: "Adaptamos nuestras soluciones a la medida de tu crecimiento.",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                    title: "Standard de seguridad moderna:",
                    description: "Defensa, encriptación, privacidad de datos y resiliencia garantizadas.",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                    title: "Accesibilidad y flexibilidad en el precio:",
                    description: "Soluciones de alto impacto para todos los presupuestos.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{item.title}</span> {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-outfit text-gray-900 mb-8">¿Cómo lo hacemos?</h3>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Optimizamos sus procesos de negocio con consultoría y diseño de una estrategia con foco digital
                      potenciada por Inteligencia Artificial.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Facilitamos escalabilidad y expandimos su presencia digital optimizando el autoservicio a través
                      de diferentes canales.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Resolvemos de forma rápida, 24/7 y en tiempo real, preguntas frecuentes y pedidos simples con
                      chatbots y agentes virtuales que entienden lenguaje natural, aprenden en el proceso y se integran
                      perfectamente al flujo para facilitar la transición a un agente humano, cuando sea necesario.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Conoce más sobre experiencias excepcionales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </ParallaxContainer>
      </section>

      {/* Customer Experience Services Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

        <ParallaxContainer speed={0.2} className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 mb-8 font-semibold">
              <Target className="w-5 h-5" />
              <span>Servicios Especializados</span>
            </div>
            <AnimatedSectionTitle className="text-3xl sm:text-4xl md:text-6xl font-bold font-outfit mb-8 text-gray-900 leading-tight">
              Nuestros servicios de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                experiencia del cliente
              </span>
            </AnimatedSectionTitle>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Soluciones integrales para fidelizar a tus clientes y potenciar tu negocio.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: <HeadphonesIcon className="w-12 h-12 text-white" />,
                title: "Externalización de Centro de Contacto",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                description:
                  "Ayudamos a ganar clientes nuevos y más leales, entregando experiencias personalizadas, conectadas y consistentes en cada interacción. Optimizamos tus operaciones para que te enfoques en tu core business.",
                features: [
                  "Experiencias personalizadas en cada interacción",
                  "Conexión consistente entre todos los canales",
                  "Optimización de operaciones para mayor eficiencia",
                  "Enfoque en tu core business mientras gestionamos CX",
                ],
              },
              {
                icon: <Bot className="w-12 h-12 text-white" />,
                title: "Autoservicio Impulsado por IA",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                description:
                  "Nuestros agentes virtuales aprenden y evolucionan. Con Modelos Grandes de Lenguaje y Machine Learning integrado, mejoran continuamente.",
                features: [
                  "Conversaciones atractivas con menús digitales, imágenes y videos",
                  "Comprensión del lenguaje natural (NLU) con IA para identificar intenciones",
                  "Búsqueda semántica para recuperación automática de información",
                  "Contexto y personalización basados en el Journey del cliente y su historial",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${service.bgColor} overflow-hidden rounded-3xl`}
              >
                <CardContent className="p-6 sm:p-10">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex-shrink-0 p-3 sm:p-4 bg-gradient-to-br ${service.color} rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold font-outfit mb-6 text-gray-900">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.description}</p>
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para diferenciarte gestionando tus interacciones como las mejores empresas?</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nuestro equipo de expertos está preparado para diseñar la solución perfecta para tu empresa.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Conocé más... 
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </ParallaxContainer>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <ParallaxContainer speed={0.1} className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSectionTitle className="text-3xl sm:text-4xl md:text-6xl font-bold font-outfit mb-8 text-gray-900">
              ¿Qué más podemos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                hacer por ti?
              </span>
            </AnimatedSectionTitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden rounded-3xl">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-outfit mb-6 text-gray-900">
                      Visión Completa del Customer Journey
                    </h3>
                    <div className="mb-8">
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Comprenda las interacciones del cliente con su presencia en todos los canales. Identifique y
                        asocie interacciones de cada canal con el cliente adecuado.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            <span className="font-semibold">Social Listening:</span> Monitoreo de redes sociales
                            (palabras clave, cuentas, hashtags) y análisis de sentimiento con IA para respuestas
                            oportunas.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            <span className="font-semibold">Informes Integrados:</span> Incorpore redes sociales en sus
                            informes históricos y en tiempo real para un seguimiento completo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden rounded-3xl">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-outfit mb-6 text-gray-900">
                      Experiencia de Mensajería Enriquecida
                    </h3>
                    <div className="mb-8">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Utilice imágenes, PDFs, respuestas rápidas, tarjetas y carruseles para un mejor contexto.
                        Elementos multimedia enriquecidos refinan conversaciones, mejoran la resolución y crean
                        experiencias más fluidas
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ParallaxContainer>
      </section>

      {/* Consulting Services */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <ParallaxContainer speed={0.15} className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 mb-8 font-semibold">
              <Sparkles className="w-5 h-5" />
              <span>Consultoría de Vanguardia</span>
            </div>
            <AnimatedSectionTitle className="text-3xl sm:text-4xl md:text-6xl font-bold font-outfit mb-8 text-gray-900 leading-tight">
              Consultoría CX y EX de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                vanguardia
              </span>
            </AnimatedSectionTitle>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Somos Business Partners exclusivos de{" "}
                <a
                  href="https://izo.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 hover:decoration-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  Izo
                  <ExternalLink className="w-4 h-4" />
                </a>{" "}
                en Paraguay, compañía líder en gestión de Experiencias en Iberoamérica.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Ofrecemos la clave para transformar la cultura organizativa, creando conexiones significativas que
                perduren.
              </p>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 rounded-3xl p-8 mt-8">
                <p className="text-xl font-bold text-gray-900 mb-3">¿Cómo acompañamos a nuestros clientes?</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Analizamos, diseñamos y transformamos experiencias.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Customer Experience Management (CXM)",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                description:
                  "¿Necesitas captar o fidelizar clientes? ¿Comprender mejor la relación con tus clientes? ¿Transformar la Experiencia para evitar Momentos de Dolor o generar diferenciación?",
                features: [
                  "Workshop de alineamiento, Assessment CX",
                  "Customer Journey y Arquetipos",
                  "Programa de Voz del Cliente",
                ],
              },
              {
                title: "Experience Management Strategy",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                description:
                  "¿Necesitas crear una Cultura de Experiencia? ¿Generar engagement y vínculos emocionales con colaboradores? ¿Alto grado de compromiso y desempeño que impacte en el cliente?",
                features: [
                  "Experience Management Assessment",
                  "Experience Strategy + Guía de la Experiencia",
                  "Experience Economics y Experience Governance",
                ],
              },
              {
                title: "Employee Experience Management (EXM)",
                color: "from-green-500 to-teal-500",
                bgColor: "from-green-50 to-teal-50",
                description:
                  "¿Crear una Cultura de Experiencia que impulse la estrategia CX? ¿Engagement y vínculos emocionales con colaboradores? ¿Alto compromiso y desempeño que impacte al cliente?",
                features: [
                  "Working personas y Employee Journey",
                  "Programa de Voz del Empleado",
                  "Employee Experience Design, Agile EX Transformation",
                  "Programa de Cultura y Change Management",
                ],
              },
              {
                title: "Experience Management Training",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
                description:
                  "¿Desarrollar capacidades en Experience Management? ¿Sensibilizar y alinear para un lenguaje común de Experiencia? ¿Habilitar para trabajar autónomamente en metodologías CXM y EXM?",
                features: [
                  "Workshops, masterclass y formación a medida",
                  "Certificaciones, programas y cursos especializados",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${service.bgColor} overflow-hidden rounded-3xl`}
              >
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex-shrink-0 p-4 bg-gradient-to-br ${service.color} rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-outfit mb-6 text-gray-900">{service.title}</h3>
                      <p className="text-gray-700 mb-8 leading-relaxed text-lg">{service.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ParallaxContainer>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>

        <ParallaxContainer speed={0.2} className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 font-semibold">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span>{"Consultoria en Gestión de Experiencias"}</span>
            </div>
            <AnimatedSectionTitle className="text-3xl sm:text-4xl md:text-6xl font-bold font-outfit mb-8 text-white">
              Inicia tu transformación en <span className="text-yellow-300">experiencia del cliente.</span>
            </AnimatedSectionTitle>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Completa el formulario y uno de nuestros especialistas en XM se pondrá en contacto. Agenda una consultoría
              y sin compromiso.
            </p>
          </div>

          <Card className="max-w-lg mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <Input
                  placeholder="Nombre y Apellido"
                  className="rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 sm:h-14 text-base sm:text-lg"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 sm:h-14 text-base sm:text-lg"
                />
                <Input
                  type="tel"
                  placeholder="Número de Teléfono"
                  className="rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 sm:h-14 text-base sm:text-lg"
                />
                <Input
                  placeholder="Empresa"
                  className="rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 sm:h-14 text-base sm:text-lg"
                />
                <Input
                  placeholder="Cargo (Opcional)"
                  className="rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 sm:h-14 text-base sm:text-lg"
                />
                <Textarea
                  placeholder="¿Cuál problema necesitas resolver?"
                  className="rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-32 resize-none text-lg"
                />
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-2xl">
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Al hacer clic en "Agendar Contact", aceptas nuestros Términos de Servicio y Política de
                      Privacidad.
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-base sm:text-lg py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Contacto
                </Button>
              </form>
            </CardContent>
          </Card>
        </ParallaxContainer>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="">
              <div className="mb-6">
                <img src="/images/gestionx-new-logo.png" alt="GestionX" className="h-12 w-auto brightness-0 invert" />
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-gray-400 leading-relaxed text-lg">
                  Transformamos la Experiencia de tus Clientes en tu Activo Más Valioso, utilizando IA para gestionar
                  tus interacciones.
                </p>
              </div>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>+57 300 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <span>contacto@tulogocx.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-cyan-600/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold font-outfit mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-gray-400">
                {["Inicio", "Servicios", "Blog", "Contacto"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold font-outfit mb-6">Síguenos</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-2xl transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-gray-800 hover:bg-purple-600 rounded-2xl transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">Sigue a GestionX.ai - Centro de Consultoría Estratégica</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GestionX.ai. Todos los derechos reservados. Política de Privacidad | Términos de Servicio</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
