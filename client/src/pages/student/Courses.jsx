import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import Course from "./Course";

const courses = [1, 2, 3, 4, 5, 6];

const Courses = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 25 },
      },
    },
  });

  useEffect(() => {
    let interval;
    if (slider) {
      interval = setInterval(() => {
        slider.current.next();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section id="courses" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of carefully curated courses that help you skill up fast and affordably.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {courses.map((course, index) => (
            <div className="keen-slider__slide overflow-visible h-auto" key={index}>
              <Course />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
