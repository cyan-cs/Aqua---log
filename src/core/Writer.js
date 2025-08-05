const fs = require('fs');
const path = require('path');

class Writer {
  constructor(logLevel) {
    this.logLevel = logLevel;
    this.filePaths = {};
  }

  setFilePath(levelName, filePath) {
    const level = this.logLevel._normalize(levelName);
    const fullPath = path.resolve(filePath);
    this._ensureDir(fullPath);
    this.filePaths[level] = fullPath;

    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, '');
    }
  }

  _ensureDir(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  write(level, msg) {
    // Console出力
    if (this.logLevel.shouldDisplay(level)) {
      const color = this.logLevel.getColor(level);
      const reset = this.logLevel.getResetCode();
      console.log(`${color}${msg}${reset}`);
    }

    // ファイル出力
    const targets = ['all', level];
    for (let target of targets) {
      const path = this.filePaths[target];
      if (path) {
        fs.appendFile(path, msg + '\n', (err) => {
          if (err) console.error(`Failed to write log for ${level}:`, err);
        });
      }
    }
  }
}

module.exports = Writer;
