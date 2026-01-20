'use client';

import { useState } from 'react';
import Footer from '@/components/layout/footer';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('entrantes');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [reservationGuests, setReservationGuests] = useState(2);
  const [reservationNotes, setReservationNotes] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Cliente habitual",
      content: "La mejor experiencia gastronómica de la ciudad. Cada visita supera la anterior.",
      image: "https://images.unsplash.com/photo-1428332949320-8ed017a3cfe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Ana Martínez",
      role: "Crítica gastronómica",
      content: "Autenticidad en cada bocado. Un restaurante que honra los sabores tradicionales.",
      image: "https://images.unsplash.com/photo-1596905738125-a6b51b1bdbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Miguel Sánchez",
      role: "Empresario",
      content: "Perfecto para reuniones de negocios. Ambiente acogedor y servicio impecable.",
      image: "https://images.unsplash.com/photo-1620997242073-8688266e80db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Laura Gómez",
      role: "Food blogger",
      content: "Fotografío comida profesionalmente y los platos aquí son obras de arte comestibles.",
      image: "https://images.unsplash.com/photo-1629121522028-2523179f6687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 5,
      name: "David López",
      role: "Turista",
      content: "Encontré este lugar por casualidad y fue el descubrimiento culinario de mi viaje.",
      image: "https://images.unsplash.com/photo-1702896779611-9a2eac217186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Sofía Ramírez",
      role: "Celebración familiar",
      content: "Celebramos el aniversario de mis padres y el personal hizo todo especial. Inolvidable.",
      image: "https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    }
  ];

  const menuItems = {
    entrantes: [
      {
        id: 1,
        name: "Tabla de ibéricos",
        description: "Selección de jamón ibérico de bellota, lomo embuchado y chorizo artesanal",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1602318223323-9953cff641f6",
        popular: true
      },
      {
        id: 2,
        name: "Croquetas caseras",
        description: "Croquetas de jamón ibérico con bechamel cremosa y crujiente por fuera",
        price: 9.80,
        image: "https://images.unsplash.com/photo-1588560107833-167198a53677",
        popular: true
      },
      {
        id: 3,
        name: "Ensalada de la huerta",
        description: "Lechugas frescas, tomate cherry, cebolla morada y vinagreta de miel",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1618237994134-4d08e1be92ec"
      }
    ],
    principales: [
      {
        id: 4,
        name: "Carrillera ibérica",
        description: "Carrillera de cerdo ibérico estofada 12 horas con puré de patata trufado",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1662228665279-1d8e8f7484ca",
        special: true
      },
      {
        id: 5,
        name: "Arroz del día",
        description: "Arroz meloso con productos de temporada seleccionados por nuestro chef",
        price: 19.50,
        image: "https://images.unsplash.com/photo-1606723325573-e8d567697fbb",
        popular: true
      },
      {
        id: 6,
        name: "Lomo de lubina",
        description: "Lomo de lubina a la plancha con verduras salteadas y emulsión de cítricos",
        price: 22.75,
        image: "https://images.unsplash.com/photo-1625225977832-7de9c77a6048"
      }
    ],
    postres: [
      {
        id: 7,
        name: "Tarta de queso tradicional",
        description: "Tarta de queso horneada al estilo tradicional con compota de frutos rojos",
        price: 7.50,
        image: "https://images.unsplash.com/photo-1722409463513-68ec20dcb6f2",
        popular: true
      },
      {
        id: 8,
        name: "Flan de la abuela",
        description: "Flan de huevo casero con caramelo líquido, elaborado diariamente",
        price: 6.20,
        image: "https://images.unsplash.com/photo-1572988003368-c2068d1af2ff"
      },
      {
        id: 9,
        name: "Helado artesanal",
        description: "Selección de tres bolas de helado artesanal (vainilla, chocolate, turrón)",
        price: 6.80,
        image: "https://images.unsplash.com/photo-1673307317880-5c3a71f7d00e"
      }
    ],
    bebidas: [
      {
        id: 10,
        name: "Vino de la casa",
        description: "Copa de vino tinto crianza seleccionado de nuestra bodega local",
        price: 4.50,
        image: "https://images.unsplash.com/photo-1624200874899-7a22d43f793f"
      },
      {
        id: 11,
        name: "Cerveza artesanal",
        description: "Cerveza rubia artesanal elaborada en la región, botella de 33cl",
        price: 4.00,
        image: "https://images.unsplash.com/photo-1562877509-9f271ddaaa44"
      },
      {
        id: 12,
        name: "Refrescos naturales",
        description: "Limonada casera o naranjada natural con fruta fresca exprimida",
        price: 3.80,
        image: "https://images.unsplash.com/photo-1654528734915-b9900cd718cd"
      }
    ]
  };

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1602318223323-9953cff641f6", alt: "Interior del restaurante" },
    { id: 2, src: "https://images.unsplash.com/photo-1588560107833-167198a53677", alt: "Plato principal" },
    { id: 3, src: "https://images.unsplash.com/photo-1618237994134-4d08e1be92ec", alt: "Chef preparando comida" },
    { id: 4, src: "https://images.unsplash.com/photo-1662228665279-1d8e8f7484ca", alt: "Barra del restaurante" },
    { id: 5, src: "https://images.unsplash.com/photo-1606723325573-e8d567697fbb", alt: "Terraza exterior" },
    { id: 6, src: "https://images.unsplash.com/photo-1625225977832-7de9c77a6048", alt: "Cena romántica" }
  ];

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setReservationDate('');
      setReservationTime('');
      setReservationGuests(2);
      setReservationNotes('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Sazón Local</div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:w-auto w-full`}>
              <div className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
                <a href="#menu" className="py-2 hover:text-yellow-400 transition-colors">Menú</a>
                <a href="#reservas" className="py-2 hover:text-yellow-400 transition-colors">Reservas</a>
                <a href="#galeria" className="py-2 hover:text-yellow-400 transition-colors">Galería</a>
                <a href="#testimonios" className="py-2 hover:text-yellow-400 transition-colors">Testimonios</a>
                <a href="#contacto" className="py-2 hover:text-yellow-400 transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1602318223323-9953cff641f6)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Sazón Local</h1>
              <p className="text-xl md:text-2xl mb-8">Sabores auténticos, reservas sin complicaciones</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#menu" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Ver Menú
                </a>
                <a 
                  href="#reservas" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Reservar Mesa
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb -12">Nuestro Menú</h2>
            
            <div className="flex justify-center mb -10">
              <div className="inline-flex rounded-lg border border-gray -200 overflow-hidden">
                {['entrantes', 'principales', 'postres', 'bebidas'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px -6 py -3 font-medium capitalize transition-colors ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-gray -700 hover-bg-gray -100'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md-grid-cols -2 lg-grid-cols -3 gap -8">
              {menuItems[activeTab].map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h -48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object -cover"
                    />
                    {(item.popular || item.special) && (
                      <div className="absolute top -4 right -4">
                        <span className={`px -3 py -1 rounded-full text-sm font-bold ${item.popular ? 'bg-yellow -500 text-black' : 'bg-red -600 text-white'}`}>
                          {item.popular ? 'Popular' : 'Especial'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p -6">
                    <div className="flex justify-between items-start mb -3">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="text-lg font-bold text-yellow -600">{item.price.toFixed(2)}€</span>
                    </div>
                    <p className="text-gray -600 mb -4">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reservas" className="py -16 bg-white">
          <div className="container mx-auto px -4">
            <h2 className="text -4xl font-bold text-center mb -12">Reserva tu Mesa</h2>
            
            <div className="max-w-md mx-auto bg-gray -50 p -8 rounded-lg shadow-lg">
              {showConfirmation ? (
                <div className="text-center py -12">
                  <div className="text-green -600 text -5xl mb -4">✓</div>
                  <h3 className="text -2xl font-bold mb -2">¡Reserva Confirmada!</h3>
                  <p className="text-gray -600">Te esperamos en Sazón Local. Recibirás un correo de confirmación.</p>
                </div>
              ) : (
                <form onSubmit}}))