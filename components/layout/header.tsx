'use client';

'use client';

import { useState } from 'react';
import Footer from '@/components/layout/footer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "Inicio", href: "#hero" },
    { id: 2, name: "Menú", href: "#menu" },
    { id: 3, name: "Reservas", href: "#reservations" },
    { id: 4, name: "Galería", href: "#gallery" },
    { id: 5, name: "Testimonios", href: "#testimonials" },
    { id: 6, name: "Contacto", href: "#contact" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Cliente habitual",
      content: "La mejor experiencia gastronómica de la ciudad. Cada plato es una obra de arte con sabores auténticos.",
      image: "https://images.unsplash.com/photo-1428332949320-8ed017a3cfe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 2,
      name: "María González",
      role: "Crítica gastronómica",
      content: "Sazón Local redefine lo que significa comer bien. Ingredientes frescos y técnicas impecables.",
      image: "https://images.unsplash.com/photo-1596905738125-a6b51b1bdbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Roberto Sánchez",
      role: "Empresario",
      content: "Perfecto para cenas de negocios. Ambiente elegante, servicio excepcional y comida memorable.",
      image: "https://images.unsplash.com/photo-1620997242073-8688266e80db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Ana Martínez",
      role: "Food blogger",
      content: "Cada visita es una nueva aventura culinaria. Su menú estacional siempre sorprende.",
      image: "https://images.unsplash.com/photo-1629121522028-2523179f6687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 5,
      name: "David López",
      role: "Chef invitado",
      content: "Como profesional, admiro la consistencia y creatividad en cada plato. Un referente en la cocina local.",
      image: "https://images.unsplash.com/photo-1702896779611-9a2eac217186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Laura Fernández",
      role: "Cliente desde 2022",
      content: "Celebramos todos nuestros aniversarios aquí. El personal hace que cada ocasión sea especial.",
      image: "https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1602318223323-9953cff641f6",
      alt: "Interior elegante del restaurante"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1588560107833-167198a53677",
      alt: "Plato principal especial del chef"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1618237994134-4d08e1be92ec",
      alt: "Barra de cócteles artesanales"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1662228665279-1d8e8f7484ca",
      alt: "Terraza exterior con ambiente acogedor"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1606723325573-e8d567697fbb",
      alt: "Postre gourmet presentado elegantemente"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1625225977832-7de9c77a6048",
      alt: "Cocina profesional abierta"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1722409463513-68ec20dcb6f2",
      alt: "Selección de vinos premium"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1572988003368-c2068d1af2ff",
      alt: "Evento privado en salón exclusivo"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1673307317880-5c3a71f7d00e",
      alt: "Desayuno gourmet los fines de semana"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1624200874899-7a22d43f793f",
      alt: "Chefs trabajando en la cocina"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1562877509-9f271ddaaa44",
      alt: "Entrada principal del restaurante"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1654528734915-b9900cd718cd",
      alt: "Vista aérea de la mesa decorada"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-500 rounded-full"></div>
              <span className="text-2xl font-bold">Sazón Local</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover:text-amber-400 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="hover:text-amber-400 transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1602318223323-9953cff641f6')`
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Sazón Local
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light">
              Sabores auténticos, reservas sin complicaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#menu"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Ver Menú
              </a>
              <a
                href="#reservations"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Reservar Mesa
              </a>
            </div>
          </div>

          <div className="absolute bottom -10 left -0 right -0">
            <svg className="w-full h-auto" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        <section id="testimonials" className="py -20 bg-gray -50">
          <div className="container mx-auto px -4">
            <h2 className="text -4xl font -bold text -center mb -16 text -gray -800">
              Lo que dicen nuestros clientes
            </h2>
            
            <div className="grid grid-cols -1 md:grid-cols -2 lg:grid-cols -3 gap -8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration -300 hover:-translate-y -2"
                >
                  <div className="p -6">
                    <div className="flex items-center mb -6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w -16 h -16 rounded-full object -cover mr -4 border -4 border -amber -100"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-gray -800">{testimonial.name}</h3>
                        <p className="text-gray -600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray -700 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py -20 bg-white">
          <div className="container mx-auto px -4">
            <h2 className="text -4xl font -bold text -center mb -16 text -gray -800">
              Nuestro Espacio y Platos
            </h2>
            
            <div className="grid grid-cols -1 sm:grid-cols -2 md:grid-cols -3 lg:grid-cols -4 gap -6">
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transform transition-transform duration -300 hover:-translate-y -2"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h -64 object -cover transition-transform duration -500 group-hover:scale -110"
                  />
                  <div className="absolute inset -0 bg-black bg-opacity -40 opacity -0 group-hover:opacity -100 transition-opacity duration -300 flex items-center justify-center">
                    <span className="text-white font-medium px -4 text-center">{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py -20 bg-gray -900 text-white">
          <div className="container mx-auto px -4">
            <div className="max-w -6xl mx-auto grid grid-cols -1 lg:grid-cols -2 gap -12">
              <div>
                <h2 className="text -3xl font-bold mb -6">Horario y Ubicación</h2>
                
                <div className="mb -10">
                  <h3 className="text-xl font-semibold mb -4 text-amber -400">Horario de Atención</h3>
                  <ul className="space-y -3">
                    <li className="flex justify-between py -2 border-b border-gray -700">
                      <span>Lunes a Jueves</span>
                      <span>12 :00 PM - 11 :00 PM</span>
                    </li>
                    <li className="flex justify-between py -2 border-b border-gray -700">
                      <span>Viernes y Sábado</span>
                      <span>12 :00 PM - 12 :00 AM</span>
                    </li>
                    <li className="flex justify-between py -2 border-b border-gray -700">
                      <span>Domingo</span>
                      <span>11 :00 AM - 10 :00 PM</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb -4 text-amber -400">Ubicación</h3>
                  <p className="mb -4">Av. Principal #123</p>
                  <p className="mb -6">Centro Histórico</p>
                  
                  <div className="bg-gray -800 rounded-lg p -4 h -64 flex items-center justify-center">
                    <p className="text-gray -400">Mapa interactivo de Google Maps</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text -3xl font-bold mb -6">Reserva tu Mesa</h2>
                
                <form className="space})