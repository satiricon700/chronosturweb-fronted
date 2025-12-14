import { useState } from "react";
import "../Styles/form.css";

export default function AppointmentForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    // Fecha máxima: hoy + 1 año
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const maxDateStr = maxDate.toISOString().split("T")[0];

    // Validación nombre
    if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]{1,50}$/.test(form.name)) {
      newErrors.name = "Nombre inválido (solo letras, máx. 50 caracteres).";
    }

    // Validación correo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Correo electrónico inválido.";
    }

    // Validación teléfono
    if (!/^\d{7,10}$/.test(form.phone)) {
      newErrors.phone = "Teléfono inválido (7 a 10 dígitos).";
    }

    // Validación fecha
    if (!form.date || form.date < today) {
      newErrors.date = "La fecha no puede ser anterior a hoy.";
    } else if (form.date > maxDateStr) {
      newErrors.date = "La fecha no puede superar un año desde hoy.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit(form);
    setForm({ name: "", email: "", phone: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Correo
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Correo"
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Teléfono
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </label>

      <label>
        Fecha
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </label>

      <button type="submit">Agendar</button>
    </form>
  );
}
