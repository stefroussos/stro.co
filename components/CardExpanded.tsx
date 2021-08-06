import css from "styled-jsx/css";
import { ProjectModel } from "utils/models";
import CardBody from "./CardBody";
import ReactMarkdown from "react-markdown";
import { MdVerticalAlignTop } from "react-icons/md";

interface Props {
  project: ProjectModel;
}

const CardExpanded = ({ project }: Props) => {
  function handleUpClick() {
    const card = document.querySelector(".card-expanded") as HTMLElement;
    card.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="card-expanded-container fadein">
      <summary>
        <div>
          <strong>Type: </strong>
          {project.type}
        </div>
        <div>
          <strong>Date: </strong>
          {project.date}
        </div>
      </summary>
      <div className="card-expanded-description">
        <ReactMarkdown
          source={project.description}
          linkTarget={() => "_blank"}
        />
      </div>
      {project.body.map((content, index) => (
        <CardBody key={project.id + index} content={content} id={project.id} />
      ))}
      <div className="arrow-up">
        <MdVerticalAlignTop
          size="28"
          className="pointer"
          onClick={() => handleUpClick()}
        />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .card-expanded-container {
    padding: 0px 80px;
  }

  summary {
    padding-bottom: 5px;
  }

  summary div {
    padding-bottom: 5px;
  }

  .card-expanded-description {
    padding-bottom: 20px;
  }

  .arrow-up {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0 40px 0;
  }

  @media screen and (max-width: 1000px) {
    .card-expanded-container {
      padding: 0px 20px;
    }
  }
`;

export default CardExpanded;
