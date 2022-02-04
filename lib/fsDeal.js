const fs = require("fs");
const path = require("path");

class FS {
  constructor(dir) {
    this.dir = dir;
  }

  read() {
    return fs.readFileSync(path.resolve(__dirname, this.dir), {
      encoding: "utf8",
      flags: "r",
    });
  }

  write(chunk) {
    fs.writeFileSync(
      path.resolve(__dirname, this.dir),
      JSON.stringify(chunk, null, 4)
    );
  }
}

module.exports = FS;
