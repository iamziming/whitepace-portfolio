import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-dark bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat text-white pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Get More Done with <span className="relative">whitepace</span>
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-lg mx-auto md:mx-0">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
          </p>
          <button className="bg-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-white flex items-center gap-2 mx-auto md:mx-0">
            Try Whitepace free
            <span>→</span>
          </button>
        </div>

        {/* Right Side: The Illustration */}
        <div className="flex-1 w-full flex justify-center items-center relative">
          {/* Make sure you saved your Figma export as:
             public/images/hero-illustration.png 
          */}
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              src="/images/hero-illustration.png"
              alt="Whitepace Dashboard Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}