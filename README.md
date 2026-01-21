# Recobro  Dashboard multi-tenant (Next.js)

Proyecto de ejemplo para un dashboard SaaS multi-tenant construido con Next.js (App Router). Contiene separación clara entre componentes Server/Client, datos mock organizados por tenant y una pequeña capa de servicios/repositiorios.

## Instalación y ejecución

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en desarrollo:

```bash
npm run dev
```

3. Ejecutar tets (si están configurados):

```bash
npm test
```

----

**1. Decisiones técnicas clave**

- **Seperación de capas:** `domain` (modelos, lógica pura), `infrastructure` (repositiorios, mappers), `app` (rutas y components). Esto facilita sustituir mocks por una BD real.
- **Patrón aplicado:** Domain vs Infrastructure (separación dominio / infraestructura) para aislar responsabilidades entre capas.
- **Datos mock:** Array en memoria (`MockProjectRepository`) para simplicidad y fácil migración.

**2. Cómo resolviste el multi-tenant**

- El tenant se extrae de la URL mediante carpetas dinámicas (`/[tenant]/*`).
- Todos los accesos a datos reciben `tenantId` y los repositorios filtran por ese campo para evitar mezclar datos entre tenants.
- Los servicios validan pertenencia (por ejemplo, `getById(id, tenantId)` devuelve `null` si no coincide).

**3. Cómo separaste Server / Client**

- **Server Components:** páginas y componentes que hacen fetching y renderizado inicial (resuelven tenant y obtienen datos desde servicios).
- **Client Components:** componentes con interacciones (filtros, toggles, estados locales) marcados con "use client" y sin fetching directo.

**4. Qué mejorarías con más tiempo**

- Añadir integración real con una base de datos (Postgres) y migraciones.
- Implementar autenticación y autorización por tenant.
- Añadir pruebas E2E y más tets unitarios para servicios y mappers.

**5. Qué conscientemente dejaste fuera**

- Persistencia real: datos son mock en memoria intencinalmente para simplificar el ejercicio.
- No implementé autenticación ni gestión de usuarios por falta de alcance.
- Diseño y estilos avanzados (se priorizó funcionalidad y arquitectura).
- Test unitarios para la UI

