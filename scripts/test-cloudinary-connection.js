const cloudinary = require("cloudinary").v2;

// Configurar Cloudinary
cloudinary.config({
  cloud_name: "dxbtafe9u",
  api_key: "478662978285762",
  api_secret: "GwE7M9uHmX89QwfjBXM1w9jxmpQ",
  secure: true,
});

// Función para probar la conexión
async function testConnection() {
  console.log("🔍 Probando conexión con Cloudinary...\n");

  try {
    // Probar la conexión obteniendo información de la cuenta
    const result = await cloudinary.api.ping();
    console.log("✅ Conexión exitosa!");
    console.log("📊 Estado:", result.status);
    console.log("⏰ Timestamp:", new Date(result.timestamp).toLocaleString());

    // Probar obteniendo información de la cuenta
    console.log("\n🔍 Obteniendo información de la cuenta...");
    const accountInfo = await cloudinary.api.account();
    console.log("✅ Información de cuenta obtenida:");
    console.log("📧 Email:", accountInfo.email);
    console.log("🏷️  Plan:", accountInfo.plan);
    console.log("📦 Subcuentas:", accountInfo.sub_accounts);

    // Probar listando recursos existentes
    console.log("\n📁 Listando recursos existentes...");
    const resources = await cloudinary.api.resources({
      type: "upload",
      max_results: 5,
    });

    console.log(`✅ Encontrados ${resources.total_count} recursos en total`);
    console.log("📋 Primeros 5 recursos:");
    resources.resources.forEach((resource, index) => {
      console.log(`  ${index + 1}. ${resource.public_id} (${resource.format})`);
    });

    console.log("\n🎉 ¡Conexión con Cloudinary funcionando perfectamente!");
    console.log("✅ Listo para subir imágenes");
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    console.error("🔧 Verifica tus credenciales:");
    console.error("   - Cloud Name: dxbtafe9u");
    console.error("   - API Key: 478662978285762");
    console.error("   - API Secret: GwE7M9uHmX89QwfjBXM1w9jxmpQ");
  }
}

// Ejecutar prueba
testConnection();
