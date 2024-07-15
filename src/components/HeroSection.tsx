export default function HeroSection() {
  return (
    <>
      <div className="relative w-full h-[900px]">
        <div className="w-full h-full bg-banner bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full flex flex-col gap-y-4 items-center justify-center">
          <h1 className="text-8xl text-white">AZ Trading</h1>
          <h2 className="text-white">Any Where any Time <br></br>Lorem ipsum dolor sit amet consectetur. Cursus <br></br>facilisis aenean mattis aenean nunc</h2>
        </div>
      </div>
    </>
  );
}
