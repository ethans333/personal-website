import link from "../../assets/Images/link-solid.svg";
import FrontPage from "../../assets/Images/Projects/nptg/front-page.png";
import RFPSearch from "../../assets/Images/Projects/nptg/rfp-search.png";
import AboutPage from "../../assets/Images/Projects/nptg/about-page.png";
import ImageCarousel from "../ImageCarousel";

function WorkProjectContainer({ Images, Text, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
      <div className="lg:col-span-4">
        <ImageCarousel Images={Images} />
      </div>
      <div className="lg:col-span-3">
        <p className="workproject-title">{Text}</p>
        {children}
      </div>
    </div>
  );
}

export default function WorkProjects() {
  return (
    <div>
      <h3 className="section-header">Work Projects</h3>

      {/* Non Profit Tech Guide */}
      <WorkProjectContainer
        Images={[FrontPage, RFPSearch, AboutPage]}
        Text="Non Profit Tech Guide"
      >
        <p>
          Dolore non in veniam minim nisi ullamco nulla minim cupidatat ipsum
          est elit. Qui exercitation cillum tempor qui est magna elit aliqua
          irure. Eu nostrud ullamco mollit eiusmod do enim anim Lorem. Eiusmod
          reprehenderit sint sint aliqua tempor adipisicing dolor cupidatat
          veniam.
        </p>
        <p className="pt-4">
          Voluptate proident fugiat ut laboris. Nulla est mollit adipisicing
          anim incididunt id sunt do ut amet veniam sunt. Do ad tempor ipsum
          mollit voluptate. Aliqua nulla amet ex excepteur proident. Consectetur
          elit quis nostrud veniam aliquip sint voluptate nisi exercitation
          deserunt laborum in irure. Minim fugiat irure officia eiusmod sit
          dolor Lorem adipisicing cupidatat aute eu et.
        </p>
      </WorkProjectContainer>

      {/* Recap IQ */}
    </div>
  );
}
