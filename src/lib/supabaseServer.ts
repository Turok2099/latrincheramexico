import { createClient } from "@supabase/supabase-js";

// Solo para código de servidor (rutas API / Server Actions).
// La clave secreta nunca debe usarse en componentes cliente ni llevar prefijo NEXT_PUBLIC_.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
