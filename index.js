const fs = require("fs");

const jsonFile = fs.readFileSync("./nodeVersion.json", "utf8");
const jsonData = JSON.parse(jsonFile)

const versionProject = jsonData.version;
const versionSystem = String(process.versions.node);
const typeMessage = jsonData.type;

function verifyNodeVersion(typeAlert) {
  if (String(versionSystem) !== String(versionProject)) {
    const title = typeAlert === 'error' ? 'ERROR' : 'WARNING'
    const messageWarn = console.warn(`\x1b[43m\x1b[30m\x1b[1m${title}:`, 
    `\x1b[0m\x1b[43m\x1b[30m 
      your version of NodeJS is different from project development version.
      expected version is v${versionProject} and your version is v${versionSystem}\x1b[0m
      `);

    switch (typeAlert) {
      case "error":
        messageWarn,
        console.log('\x1b[41m\x1b[37m\x1b[1mUnable to continue execution');
        process.exit();
      default:
        messageWarn
        break;
    }
  }
}
console.log('checking the NodeJS version...')
console.log(`Your Version: v${versionSystem}`)
console.log(`Version Project: v${versionProject}`)

verifyNodeVersion(typeMessage);

