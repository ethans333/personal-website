import link from "../../assets/Images/link-solid.svg";
import FrontPage from "../../assets/Images/Projects/nptg/front-page.png";
import RFPSearch from "../../assets/Images/Projects/nptg/rfp-search.png";
import AboutPage from "../../assets/Images/Projects/nptg/about-page.png";

import riqFrontPage from "../../assets/Images/Projects/recapiq/homepage.png";
import riqShowcase from "../../assets/Images/Projects/recapiq/showcase.png";

import ImageCarousel from "../ImageCarousel";

function WorkProjectContainer({
  Images,
  Text,
  children,
  BottomSpacing = true,
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-7 gap-10 ${
        BottomSpacing && "mb-10 lg:mb-32"
      }`}
    >
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
          Non Profit Tech Guide is a project that I developed for my workplace.
          It provides a platform for non-profit legal firms to connect with
          businesses and independent contractors for sharing their requests for
          proposals (RFPs).
        </p>
        <p className="pt-4">
          The key features of this application include an RFP search area,
          several user pages, and an admin area. The development stack for this
          project utilizes React for the front end and various AWS services for
          the backend. The backend comprises various lambda functions, along
          with DynamoDB tables for storing data, such as RFPs and user
          information.
        </p>
      </WorkProjectContainer>

      {/* Recap IQ */}
      <WorkProjectContainer
        Images={[riqShowcase, riqFrontPage]}
        Text="Recap IQ"
      >
        <p>
          Recap IQ is a project developed by myself and one other developer.
          Upon onboarding with an account, users can utilize Microsoft's Graph
          API to obtain a recap summary of their recent emails, presented in a
          more friendly format using generative AI.
        </p>
        <p className="pt-4">
          The key features of this application include a login system and a
          configuration area for linking users to their respective APIs. My
          involvement encompassed the front end and various aspects of the
          backend, which includes communication with the Graph API and an AWS
          Cognito user base system. Although a proof of concept for this project
          exists, it is still in development.
        </p>
      </WorkProjectContainer>
    </div>
  );
}
