// Core packages
import { useEffect, useState } from "react";

// Font Awesome packages with proper SSR handling
const { library, config } = require("@fortawesome/fontawesome-svg-core");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Prevent FontAwesome from adding its CSS since we disabled auto-adding
config.autoAddCss = false;

// Load icons into library
library.add(fas, far, fab);

/**
 * Icon factory utility with proper SSR hydration handling.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here
 *
 * Fixed hydration issue by implementing proper client-side rendering
 * and ensuring consistent server/client output.
 *
 * ! Can only distribute free icons
 * ? give users access to cheat sheet of free icons
 * ? pre-select those icons in a MD file
 * ? use MD file to only load those icons from the lib
 *
 * ! requiring the library will likely create a SSR issue
 * ! According to maintainers of @fortawesome the best solution will be to import the icon directly
 * ! and avoid the library module all together which is inline with MD loading plans
 * * https://github.com/FortAwesome/Font-Awesome/issues/19348
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon({ icon }) {
  const [iconType, iconKey] = icon;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the icon on the client to prevent hydration mismatch
  if (!isClient) {
    return <span className="icon-placeholder" style={{ display: 'inline-block', width: '1em', height: '1em' }} />;
  }

  return <FontAwesomeIcon icon={[iconType, iconKey]} />;
}
