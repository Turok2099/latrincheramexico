This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Formularios con Resend

Las solicitudes se envian a contacto@latrincheramexico.com desde esa misma direccion.
La respuesta del correo se dirige al email del visitante. No se guardan en base de datos.

Configurar RESEND_API_KEY (clave con Sending access para latrincheramexico.com) en
.env.local y en las variables de entorno de Vercel para Production. Nunca usar
NEXT_PUBLIC_ ni subir la clave al repositorio. Reiniciar el servidor local despues
de agregarla; realizar un nuevo despliegue para aplicar variables en Vercel.

La API usa fetch directamente: no hace falta instalar el SDK de Resend.
Sin clave responde 503; si Resend rechaza el envio o falla la conexion responde 502.
La confirmacion solo aparece cuando Resend acepta el mensaje, no garantiza su entrega.
El limite antiabuso es local a cada instancia y no reemplaza un limite distribuido.

## Dependencias y seguridad

Lighthouse 13.6 requiere Node.js >=22.19 (verificado con Node 24.22.1).
Se mantiene Next.js 15.5.29. Las excepciones de dependencias en package.json
fijan PostCSS 8.5.33 para Next.js y Minimatch 11.0.1 para typescript-estree:
resuelven avisos de seguridad sin migrar Next.js ni degradar el complemento de
TypeScript a una version incompatible con ESLint 9. Revisar estas excepciones
cuando los paquetes superiores incorporen las correcciones. No aplicar
npm audit fix --force: puede degradar herramientas a versiones incompatibles.
## Formulario compartido

Inicio y contacto usan src/components/Contact/Formulario.tsx. Catalogo, limites y
validacion comun en src/lib/contacto.ts; la API vuelve a validar todos los campos.
Fecha e invitados son opcionales. Privacidad requiere confirmacion expresa.
Los reintentos con el mismo contenido conservan su UUID durante la vida del
componente (hasta 23 horas). Resend deduplica durante 24 horas; recargar la pagina
crea un nuevo intento. No se persisten datos personales en el navegador.
Proteccion complementaria: JSON limitado a 16 KiB, origen igual al sitio, honeypot
y 5 intentos por IP/10 minutos por instancia. No es un limite global; ante abuso
configurar reglas de Firewall en Vercel. No se agrego CAPTCHA ni base de datos.
La pagina de privacidad describe el flujo tecnico; queda pendiente completar el
aviso integral con los datos y procedimientos reales del responsable.