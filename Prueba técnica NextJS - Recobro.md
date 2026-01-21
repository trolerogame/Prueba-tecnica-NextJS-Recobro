# **Prueba técnica NextJS \- Recobro**

Evaluar tu capacidad para construir una aplicación Next.js (App Router) con:

* Separación clara entre Server y Client Components

* Arquitectura multi-tenant

* Desacoplamiento entre UI, lógica y datos

* Uso razonable de patrones de diseño

* Organización de carpetas escalable

* Buen criterio técnico (más importante que el resultado final)

**No buscamos perfección. Buscamos buenas decisiones.**

## **Contexto**

Estás construyendo un **dashboard SaaS multi-tenant** para gestionar proyectos.

Cada organización (**tenant**) tiene:

* Un nombre

* Una lista de proyectos

Importante: los datos de un tenant **no deben mezclarse** con los de otro.

##  **Requisitos funcionales**

### **1\. Multi-tenant (obligatorio)**

* El tenant se obtiene desde la URL:

/\[tenant\]/dashboard

/\[tenant\]/projects

/\[tenant\]/projects/\[id\]

**Ejemplos:**

/acme/dashboard

/umbrella/projects

📌 **Importante**

Aunque los datos sean mock, deben estar **aislados por tenant**.

### **2\. Páginas requeridas**

#### **/\[tenant\]/dashboard**

* Mostrar el nombre del tenant

* Mostrar número total de proyectos

#### **/\[tenant\]/projects**

* Listar proyectos del tenant

* Cada proyecto tiene:

  * id

  * nombre

  * estado (active / archived)

#### **/\[tenant\]/projects/\[id\]**

* Mostrar detalle de un proyecto

* Validar que el proyecto pertenece al tenant

### **2\. Server vs Client Components**

* **Server Components**

  * Fetching de datos

  * Resolución del tenant

* **Client Components**

  * Interacciones

  * Estado UI (filtros simples, botones, etc.)

🚫 Evita:

* "use client" en páginas completas sin justificación

* Fetching de datos directamente en Client Components

## **🧱 Requisitos arquitectónicos**

### **📁 Organización de carpetas**

No hay una única forma correcta, pero se espera **intención y coherencia**.

Ejemplo de referencia (no obligatorio):

![][image1]

### **2\. Datos (mock)**

	•	Puedes usar:

	•	Archivos .ts

	•	Datos en memoria

	•	Debe ser fácil cambiar a una base de datos real en el futuro

### **3\. Patrones de diseño:**

Se espera al menos **un patrón bien aplicado**, por ejemplo:

* Service / Repository

* Separación dominio vs infraestructura

* Funciones puras para lógica

##  **Deploy (OBLIGATORIO)**

###  **GitHub**

* Repositorio público

* Commits claros (no un solo “final commit”)

* README en el repositorio

###  **Netlify**

* La aplicación debe estar **deployada y accesible**

* Usar build estándar de Next.js

* La URL debe funcionar para **varios tenants**

📌 No se evalúa estética.

Sí se evalúa que **funcione fuera de localhost**.

## **📝 README (muy importante)**

Incluye un README con:

1. Decisiones técnicas clave

2. Cómo resolviste el multi-tenant

3. Cómo separaste Server / Client

4. Qué mejorarías con más tiempo

5. Qué conscientemente **dejaste fuera**

📌 No buscamos texto largo. Buscamos **claridad de pensamiento**.