"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function PointOfSale() {
  const [amount, setAmount] = useState<string>("");

  const handleTransaction = (type: "pay" | "withdraw") => {
    if (!amount) {
      toast.info("Please enter an amount", {});
    } else {
      // Check if the amount is valid (e.g., greater than 0)
      const parsedAmount = parseFloat(amount);
      if (parsedAmount > 0) {
        toast.success("Success", {});
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
    <section className="bg-zinc-800 text-zinc-200 pt-20 h-screen">
      <div className="px-10">
        <div className="border-b border-zinc-600 pb-2 flex items-center">
          <Image
            src="/shopright.png"
            alt="Shopright logo"
            width={40}
            height={40}
            className="mr-2 rounded"
          />
          <h2 className="text-xl font-bold mt-4 mb-2">
            Point of Sale - Shopright
          </h2>
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
        <div className="flex space-x-4">
          <button
            className="px-6 w-1/2 py-2 mt-6 font-bold text-black bg-yellow-400 rounded-md hover:bg-yellow-500"
            onClick={() => handleTransaction("pay")}
          >
            Pay
          </button>
          <button
            className="px-6 w-1/2 py-2 mt-6 font-bold text-black bg-yellow-400 rounded-md hover:bg-yellow-500"
            onClick={() => handleTransaction("withdraw")}
          >
            Withdraw
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
