class LogLevel {
  constructor() {
    this.levels = new Set(['info', 'warn', 'debug', 'error']);
    this.colors = {
      info: '\x1b[36m',
      warn: '\x1b[33m',
      debug: '\x1b[34m',
      error: '\x1b[31m',
      reset: '\x1b[0m'
    };
    this.display = {
      info: true,
      warn: true,
      debug: true,
      error: true
    };
  }

  _normalize(name) {
    return String(name).replace(/^['"]|['"]$/g, '').toLowerCase();
  }

  addLevel(name) {
    const level = this._normalize(name);
    if (!this.levels.has(level)) {
      this.levels.add(level);
      this.colors[level] = '';
      this.display[level] = true;
    }
    return level;
  }

  setColor(name, ansi) {
    const level = this._normalize(name);
    this.colors[level] = ansi;
  }

  setDisplay(name, flag) {
    const level = this._normalize(name);
    if (level === 'all') {
      for (let l of this.levels) this.display[l] = flag;
    } else {
      this.display[level] = flag;
    }
  }

  getColor(level) {
    return this.colors[level] || '';
  }

  shouldDisplay(level) {
    return this.display[level] !== false;
  }

  getLevels() {
    return [...this.levels];
  }

  getResetCode() {
    return this.colors.reset || '';
  }
}

module.exports = LogLevel;
