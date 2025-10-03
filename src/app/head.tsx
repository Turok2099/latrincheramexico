import Head from 'next/head';

export default function CustomHead() {
  return (
    <Head>
      {/* 🔗 DNS prefetch para recursos críticos */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//res.cloudinary.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      
      {/* 🖼️ Preload imágenes críticas */}
      <link 
        rel="preload" 
        as="image" 
        href="https://res.cloudinary.com/dxbtafe9u/image/upload/f_auto,q_auto/v1759531984/trinchera/main-images/latrinchera.jpg"
      />
      
      {/* ✨ CSS crítico inlinado */}
      <style dangerouslySetInnerHTML={{
        __html: `
          :root{--color-primary:#22d3f7;--color-accent:#22d3f7;--background:#000000;--foreground:#ededed;--font-sans:"Open Sans",sans-serif;}
          html{font-family:var(--font-sans);line-height:1.6;overflow-x:hidden;}
          body{background:var(--background);color:var(--foreground);font-family:var(--font-sans);margin:0;padding:0;overflow-x:hidden;overscroll-behavior:none;-webkit-overflow-scrolling:touch}
          nav,header{position:relative;z-index:50}
          .fixed.bottom-6.right-6{position:fixed;bottom:1.5rem;right:1.5rem;z-index:50;background:#25D366;color:white;border-radius:9999px;padding:1rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);transition:all .3s ease}
          img{max-width:100%;height:auto}
          h1,h2,h3{margin:0;font-weight:bold;line-height:1.2}
          @media (max-width:768px){.fixed.bottom-6.right-6{bottom:1rem;right:1rem}}
        `
      }} />
    </Head>
  );
}
