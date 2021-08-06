import { useEffect } from "react";
import css from "styled-jsx/css";
import { ProjectModel } from "utils/models";
import CardPreview from "./CardPreview";
import CardExpanded from "./CardExpanded";

interface Props {
  active: boolean;
  project: ProjectModel;
  onClick: Function;
}

const Card = ({ active, project, onClick }: Props) => {
  useEffect(() => {
    if (active) {
      const element = document.getElementById(project.id) as HTMLElement;
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [active, project]);

  return (
    <div
      id={project.id}
      className={active ? "card card-expanded" : "card"}
      onClick={() => !active && onClick(project.id)}
    >
      <CardPreview active={active} project={project} onClick={onClick} />
      {active && <CardExpanded project={project} />}
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .card {
    color: var(--text);
    background: #fff;
    margin: 20px 50px;
    transition: var(--ease-in-out);
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
  }

  .card-expanded {
    margin: 10px 0 0 0 !important;
  }

  @media screen and (max-width: 1000px) {
    .card {
      margin: 20px 20px;
    }
  }
`;

export default Card;
