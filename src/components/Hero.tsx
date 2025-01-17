import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 fade-in">
        Frontend Developer
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 fade-in">
        I craft responsive websites where technology meets creativity
      </p>
      <a 
        href="#about" 
        className="animate-bounce mt-8"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;