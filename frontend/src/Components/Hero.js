import house from "../assets/house1.jpg";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={house}
          className="rounded-[28px] w-full object-cover shadow-xl"
        />
      </div>

      {/* TEXT */}
      <div className="space-y-6">
        <h1 className="text-[34px] md:text-[46px] leading-[1.1] font-bold text-[#FF9306]">
          Tibos Design and Build your Dream Home
        </h1>

        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
          Short text with details about you, what you do or your professional career.
        </p>

        <div className="flex gap-3 pt-2">
          <button className="bg-[#FF9306] px-5 py-2 text-sm font-semibold rounded-md hover:brightness-110 transition">
            Projects
          </button>
          <button className="border border-[#FF9306] px-5 py-2 text-sm rounded-md hover:bg-[#FF9306] hover:text-black transition">
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}