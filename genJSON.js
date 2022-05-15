const fs = require("fs");

function createRoutes(server, refPath, newPath) {
  const refScreenshots = `${__dirname}/${refPath}`;
  const newScreenshots = `${__dirname}/${newPath}`;

  const refFilenames = fs.readdirSync(refScreenshots);
  const newFilenames = fs.readdirSync(newScreenshots);

  const refRoutes = [];
  const newRoutes = [];

  refFilenames.forEach((file) => {
    refRoutes.push(`${server}/${refPath}/${file}`);
  });

  newFilenames.forEach((file) => {
    newRoutes.push(`${server}/${newPath}/${file}`);
  });

  return [refRoutes, newRoutes];
}

function createScenario(refUrl, url, scenarioNumber, threshold) {
  return {
    label: `Ghost 3.41.1 & Ghost 4.44.0 - Scenario ${scenarioNumber}`,
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    referenceUrl: refUrl,
    url: url,
    readyEvent: "",
    readySelector: "",
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: "",
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: threshold,
    requireSameDimensions: false,
  };
}

function createBackstopJSON(title, scenarios) {
  let backstopObject = {
    id: title,
    viewports: [
      {
        label: "default",
        width: 1920,
        height: 1080,
      },
    ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios: [],
    paths: {
      bitmaps_reference: "backstop_data/bitmaps_reference",
      bitmaps_test: "backstop_data/bitmaps_test",
      engine_scripts: "backstop_data/engine_scripts",
      html_report: "backstop_data/html_report",
      ci_report: "backstop_data/ci_report",
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
      args: ["--no-sandbox"],
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
  };

  backstopObject.scenarios = scenarios;
  return backstopObject;
}

function main(title, server, refImagesRoute, newImagesRoute, threshold) {
  console.log("Generating backstop.json file, using: ");
  console.log(`Server: ${server}`);
  console.log(`Reference Images Route: ${refImagesRoute}`);
  console.log(`New Images Route: ${newImagesRoute}`);

  const scenarios = [];

  const routes = createRoutes(server, refImagesRoute, newImagesRoute);

  for (let i = 0; i < routes[0].length; i++) {
    scenarios.push(
      createScenario(routes[0][i], routes[1][i], i + 1, threshold)
    );
  }

  const finalObject = JSON.stringify(createBackstopJSON(title, scenarios));

  fs.writeFileSync("./backstop.json", finalObject);
  console.log("backstop.json generated successfully");
}

main(
  (title = process.argv[2]),
  (server = process.argv[3]),
  (refImagesRoute = process.argv[4]),
  (newImagesRoute = process.argv[5]),
  (threshold = process.argv[6])
);
