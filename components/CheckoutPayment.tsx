"use client";

import { useState } from "react";

export default function CheckoutPayment() {
  const [paymentMethod, setPaymentMethod] = useState("BANK_TRANSFER");
  const [bankReference, setBankReference] = useState("");

  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold">Payment Method</h3>
      <div className="space-y-4">
        <label className="flex cursor-pointer items-start space-x-3 rounded-md border p-4 hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="BANK_TRANSFER"
            checked={paymentMethod === "BANK_TRANSFER"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1"
          />
          <div>
            <p className="font-medium">Online Bank Transfer (Free)</p>
            <p className="text-sm text-gray-500">Transfer directly from your bank to ours.</p>
          </div>
        </label>

        {paymentMethod === "BANK_TRANSFER" && (
          <div className="ml-8 rounded-md bg-blue-50 p-4 text-sm text-blue-900">
            <p className="mb-2 font-semibold">Transfer Instructions:</p>
            <p>Bank: Republic Bank Limited</p>
            <p>Account Name: Wi Connect Ltd</p>
            <p>Account Number: 123456789012</p>
            <div className="mt-4">
              <label className="mb-1 block text-xs font-semibold">
                Enter Bank Reference Number after transfer:
              </label>
              <input
                type="text"
                placeholder="e.g. 987654321"
                value={bankReference}
                onChange={(e) => setBankReference(e.target.value)}
                className="w-full rounded border p-2"
              />
            </div>
          </div>
        )}

        <label className="flex cursor-pointer items-start space-x-3 rounded-md border p-4 hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={paymentMethod === "COD"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1"
          />
          <div>
            <p className="font-medium">Cash/Linx on Delivery</p>
            <p className="text-sm text-gray-500">Pay the courier at your door. (+ $35 TTD Delivery Fee)</p>
          </div>
        </label>

        <label className="flex cursor-pointer items-start space-x-3 rounded-md border p-4 hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="PAYWISE"
            checked={paymentMethod === "PAYWISE"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1"
          />
          <div>
            <p className="font-medium">PayWise (NLCB Lotto Booth or Credit Card)</p>
            <p className="text-sm text-gray-500">
              Pay with physical cash at any Lotto booth, or securely online.
            </p>
          </div>
        </label>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-full bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
}
