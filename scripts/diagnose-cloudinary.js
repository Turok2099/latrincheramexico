const cloudinary = require("cloudinary").v2;

console.log("🔍 Diagnóstico de Cloudinary...\n");

// Mostrar configuración
console.log("📋 Configuración:");
console.log("Cloud Name:", "dxbtafe9u");
console.log("API Key:", "478662978285762");
console.log("API Secret:", "HIJ4OGwE7M9uHmX89QwfjBXM1w9jxmpQ");

// Configurar Cloudinary
cloudinary.config({
  cloud_name: "dxbtafe9u",
  api_key: "478662978285762",
  api_secret: "HIJ4OGwE7M9uHmX89QwfjBXM1w9jxmpQ",
  secure: true,
});

console.log("\n🔧 Configuración aplicada");

// Probar una operación simple
async function simpleTest() {
  try {
    console.log("\n🧪 Probando operación simple...");

    // Probar con una URL de prueba
    const testUrl =
      "https://res.cloudinary.com/dxbtafe9u/image/upload/v1/sample.jpg";
    console.log("URL de prueba:", testUrl);

    // Probar obteniendo información de una imagen de muestra
    const result = await cloudinary.api.resource("sample", {
      type: "upload",
    });

    console.log("✅ ¡Conexión exitosa!");
    console.log("📊 Imagen de muestra encontrada:", result.public_id);
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("🔍 Detalles del error:", error);

    // Probar con ping
    try {
      console.log("\n🔄 Probando ping...");
      const pingResult = await cloudinary.api.ping();
      console.log("✅ Ping exitoso:", pingResult);
    } catch (pingError) {
      console.error("❌ Ping falló:", pingError.message);
    }
  }
}

simpleTest();
