import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-zinc-800 text-white min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl mb-2 font-bold text-yellow-400">
            Welcome to Easybet
          </h1>
          <p className="text-xl mb-4">
            Experience the thrill of online betting with Easybet!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/withdraw">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500">
                Withdraw
              </button>
            </Link>
            <Link href="/deposit">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200">
                Deposit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
