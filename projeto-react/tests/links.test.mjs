import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hotel, rooms, whatsappUrl, roomMessage, contactMessage, directions, waze } from '../src/data/hotel.ts';
test('reserva usa número oficial e mensagem com acentos preservados',()=>{const url=new URL(whatsappUrl());assert.equal(url.pathname,'/5519987372320');assert.equal(url.searchParams.get('text'),hotel.mainMessage);});
test('cada acomodação aparece na mensagem personalizada',()=>{for(const room of rooms)assert.ok(new URL(whatsappUrl(roomMessage(room.name))).searchParams.get('text').includes(room.name));});
test('formulário preserva conteúdo e caracteres especiais sem criar parâmetros extras',()=>{const values={name:' Ana ',contact:'ana@example.com',subject:'Reserva de acomodação',message:'Olá! Casal & família?\nEntrada amanhã.'};const message=contactMessage(values);const url=new URL(whatsappUrl(message));assert.equal(url.searchParams.get('text'),message);assert.equal([...url.searchParams.keys()].length,1);for(const value of Object.values(values))assert.ok(message.includes(value.trim()));});
test('rotas usam endereço fornecido e não coordenadas inventadas',()=>{assert.equal(new URL(directions).searchParams.get('destination'),hotel.address);assert.equal(new URL(waze).searchParams.get('q'),hotel.address);});
