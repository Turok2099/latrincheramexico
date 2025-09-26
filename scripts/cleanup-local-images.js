const fs = require('fs');
const path = require('path');

console.log('🧹 Limpieza de imágenes locales después de migración a Cloudinary...\n');

// Carpetas a eliminar (ya están en Cloudinary)
const foldersToDelete = [
  'catering-para-eventos',
  'eventos-empresariales', 
  'eventos-sociales',
  'graduaciones',
  'musica-para-eventos',
  'organizacion-de-bodas',
  'pantallas-para-escenarios',
  'stands-para-eventos'
];

// Carpetas a mantener
const foldersToKeep = [
  'iconosservicios' // Iconos pequeños que no necesitan optimización
];

const publicDir = path.join(__dirname, '../public');

console.log('📋 Carpetas que se eliminarán:');
foldersToDelete.forEach(folder => {
  const folderPath = path.join(publicDir, folder);
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath);
    console.log(`  ✅ ${folder}/ (${files.length} archivos)`);
  } else {
    console.log(`  ⚠️  ${folder}/ (no encontrada)`);
  }
});

console.log('\n📋 Carpetas que se mantendrán:');
foldersToKeep.forEach(folder => {
  const folderPath = path.join(publicDir, folder);
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath);
    console.log(`  🔒 ${folder}/ (${files.length} archivos)`);
  } else {
    console.log(`  ⚠️  ${folder}/ (no encontrada)`);
  }
});

// Verificar archivos individuales
console.log('\n📋 Archivos individuales:');
const individualFiles = fs.readdirSync(publicDir, { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => dirent.name);

individualFiles.forEach(file => {
  console.log(`  📄 ${file}`);
});

console.log('\n🚀 ¿Proceder con la eliminación? (Ctrl+C para cancelar)');
console.log('⏳ Esperando 5 segundos...');

setTimeout(() => {
  console.log('\n🗑️  Iniciando eliminación...\n');
  
  let totalFilesDeleted = 0;
  let totalSizeDeleted = 0;
  
  foldersToDelete.forEach(folder => {
    const folderPath = path.join(publicDir, folder);
    
    if (fs.existsSync(folderPath)) {
      console.log(`📁 Eliminando ${folder}/...`);
      
      // Contar archivos y tamaño antes de eliminar
      const files = fs.readdirSync(folderPath);
      let folderSize = 0;
      
      files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        folderSize += stats.size;
      });
      
      // Eliminar la carpeta completa
      fs.rmSync(folderPath, { recursive: true, force: true });
      
      totalFilesDeleted += files.length;
      totalSizeDeleted += folderSize;
      
      console.log(`  ✅ ${folder}/ eliminada (${files.length} archivos, ${(folderSize / 1024 / 1024).toFixed(2)} MB)`);
    }
  });
  
  console.log('\n🎉 Limpieza completada!');
  console.log(`📊 Total eliminado: ${totalFilesDeleted} archivos, ${(totalSizeDeleted / 1024 / 1024).toFixed(2)} MB`);
  console.log('\n✨ Beneficios:');
  console.log('  - Proyecto más ligero');
  console.log('  - Deploy más rápido');
  console.log('  - Imágenes optimizadas en Cloudinary');
  console.log('  - CDN global para mejor performance');
  
}, 5000);
