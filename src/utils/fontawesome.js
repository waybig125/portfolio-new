import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faXmark,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

// Add the desired FontAwesome icons to the library
library.add(faArrowDown, faXmark, faAnchor);

// Configure FontAwesome to use specific settings if needed
config.autoAddCss = false;

// Export the configured library
export default library;
