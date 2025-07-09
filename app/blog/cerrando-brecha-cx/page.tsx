import { Button } from "@/components/ui/button"
import { ParallaxContainer } from "@/components/parallax-container"
import { AnimatedSectionTitle } from "@/components/animated-section-title"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"

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
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6 font-medium">
              <BookOpen className="w-4 h-4" />
              <span>Experiencia del Cliente</span>
            </div>

            <AnimatedSectionTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-outfit mb-6 text-gray-900 leading-tight">
              Cerrando la Brecha CX: ¿Por Qué Sus Clientes No Están Satisfechos?
            </AnimatedSectionTitle>

            <div className="flex items-center justify-between text-gray-600 mb-8 flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center space-x-3 sm:space-x-6 flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base">Equipo GestionX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base">18 Ene 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base">8 min de lectura</span>
                </div>
              </div>
              <Button variant="outline" className="bg-white text-gray-700 border-gray-300 text-sm sm:text-base">
                <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Compartir
              </Button>
            </div>

            <img
              src="/images/blog/cerrando-brecha-cx.png"
              alt="Cliente frustrado con expectativas vs realidad en servicio al cliente"
              className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-3xl shadow-lg mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Las expectativas de los clientes no paran de crecer, y esto representa un desafío constante para las
              organizaciones de Experiencia del Cliente (CX). El informe de Genesys "El estado de la experiencia del
              cliente" de 2025 revela una discrepancia significativa entre lo que los consumidores esperan y la realidad
              del servicio que reciben. Si bien el 82% de los consumidores globalmente cree que la calidad de una
              empresa es directamente proporcional al servicio que ofrece, solo el 11% califica el servicio como
              "siempre excelente". ¿Qué están valorando realmente sus clientes y cómo puede su empresa cerrar esta
              brecha?
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Lo que sus clientes valoran más en una interacción de servicio:
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Resolución Rápida y a la Primera:</strong> La resolución del problema en la primera interacción
              (49%) y una respuesta rápida (48%) son, con diferencia, los factores más valorados por los consumidores a
              nivel mundial. La paciencia es limitada: solo el 13% afirmó haber esperado menos de cinco minutos para
              interactuar con un agente en el último año, y un 29% esperó 30 minutos o más.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Personalización y Empatía:</strong> Los clientes quieren sentirse escuchados y comprendidos. El
              72% considera que ser escuchado y comprendido es uno de los atributos más valiosos al interactuar con sus
              marcas favoritas. Además, el 56% desea que la empresa conozca su historial de cuenta. La falta de empatía
              puede llevar al 70% de los consumidores a optar por la competencia.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Servicio Fluido en Todos los Canales:</strong> La capacidad de cambiar de canal sin tener que
              repetir información es "sumamente importante" o "algo importante" para el 97% de los consumidores. Sin
              embargo, más de la mitad (50%) tuvo que repetir información a un segundo agente, y el 41% a un agente
              después de un chatbot. Esta repetición es frustrante y puede llevar a la insatisfacción.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Acceso a Personas cuando sea Necesario:</strong> A pesar del auge del autoservicio, más de la
              mitad de los consumidores (53%) prefiere consultar a un agente humano cuando es posible. La incapacidad de
              comunicarse con un agente en vivo es "muy frustrante" para el 37% de los consumidores, y puede llevarlos a
              jurar no volver a usar la empresa. Incluso pasar sin problemas de un chatbot a un agente es crucial para
              el 40%.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">El Alto Costo del Mal Servicio:</h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Las malas experiencias tienen repercusiones negativas. El 53% de los consumidores abandonaría una marca
              predilecta después de solo dos a cinco interacciones negativas. Además, casi un tercio (30%) de los
              consumidores dejó de consumir una marca en el último año debido a una mala experiencia de atención al
              cliente. La reputación de su marca está directamente ligada a la calidad de su servicio.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Mientras los directivos de CX priorizan la satisfacción del cliente, existe una marcada diferencia con las
              prioridades del consumidor, especialmente en la resolución a la primera interacción (los directivos la
              valoran novena, los consumidores primera) y la importancia de un agente capacitado (directivos undécimo,
              consumidores tercero).
            </p>

            <img
              src="/placeholder.svg?height=300&width=600&text=Diferencia+Prioridades+CX+Directivos+vs+Consumidores"
              alt="Gráfico que muestre la diferencia de prioridades entre consumidores y directivos de CX o una flecha ascendente indicando el aumento de expectativas"
              className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-lg mb-8"
            />

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              En [Nombre de su Compañía BPO], entendemos estos desafíos y la urgente necesidad de alinear la estrategia
              de CX con las expectativas de sus clientes. Nos especializamos en ayudar a las organizaciones a ofrecer
              interacciones rápidas, empáticas y fluidas, asegurando que cada punto de contacto con el cliente
              fortalezca la lealtad y la reputación de su marca. ¿Está listo para transformar la experiencia de sus
              clientes y superar sus expectativas? Conversemos sobre cómo podemos convertir estos desafíos en
              oportunidades de crecimiento para su negocio.
            </p>
          </div>
        </ParallaxContainer>
      </article>
    </div>
  )
}
