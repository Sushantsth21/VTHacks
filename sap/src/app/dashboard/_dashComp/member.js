import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:3000/api";

const MemberDashboard = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/dash/apartmentReview`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApartments(data.data || []);
      } catch (err) {
        setError(`Failed to fetch data: ${err.message}`);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const occupancyRate =
    apartments.length > 0
      ? (
          (apartments.filter((apt) => apt.assigned).length /
            apartments.length) *
          100
        ).toFixed(2)
      : 0;

  const totalRent = apartments.reduce(
    (sum, apt) => sum + (apt["rent_amount/monthly"] || 0),
    0
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Member Dashboard</h1>
      <div className="mb-4">
        <h2 className="font-semibold">Occupancy Rate: {occupancyRate}%</h2>
        <h2 className="font-semibold">
          Total Rent: ${totalRent.toLocaleString()}
        </h2>
      </div>

      <h2 className="text-xl font-bold mb-2">Assigned Apartments</h2>
      {apartments.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Apartment</th>
              <th className="border border-gray-300 p-2">Rent (Monthly)</th>
              <th className="border border-gray-300 p-2">Occupants</th>
            </tr>
          </thead>
          <tbody>
            {apartments
              .filter((apt) => apt.assigned) // Only show assigned apartments
              .map((apt, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="border border-gray-300 p-2">
                    {apt.apartment}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${apt["rent_amount/monthly"]}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {apt.num_people}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>No assigned apartments found.</p>
      )}
    </div>
  );
};

export default MemberDashboard;
