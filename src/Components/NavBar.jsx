const scrollToId = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
};

export default function NavBar() {
  const links = () => {
    return (
      <div className="flex mt-5">
        <p className="navbar-item" onClick={() => scrollToId("about")}>
          About
        </p>
        <p className="navbar-item" onClick={() => scrollToId("skills")}>
          Skills
        </p>
        <p className="navbar-item" onClick={() => scrollToId("projects")}>
          Projects
        </p>
        <p className="navbar-item" onClick={() => scrollToId("achievements")}>
          Achievements
        </p>
        <p className="navbar-item" onClick={() => scrollToId("contact")}>
          Contact
        </p>
      </div>
    );
  };

  return (
    <div className="navbar">
      <div className="white-box">
        <h3>Ethan Stein</h3>
      </div>

      {links()}
    </div>
  );
}
