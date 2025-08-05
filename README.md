# **Aqua - log** — Making Logging Easy and Accessible

## 1. About **Aqua - log**

**Aqua - log** is a simple yet powerful custom logger built with TypeScript.
You can easily replace the standard `console` with `logger` to get extensible log levels, color-coded outputs, file writing, and display control — all made easy.

## 2. Features

* Comes with standard log levels like info, warn, debug, and error
* Allows adding custom log levels freely with `logger.add('custom')`
* Supports color customization per log level (default colors: blue for info, yellow for warn, etc.)
* Supports writing logs to files, either per log level or all logs combined
* Allows toggling console output on or off per log level
* Written in TypeScript for type safety and better developer experience

## 3. Usage

```ts
import logger from 'aqua-log';

logger.info('This is an info log');
logger.warn('This is a warning log');
logger.error('This is an error log');

logger.add('custom');
logger.color('custom', '\x1b[35m'); // Purple color
logger.custom('This is a custom log message');

logger.file('error', './error.log');  // Write error logs to a file
logger.display('debug', false);        // Disable debug logs on console
```

## 4. API Reference

| Method                               | Description                      |
| ------------------------------------ | -------------------------------- |
| `logger.info(msg)`                   | Outputs an info level log        |
| `logger.warn(msg)`                   | Outputs a warn level log         |
| `logger.debug(msg)`                  | Outputs a debug level log        |
| `logger.error(msg)`                  | Outputs an error level log       |
| `logger.add(name)`                   | Adds a custom log level          |
| `logger.color(status, colorCode)`    | Sets the color for a log level   |
| `logger.file(status, filePath)`      | Sets file output for a log level |
| `logger.display(status, true/false)` | Toggles console display on/off   |

## 5. License

This repository is licensed under the MIT License.
