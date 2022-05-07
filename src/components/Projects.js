import stockTracker from "../assets/stock-tracker.PNG";
import guessingGame from "../assets/guessing-game.PNG";
import scientificCalculator3 from "../assets/scientific-calculator-2.PNG";
// import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 500, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__cards">
        {/* <Carousel breakPoints={breakPoints}> */}
        <div className="projects__card">
          <h3>Stock Tracker</h3>
          <img src={stockTracker} alt="A Stock Tracker" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://sagardeep1811.github.io/StocksApp/"
            target="_blank"
            className="button_projects"
          >
            Site
          </a>
          <a
            href="https://github.com/SagarDeep1811/StocksApp"
            target="_blank"
            className="button_projects"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Guessing Game</h3>
          <img src={guessingGame} alt="A Guessing Game" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://sagardeep1811.github.io/guessing-game/"
            target="_blank"
            className="button_projects"
          >
            Site
          </a>
          <a
            href="https://github.com/SagarDeep1811/guessing-game"
            target="_blank"
            className="button_projects"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Scientific Calculator</h3>
          <img src={scientificCalculator3} alt="Scientific Calculator" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consectetur facere neque assumenda quasi aliquid, perferendis
            ratione rerum dolorem.
          </p>

          <a
            href="https://sagardeep1811.github.io/scientific-calculator/"
            target="_blank"
            className="button_projects"
          >
            Site
          </a>
          <a
            href="https://github.com/SagarDeep1811/scientific-calculator"
            target="_blank"
            className="button_projects"
          >
            Code
          </a>
        </div>
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default Projects;
