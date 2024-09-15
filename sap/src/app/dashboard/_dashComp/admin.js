import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const API_BASE_URL = "http://localhost:3000/api";

const Dashboard = () => {
  const [apartments, setApartments] = useState([]);
  const [cashFlows, setCashFlows] = useState([]);
  const [individuals, setIndividuals] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [apartmentFilter, setApartmentFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endpoints = [
          `${API_BASE_URL}/dash/apartmentReview`,
          `${API_BASE_URL}/dash/cashFlow`,
          `${API_BASE_URL}/dash/personalDetails`,
          `${API_BASE_URL}/dash/inventory`,
        ];

        const responses = await Promise.all(
          endpoints.map(async (endpoint) => {
            const response = await fetch(endpoint);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(`Data from ${endpoint}:`, data);
            return data.data || []; // Extract the data array from the response
          })
        );

        const [apartmentsData, cashFlowsData, individualsData, inventoryData] =
          responses;

        setApartments(apartmentsData);
        setCashFlows(cashFlowsData);
        setIndividuals(individualsData);
        setInventory(inventoryData);
      } catch (err) {
        setError(`Failed to fetch data: ${err.message}`);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredApartments = apartments.filter((apt) => {
    if (apartmentFilter === "all") return true;
    if (apartmentFilter === "assigned") return apt.assigned;
    if (apartmentFilter === "unassigned") return !apt.assigned;
    return true;
  });

  const filteredIndividuals = individuals.filter(
    (individual) =>
      individual.names?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      individual.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
  const totalCashInflow = cashFlows
    .filter((cf) => cf.flow_type === "income")
    .reduce((sum, cf) => sum + cf.amount, 0);
  const totalCashOutflow = cashFlows
    .filter((cf) => cf.flow_type === "expense")
    .reduce((sum, cf) => sum + cf.amount, 0);
  const totalInventoryCount = inventory.reduce(
    (sum, item) => sum + (item.count || 0),
    0
  );

  const inventoryChartData = inventory.map((item) => ({
    name: item.item,
    count: item.count || 0,
  }));

  const apartmentTypeData = apartments.reduce((acc, apt) => {
    acc[apt.type] = (acc[apt.type] || 0) + 1;
    return acc;
  }, {});

  const apartmentTypePieData = Object.entries(apartmentTypeData).map(
    ([type, count]) => ({
      name: type,
      value: count,
    })
  );

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">
        Apartment Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Occupancy Rate</h2>
          <p className="text-3xl font-bold text-blue-600">{occupancyRate}%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Total Monthly Rent</h2>
          <p className="text-3xl font-bold text-green-600">
            ${totalRent.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Total Apartments</h2>
          <p className="text-3xl font-bold text-purple-600">
            {apartments.length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Total Inventory Items</h2>
          <p className="text-3xl font-bold text-orange-600">
            {totalInventoryCount}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Inventory Overview</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Apartment Types</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={apartmentTypePieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {apartmentTypePieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Apartment Management</h2>
          <select
            value={apartmentFilter}
            onChange={(e) => setApartmentFilter(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="all">All Apartments</option>
            <option value="assigned">Assigned</option>
            <option value="unassigned">Unassigned</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Apartment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rent (Monthly)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Occupants
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parking Spaces
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApartments.map((apt) => (
                <tr key={apt.apartment}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {apt.apartment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {apt.assigned ? "Assigned" : "Unassigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{apt.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${apt["rent_amount/monthly"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {apt.num_people}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {apt.parking_spaces}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{apt.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-4">Resident Search</h2>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Apartment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parking Pass
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredIndividuals.map((individual) => (
                <tr key={individual.ID}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {individual.names}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {individual.apartment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {individual.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {individual.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {individual.parking_pass ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Cash Flow</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Apartment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cashFlows.slice(0, 10).map((cf, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{cf.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cf.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${cf.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cf.flow_type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cf.apartment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
