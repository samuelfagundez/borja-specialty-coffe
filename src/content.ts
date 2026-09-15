// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 15 de septiembre de 2026,
// más el enlace de Instagram aportado directamente por el cliente
// (/data/contacto.json).

export const content = {
  name: 'Borja Specialty Coffee',
  shortName: 'Borja',
  tagline: 'Cafetería de especialidad en Camins al Grau, Valencia',
  description:
    'Borja Specialty Coffee es una cafetería de especialidad en el barrio de Camins al Grau, Valencia, pensada para desayunar y merendar con calma. Trabajamos con café de origen cuidado, bollería recién horneada y bowls de yogur con granola casera y fruta fresca, todo preparado al momento tras la barra. Contamos con terraza, menú infantil y aceptamos mascotas, así que puedes venir con toda la familia y sentarte a disfrutar sin prisa.',
  metaDescription:
    'Cafetería de especialidad en Camins al Grau, Valencia. Café de origen, desayunos, brunch y repostería casera. Terraza, apto para niños y se admiten perros.',
  keywords: [
    'Borja Specialty Coffee',
    'Camins al Grau',
    'Valencia',
    'cafetería de especialidad',
    'desayunos Valencia',
    'brunch Valencia',
    'café de especialidad',
    'cafetería con terraza',
  ],
  priceRange: '1 € - 10 €',
  priceRangeDisplay: '1 € – 10 € por persona',
  cuisine: 'Cafetería de especialidad',

  rating: { value: 4.6, count: 1078, countDisplay: '1078 reseñas' },
  highlights: [
    'Café de especialidad preparado con cuidado, grano a grano.',
    'Bollería recién horneada y tarta de queso vasca muy recomendada por la clientela.',
    'Terraza y aseos accesibles, con menú infantil y opciones vegetarianas.',
    'Se admiten perros, así que puedes venir con tu compañero de cuatro patas.',
  ],

  address: {
    streetAddress: 'Carrer de Vicente Beltrán Grimal, 23',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46023',
    addressCountry: 'ES',
    full: 'C/ de Vicente Beltrán Grimal, 23, Camins al Grau, 46023 València, Valencia',
  },
  geo: { lat: 39.4600622, lng: -0.3491639 },

  phone: '+34 614 30 55 50',
  phoneDisplay: '614 30 55 50',
  whatsappNumber: '34614305550',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/borja-specialty-coffe/',

  social: {
    instagram: 'https://www.instagram.com/borjacafe.vlc',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: '8:00 – 20:00' },
    { day: 'Martes', hours: '8:00 – 20:00' },
    { day: 'Miércoles', hours: '8:00 – 20:00' },
    { day: 'Jueves', hours: '8:00 – 20:00' },
    { day: 'Viernes', hours: '8:00 – 20:00' },
    { day: 'Sábado', hours: '9:00 – 20:00' },
    { day: 'Domingo', hours: '9:00 – 20:00' },
  ],
  openingHoursSchema: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '20:00' },
  ],

  gallery: [
    {
      src: '/gallery/borja-specialty-coffee-fachada.jpg',
      alt: 'Fachada de Borja Specialty Coffee en Camins al Grau, Valencia',
    },
    {
      src: '/gallery/borja-specialty-coffee-barra-exterior.jpg',
      alt: 'Barra de café vista desde el escaparate de Borja Specialty Coffee',
    },
    {
      src: '/gallery/borja-specialty-coffee-mostrador-dulces.jpg',
      alt: 'Mostrador de repostería y bollería de Borja Specialty Coffee',
    },
    {
      src: '/gallery/borja-specialty-coffee-croissants.jpg',
      alt: 'Bandeja de croissants recién horneados en Borja Specialty Coffee',
    },
    {
      src: '/gallery/borja-specialty-coffee-latte-art.jpg',
      alt: 'Cafés de especialidad con latte art en Borja Specialty Coffee',
    },
    {
      src: '/gallery/borja-specialty-coffee-bowl-granola.jpg',
      alt: 'Bowl de yogur con granola casera y fruta fresca en Borja Specialty Coffee',
    },
    {
      src: '/gallery/borja-specialty-coffee-terraza.jpg',
      alt: 'Terraza de Borja Specialty Coffee para desayunar al aire libre',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Borja Specialty Coffee, C/ de Vicente Beltrán Grimal 23, 46023 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=3679629500932306929&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Borja Specialty Coffee y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Borja Specialty Coffee y me gustaría hacer una reserva.'

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
