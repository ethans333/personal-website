import ProjectImageDefault from "../../assets/Images/Project_Image_Default.jpg";

export default function Projects() {
  return (
    <div id="projects">
      <h3 className="section-header">Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={ProjectImageDefault} />
          </div>
          <p className="project-title">Project A</p>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={ProjectImageDefault} />
          </div>
          <p className="project-title">Project B</p>
          <p className="project-desc">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        <div>
          <div className="animate-blur-focus">
            <img className="project-image" src={ProjectImageDefault} />
          </div>
          <p className="project-title">Project C</p>
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
