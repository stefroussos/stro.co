import { useEffect, useState } from "react";
import { ProjectModel } from "utils/models";
import CardContainer from "components/CardContainer";
import ScrollFAB from "components/ScrollFAB";

interface Props {
  projects: Array<ProjectModel>;
  activeProjectId?: string;
}

const Cards = ({ projects, activeProjectId = "" }: Props) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    setActiveId(activeProjectId);
  }, [activeProjectId]);

  function handleCardClick(id: string) {
    setActiveId(id);
    const url = id === "" ? "/" : `/projects/${id}`;
    // Using pushState instead of Next's router.push() so that the page doesn't rerender
    window.history.pushState(id, "", url);
  }

  return (
    <section>
      {projects.map((project) => (
        <div key={project.id}>
          <CardContainer
            active={project.id === activeId ? true : false}
            project={project}
            onClick={handleCardClick}
          />
          {project.id === activeId && (
            <ScrollFAB onCloseClick={handleCardClick} />
          )}
        </div>
      ))}
    </section>
  );
};

export default Cards;
