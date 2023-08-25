import heroImg from "../assets/images/illustration-intro.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="max-md:px-6 text-white text-center grid grid-cols-1 gap-6 pt-5 pb-12 z-10 relative"
    >
      <div className="max-w-xl w-full mx-auto">
        <img className="" src={heroImg} alt="hero" />
      </div>
      <div className="mx-auto flex flex-col items-center gap-6">
        <h1 className="text-2xl md:text-3xl font-bold max-w-lg">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="max-w-md text-gray-200">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        
        <Button className={"w-full"}>Get Started</Button>
        
      </div>
    </section>
  );
};

export default HeroSection;
