import { Button } from "@/components/ui/button"
import { ParallaxContainer } from "@/components/parallax-container"
import { AnimatedSectionTitle } from "@/components/animated-section-title"
import { ArrowLeft, Calendar, Clock, User, Share2, Bot } from "lucide-react"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-4 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img src="/images/gestionx-new-logo.png" alt="GestionX" className="h-10 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="/blog" className="text-blue-600 font-medium">
              Blog
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Agenda una cita
            </Button>
          </nav>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-24 px-4 mt-16">
        <ParallaxContainer speed={0.1} className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <a href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </a>
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6 font-medium">
              <Bot className="w-4 h-4" />
              <span>Transformación Digital</span>
            </div>

            <AnimatedSectionTitle className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-gray-900 leading-tight">
              ¿Es posible tener un Contact Center sin agentes?
            </AnimatedSectionTitle>

            <div className="flex items-center justify-between text-gray-600 mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Expertos en Automatización</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>10 Ene 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>9 min de lectura</span>
                </div>
              </div>
              <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>

            <img
              src="/images/blog/contact-center-sin-agentes.png"
              alt="Contact center futurista con tecnología AI"
              className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-lg mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Para los que no están familiarizados con los conceptos, un Contact Center es un centro de operaciones que
              gestiona todas las interacciones de una empresa con sus clientes, ya sea entrantes o salientes, a través
              de diversos canales como la voz, correo electrónico, chat, redes sociales, etc. Los BPO (Business Process
              Outsourcing), por su parte, son empresas especializadas que ofrecen servicios de externalización de
              procesos de negocio a otras compañías.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Y sí, es posible tener un Contact Center o un BPO que funcione exclusivamente con agentes virtuales de IA,
              aunque la implementación y la viabilidad total dependerán de la complejidad y la naturaleza de las
              interacciones que maneje. Pero, ¿es lo ideal?, analicemos un poco el caso.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A continuación detallo por qué es cada vez más una realidad y qué implicaciones tiene:
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ventajas de un Contact Center BPO 100% basado en IA:
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Disponibilidad 24/7:</strong> Los agentes de IA pueden operar las 24 horas del día, los 7 días
                  de la semana, sin interrupciones, días festivos o turnos. Esto es crucial para un servicio al cliente
                  global.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Escalabilidad ilimitada:</strong> Pueden manejar un volumen masivo de consultas
                  simultáneamente, sin la necesidad de contratar y capacitar personal adicional. Esto es ideal para
                  picos de demanda.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Reducción de costos:</strong> Elimina los costos asociados con salarios, beneficios,
                  infraestructura física, capacitación y gestión de personal humano.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Consistencia y precisión:</strong> Los agentes de IA brindan respuestas uniformes y precisas,
                  basadas en la información programada, reduciendo errores humanos y garantizando la adherencia a los
                  procesos.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Resolución rápida:</strong> Pueden resolver consultas rutinarias de forma instantánea,
                  mejorando los tiempos de respuesta y la satisfacción del cliente.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Análisis de datos avanzado:</strong> Las interacciones de IA generan grandes volúmenes de
                  datos que pueden ser analizados para obtener información valiosa sobre el comportamiento del cliente,
                  identificar tendencias y mejorar continuamente el servicio.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Personalización a escala:</strong> Aunque son virtuales, las IA pueden acceder a historiales
                  de clientes y personalizar las interacciones para ofrecer una experiencia más relevante.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Consideraciones y desafíos:</h2>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Complejidad de las interacciones:</strong> Si las consultas son altamente complejas, requieren
                  empatía, negociación o resolución de problemas no estructurados, una IA podría tener dificultades. Sin
                  embargo, la IA conversacional está avanzando rápidamente en la comprensión del lenguaje natural y la
                  capacidad de responder de manera más humana.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Diseño de la experiencia del cliente (CX):</strong> Es fundamental diseñar cuidadosamente los
                  flujos de conversación y las respuestas de la IA para que sean naturales, eficientes y satisfagan las
                  necesidades del cliente. Una mala implementación puede frustrar a los usuarios.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Transferencia a un agente humano (back-up):</strong> Aunque la idea sea "solo IA", en muchos
                  casos, especialmente en la etapa inicial o para consultas excepcionales, se podría necesitar un
                  "bypass" o "escalada" a un agente humano para situaciones que la IA no pueda resolver. Esto no
                  significaría que siempre haya agentes humanos, sino que estén disponibles para casos de último
                  recurso.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Mantenimiento y optimización continua:</strong> Los sistemas de IA requieren monitoreo,
                  entrenamiento y ajustes constantes para mejorar su rendimiento y adaptarse a nuevas preguntas o
                  escenarios.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Percepción del cliente:</strong> Algunos clientes pueden preferir la interacción humana,
                  especialmente para problemas sensibles o complejos. Es importante gestionar las expectativas y
                  comunicar claramente el tipo de servicio que se ofrece.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ejemplos de cómo se usa la IA en Contact Centers hoy:
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Chatbots y Voicebots:</strong> Resuelven preguntas frecuentes, proporcionan información,
                  pueden realizar campañas salientes de cobranzas, envios masivos de mensajes ed marketing, reservan
                  citas, y guían a los usuarios a través de procesos.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Enrutamiento inteligente de llamadas:</strong> La IA puede analizar la consulta del cliente y
                  dirigirla al agente virtual más adecuado (o, si es necesario, al agente humano especializado).
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Análisis de sentimientos:</strong> La IA puede detectar las emociones del cliente durante la
                  interacción (por voz o texto) y ajustar la respuesta en consecuencia.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Automatización de tareas repetitivas:</strong> Generación de resúmenes de llamadas, ingreso de
                  datos, actualizaciones de CRM, etc.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              En resumen, la tecnología de IA está lo suficientemente avanzada como para permitir un Contact Center en
              gran medida o incluso totalmente automatizado. La clave está en una planificación cuidadosa, la inversión
              en la plataforma y herramientas adecuadas y una estrategia clara sobre qué tipo de interacciones serán
              manejadas por la IA y cómo se abordarán los casos excepcionales. Para tareas repetitivas, de alto volumen
              y predecibles, la IA es una solución muy potente y eficiente.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">La Experiencia de GestionX</h3>
                <p className="text-lg mb-6 opacity-90">
                  En gestionX.ai, utilizamos la herramienta líder a nivel mundial en orquestación de experiencias,
                  Genesys Cloud CX y contamos con un equipo de profesionales certificados por el fabricante. Somos
                  consultores en Gestión de Experiencias y socios de negocios de la empresa líder en Iberoamerica, Izo.
                  Con la experiencia de 10 años en la gestión de proyectos de externalización de Centro de contacto,
                  conocemos el camino correcto para llevar a empresas, de distintos tamaños y verticales, para brindar
                  capacidades excepcionales a sus clientes, pagando solo de acuerdo a su flujo, de forma tokenizada y
                  sin costos de entrada o salida.
                </p>
                <p className="text-xl font-bold mb-6">
                  ¿Te animas a dar el siguiente paso y diferenciarte con innovación y valor real para tus clientes?
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3 font-bold shadow-lg">
                  Explorar Posibilidades Ahora
                </Button>
              </div>
            </div>
          </div>
        </ParallaxContainer>
      </article>
    </div>
  )
}
