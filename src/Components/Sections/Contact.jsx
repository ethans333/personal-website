import link from "../../assets/Images/link-solid.svg";

export default function Contact() {
  return (
    <div>
      <h3 className="section-header">Contact</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <div className="flex">
            <p className="contact-title">Email</p>
            <a className="contact-link" href="mailto:ethanmstn33@gmail.com">
              <img className="contact-icon" src={link} alt="Email Icon" />
            </a>
          </div>
          <p className="contact-desc">
            Contact me by email for any general questions or business inquires.
          </p>
        </div>
        <div>
          <div className="flex">
            <p className="contact-title">Github</p>
            <a
              className="contact-link"
              href="https://github.com/ethans333"
              target="_blank"
            >
              <img className="contact-icon" src={link} alt="Email Icon" />
            </a>
          </div>
          <p className="contact-desc">
            Discover a compilation of projects I've contributed to over the
            years.
          </p>
        </div>
        <div>
          <div className="flex">
            <p className="contact-title">LinkedIn</p>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/ethan-stein-231527256/"
              target="_blank"
            >
              <img className="contact-icon" src={link} alt="Email Icon" />
            </a>
          </div>
          <p className="contact-desc">
            Connect with me on LinkedIn to recieve tips or follow projects I'm
            currently working on.
          </p>
        </div>
      </div>
    </div>
  );
}
