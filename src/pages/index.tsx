import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-black py-20">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-white text-6xl font-semibold">iPad Pro</h1>
          <p className="text-white text-4xl font-medium">Supercharged by</p>
          <div className="w-24 h-24 relative">
            <Image
              src="/m2-logo.png"
              alt="m2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <video className="-mt-28" autoPlay muted src="./bg-video.mp4"></video>
        <div>
          <p className="text-white text-3xl font-medium text-center w-[90%] max-w-3xl mx-auto -mt-28">
            Astonishing performance. Incredibly advanced displays. Superfast
            wireless connectivity. Next-level Apple Pencil capabilities.
            Powerful new features in iPadOS 16. The ultimate iPad experience.
          </p>
        </div>
      </section>
    </main>
  );
}
