const logger = require('../src/index');

// 基本ログ出力
logger.info('これは情報ログです');
logger.warn('これは警告ログです');
logger.debug('これはデバッグログです');
logger.error('これはエラーログです');

// カスタムログレベル作成
logger.add('custom');
logger.color('custom', '\x1b[35m');  // 紫色
logger.custom('これはカスタムログです');

// 表示OFF設定
logger.display('debug', false);
logger.debug('このデバッグログは表示されません');

// ファイル出力設定（ファイルにログを書き込み）
logger.file('error', './logs/error.log');
logger.error('このエラーログはerror.logに書き込まれます');
