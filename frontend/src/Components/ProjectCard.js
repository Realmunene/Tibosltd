import img from "../assets/house2.jpg";

export default function ProjectCard() {
  return (
    <div className="group">

      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden rounded-xl">

        <img
          src={img}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* ARROW ICONS (top corners like your design) */}
        <div className="absolute top-2 left-2 text-[#FF9306] opacity-0 group-hover:opacity-100 transition">
          ↖
        </div>
        <div className="absolute top-2 right-2 text-[#FF9306] opacity-0 group-hover:opacity-100 transition">
          ↗
        </div>

      </div>

      {/* LABEL */}
      <p className="text-center text-[11px] text-[#FF9306] mt-2 tracking-wide">
        AREA, TOWN
      </p>
    </div>
  );
}