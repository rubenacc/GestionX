import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxContainer } from "@/components/parallax-container"
import { AnimatedSectionTitle } from "@/components/animated-section-title"
import { BookOpen, Calendar, Mail, Phone, MapPin, ArrowRight, MessageSquare, Clock, User } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      title: "Cerrando la Brecha CX: ¿Por Qué Sus Clientes No Están Satisfechos?",
      excerpt:
        "El 82% de los consumidores cree que la calidad de una empresa es proporcional al servicio que ofrece, pero solo el 11% califica el servicio como 'siempre excelente'. Descubre qué valoran realmente tus clientes.",
      author: "Equipo GestionX",
      date: "18 Ene 2025",
      readTime: "8 min",
      category: "Experiencia del Cliente",
      image: "/images/blog/cerrando-brecha-cx.png",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      link: "/blog/cerrando-brecha-cx",
    },
    {
      title: "¿Su Chatbot Frustra a sus Clientes? La Diferencia Real entre un 'Bot' y un Agente Virtual Inteligente",
      excerpt:
        "Todos hemos estado atrapados en el bucle infinito de un chatbot que no entiende nada. Descubre la diferencia entre un bot básico y un Agente Virtual Inteligente que realmente resuelve problemas.",
      author: "Especialistas en IA",
      date: "15 Ene 2025",
      readTime: "10 min",
      category: "Inteligencia Artificial",
      image: "/images/blog/chatbot-vs-agente-virtual.png",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      link: "/blog/chatbot-vs-agente-virtual",
    },
    {
      title: "Cómo Resolver la Ecuación de Costo, Calidad y Servicio 24/7",
      excerpt:
        "Durante décadas, los líderes han tenido que elegir entre costo, calidad o disponibilidad 24/7. Descubre cómo el modelo híbrido de IA + humanos resuelve este trilema definitivamente.",
      author: "Consultores CX",
      date: "12 Ene 2025",
      readTime: "12 min",
      category: "Estrategia Operacional",
      image: "/images/blog/ecuacion-costo-calidad-servicio.png",
      color: "from-green-50 to-teal-50",
      borderColor: "border-green-200",
      link: "/blog/ecuacion-costo-calidad-servicio",
    },
    {
      title: "¿Es posible tener un Contact Center sin agentes?",
      excerpt:
        "Analizamos la viabilidad de un Contact Center 100% basado en agentes virtuales de IA. Ventajas, desafíos y consideraciones para implementar esta transformación radical en tu empresa.",
      author: "Expertos en Automatización",
      date: "10 Ene 2025",
      readTime: "9 min",
      category: "Transformación Digital",
      image: "/images/blog/contact-center-sin-agentes.png",
      color: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      link: "/blog/contact-center-sin-agentes",
    },
  ]

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
            <a href="/blog" className="text-blue-600 font-medium">
              Blog
            </a>
            <a href="/#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Agenda una cita
            </Button>
          </nav>
        </div>
      </header>

      {/* Blog Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white mt-16">
        <ParallaxContainer speed={0.1} className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 mb-8 font-semibold">
              <BookOpen className="w-5 h-5" />
              <span>Contenido Especializado</span>
            </div>
            <AnimatedSectionTitle className="text-3xl sm:text-4xl md:text-6xl font-bold font-outfit mb-8 text-gray-900">
              Nuestro{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">blog</span>
            </AnimatedSectionTitle>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre insights, tendencias y mejores prácticas en experiencia del cliente y transformación digital.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((post, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border ${post.borderColor} bg-gradient-to-br ${post.color} overflow-hidden cursor-pointer rounded-3xl h-full flex flex-col`}
              >
                <div className="relative">
                  <img
                    src={
                      post.image || "/placeholder.svg?height=200&width=400&text=" + encodeURIComponent(post.category)
                    }
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold font-outfit mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 flex-wrap gap-2">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <a href={post.link} className="mt-auto">
                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 rounded-full px-6 py-3 font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Leer Artículo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
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
                {["Inicio", "Nuestros Programas", "Servicios", "Recursos", "Blog", "Contacto"].map((item, index) => (
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
