"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlubuxWithdraw() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    if (!amount) {
      toast.info("Please enter an amount", {});
    } else {
      // Check if the amount is valid (e.g., greater than 0)
      const parsedAmount = parseFloat(amount);
      if (parsedAmount > 0) {
        toast.success(
          `R${amount} has been withdrawn. Please check your phone for an SMS confirmation.`,
          {}
        );
        setAmount(""); // Reset the amount input field
      } else {
        toast.error(
          "Invalid amount. Please enter a valid amount greater than 0.",
          {}
        );
      }
    }
  };

  return (
    <section className="bg-zinc-800 text-zinc-200 pt-20">
      <div className="flex">
        <div className="w-1/5 px-10 py-5 bg-zinc-700 h-screen">
          <h1 className="text-xl font-bold mb-4">Demo User</h1>

          <div className="">
            <div className="mb-4">
              <p className="">Withdrawable:</p>
              <p className="text-yellow-400 font-bold text-xl">R10000.00</p>
            </div>

            <div className="mb-4">
              <p className="font-bold">Bonus Balance:</p>
              <p className="text-yellow-400 font-bold text-xl">R100.00</p>
            </div>

            <div className="mb-4">
              <p className="font-bold">Promo Balance:</p>
              <p className="text-yellow-400 font-bold text-xl">R10000.00</p>
            </div>
          </div>
        </div>

        <div className="w-4/5 px-10">
          <div className="border-b border-zinc-600 pb-2">
            <h2 className="text-xl font-bold mt-4 mb-2">Withdraw - Blubux</h2>
          </div>
          <div className="flex flex-col border-b border-zinc-600 pb-6 mt-6">
            <label htmlFor="amount" className="text-sm text-zinc-400 mb-1">
              Amount
            </label>
            <input
              id="amount"
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/2 px-4 py-2 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <label htmlFor="phone" className="text-sm text-zinc-400 mt-4 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              value="0827760381"
              className="w-1/2 px-4 py-2 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            className="px-6 w-1/2 py-2 mt-6 font-bold text-black bg-yellow-400 rounded-md hover:bg-yellow-500"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
