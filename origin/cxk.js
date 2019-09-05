const vscode = require('vscode');
module.exports = function(context) {
    // 注册cxk命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.cxk', () => {
        vscode.window.showInformationMessage('鸡你太美！');

        const panel = vscode.window.createWebviewPanel(
            'cxkplaysbasketball',
            'cxk plays basketball',
            vscode.ViewColumn.One,
            {}
        );

        panel.webview.html=getWebviewContent();

    }));
};

function getWebviewContent() {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cat Coding</title>
  </head>
  <body>
      <img src="http://ww3.sinaimg.cn/large/85cc5ccbgy1g1o92agt62g20e20d3npe.gif"  />
  </body>
  </html>`;
  } 