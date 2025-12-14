import { useState, useEffect } from "react";

export function useAppointments() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(items));
  }, [items]);

  const add = (appointment) => {
    setItems([...items, { id: crypto.randomUUID(), status: "pendiente", ...appointment }]);
  };

  const updateStatus = (id, status) => {
    setItems(items.map((it) => (it.id === id ? { ...it, status } : it)));
  };

  return { items, add, updateStatus };
}
  