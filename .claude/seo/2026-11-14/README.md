# Línea base SEO — 14 de noviembre de 2026

Exportaciones originales de Google Search Console de https://latrincheramexico.com,
proporcionadas por el usuario desde Descargas. No se modificaron los CSV.
No son datos de Analytics ni registros individuales de visitantes o formularios.
Esta carpeta está fuera de public/; no exponerla mediante rutas de la aplicación.

## Rendimiento: referencia principal

Carpeta: rendimiento/. Siete CSV; tipo de búsqueda Web; filtro «Últimos 3 meses».
Periodo real de Gráfico.csv: 12 de agosto a 11 de noviembre de 2026 (92 días).
Fecha de exportación: 14 de noviembre de 2026; no confundir con el cierre del periodo.

- Clics: 20.
- Impresiones: 3.204.
- CTR calculado: 0,6242 % (aproximadamente 0,62 %).
- Consultas exportadas: 195; URLs con métricas: 10; dispositivos: 3; países: 34.
- Aparición en búsquedas.csv contiene solo cabecera, sin registros.

Los totales se calcularon sumando el gráfico diario. No sumar todas las pestañas
entre sí: son desgloses del mismo informe. Los desgloses de consultas pueden no
reconciliar con el total debido a la información que Search Console omite.
La muestra de clics es pequeña: no atribuir causalidad a variaciones de CTR.

## Comparación futura

Exportar nuevamente el mismo tipo de búsqueda y los mismos filtros cuatro semanas
después de publicar la fase 1. Guardar en otra carpeta fechada, sin reemplazar esta.
Para comparar periodos equivalentes, considerar duración, fecha de publicación y
estacionalidad; no comparar cuatro semanas con tres meses solo por totales.
Registrar el commit y la fecha reales de publicación de fase 1 cuando se conozcan.
No cargar todos estos CSV automáticamente en Claude: abrir solo el desglose requerido.

## Diagnóstico de cobertura complementario

Carpeta: cobertura-rastreada-sin-indexar/. Tres CSV; informe
«Rastreada: actualmente sin indexar», todas las páginas conocidas; 68 ejemplos.
No representa todas las categorías de exclusión ni un listado completo del sitio.

Comprobación HTTP pública del 14 de noviembre de 2026:
- 37 rutas con nombres de apuestas, 29 URLs con ?p=, /darkkitchen/menu y /favicon.ico.
- Las primeras 67 terminan en 404; favicon.ico responde 200.
- Las 37 rutas de apuestas primero normalizan la barra final con 308 y terminan en 404.
- Las 66 URLs sospechosas tienen último rastreo de junio de 2025 en la exportación.

Estos datos concuerdan con el antecedente de spam compartido por el usuario;
no demuestran una infección activa ni garantizan el estado de otras URLs.
Las capturas de las otras categorías de Search Console no forman parte de estos CSV.

## Integridad

integridad.json registra el tamaño y SHA-256 de cada copia. Las diez copias se
verificaron contra los originales de Descargas. Conservar los archivos originales.
