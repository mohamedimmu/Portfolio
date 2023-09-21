export default function Home() {
  return (
    <div className="flex flex-col-reverse  items-center justify-center h-screen peer">
      <p className="peer text-[180px] text-center text-transparent text-outline hover:text-black cursor-pointer transition duration-500 linear w-fit h-fit leading-none">
        & Designer
      </p>
      <p className="text-[180px] text-center leading-none w-fit h-fit peer-hover:text-transparent peer-hover:text-outline transition duration-1000 linear">
        Web Developer
      </p>
    </div>
  );
}
