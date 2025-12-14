import { useAppointments } from "../hooks/useAppointments";
import AppointmentsTable from "../components/AppointmentsTable";

export default function ManagePage() {
  const { items, updateStatus } = useAppointments();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Gestionar Citas</h1>
      <AppointmentsTable items={items} onUpdate={updateStatus} />
    </div>
  );
}
