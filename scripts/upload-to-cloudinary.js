const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configurar Cloudinary
cloudinary.config({
  cloud_name: 'dxbtafe9u',
  api_key: '478662978285762',
  api_secret: 'GwE7M9uHmX89QwfjBXM1w9jxmpQ',
  secure: true
});

// Mapeo de carpetas locales a carpetas de Cloudinary
const folderMapping = {
  'catering-para-eventos': 'catering-para-eventos',
  'eventos-empresariales': 'eventos-empresariales', 
  'eventos-sociales': 'eventos-sociales',
  'graduaciones': 'graduaciones',
  'musica-para-eventos': 'musica-para-eventos',
  'organizacion-de-bodas': 'organizacion-de-bodas',
  'pantallas-para-escenarios': 'pantallas-para-escenarios',
  'stands-para-eventos': 'stands-para-eventos'
};

// Función para subir una imagen
async function uploadImage(localPath, cloudinaryFolder, fileName) {
  try {
    const result = await cloudinary.uploader.upload(localPath, {
      folder: `trinchera/${cloudinaryFolder}`,
      public_id: fileName.split('.')[0],
      resource_type: 'auto'
    });
    
    console.log(`✅ ${cloudinaryFolder}/${fileName} -> ${result.secure_url}`);
    return {
      localPath: localPath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    console.error(`❌ Error uploading ${cloudinaryFolder}/${fileName}:`, error.message);
    return null;
  }
}

// Función principal
async function uploadAllImages() {
  console.log('🚀 Iniciando upload de imágenes a Cloudinary...\n');
  
  const publicDir = path.join(__dirname, '../public');
  const uploadResults = {};
  
  for (const [localFolder, cloudinaryFolder] of Object.entries(folderMapping)) {
    const folderPath = path.join(publicDir, localFolder);
    
    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️  Carpeta ${localFolder} no encontrada, saltando...`);
      continue;
    }
    
    console.log(`📁 Procesando carpeta: ${localFolder}`);
    uploadResults[cloudinaryFolder] = [];
    
    const files = fs.readdirSync(folderPath);
    const imageFiles = files.filter(file => 
      file.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/i)
    );
    
    for (const file of imageFiles) {
      const localPath = path.join(folderPath, file);
      const result = await uploadImage(localPath, cloudinaryFolder, file);
      
      if (result) {
        uploadResults[cloudinaryFolder].push(result);
      }
      
      // Pequeña pausa para no sobrecargar la API
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log(`✅ Completado: ${localFolder} (${uploadResults[cloudinaryFolder].length} imágenes)\n`);
  }
  
  // Generar archivo de mapeo
  const mappingFile = path.join(__dirname, '../src/helpers/CloudinaryMapping.ts');
  const mappingContent = `// Mapeo automático de imágenes de Cloudinary
// Generado automáticamente por upload script

export const cloudinaryImages = {
${Object.entries(uploadResults).map(([folder, images]) => 
  `  '${folder}': [\n${images.map(img => 
    `    '${img.cloudinaryUrl}'`
  ).join(',\n')}\n  ]`
).join(',\n')}
};

export const getRandomImage = (category: keyof typeof cloudinaryImages): string => {
  const images = cloudinaryImages[category];
  if (!images || images.length === 0) return '';
  return images[Math.floor(Math.random() * images.length)];
};

export const getAllImages = (): string[] => {
  return Object.values(cloudinaryImages).flat();
};
`;
  
  fs.writeFileSync(mappingFile, mappingContent);
  console.log('📄 Archivo de mapeo generado: src/helpers/CloudinaryMapping.ts');
  
  // Generar resumen
  const totalImages = Object.values(uploadResults).reduce((sum, images) => sum + images.length, 0);
  console.log(`\n🎉 Upload completado! Total: ${totalImages} imágenes subidas`);
  console.log('📋 Próximos pasos:');
  console.log('1. Revisar el archivo src/helpers/CloudinaryMapping.ts');
  console.log('2. Actualizar componentes para usar las URLs de Cloudinary');
  console.log('3. Eliminar imágenes locales del proyecto');
}

// Ejecutar
uploadAllImages().catch(console.error);
