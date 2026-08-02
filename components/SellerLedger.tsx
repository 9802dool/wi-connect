"use client";

export default function SellerLedger() {
  const availableBalance = 950.0;
  const pendingTransactions = [
    { id: "1", date: "2026-08-01", description: "Sale: Wireless Headphones", amount: 1050.0, type: "SALE" },
    { id: "2", date: "2026-08-01", description: "Platform Fee (10%)", amount: -105.0, type: "FEE" },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold">Financial Overview</h2>
      <p className="mb-6 text-gray-500">
        Payouts are processed every Friday directly to your local bank account.
      </p>

      <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-green-800">
          Available for Payout
        </h3>
        <p className="mt-2 text-4xl font-bold text-green-900">${availableBalance.toFixed(2)} TTD</p>
      </div>

      <h3 className="mb-4 text-lg font-semibold">Recent Ledger Activity</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200 text-sm text-gray-500">
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3 text-right">Amount (TTD)</th>
            </tr>
          </thead>
          <tbody>
            {pendingTransactions.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-3 text-sm text-gray-600">{tx.date}</td>
                <td className="px-4 py-3 text-sm font-medium">{tx.description}</td>
                <td
                  className={`px-4 py-3 text-right font-semibold ${
                    tx.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.amount > 0 ? "+" : ""}
                  {tx.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
