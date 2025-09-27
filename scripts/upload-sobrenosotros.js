const cloudinary = require('cloudinary').v2;

// Configurar Cloudinary
cloudinary.config({
  cloud_name: 'dxbtafe9u',
  api_key: '478662978285762',
  api_secret: 'GwE7M9uHmX89QwfjBXM1w9jxmpQ',
  secure: true
});

// Función para subir la imagen de "Sobre Nosotros"
async function uploadSobreNosotrosImage() {
  try {
    console.log('📤 Subiendo imagen sobrenosotros.png a Cloudinary...');
    
    const result = await cloudinary.uploader.upload(
      './public/sobrenosotros.png',
      {
        folder: 'trinchera/sobre-nosotros',
        public_id: 'sobrenosotros',
        resource_type: 'auto'
      }
    );
    
    console.log('✅ Imagen subida exitosamente!');
    console.log('🔗 URL:', result.secure_url);
    console.log('📊 Public ID:', result.public_id);
    
    return result.secure_url;
  } catch (error) {
    console.error('❌ Error subiendo imagen:', error.message);
    return null;
  }
}

// Ejecutar upload
uploadSobreNosotrosImage();

