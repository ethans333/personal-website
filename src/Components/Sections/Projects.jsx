import link from "../../assets/Images/link-solid.svg";
import TwoFourTreeImage from "../../assets/Images/Projects/2-3-4-tree-insertion-stage-1.svg.png";
import NeuralNetworkImage from "../../assets/Images/Projects/nnw.png";
import SoundCloudTerminalImage from "../../assets/Images/Projects/scterminal.png";
import TetrisJsImage from "../../assets/Images/Projects/tetrisjs.png";
import PizzaCatImage from "../../assets/Images/Projects/pizzacat.png";
import RandomDungeonImage from "../../assets/Images/Projects/dungeon.png";

export default function Projects() {
  return (
    <div>
      <h3 className="section-header">Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Two Four Tree */}
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={TwoFourTreeImage} />
          </div>
          <div className="flex">
            <p className="contact-title">Two Four Tree</p>
            <a
              className="contact-link"
              href="https://github.com/ethans333/Two-Three-Four-Tree"
              target="_blank"
            >
              <img className="contact-icon" src={link} alt="Email Icon" />
            </a>
          </div>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        {/* Neural Network From Scratch */}
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={NeuralNetworkImage} />
          </div>
          <div className="flex">
            <p className="contact-title">Neural Network From Scratch</p>
            <a
              className="contact-link"
              href="https://github.com/ethans333/MachineLearning/blob/main/Deep%20Learning/Neural%20Network%20From%20Scratch.ipynb"
              target="_blank"
            >
              <img className="contact-icon" src={link} />
            </a>
          </div>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        {/* Pizza Cat */}
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={PizzaCatImage} />
          </div>
          <div className="flex">
            <p className="contact-title">Pizza Cat</p>
            <a
              className="contact-link"
              href="https://github.com/ethans333/PizzaCat"
              target="_blank"
            >
              <img className="contact-icon" src={link} alt="Email Icon" />
            </a>
          </div>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        {/* Soundcloud Terminal */}
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={SoundCloudTerminalImage} />
          </div>
          <div className="flex">
            <p className="contact-title">SoundCloud Terminal</p>
            <a
              className="contact-link"
              href="https://github.com/ethans333/soundcloudTerminal"
              target="_blank"
            >
              <img className="contact-icon" src={link} />
            </a>
          </div>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        {/* Random Dungeon Generator */}
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={RandomDungeonImage} />
          </div>
          <div className="flex">
            <p className="contact-title">Random Dungeon Generator</p>
            <a
              className="contact-link"
              href="https://github.com/ethans333/dungeonGenerator"
              target="_blank"
            >
              <img className="contact-icon" src={link} alt="Email Icon" />
            </a>
          </div>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        {/* Tetris JS */}
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={TetrisJsImage} />
          </div>
          <div className="flex">
            <p className="contact-title">Tetris.js</p>
            <a
              className="contact-link"
              href="https://github.com/ethans333/tetrisJS/tree/main"
              target="_blank"
            >
              <img className="contact-icon" src={link} />
            </a>
          </div>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
      </div>
    </div>
  );
}
