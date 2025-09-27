const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

async function uploadAbout2Image() {
  const imagePath = path.join(__dirname, '../public/about2.png');
  const publicId = 'trinchera/about/about2'; // Define public_id for Cloudinary

  console.log(`📤 Subiendo imagen about2.png a Cloudinary...`);

  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'trinchera/about',
      public_id: 'about2',
      resource_type: 'image',
      overwrite: true
    });
    console.log('✅ Imagen subida exitosamente!');
    console.log('🔗 URL:', result.secure_url);
    console.log('📊 Public ID:', result.public_id);
  } catch (error) {
    console.error('❌ Error al subir la imagen:', error.message);
  }
}

uploadAbout2Image();
