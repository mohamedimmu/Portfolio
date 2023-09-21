export default function Home() {
  return (
    <div className="h-screen p-8">
      <p className="font-content text-3xl text-center pb-12 text-custom-black font-light">👋, my name is Imran and I am a Remote</p>
      <div className="flex flex-col-reverse  items-center justify-center peer ">
        <p className="peer text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[180px] text-center text-transparent text-outline hover:text-black cursor-pointer transition duration-500 linear w-fit h-fit leading-none">
          & Designer
        </p>
        <p className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[180px] text-center leading-none w-fit h-fit peer-hover:text-transparent peer-hover:text-outline transition duration-1000 linear">
          Web Developer
        </p>
      </div>
    </div>
  );
}
