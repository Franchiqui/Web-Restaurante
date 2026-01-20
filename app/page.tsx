'use client';

import { useState } from 'react';
import Footer from '@/components/layout/footer';

type BaseMenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string | null;
};

type EntranteItem = BaseMenuItem & {
  popular: boolean;
};

type PrincipalItem = BaseMenuItem & {
  special?: boolean;
  popular?: boolean;
};

type PostreItem = BaseMenuItem & {
  popular: boolean;
};

type BebidaItem = BaseMenuItem & {
  popular: boolean;
};

type MenuItem = EntranteItem | PrincipalItem | PostreItem | BebidaItem;

const menuItems: Record<string, MenuItem[]> = {
  entrantes: [
    { id: 1, name: "Croquetas de Jamón Ibérico", description: "Crujientes por fuera, cremosas por dentro con jamón de bellota.", price: "€9.50", image: "https://images.unsplash.com/photo-1602318223323-9953cff641f6", popular: true },
    { id: 2, name: "Ensalada de la Huerta", description: "Mezcla de lechugas frescas, tomate cherry, cebolla morada y vinagreta de miel.", price: "€8.00", image: "https://images.unsplash.com/photo-1588560107833-167198a53677", popular: false },
    { id: 3, name: "Calamares a la Romana", description: "Aros de calamar rebozados y fritos al punto perfecto.", price: "€11.00", image: "https://images.unsplash.com/photo-1618237994134-4d08e1be92ec", popular: true },
  ],
  principales: [
    { id: 4, name: "Carrillera de Ternera al Vino Tinto", description: "Estofado de carrillera durante 6 horas, acompañado de puré de patata trufado.", price: "€18.50", image: "https://images.unsplash.com/photo-1662228665279-1d8e8f7484ca", special: true },
    { id: 5, name: "Salmón a la Plancha con Salsa de Eneldo", description: "Lomo de salmón noruego con verduras salteadas y salsa cremosa de eneldo.", price: "€16.00", image: "https://images.unsplash.com/photo-1606723325573-e8d567697fbb", popular: false },
    { id: 6, name: "Arroz Negro con Mariscos", description: "Arroz meloso con tinta de calamar, gambas, mejillones y alioli.", price: "€22.00", image: "https://images.unsplash.com/photo-1625225977832-7de9c77a6048", special: true },
  ],
  postres: [
    { id: 7, name: "Tarta de Queso Casera", description: "Crema suave de queso sobre base de galleta, con coulis de frutos rojos.", price: "€6.50", image: "https://images.unsplash.com/photo-1722409463513-68ec20dcb6f2", popular: true },
    { id: 8, name: "Flan de Huevo Tradicional", description: "Preparado al baño maría con caramelo líquido.", price: "€5.00", image: "https://images.unsplash.com/photo-1572988003368-c2068d1af2ff", popular: false },
    { id: 9, name: "Helado Artesano de Vainilla", description: "Con virutas de chocolate negro y salsa de caramelo salado.", price: "€5.50", image: "https://images.unsplash.com/photo-1673307317880-5c3a71f7d00e", popular: false },
  ],
  bebidas: [
    { id: 10, name: "Vino Tinto de la Casa", description: "Crianza Rioja, copa o botella.", price: "€4.50/€18.00", image: "https://images.unsplash.com/photo-1624200874899-7a22d43f793f", popular: false },
    { id: 11, name: "Cerveza Artesanal Local", description: "IPA refrescante con notas cítricas.", price: "€4.00", image: "https://images.unsplash.com/photo-1562877509-9f271ddaaa44", popular: true },
    { id: 12, name: "Agua Mineral con/sin Gas", description: "Botella 1L.", price: "€2.50", image: null, popular: false },
  ],
};

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Cliente habitual",
    content: "La carrillera es sublime. Volvemos cada mes sin falta. El servicio es exquisito.",
    image: "https://images.unsplash.com/photo-1636812847964-3c7e65f6ecba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Crítico gastronómico",
    content: "Autenticidad en cada plato. El arroz negro es el mejor que he probado en la ciudad.",
    image: "https://images.unsplash.com/photo-1643892150764-75ee9a645f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Ana López",
    role: "Celebración de aniversario",
    content: "Nos hicieron sentir especiales. Las notas de la reserva se tuvieron en cuenta al detalle.",
    image: "https://images.unsplash.com/photo-1656740979605-f070eee15210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Javier Méndez",
    role: "Cliente",
    content: "Calidad-precio excelente. Las croquetas son una delicia que recomiendo a todos.",
    image: "https://images.unsplash.com/photo-1656740978411-d88ebaaa35d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Sofía Torres",
    role: "Vegetariana",
    content: "Encontré opciones deliciosas adaptadas. La ensalada con su vinagreta es increíble.",
    image: "https://images.unsplash.com/photo-1656740978404-874f95b253b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
  },
  {
    id: 6,
    name: "David Ortega",
    role: "Negocios",
    content: "Ambiente perfecto para una cena de trabajo. Reservé online sin problemas.",
    image: "https://images.unsplash.com/photo-1717964134799-a98f497172a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTkyODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Njg1NzMzMDJ8&ixlib=rb-4.1.0&q=80&w=1080&w=450&h=300&fit=crop"
  },
];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1602318223323-9953cff641f6", alt: "Interior del restaurante" },
  { id: 2, src: "https://images.unsplash.com/photo-1588560107833-167198a53677", alt: "Plato principal presentado" },
  { id: 3, src: "https://images.unsplash.com/photo-1618237994134-4d08e1be92ec", alt: "Barra del restaurante" },
  { id: 4, src: "https://images.unsplash.com/photo-1662228665279-1d8e8f7484ca", alt: "Chef preparando plato" },
  { id: 5, src: "https://images.unsplash.com/photo-1606723325573-e8d567697fbb", alt: "Terraza exterior" },
  { id: 6, src: "https://images.unsplash.com/photo-1625225977832-7de9c77a6048", alt: "Postre decorado" },
];

type MenuCategory = keyof typeof menuItems;

export default function Page() {
  const [activeMenuTab, setActiveMenuTab] = useState<MenuCategory>('entrantes');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [reservationGuests, setReservationGuests] = useState(2);
  const [reservationNotes, setReservationNotes] = useState('');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleReservationSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (reservationDate && reservationTime && reservationGuests) {
      setReservationConfirmed(true);
      setTimeout(() => {
        setReservationConfirmed(false);
        setReservationDate('');
        setReservationTime('');
        setReservationGuests(2);
        setReservationNotes('');
      }, 5000);
    }
  };

  return (
    <div className= "min-h-screen bg-white" >
    <nav className="bg-black text-white sticky top-0 z-50" >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center" >
        <div className="text-2xl font-bold" > Sazón Local </div>
          < div className = "hidden md:flex space-x-8" >
            <a href="#menu" className = "hover:text-yellow-400 transition-colors" > Menú </a>
              < a href = "#reservas" className = "hover:text-yellow-400 transition-colors" > Reservas </a>
                < a href = "#galeria" className = "hover:text-yellow-400 transition-colors" > Galería </a>
                  < a href = "#testimonios" className = "hover:text-yellow-400 transition-colors" > Testimonios </a>
                    < a href = "#info" className = "hover:text-yellow-400 transition-colors" > Información </a>
                      </div>
                      < button className = "md:hidden" >
                        <svg className="w-6 h-6" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" xmlns = "http://www.w3.org/2000/svg" >
                          <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </button>
                            </div>
                            </nav>

                            < section className = "relative h-[80vh] flex items-center justify-center" >
                              <div className="absolute inset-0 z-0" >
                                <img src="https://images.unsplash.com/photo-1602318223323-9953cff641f6" alt = "Interior del restaurante Sazón Local" className = "w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black bg-opacity-50" > </div>
                                    </div>
                                    < div className = "relative z-10 text-center text-white px-4" >
                                      <h1 className="text-5xl md:text-7xl font-bold mb-4" > Sazón Local </h1>
                                        < p className = "text-xl md:text-2xl mb-8" > Sabores auténticos, reservas sin complicaciones </p>
                                          < div className = "flex flex-col sm:flex-row gap-4 justify-center" >
                                            <a href="#menu" className = "bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors" > Ver Menú </a>
                                              < a href = "#reservas" className = "bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg transition-colors" > Reservar Mesa </a>
                                                </div>
                                                </div>
                                                </section>

                                                < section id = "menu" className = "py-16 bg-gray-50" >
                                                  <div className="container mx-auto px-4" >
                                                    <h2 className="text-4xl font-bold text-center mb-12" > Nuestro Menú </h2>
                                                      < div className = "flex flex-wrap justify-center gap-2 mb-12" >
                                                        {(Object.keys(menuItems) as MenuCategory[]).map((category) => (
                                                          <button
                key= { category }
                onClick = {() => setActiveMenuTab(category)}
className = {`px-6 py-3 rounded-full font-medium capitalize ${activeMenuTab === category ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
              >
  { category }
  </button>
            ))}
</div>
  < div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8" >
  {
    menuItems[activeMenuTab].map((item) => (
      <div key= { item.id } className = "bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y -1 transition-transform" >
      {
        item.image && (
          <div className="h-48 overflow-hidden">
            <img src={ item.image } alt = { item.name } className = "w-full h-full object-cover" />
            </div>
    )
  }
    < div className = "p-6" >
      <div className="flex justify-between items-start mb-2" >
        <h3 className="text-xl font-bold" > { item.name } </h3>
          < span className = "text-lg font-bold text-yellow-600" > { item.price } </span>
            </div>
            < p className = "text-gray-600 mb-4" > { item.description } </p>
              < div className = "flex gap-2" >
                { 'popular' in item && item.popular && <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full"> Popular </span> }
{ 'special' in item && item.special && <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full" > Especial del Chef </span> }
</div>
  </div>
  </div>
            ))}
</div>
  </div>
  </section>

  < section id = "reservas" className = "py-16 bg-white" >
    <div className="container mx-auto px-4" >
      <h2 className="text-4xl font-bold text-center mb-12" > Reserva tu Mesa </h2>
        < div className = "max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg" >
        {
          reservationConfirmed?(
              <div className = "text-center py-12" >
              <div className="text-green-500 text-6xl mb-6">✓</div>
                < h3 className = "text-2xl font-bold mb-4" >¡Reserva Confirmada! </h3>
                  < p > Te esperamos el { reservationDate } a las { reservationTime } para { reservationGuests } persona(s).</p>
                    < p className = "mt-2" > Hemos anotado tus preferencias.</p>
                      </div>
            ) : (
  <form onSubmit= { handleReservationSubmit } >
  <div className="grid md:grid-cols-2 gap-6" >
    <div>
    <label className="block text-sm font-medium mb-2" > Fecha * </label>
      < input
type = "date"
required
value = { reservationDate }
onChange = {(e) => setReservationDate(e.target.value)}
className = "w-full p-3 border border-gray-300 rounded-lg"
  />
  </div>
  < div >
  <label className="block text-sm font-medium mb-2" > Hora * </label>
    < select
required
value = { reservationTime }
onChange = {(e) => setReservationTime(e.target.value)}
className = "w-full p-3 border border-gray-300 rounded-lg"
  >
  <option value="" > Selecciona una hora </option>
    < option value = "13:00" > 13:00 </option>
      < option value = "14:00" > 14:00 </option>
        < option value = "15:00" > 15:00 </option>
          < option value = "20:00" > 20:00 </option>
            < option value = "21:00" > 21:00 </option>
              < option value = "22:00" > 22:00 </option>
                </select>
                </div>
                < div >
                <label className="block text-sm font-medium mb-2" > Número de personas * </label>
                  < select
required
value = { reservationGuests }
onChange = {(e) => setReservationGuests(Number(e.target.value))}
className = "w-full p-3 border border-gray-300 rounded-lg"
  >
{
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
    <option key= { num } value = { num } > { num } { num === 1 ? 'persona' : 'personas'} </option>
                      ))}
</select>
  </div>
  < div >
  <label className="block text-sm font-medium mb-2" > Notas adicionales </label>
    < textarea
value = { reservationNotes }
onChange = {(e) => setReservationNotes(e.target.value)}
className = "w-full p-3 border border-gray-300 rounded-lg"
rows = { 3}
placeholder = "Alergias, celebración especial, preferencias..."
  />
  </div>
  < div className = "md:col-span-2" >
    <button
                      type="submit"
className = "w-full bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
  >
  Confirmar Reserva
    </button>
    </div>
    </div>
    </form>
            )}
</div>
  </div>
  </section>

  < section id = "testimonios" className = "py-16 bg-gray-50" >
    <div className="container mx-auto px-4" >
      <h2 className="text-4xl font-bold text-center mb-12" > Lo que dicen nuestros clientes </h2>
        < div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8" >
        {
          testimonials.map((testimonial) => (
            <div key= { testimonial.id } className = "bg-white p-6 rounded-xl shadow-lg" >
            <div className="flex items-center mb-4" >
          <img src={ testimonial.image } alt = { testimonial.name } className = "w-12 h-12 rounded-full object-cover mr-4" />
          <div>
          <h3 className="font-bold" > { testimonial.name } </h3>
          < p className = "text-gray-600 text-sm" > { testimonial.role } </p>
          </div>
          </div>
          < p className = "text-gray-700" > "{testimonial.content}" </p>
          </div>
          ))
        }
          </div>
          </div>
          </section>

          < section id = "galeria" className = "py-16 bg-white" >
            <div className="container mx-auto px-4" >
              <h2 className="text-4xl font-bold text-center mb-12" > Nuestro espacio </h2>
                < div className = "grid grid-cols-2 md:grid-cols-3 gap-4" >
                {
                  galleryImages.map((image) => (
                    <div key= { image.id } className = "overflow-hidden rounded-lg" >
                    <img src={ image.src } alt = { image.alt } className = "w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))
                }
                  </div>
                  </div>
                  </section>

                  < section id = "info" className = "py-16 bg-gray-50" >
                    <div className="container mx-auto px-4" >
                      <div className="grid md:grid-cols-3 gap-8" >
                        <div>
                        <h3 className="text-2xl font-bold mb-4" > Horario </h3>
                          < ul className = "space-y-2" >
                            <li><strong>Lunes a Jueves: </strong> 13:00 - 16:00 / 20:00 - 23:00 </li>
                              < li > <strong>Viernes y Sábado: </strong> 13:00 - 16:30 / 20:00 - 00:00 </li>
                                < li > <strong>Domingo: </strong> 13:00 - 17:00</li >
                                  </ul>
                                  </div>
                                  < div >
                                  <h3 className="text-2xl font-bold mb-4" > Contacto </h3>
                                    < ul className = "space-y-2" >
                                      <li><strong>Dirección: </strong> Calle Sabores 123, Madrid</li >
                                        <li><strong>Teléfono: </strong> +34 912 345 678</li >
                                            <li><strong>Email: </strong>info@sazonlocal.com</li>                                           </ul>
                                            </div>
                                            < div >
                                            <h3 className="text-2xl font-bold mb-4" > Servicios </h3>
                                              < ul className = "space-y-2" >
                                                <li>Reservas online 24 / 7 </li>
                                                  < li > Grupos y celebraciones </li>
                                                    < li > Menú vegetariano disponible </li>
                                                      < li > Terraza exterior </li>
                                                        < li > Accesible para sillas de ruedas </li>
                                                          </ul>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </section>

                                                          < Footer />
                                                          </div>
  );
}