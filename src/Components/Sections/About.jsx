import MeImage from "../../assets/Images/Myself-WOC.jpg";

export default function About() {
  return (
    <div>
      <h3 className="section-header">About</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <p className="animate-come-down">
          Computer Science Major with a deep intrigue in learning the wide
          variety of concepts within software, data and machine learning.
          Actively seeking additional oppertunities to further pursue study in
          these fields and gain professional, real world experience.
        </p>
        <p className="animate-come-up">
          I have designed this website with the intention of sharing my
          extensive experience and capabilities. Here, you'll discover insights
          into the programming languages I've mastered and explore some of the
          projects I've contributed to in the past. Feel free to contact me for
          any business inquiries or with any general questions you may have.
        </p>
        <div className="flex justify-center animate-blur-focus">
          <img
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full grayscale-70"
            src={MeImage}
          />
        </div>
      </div>
    </div>
  );
}
