import MeImage from "../../assets/Images/Myself-Formal.PNG";

export default function About() {
  return (
    <div id="about">
      <h3 className="section-header">About</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <p className="animate-come-down">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
        <p className="animate-come-up">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.
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
