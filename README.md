ChronosturWeb Frontend

Aplicación web para la gestión de citas y turnos de clientes. Permite agendar, visualizar y administrar citas con validaciones y persistencia en localStorage.

Características principales:
- Formulario de agendamiento con validaciones:
  - Nombre (solo letras, máximo 50 caracteres).
  - Correo electrónico válido.
  - Teléfono (7 a 10 dígitos).
  - Fecha (no anterior a hoy ni posterior a un año).
- Tabla de citas con acciones:
  - Confirmar.
  - Cancelar.
  - Reasignar.
- Persistencia en localStorage: las citas se mantienen al recargar la página.
- Navegación con React Router:
  - /agendar: vista para crear citas.
  - /gestionar: vista para administrar citas.
- Estilos consistentes con badges de estado y diseño centrado.

Tecnologías utilizadas:
- React 18
- React Router
- localStorage
- TailwindCSS (opcional si se usó)
- Hooks personalizados (useAppointments)

Estructura del proyecto:
src/
components/
  AppointmentForm.jsx
  AppointmentsTable.jsx
hooks/
  useAppointments.js
pages/
  SchedulePage.jsx
  ManagePage.jsx
App.jsx
index.js

Instalación y ejecución:
1. Clonar el repositorio:
   git clone https://github.com/tuusuario/chronosturweb-fronted.git
   cd chronosturweb-fronted

2. Instalar dependencias:
   npm install

3. Ejecutar en modo desarrollo:
   npm start

4. Abrir en el navegador:
   http://localhost:3000



Autor:
Proyecto desarrollado por David hernandez viloria para la evidencia componente fronted 
--