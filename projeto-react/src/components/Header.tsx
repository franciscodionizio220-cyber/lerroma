import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { hotel, navigation } from '../data/hotel';
import { Brand, Reserve } from './UI';
export default function Header() {
 const [open,setOpen]=useState(false), [active,setActive]=useState('inicio'), [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const update=()=>{setScrolled(window.scrollY>40); let current='inicio'; for(const [id] of navigation){const el=document.getElementById(id);if(el && el.getBoundingClientRect().top<=150)current=id;}setActive(current);}; update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[]);
 return <header className={`header ${scrolled||open?'solid':''}`}><div className="container header-inner"><Brand/><nav id="main-menu" aria-label="Navegação principal" className={open?'open':''}>{navigation.map(([id,label])=><a key={id} href={`#${id}`} aria-current={active===id?'location':undefined} className={active===id?'active':''} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="header-phone" href={hotel.phoneHref}><Phone size={18}/>{hotel.phone}</a><Reserve className="header-reserve"/><button className="menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="main-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>;
}
