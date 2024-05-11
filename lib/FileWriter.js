const fs = require('fs');

class FileWriter {
  writeToFile(fileName, content) {
    fs.writeFileSync(fileName, content);
  }
}

module.exports = FileWriter;
