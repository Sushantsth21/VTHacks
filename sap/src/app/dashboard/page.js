import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

const DashboardPage = () => {
  return (
    <div className="bg-gray-100 ">
      <Header />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat cards */}
          <StatCard title="Total Revenue" value="$45,385" change={12.5} />
          <StatCard title="New Users" value="2,340" change={14.6} />
          <StatCard title="Active Sessions" value="5,355" change={32.9} />
          <StatCard title="Conversion Rate" value="3.25%" change={-2.7} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Charts placeholder */}
          <ChartPlaceholder title="Sales Overview" />
          <ChartPlaceholder title="Top Products" />
        </div>

        <div className="mt-8">
          {/* Recent transactions table */}
          <RecentTransactions />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const StatCard = ({ title, value, change }) => {
  const changeColor = change >= 0 ? "text-green-600" : "text-red-600";
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {/* Icon placeholder */}
            <div className="h-10 w-10 rounded-full bg-indigo-500"></div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <span className={`font-medium ${changeColor}`}>
            {change > 0 ? "+" : ""}
            {change}%
          </span>
          <span className="text-gray-500"> from last month</span>
        </div>
      </div>
    </div>
  );
};

const ChartPlaceholder = ({ title }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
        <p className="text-gray-500">Chart placeholder</p>
      </div>
    </div>
  );
};

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      name: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "Completed",
    },
    {
      id: 2,
      name: "Payment refund to #00910",
      date: "Apr 23, 2021",
      amount: "-$670",
      status: "Completed",
    },
    {
      id: 3,
      name: "Payment failed from #087651",
      date: "Apr 18, 2021",
      amount: "$234",
      status: "Cancelled",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">
          Recent Transactions
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
