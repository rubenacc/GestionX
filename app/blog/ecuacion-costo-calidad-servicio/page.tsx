import { Button } from "@/components/ui/button"
import { ParallaxContainer } from "@/components/parallax-container"
import { AnimatedSectionTitle } from "@/components/animated-section-title"
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp } from "lucide-react"

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
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6 font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>Estrategia Operacional</span>
            </div>

            <AnimatedSectionTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-outfit mb-6 text-gray-900 leading-tight">
              Cómo Resolver la Ecuación de Costo, Calidad y Servicio 24/7
            </AnimatedSectionTitle>

            <div className="flex items-center justify-between text-gray-600 mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Consultores CX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>12 Ene 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min de lectura</span>
                </div>
              </div>
              <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>

            <img
              src="/images/blog/ecuacion-costo-calidad-servicio.png"
              alt="Balance entre costo, calidad y servicio 24/7"
              className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-lg mb-8"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=400&width=800&text=Costo+Calidad+Servicio"
              }}
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En el mundo de la gestión empresarial, hay pocas verdades tan universales y frustrantes como el "trilema"
              del centro de contacto. Durante décadas, los líderes han tenido que hacer malabares con tres objetivos
              críticos, sabiendo que, en el mejor de los casos, solo podrían elegir dos:
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                ¿Quiere un servicio de alta calidad? Prepárese para asumir un costo elevado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ¿Necesita reducir costos drásticamente? Probablemente deba sacrificar la calidad o la disponibilidad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ¿Sueña con una atención 24/7? Asegúrese de tener un presupuesto casi ilimitado para cubrirlo.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Este juego de concesiones ha definido la estrategia de la experiencia del cliente (CX) por demasiado
              tiempo, forzando a las empresas a operar en un estado de compromiso constante. Pero, ¿y si le dijera que
              este trilema ya no es una ley inquebrantable? ¿Y si la solución no fuera elegir, sino redefinir el modelo
              por completo?
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La respuesta existe, y es más accesible de lo que cree. Se encuentra en la creación de un modelo operativo
              híbrido, una alianza estratégica entre la eficiencia implacable de los Agentes Virtuales con Inteligencia
              Artificial y el talento insustituible de un equipo humano.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Parte 1: La Cruda Realidad Financiera (La Ecuación que no Cierra)
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Para entender el futuro, primero debemos ser honestos sobre el presente. Cuando un Gerente General o de
              Finanzas analiza la línea de "costo de contact center" en el balance, a menudo solo ve la punta del
              iceberg.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El costo real de una operación 100% humana va mucho más allá de los salarios. Es una suma de variables
              complejas y costosas:
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Costos de Rotación:</strong> La industria de los contact centers sufre de una alta rotación.
                Cada agente que se va se lleva consigo horas de capacitación y le cuesta a la empresa un promedio de 3 a
                6 meses de salario en reclutamiento y formación de su reemplazo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Costos de Capacitación Continua:</strong> Nuevos productos, políticas y sistemas exigen un
                entrenamiento constante.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Costos de Infraestructura:</strong> Espacio físico, equipos, licencias de software por cada
                puesto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Ineficiencia Programada:</strong> ¿Qué hacen sus agentes en las horas de baja demanda? El costo
                de tener personal disponible "por si acaso" es enorme.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Pasivos Laborales y Regulatorios:</strong> La gestión de un gran equipo humano conlleva una
                complejidad administrativa y legal significativa.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Frente a esta realidad, el modelo del Agente Virtual con IA presenta una ecuación financiera radicalmente
              diferente. Piense en él como un recurso digital con superpoderes:
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Costo Predecible y Escalable:</strong> Un agente virtual tiene un costo operativo consistente,
                sin importar si maneja 10, 100 o 10.000 conversaciones simultáneas. La elasticidad es infinita y no
                requiere contratar a 50 personas para un pico de demanda de 3 horas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Calidad por Diseño:</strong> Un agente virtual garantiza un 100% de cumplimiento. Sigue el guion
                a la perfección, nunca se olvida de un paso regulatorio y registra cada interacción sin errores. La
                consistencia deja de ser un objetivo para convertirse en una característica estándar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Disponibilidad Absoluta:</strong> Opera 24/7, los 365 días del año, sin quejas, sin turnos
                nocturnos y sin costos de horas extra.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hagamos un cálculo simple. Si el costo promedio de una consulta humana (sumando todos los factores) es de
              Gs. 20.000 y el de una consulta virtual totalmente automatizada es de Gs. 4.000, para sus 100.000
              consultas más frecuentes y repetitivas del año, el ahorro potencial es de Gs. 1.600.000.000 anuales.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La matemática es irrefutable. Pero esta eficiencia no significa la eliminación del factor humano. Al
              contrario, es su liberación.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Parte 2: Deje que sus Humanos Hagan lo Extraordinario (La Ecuación que sí Humaniza)
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Aquí es donde la estrategia se vuelve brillante. La mayor objeción a la automatización nace del miedo: el
              miedo a perder el "toque humano" y el miedo de los equipos a ser reemplazados. Un modelo híbrido bien
              diseñado pulveriza ambos temores.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Piense en sus mejores agentes. Ahora piense en las tareas que consumen el 80% de su día: reseteo de
              contraseñas, consultas sobre el estado de un pedido, preguntas frecuentes sobre horarios o saldos. Estas
              tareas repetitivas no solo son costosas, sino que son la principal causa del "burnout" o desgaste del
              agente. Matan la motivación y empujan a su mejor talento a buscar trabajos más desafiantes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">Ahora imagine este escenario:</p>

            <div className="space-y-6 mb-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>El Agente Virtual como Primera Línea:</strong> Su servicio de agentes virtuales externalizado
                  se encarga de ese 80% de consultas de alto volumen y baja complejidad. Lo hace al instante, 24/7,
                  liberando miles de horas de trabajo humano.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  <strong>Creando un Equipo Humano de "Élite":</strong> Nuestro equipo interno ya no se dedica a repetir
                  guiones. Se transforma en un grupo de especialistas de alto valor. Su nueva misión es gestionar las
                  situaciones que la IA no puede:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>Negociar con un cliente valioso que está a punto de irse.</li>
                  <li>Manejar una queja compleja que requiere una dosis masiva de empatía.</li>
                  <li>Realizar ventas consultivas, entendiendo las necesidades profundas del cliente.</li>
                  <li>Convertir un problema en una oportunidad para fidelizar.</li>
                </ul>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>El Traspaso Perfecto:</strong> Cuando el agente virtual identifica una situación que requiere
                  un toque humano, no dice "no puedo ayudar". Realiza un traspaso inteligente y sin fricciones a su
                  agente de élite, entregándole todo el contexto de la conversación. El cliente nunca tiene que
                  repetirse.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>El Supervisor como Estratega:</strong> El rol del supervisor también evoluciona. En lugar de
                  monitorear el tiempo promedio de llamada, ahora se dedica a analizar los datos que provee la IA para
                  identificar mejoras en los procesos y a realizar coaching de habilidades blandas y negociación para su
                  equipo de élite.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              La Ecuación Resuelta: El Futuro es Híbrido y Estratégico
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ya no tiene que elegir entre costo, calidad y disponibilidad. La automatización inteligente le entrega la
              eficiencia y el servicio 24/7. En gestionx.ai nuestro equipo humano, liberado de la monotonía, le entrega
              la calidad empática y la resolución compleja que construye lealtad verdadera.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Alcanzar este equilibrio perfecto requiere una profunda experiencia en tecnología conversacional y una
              estrategia de implementación impecable. Externalizar su operación de agentes virtuales a un socio experto
              no es simplemente una decisión de costos; es la decisión estratégica más rápida y segura para acelerar
              esta transformación.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Es hora de dejar de jugar un juego que no se puede ganar.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 text-center">
              <p className="text-xl font-bold mb-6">
                ¿Está listo para resolver la ecuación y llevar su experiencia de cliente al siguiente nivel? Hablemos.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3 font-bold shadow-lg">
                Hablemos Ahora
              </Button>
            </div>
          </div>
        </ParallaxContainer>
      </article>
    </div>
  )
}
