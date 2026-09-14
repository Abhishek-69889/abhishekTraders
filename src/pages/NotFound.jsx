import { Link } from "react-router-dom";
import { Home, Phone } from "lucide-react";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-[#fafaf9] flex flex-col items-center justify-center px-6 text-center">

      {/* 404 Big Text */}
      <div className="relative ">
        <h1 className="text-9xl lg:text- font-black leading-none text-zinc-900 select-none">
          404
        </h1>
        <div className="absolute top-35 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mt-2">
          <div className="inline-flex items-center whitespace-nowrap gap-2 bg-orange-500 text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full">
            PAGE NOT FOUND
          </div>
        </div>
      </div>

      {/* Text */}
      <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 mt-10">
        Looks like you got lost.
      </h2>
      <p className="text-zinc-500 text- lg:text- mt-3 max-w-md leading-relaxed">
        The page you are looking for doesn't exist at Abhishek Traders.
        Go back to homepage.
      </p>

      {/* Logo Bottom */}
      <p className="mt-16 text- font-semibold tracking-[0.2em] text-zinc-400">
        ABHISHEK <span className="text-orange-500">TRADERS</span> • BUILDING MATERIALS
      </p>
    </div>
  );
};

export default NotFound;