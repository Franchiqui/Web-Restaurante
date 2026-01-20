'use client';

'use client';

import { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, Bars3Icon, CalendarDaysIcon, ClockIcon, UserGroupIcon, MapPinIcon, PhoneIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/footer';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'entrantes' | 'principales' | 'postres' | 'bebidas';
  isPopular: boolean;
  isChefSpecial: boolean;
  imageUrl: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

const Sidebar = memo(function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'entrantes' | 'principales' | 'postres' | 'bebidas'>('entrantes');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [isReservationConfirmed, setIsReservationConfirmed] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Ceviche Tradicional",
      description: "Pescado fresco marinado en limón con cebolla morada, ají limo y camote",
      price: 18.90,
      category: 'entrantes',
      isPopular: true,
      isChefSpecial: false,
      imageUrl: "https://images.unsplash.com/photo-1602318223323-9953cff641f6"
    },
    {
      id: 2,
      name: "Causa Limeña",
      description: "Puré de papa amarilla con ají, rellena de pollo o atún",
      price: 15.50,
      category: 'entrantes',
      isPopular: true,
      isChefSpecial: true,
      imageUrl: "https://images.unsplash.com/photo-1588560107833-167198a53677"
    },
    {
      id: 3,
      name: "Lomo Saltado",
      description: "Trozos de lomo de res salteados con cebolla, tomate y papas fritas",
      price: 28.90,
      category: 'principales',
      isPopular: true,
      isChefSpecial: false,
      imageUrl: "https://images.unsplash.com/photo-1618237994134-4d08e1be92ec"
    },
    {
      id: 4,
      name: "Ají de Gallina",
      description: "Gallina deshilachada en salsa de ají amarillo con nueces y queso",
      price: 24.50,
      category: 'principales',
      isPopular: false,
      isChefSpecial: true,
      imageUrl: "https://images.unsplash.com/photo-1662228665279-1d8e8f7484ca"
    },
    {
      id: 5,
      name: "Suspiro Limeño",
      description: "Dulce de manjarblanco con merengue de oporto y canela",
      price: 12.90,
      category: 'postres',
      isPopular: true,
      isChefSpecial: false,
      imageUrl: "https://images.unsplash.com/photo-1606723325573-e8d567697fbb"
    },
    {
      id: 6,
      name: "Picarones",
      description: "Anillos fritos de harina de camote y zapallo con miel de chancaca",
      price: 10.50,
      category: 'postres',
      isPopular: false,
      isChefSpecial: true,
      imageUrl: "https://images.unsplash.com/photo-1625225977832-7de9c77a6048"
    },
    {
      id: 7,
      name: "Chicha Morada",
      description: "Bebida refrescante de maíz morado con piña y canela",
      price: 6.90,
      category: 'bebidas',
      isPopular: true,
      isChefSpecial: false,
      imageUrl: "https://images.unsplash.com/photo-1722409463513-68ec20dcb6f2"
    },
    {
      id: 8,
      name: "Pisco Sour",
      description: "Cóctel emblemático peruano con pisco, limón, clara de huevo y amargo de angostura",
      price: 14.50,
      category: 'bebidas',
      isPopular: true,
      isChefSpecial: true,
      imageUrl: "https://images.unsplash.com/photo-1572988003368-c2068d1af2ff"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María González",
      role: "Cliente frecuente",
      content: "La mejor experiencia gastronómica que he tenido. El lomo saltado es simplemente excepcional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1596391691172-3359c29c6451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Crítico gastronómico",
      content: "Autenticidad y sabor en cada plato. El ceviche tiene el punto perfecto de limón.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1627334508862-64ed547f5ada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Food blogger",
      content: "El suspiro limeño es celestial. Volveré solo por ese postre.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1656740976013-d460608919ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Jorge López",
      role: "Turista internacional",
      content: "Descubrí la verdadera cocina peruana aquí. Servicio impecable y sabores auténticos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1656741348932-1d391d3f5213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Laura Sánchez",
      role: "Celebración de aniversario",
      content: "Celebramos nuestros 10 años de matrimonio aquí y fue mágico. Gracias por la atención especial.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1662189793032-ccb6135a9159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Roberto Díaz",
      role: "Empresario local",
      content: "Mi lugar favorito para reuniones de negocios. La comida siempre impresiona a mis clientes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1663754890418-043bc413fd4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1673307317880-5c3a71f7d00e",
      alt: "Interior del restaurante"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1624200874899-7a22d43f793f",
      alt: "Plato especial del chef"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1562877509-9f271ddaaa44",
      alt: "Bar con selección de piscos"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1654528734915-b9900cd718cd",
      alt: "Terraza exterior"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1602318223323-9953cff641f6",
      alt: "Presentación de platos"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1588560107833-167198a53677",
      alt: "Ambiente nocturno"
    }
  ];

  const filteredMenuItems = menuItems.filter(item => item.category === activeTab);

  const handleReservationSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsReservationConfirmed(true);
    setTimeout(() => setIsReservationConfirmed(false), 5000);
    
    setReservationDate('');
    setReservationTime('');
    setNumberOfPeople(2);
    setSpecialRequests('');
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      
<nav className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">SL</span>
              </div>
              <span className="text-xl font-bold">Sazón Local</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md hover-bg-gray-800 focus-outline-none focus-ring-2 focus-ring-red-500"
              aria-label="Abrir menú lateral"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
</nav>

      
<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              
<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col bg-white shadow-xl">
                  
<div className="px-4 py-6 sm-px-6 bg-black text-white">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-semibold">Menú</Dialog.Title>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-md hover-text-gray-300 focus-outline-none focus-ring-2 focus-ring-red-500"
                        aria-label="Cerrar menú"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  
<div className="relative flex-1 px-4 py-6 sm-px-6 overflow-y-auto">
                    
<section className="mb-12">
                      <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                        <Image
                          src="https://images.unsplash.com/photo-1602318223323-9953cff641f6"
                          alt="Plato estrella del restaurante"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width) 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black bg-opacity -60 to-transparent"></div>
                        <div className="absolute bottom -6 left -6 right -6 p -6 text-white">
                          <h2 className="text -3xl font-bold mb -2">Sazón Local</h2>
                          <p className="text-lg opacity -90">Sabores auténticos, reservas sin complicaciones</p>
                        </div>
                      </div>

                      <div className="flex space-x+4 mb+8">
                        <button
                          onClick={() => window.location.href='#menu'}
                          className="flex+1 bg-red+600 text+white px+6 py+3 rounded+lg font+semibold hover-bg-red+700 transition-colors text-center"
                        >
                          Ver Menú
                        </button>
                        <button
                          onClick={() => window.location.href='#reservas'}
                          className="flex+1 border+2 border-red+600 text-red+600 px+6 py+3 rounded+lg font+semibold hover-bg-red+50 transition-colors text-center"
                        >
                          Reservar Mesa
                        </button>
                      </div>
                    </section>

                    
<section id="menu" className="mb+12">
                      <h3 className="text+2xl font+bold mb+6">Menú Digital</h3>
                      
                      <div className="flex space-x+2 mb+6 overflow-x-auto pb+2">
                        {(['entrantes', 'principales', 'postres', 'bebidas'] as const).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px+4 py+2 rounded-lg whitespace -nowrap ${activeTab === tab ? 'bg-red -600 text-white' : 'bg-gray -100 text-gray -700 hover-bg-gray -200'}`}
                          >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </button>
                        ))}
                      </div>

                      
<div className="space-y+6">
                        {filteredMenuItems.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity -0, y -20 }}
                            animate={{ opacity -1, y -0 }}
                            transition={{ duration -0.3 }}
                            className="border rounded-lg p+4 hover-shadow-lg transition-shadow"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex+1">
                                <div className="flex items-center space-x+2 mb+2">
                                  <h4 className="text-lg font-semibold">{item.name}</h4>
                                  {item.isPopular && (
                                    <span className="bg-yellow -100 text-yellow -800 text-xs px}}})))))