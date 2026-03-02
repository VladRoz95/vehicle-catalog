import VehicleCard from "./VehicleCard";
import "../styles/VehicleList.css";

export default function VehicleList({ vehicles }) {
  return (
    <div className="vehicles_list">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} {...v} />
      ))}
    </div>
  );
}
