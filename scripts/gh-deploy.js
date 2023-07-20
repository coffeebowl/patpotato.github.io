const execa = require("execa");
const fs = require("fs");
const currentTime = new Date;
(async () => {
  try {
    console.log("Build läuft...");
    await execa("npm", ["run", "build"]);
    console.log("Committe...");
    await execa("cd", ["dist"])
    await execa("git", ["add", "."])
    await execa("git", ["commit", "--no-verify", "-m", '"' + currentTime + '"'])
    console.log("Upload...");
    await execa("git", ["push"])
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
