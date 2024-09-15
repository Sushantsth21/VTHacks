"use client";

import { useState, useEffect } from "react";

export default function InvoiceAnalysis() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalysis();
  }, []);

  const fetchAnalysis = async () => {
    try {
      const response = await fetch("localhost:3000/api/invoiceAnalysis");
      if (!response.ok) {
        throw new Error("Failed to fetch analysis");
      }
      const result = await response.json();
      setAnalysis(result.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Invoice Analysis</h1>
      {analysis && (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-semibold">Q1</h2>
              <p>{analysis.q1.toFixed(2)}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-semibold">Q3</h2>
              <p>{analysis.q3.toFixed(2)}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-semibold">IQR</h2>
              <p>{analysis.iqr.toFixed(2)}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-semibold">Lower Bound</h2>
              <p>{analysis.lowerBound.toFixed(2)}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-semibold">Upper Bound</h2>
              <p>{analysis.upperBound.toFixed(2)}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2">Flagged Transactions</h2>
          {analysis.flaggedTransactions.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Invoice Number</th>
                  <th className="border border-gray-300 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {analysis.flaggedTransactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="border border-gray-300 p-2">
                      {transaction.invoice_number}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {transaction.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No transactions flagged for fraud.</p>
          )}
        </div>
      )}
    </div>
  );
}
