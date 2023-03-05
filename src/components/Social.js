import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div>
      <a href="https://github.com/Kafolabi">
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="2x"
          className="m-4 text-color-light d-block"
        />
      </a>
      <a href="https://github.com/Kafolabi">
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="2x"
          className="m-4 text-color-light d-block"
        />
      </a>
      <a href="https://wa.me/08168691211">
        <FontAwesomeIcon
          icon={["fab", "whatsapp"]}
          size="2x"
          className="m-4 text-color-light d-block"
        />
      </a>
      <a href="https://github.com/Kafolabi">
        <FontAwesomeIcon
          icon={["fab", "telegram"]}
          size="2x"
          className="m-4 text-color-light d-block"
        />
      </a>
    </div>
  );
};

export default Social;
