const cloudinary = require("cloudinary").v2;
const path = require("path");

// Configurar Cloudinary directamente
cloudinary.config({
  cloud_name: "dxbtafe9u",
  api_key: "478662978285762",
  api_secret: "GwE7M9uHmX89QwfjBXM1w9jxmpQ",
  secure: true,
});

async function uploadAbout2Image() {
  const imagePath = path.join(__dirname, "../public/about2.png");

  console.log(`📤 Subiendo imagen about2.png a Cloudinary...`);

  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "trinchera/about",
      public_id: "about2",
      resource_type: "image",
      overwrite: true,
    });
    console.log("✅ Imagen subida exitosamente!");
    console.log("🔗 URL:", result.secure_url);
    console.log("📊 Public ID:", result.public_id);
  } catch (error) {
    console.error("❌ Error al subir la imagen:", error.message);
  }
}

uploadAbout2Image();

