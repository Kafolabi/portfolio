import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderBlank } from "@fortawesome/free-regular-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PortfolioHeader = (props) => {
  return (
    <div className="card-header border-0 bg-transparent mb-3 mx-5">
      <a href={props.github} target={"_blank"} rel={"noreferrer"}>
        <FontAwesomeIcon
          icon={faFolderBlank}
          size="2x"
          className="me-4 text-color-light"
        />
      </a>
      <a href={props.github} target={"_blank"} rel={"noreferrer"}>
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="xl"
          className="me-4 text-color-light float-end"
        />
      </a>
      <a href={props.link} target={"_blank"} rel={"noreferrer"}>
        <FontAwesomeIcon
          icon={faUpRightFromSquare}
          size="xl"
          className="me-4 text-color-light float-end"
        />
      </a>
    </div>
  );
};

export default PortfolioHeader;
