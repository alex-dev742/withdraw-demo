import React from "react";

export default function Withdraw() {
  return (
    <section className="bg-zinc-800 text-white min-h-screen p-20">
      <h1 className="text-2xl font-bold mb-4">Daan Pretorius</h1>

      <div className="">
        <h2 className="text-xl font-bold mb-2">Deposit</h2>

        <div className="mb-4">
          <p className="font-bold">Withdrawable:</p>
          <p>R0.00</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">Bonus Balance:</p>
          <p>R0.00</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">Promo Balance:</p>
          <p>R0.00</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Latest Deposit Methods</h2>
          <div className="flex space-x-4">
            <img src="/bluvoucher.webp" alt="Voucher" className="h-12" />
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-bold mb-4">Payment Methods</h2>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>
            <img src="/ozow.webp" alt="Ozow" className="h-12" />
          </div>
          <div>
            <img src="/bluvoucher.webp" alt="BluVoucher" className="h-12" />
          </div>
          <div>
            <img src="/1voucher.webp" alt="1Voucher" className="h-12" />
          </div>
          <div>
            <img src="/easyload.webp" alt="Easyload" className="h-12" />
          </div>
          <div>
            <img src="/dpovisa.webp" alt="DPO by Visa" className="h-12" />
          </div>
          <div>
            <img src="/dpozapper.webp" alt="DPO Zapper" className="h-12" />
          </div>
          <div>
            <img src="/dposnapscan.webp" alt="DPO Snapscan" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
