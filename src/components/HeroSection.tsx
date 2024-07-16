export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-[900px] z-0">
        <div className="w-full h-full bg-banner bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full flex flex-col gap-y-4 items-center justify-center text-center">
          <h1 className="text-8xl text-white">AZ Trading</h1>
          <h2 className="text-white"></h2>
          <p className="text-white">Any Where any Time Lorem ipsum dolor sit amet consectetur. Cursus facilisis aenean mattis aenean nunc<br></br> Cursus facilisis aenean mattis aenean nunc Any Where any Time Lorem ipsum dolor sit amet consectetur.<br></br> Cursus facilisis aenean mattis aenean nunc</p>
        </div>
      </div>
    </>
  );
}
