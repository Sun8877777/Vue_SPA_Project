import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/menuHandler";
import "./scripts/reviews";
import "./scripts/parallax";
import "./scripts/skills";
import "./scripts/works";
