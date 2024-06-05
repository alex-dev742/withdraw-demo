import React from "react";
import Link from "next/link";

export default function Withdraw() {
  return (
    <section className="bg-zinc-800 text-white min-h-screen p-20">
      <h1 className="text-2xl font-bold mb-4">Demo User</h1>

      <div className="">
        <h2 className="text-xl font-bold mb-2">Withdraw</h2>

        <div className="mb-4">
          <p className="font-bold">Withdrawable:</p>
          <p>R10000.00</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">Bonus Balance:</p>
          <p>R100.00</p>
        </div>

        <div className="mb-4">
          <p className="font-bold">Promo Balance:</p>
          <p>R10000.00</p>
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-bold mb-2">Withdraw Methods</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Link href="/ozow-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/ozow.webp" alt="Ozow" className="h-12" />
            </div>
          </Link>
          <Link href="/bluvoucher-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/bluvoucher.webp" alt="BluVoucher" className="h-12" />
            </div>
          </Link>
          <Link href="/1voucher-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/1voucher.webp" alt="1Voucher" className="h-12" />
            </div>
          </Link>
          <Link href="/easyload-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/easyload.webp" alt="Easyload" className="h-12" />
            </div>
          </Link>
          <Link href="/dpovisa-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/dpovisa.webp" alt="DPO by Visa" className="h-12" />
            </div>
          </Link>
          <Link href="/dpozapper-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/dpozapper.webp" alt="DPO Zapper" className="h-12" />
            </div>
          </Link>
          <Link href="/dposnapscan-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img
                src="/dposnapscan.webp"
                alt="DPO Snapscan"
                className="h-12"
              />
            </div>
          </Link>
          <Link href="/celbux-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/celbux.png" alt="Celbux" className="h-12" />
            </div>
          </Link>
          <Link href="/blubux-withdraw">
            <div className="p-4 bg-zinc-700 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-zinc-600">
              <img src="/blubux.png" alt="Blubux" className="h-12" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
