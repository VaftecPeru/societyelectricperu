# Society Electric Perú — Web corporativa

Nueva web informativa desarrollada con ReactJS + Vite. La propuesta conserva la línea gráfica de Society Electric mediante el logo original, azul acero, gris técnico, fondos claros y oscuros, y fotografías históricas recuperadas del sitio anterior.

## Flujo de ramas
- `develop`: rama activa de desarrollo y validación.
- `main`: rama estable. No se fusiona `develop` sin autorización del titular.

## Arquitectura de navegación
- Inicio
- Nosotros
- Servicios
- Detalle dinámico de cada servicio
- Proyectos
- Sectores
- Contacto / cotización vía WhatsApp
- Página 404

## Stack
- React 19
- React Router
- Vite
- Lucide React
- CSS responsive sin framework visual pesado

## Calidad
```bash
npm install
npm run lint
npm run build
npm audit --omit=dev --audit-level=high
```

El repositorio incluye CI en GitHub Actions para ejecutar lint, build y auditoría de dependencias en `develop`, `main` y pull requests hacia `main`.

## Deploy en cPanel
1. Ejecutar `npm install` y `npm run build`.
2. Respaldar el `public_html` actual antes de reemplazar WordPress.
3. Subir el **contenido** de `dist/` a `public_html`.
4. Verificar que `.htaccess` también se haya copiado; permite recargar rutas internas de React Router.
5. Probar `/`, `/nosotros`, `/servicios`, un detalle de servicio y `/contacto` directamente desde el navegador.
6. Limpiar caché del navegador/CDN si aplica.

## Datos públicos configurados
- WhatsApp/teléfono: +51 912 257 315
- Correo: info@societyelectricperu.com
- Correo comercial de referencia: venta@societyelectricperu.com
- Dirección: Jr. José Pardo 130, Carabayllo, Lima, Perú

## Seguridad
No versionar `.env`, backups SQL, archivos WordPress, credenciales, llaves o información privada. Las fotografías necesarias para el frontend están optimizadas y guardadas dentro de `public/assets`.
