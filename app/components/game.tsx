import AnimationComponent from "./animation-component";
import GameSlide from "./game-slide";
 
const GameSection = () => { 
  return (
    <section id="community" className="sm:min-h-screen bg-white py-20 flex flex-col justify-between px-4 sm:px-0">
      <div className="container mx-auto text-[25px] text-primary ">
        <AnimationComponent className="mb-8">
          <p className="text-[25px] sm:text-[45px] font-bold ">Exclusive Game Content</p>
          <p className="line-clamp-3  text-[20px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
        </AnimationComponent>
      </div>
      <GameSlide/>
    </section>
  );
};

 
export default GameSection;
