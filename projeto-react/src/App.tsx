import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Reserve } from './components/UI';
import { Hero, Rooms, Amenities } from './sections/Content';
import About from './sections/About';
import Location from './sections/Location';
import Contact from './sections/Contact';
export default function App(){useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect();},[]);return <><a className="skip-link" href="#main">Pular para o conteúdo</a><Header/><main id="main"><Hero/><Rooms/><Amenities/><About/><Location/><Contact/></main><Footer/><Reserve className="floating"/></>;}
