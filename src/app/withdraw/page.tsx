import React from "react";
import Link from "next/link";

export default function Withdraw() {
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

        <div className="w-4/5">
          <div className="border-b border-zinc-600 pb-2">
            <h2 className="text-xl ml-10 font-bold mt-4 mb-2 ">Withdraw</h2>
          </div>

          <h2 className="text-sm ml-10 font-bold mt-4 mb-2 ">
            Payment Methods
          </h2>
          <div className="grid grid-cols-3 m-10 gap-4 mt-6">
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
      </div>
    </section>
  );
}
