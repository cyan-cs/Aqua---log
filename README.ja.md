### Click here for English version : [README.md](./README.md)
# **Aqua - log** — 使いやすいを身近に

## 1. **Aqua - log**の詳細情報
**Aqua - log**は、シンプルかつ高機能なjavascriptで作られたカスタムロガーです。  
標準の`console`を置き換えて`logger`にするだけで使用可能で、拡張性の高いログレベル追加、色分け、ファイル出力、表示制御が簡単に行えます。

## 2. 特徴
- info, warn, debug, errorなどの基本ログレベルを標準搭載  
- 独自ログレベルも自由に追加可能（`logger.add('custom')`）  
- 各ログレベルの色設定が可能（デフォルトでinfoは青、warnは黄など）  
- ログを指定ファイルに書き出せる（ファイル指定はログレベル別にも全ログ一括もOK）  
- コンソールへの表示ON/OFFがログレベル毎に設定可能  

## 3. 使い方

```js
const logger = require('aqua-log');

logger.info('これは情報ログ');
logger.warn('これは警告ログ');
logger.error('これはエラーログ');

logger.add('custom');
logger.color('custom', '\x1b[35m'); // 紫色
logger.custom('カスタムログメッセージ');

logger.file('error', './error.log');  // errorはファイル出力
logger.display('debug', false);        // debugは非表示
```
## 4. API一覧
| メソッド                                 | 説明             |
| ------------------------------------ | -------------- |
| `logger.info(msg)`                   | infoレベルのログ出力   |
| `logger.warn(msg)`                   | warnレベルのログ出力   |
| `logger.debug(msg)`                  | debugレベルのログ出力  |
| `logger.error(msg)`                  | errorレベルのログ出力  |
| `logger.add(name)`                   | 独自のログレベルを追加    |
| `logger.color(status, colorCode)`    | ログレベルの色を設定     |
| `logger.file(status, filePath)`      | ログをファイルに書き出す設定 |
| `logger.display(status, true/false)` | コンソール表示を切り替え   |

## 5. ライセンス
このリポジトリはMITライセンスで公開されています。

## 6. インストール方法
```npm install aqua-log```でインストールできます。
