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
            The Two Four Tree project was a class written in Java implementing a
            Two Four Tree data structure. The project was a school assignment
            assigned for my Computer Science 2 class. The difficult of
            implementing this data structure rested in the sheer amount of
            boolean conditions needed for implementing all of its
            functionalities.
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
            The Neural Network From Scratch project is exactly what it sounds
            like, a neural network written in python from scratch. This project
            was implemented with the purpose to further broaden my skills in the
            area of machine learning and AI. I wanted to understand not just how
            to use them but how they worked under the hood, what math and code
            is utilized in order to implement these models.
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
            Is it a Pizza or is it a Cat? I don't know lets let a Random Forest
            Classifier decide. This project involves the user drawing one of two
            images, a Pizza or a Cat and has a model classify it as one or the
            other. I created this project in order to boraden my skills in the
            subject of AI and machine learning as well as see how I can compile
            and implement the models into a webpage.
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
            SoundCloud Terminal allows you to utilize the music streaming
            service from a terminal interface. Since SoundCloud didn't offer a
            sufficent API all data was fetch from SoundCloud's website using a
            JavaScript webscraper API. This project was created years ago and
            due to SoundCloud changing their HTML tag names, the program is
            likely no longer functional.
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
            Random Dungeon Generator was a project written in C#. How it works
            is simple: rooms are generated with a random size while clustered
            together, they are then pushed apart from each other and then
            connected via hallways. I created it with the intrigue of learning
            more about Unity and C#. The algorithm used is roughly based off of{" "}
            <a
              href="https://www.gamedeveloper.com/programming/procedural-dungeon-generation-algorithm"
              target="_blank"
              className="text-white underline"
            >
              this algorithm
            </a>
            .
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
            Tetris.js implements the famous game Tetris using vanilla
            Javascript. Rendering for the game was implemented using the HTML
            canvas element. Creating this game helped further improve my skills
            of JavaScript. If you want to try it out you can try it{" "}
            <a
              href="https://www.gamedeveloper.com/programming/procedural-dungeon-generation-algorithm"
              target="_blank"
              className="text-white underline"
            >
              here
            </a>
            . Although I will warn controls are only supported for keyboard and
            mouse.
          </p>
        </div>
      </div>
    </div>
  );
}
