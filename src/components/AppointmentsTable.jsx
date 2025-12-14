export default function AppointmentsTable({ items, onUpdate }) {
  return (
    <div className="appointments-container">
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.id}>
              <td>{it.name}</td>
              <td>{it.email}</td>
              <td>{it.phone}</td>
              <td>{it.date}</td>
              <td>
                <span className={`badge ${it.status}`}>{it.status}</span>
              </td>
              <td>
                <button onClick={() => onUpdate(it.id, "confirmada")}>Confirmar</button>
                <button onClick={() => onUpdate(it.id, "cancelada")}>Cancelar</button>
                <button onClick={() => onUpdate(it.id, "reasignada")}>Reasignar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
