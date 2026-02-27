# 🧠 Todo Pro

Aplicación de gestión de tareas desarrollada con React + Vite y Redux Toolkit, utilizando estado normalizado mediante `createEntityAdapter`.

Este proyecto fue realizado como challenge técnico, aplicando buenas prácticas de arquitectura y manejo de estado escalable.

---

## 🚀 Demo

(Agregar aquí el link cuando esté deployado en GitHub Pages)

---

## 🛠️ Tecnologías utilizadas

- React
- Vite
- TypeScript
- Redux Toolkit
- React-Redux
- Entity Adapter (estado normalizado)

---

## 🧩 Arquitectura

La aplicación utiliza Redux Toolkit con `createEntityAdapter` para normalizar el estado de las tareas.

### ¿Por qué estado normalizado?
En lugar de almacenar un array simple, el estado se estructura como:

```ts
{
  ids: [],
  entities: {}
}

## Ventajas del estado normalizado:
- Acceso directo por ID (O(1))
- Mejor rendimiento en grandes volúmenes de datos
- Métodos automáticos como addOne, removeOne
- Selectores optimizados
- Mayor escalabilidad

## 📦 Funcionalidades

- Crear tarea
- Marcar como completada
- Desmarcar tarea
- Eliminar tarea
- Render dinámico con React
- Estado centralizado con Redux

## 🧪 Instalación local

### Clonar el repositorio:

git clone https://github.com/estefaniaMartin/todo-pro.git

### Instalar dependencias:

npm install

### Ejecutar entorno de desarrollo:

npm run dev

## 🌍 Deploy

###Build de producción:

npm run build

Preparado para deploy en GitHub Pages.


## 📌 Decisiones técnicas

- Se utilizó Vite por su rapidez y entorno moderno.
- Se eligió Redux Toolkit para simplificar configuración y reducir boilerplate.
- Se implementó createEntityAdapter para un manejo profesional y escalable del estado.
- Separación clara entre lógica de estado y UI.
- Código tipado con TypeScript.

## 📈 Posibles mejoras futuras

- Persistencia en localStorage
- Integración con API REST
- Filtros (tareas completadas / pendientes)
- Tests unitarios
- Manejo de async con createAsyncThunk

##👩‍💻 Autora

Desarrollado por ESTEFANIA MARTIN