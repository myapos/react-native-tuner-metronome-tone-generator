import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";

const configFontAwesomeIcons = () => {
  library.add(fab, faSquareCheck);
};

export default configFontAwesomeIcons;
