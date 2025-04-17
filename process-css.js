const postcss = require("postcss");
const fs = require("fs");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const cssnano = require("cssnano");

// Read input CSS file
const inputCSS = fs.readFileSync("css/styles.css", "utf8");

// Process CSS with PostCSS
postcss([
  autoprefixer(),
  pxtorem({ rootValue: 16, propList: ["*"] }),
  cssnano({ preset: "default" })
])
  .process(inputCSS, { from: "css/styles.css", to: "css/styles.min.css" })
  .then((result) => {
    fs.writeFileSync("css/styles.min.css", result.css);
    console.log("✅ CSS processed and minified: css/styles.min.css");
  })
  .catch((error) => console.error("❌ Error processing CSS:", error));