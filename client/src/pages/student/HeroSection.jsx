import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import learnX from "../../assets/learnX.jpg";

const HeroSection = () => {
  return (
    <div id='home'
      className="relative h-[500px] md:h-[600px]  bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${learnX})` }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

    
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center w-full max-w-2xl px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Find the best courses for you
          </h1>
          <p className="text-gray-200 dark:text-gray-400 text-lg mb-8">
            Discover, Learn, and UpSkill with a wide range of curated courses
          </p>

          {/* Search Form */}
          <form
            action=""
            className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
          >
            <Input
              type="text"
              placeholder="Search Courses"
              className="w-full sm:flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
           <Button className="w-full sm:w-auto bg-black text-white px-6 py-3 sm:rounded-r-full hover:bg-gray-500 dark:bg-white dark:text-black dark:hover:text-gray-400">
             Search
           </Button>
          </form>

          <Button className="bg-white dark:bg-gray-800 text-black rounded-full hover:bg-gray-400 px-6 py-3">
            Explore courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
