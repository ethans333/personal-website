export default function NavBar() {
  const links = () => {
    return (
      <div className="flex mt-5">
        <p className="navbar-item">Home</p>
        <p className="navbar-item">Portfolio</p>
        <p className="navbar-item">Contact</p>
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
