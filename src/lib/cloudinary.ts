import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Función para generar URLs optimizadas
export const getOptimizedImageUrl = (
  publicId: string,
  width: number = 1200,
  height: number = 800,
  quality: string = 'auto'
) => {
  return cloudinary.url(publicId, {
    width,
    height,
    crop: 'fill',
    quality,
    format: 'auto',
    secure: true
  });
};

// Función para subir imagen (para uso futuro)
export const uploadImage = async (file: File, folder: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'trinchera_preset'); // Necesitarás crear este preset
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );
  
  return response.json();
};
