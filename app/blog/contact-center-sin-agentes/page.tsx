import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
            <a href="/#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </a>
            <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Blog
            </a>
            <a href="/#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
          </nav>
          <div className="md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Agenda una cita
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Contact Center sin Agentes: Automatización Inteligente para tu Negocio
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Descubre cómo un contact center sin agentes puede transformar la atención al cliente y optimizar tus
            operaciones.
          </p>
          <img
            src="/images/blog/contact-center-sin-agentes.png"
            alt="Contact Center sin Agentes"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Qué es un Contact Center sin Agentes?</h2>
          <p className="mb-4">
            Un contact center sin agentes, también conocido como centro de contacto automatizado, utiliza tecnologías
            como la inteligencia artificial (IA), el procesamiento del lenguaje natural (PLN) y el reconocimiento de voz
            para gestionar las interacciones con los clientes sin la necesidad de agentes humanos en tiempo real.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">
            Beneficios de un Contact Center sin Agentes
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <span className="font-semibold">Disponibilidad 24/7:</span> Atención al cliente ininterrumpida, sin
              importar la hora o el día.
            </li>
            <li>
              <span className="font-semibold">Reducción de Costos:</span> Disminución significativa de los gastos
              operativos al reducir la necesidad de personal.
            </li>
            <li>
              <span className="font-semibold">Escalabilidad:</span> Capacidad de manejar un gran volumen de
              interacciones simultáneamente, adaptándose a las necesidades del negocio.
            </li>
            <li>
              <span className="font-semibold">Eficiencia:</span> Resolución rápida de consultas comunes y derivación
              eficiente a agentes humanos cuando es necesario.
            </li>
            <li>
              <span className="font-semibold">Personalización:</span> Ofrece experiencias personalizadas a través del
              análisis de datos y la segmentación de clientes.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">Tecnologías Clave</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <span className="font-semibold">Inteligencia Artificial (IA):</span> Permite la automatización de tareas y
              la toma de decisiones inteligentes.
            </li>
            <li>
              <span className="font-semibold">Procesamiento del Lenguaje Natural (PLN):</span> Facilita la comprensión y
              generación de lenguaje humano para interacciones más naturales.
            </li>
            <li>
              <span className="font-semibold">Reconocimiento de Voz:</span> Convierte el habla en texto para procesar
              las solicitudes de los clientes.
            </li>
            <li>
              <span className="font-semibold">Chatbots y Asistentes Virtuales:</span> Proporcionan respuestas
              instantáneas y guían a los clientes a través de diferentes procesos.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">Casos de Uso</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <span className="font-semibold">Atención al Cliente:</span> Responder preguntas frecuentes, resolver
              problemas básicos y proporcionar información sobre productos y servicios.
            </li>
            <li>
              <span className="font-semibold">Ventas:</span> Guiar a los clientes a través del proceso de compra,
              ofrecer recomendaciones personalizadas y procesar pedidos.
            </li>
            <li>
              <span className="font-semibold">Soporte Técnico:</span> Diagnosticar problemas técnicos, proporcionar
              soluciones paso a paso y programar citas con técnicos especializados.
            </li>
            <li>
              <span className="font-semibold">Cobranza:</span> Enviar recordatorios de pago, negociar planes de pago y
              procesar pagos.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">
            Implementación de un Contact Center sin Agentes
          </h2>
          <p className="mb-4">
            La implementación de un contact center sin agentes requiere una planificación cuidadosa y la selección de
            las tecnologías adecuadas. Es importante definir los objetivos del negocio, identificar los casos de uso más
            relevantes y diseñar flujos de conversación claros y efectivos.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">Conclusión</h2>
          <p className="mb-4">
            Un contact center sin agentes ofrece una solución innovadora para mejorar la atención al cliente, reducir
            costos y optimizar las operaciones. Al adoptar esta tecnología, las empresas pueden ofrecer experiencias
            personalizadas y eficientes, impulsando la satisfacción del cliente y el crecimiento del negocio.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">© 2023 GestionX. Todos los derechos reservados.</p>
        </div>
        <div className="bg-gray-700 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <img src="/images/gestionx-new-logo-white.png" alt="GestionX" className="h-8 w-auto mb-4" />
              <p className="text-sm text-gray-300">
                Ofrecemos soluciones de software innovadoras para optimizar la gestión de tu negocio.
              </p>
            </div>

            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul>
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

            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-300 text-sm mb-2">Dirección: 123 Calle Principal, Ciudad, País</p>
              <p className="text-gray-300 text-sm mb-2">Email: info@gestionx.com</p>
              <p className="text-gray-300 text-sm">Teléfono: +1 555-123-4567</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto text-center mt-8">
            <p className="text-gray-400 text-xs">© 2023 GestionX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
