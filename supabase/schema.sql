-- Consultas de contacto/cotizacion de los formularios del sitio.
-- Ejecutar una vez en Supabase > SQL Editor.
-- RLS activa y SIN politicas: la clave publica (anon/publishable) no puede leer ni escribir.
-- Solo la ruta de servidor (src/app/api/contacto) escribe, con la clave secreta.

create table if not exists public.contactos (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  nombre text not null check (char_length(nombre) between 2 and 120),
  email text not null check (char_length(email) between 5 and 200),
  telefono text not null check (char_length(telefono) between 7 and 30),
  tipo_evento text check (char_length(tipo_evento) <= 60),
  fecha_evento date,
  numero_invitados integer check (numero_invitados between 1 and 100000),
  mensaje text check (char_length(mensaje) <= 3000),
  origen text check (char_length(origen) <= 120),
  atendido boolean not null default false
);

alter table public.contactos enable row level security;

revoke all on public.contactos from anon, authenticated;
