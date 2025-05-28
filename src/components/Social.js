import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div>
      <a href="https://github.com/Kafolabi">
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="2x"
          className="m-4 text-color-light {window.screen.width < 566 ? 'd-block' : 'd-none'}"
        />
      </a>
      <a href="https://wa.me/08168691211">
        <FontAwesomeIcon
          icon={["fab", "whatsapp"]}
          size="2x"
          className="m-4 text-color-light {window.screen.width < 566 ? 'd-block' : 'd-none'}"
        />
      </a>
      <a href="https://t.me/08168691211">
        <FontAwesomeIcon
          icon={["fab", "telegram"]}
          size="2x"
          className="m-4 text-color-light {window.screen.width < 566 ? 'd-block' : 'd-none'}"
        />
      </a>
    </div>
  );
};

export default Social;
