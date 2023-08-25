import MeImage from "../../assets/Images/Myself-Formal.PNG";

export default function About() {
  return (
    <div>
      <h3>About</h3>
      <div className="mt-10 grid grid-cols-3 gap-10">
        <p>
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.
        </p>
        <img src={MeImage} />
      </div>
    </div>
  );
}
