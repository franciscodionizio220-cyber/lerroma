import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data/hotel';
export function Reserve({message, className = '', children = 'Reservar pelo WhatsApp'}: {message?:string; className?:string; children?:React.ReactNode}) { return <a className={`button primary ${className}`} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/>{children}</a>; }
export function Brand() { return <a className="brand" href="#inicio" aria-label="Hotel Lerroma — início"><span className="monogram">L</span><span><strong>Hotel Lerroma</strong><small>MOGI GUAÇU · SP</small></span></a>; }
export function SectionTitle({eyebrow,title,description}: {eyebrow:string;title:string;description?:string}) { return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
