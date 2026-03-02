import { useEffect, useState } from "react";
import { fetchVehicles } from "../services/api";
import VehicleSearch from "../components/VehicleSearch";
import VehicleList from "../components/VehicleList";
import "../styles/HomePage.css";

export default function HomePage() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchVehicles().then((data) => {
      const onlyVehicles = data.products.filter((v) =>
        v.tags.includes("vehicles"),
      );
      setVehicles(onlyVehicles);
    });
  }, []);

  const filteredVehicles = vehicles.filter((v) =>
    v.title.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <main className="home_page">
      <div>
        <h1>Cars</h1>
        <VehicleSearch value={search} onChange={setSearch} />
      </div>

      <VehicleList vehicles={filteredVehicles} />
    </main>
  );
}
