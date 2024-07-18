export default function HeroSection() {
  return (
    <>
      <div className="relative sm:w-full sm:h-[900px] h-[500px] z-0">
        <div className="h-[500px] sm:w-full sm:h-full bg-banner bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 h-[500px] sm:w-full sm:h-full flex flex-col gap-y-4 items-center justify-center text-center">
          <h1 className="text-8xl text-white">AZ Trading</h1>
          <h2 className="text-white"></h2>
          <p className="text-white">Any Where any Time Lorem ipsum dolor sit amet consectetur. Cursus facilisis aenean mattis aenean nunc<br></br> Cursus facilisis aenean mattis aenean nunc Any Where any Time Lorem ipsum dolor sit amet consectetur.<br></br> Cursus facilisis aenean mattis aenean nunc</p>
        </div>
      </div>
    </>
  );
}
