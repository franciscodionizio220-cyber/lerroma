export const hotel = {
  name: 'Hotel Lerroma', phone: '(19) 3831-6112', phoneHref: 'tel:+551938316112',
  whatsapp: '5519987372320', whatsappLabel: '(19) 98737-2320', email: 'hotellerroma@gmail.com',
  address: 'Avenida Mogi Mirim, 1155, Bairro Areião, Mogi Guaçu - SP, 13844-110',
  facebookUrl: '', // Configure somente a URL oficial confirmada.
  mainMessage: 'Olá! Vim pelo site do Hotel Lerroma e gostaria de consultar a disponibilidade de quartos e fazer uma reserva.',
};
export function whatsappUrl(message = hotel.mainMessage) { return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`; }
export function roomMessage(name: string) { return `Olá! Gostaria de consultar a disponibilidade da acomodação ${name} no Hotel Lerroma.`; }
export function contactMessage(values: {name: string; contact: string; subject: string; message: string}) { return `Olá! Vim pelo site do Hotel Lerroma.\n\nNome: ${values.name.trim()}\nContato: ${values.contact.trim()}\nAssunto: ${values.subject}\n\n${values.message.trim()}`; }
export const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hotel.address)}`;
export const waze = `https://www.waze.com/ul?q=${encodeURIComponent(hotel.address)}&navigate=yes`;
export const navigation = [['inicio','Início'],['acomodacoes','Acomodações'],['comodidades','Comodidades'],['sobre','Sobre'],['localizacao','Localização'],['contato','Contato']];
// Preços, medidas, capacidades e avaliações transcritos das referências; confirmar antes de publicar.
export const rooms = [
 {name:'Suíte Standard Individual',price:'160,00',area:14,people:'ATÉ 1 PESSOA',bed:'1 cama box de solteiro',description:'Prática e silenciosa, ideal para quem viaja a trabalho. Cama box de solteiro, mesa de apoio e tudo à mão.',image:'/images/quarto-individual.jpg'},
 {name:'Quarto Duplo / Casal',price:'230,00',area:18,people:'ATÉ 2 PESSOAS',bed:'1 cama de casal ou 2 de solteiro',description:'Espaçoso e aconchegante, com cama box de casal ou duas de solteiro. Perfeito para casais e colegas de viagem.',image:'/images/quarto-duplo.jpg'},
 {name:'Suíte Tripla / Família',price:'280,00',area:24,people:'ATÉ 3 PESSOAS',bed:'3 camas de solteiro',description:'Conforto para a família ou equipes de trabalho: três camas de solteiro, ar-condicionado split e espaço de sobra.',image:'/images/quarto-triplo.jpg'},
];
export const gallery = [
 {label:'Recepção',src:'/images/recepcao.jpg'}, {label:'Quartos',src:'/images/quarto-galeria.jpg'},
 {label:'Áreas comuns',src:'/images/areas-comuns.jpg'}, {label:'Café da manhã',src:'/images/cafe-da-manha.jpg'},
 {label:'Sala de espera',src:'/images/sala-de-espera.jpg'},
];

