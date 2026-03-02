export default function VehicleSearch({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search vehicles..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
