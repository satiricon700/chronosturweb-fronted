import AppointmentForm from "../components/AppointmentForm";
import AppointmentsTable from "../components/AppointmentsTable";
import { useAppointments } from "../hooks/useAppointments";

export default function SchedulePage() {
    const { items, add, updateStatus } = useAppointments();

    return (
        <div>
            <h1>Agendar Turno</h1>
            <AppointmentForm onSubmit={add} />
            <h2>Mis Citas</h2>
            <AppointmentsTable items={items} onUpdate={updateStatus} />
        </div>
    );
}
