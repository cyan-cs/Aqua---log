const LogLevel = require('./LogLevel');
const Writer = require('./Writer');

class AquaLogger {
  constructor() {
    this.logLevel = new LogLevel();
    this.writer = new Writer(this.logLevel);

    for (let level of this.logLevel.getLevels()) {
      this._createMethod(level);
    }
  }

  _createMethod(level) {
    this[level] = (msg) => {
      const timestamp = new Date().toISOString();
      const formattedMsg = `[${timestamp}] [${level.toUpperCase()}] ${msg}`;
      this.writer.write(level, formattedMsg);
    };
  }

  add(levelName) {
    const level = this.logLevel.addLevel(levelName);
    this._createMethod(level);
  }

  color(levelName, ansiCode) {
    this.logLevel.setColor(levelName, ansiCode);
  }

  file(levelName, filePath) {
    this.writer.setFilePath(levelName, filePath);
  }

  display(levelName, flag) {
    this.logLevel.setDisplay(levelName, flag);
  }
}

module.exports = AquaLogger;
