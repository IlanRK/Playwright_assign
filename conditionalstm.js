
function launchBrowser(browserName) {
  if (browserName === 'chrome') {
    console.log("Launching Chrome browser");
  } else {
    console.log(`Launching ${browserName} browser`);
  }
}


function runTests(testType) {
  switch (testType.toLowerCase()) {
    case 'smoke':
      console.log("Running Smoke tests");
      break;
    case 'sanity':
      console.log("Running Sanity tests");
      break;
    case 'regression':
      console.log("Running Regression tests");
      break;
    default:
      console.log("Running default smoke tests");
  }
}