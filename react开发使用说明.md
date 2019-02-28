### 1、构建

```
npx create-react-app my-app
cd my-app
npm start
```

### 2、在编辑器 vscode 中进行调试

项目跟目录下新建 launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

```
vscode 安装 VS Code - Debugger for Chrome
chrome浏览器 安装 https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome 插件
```

### 3、vscode 自动格式化

Prettier formatter for Visual Studio Code

### 4、开发环境中 api 代理 （解决跨越问题）

```
package.json 中添加 proxy 字段，例如：
"proxy": "http://localhost:4000",

这样，当你在开发中使用 fetch('/api/todos') 时，
开发服务器将识别出它不是静态资源，
并将你的请求代理到http://localhost:4000/api/todos 作为后备。
开发服务器将 仅仅 尝试将 Accept 头中没有 text/html 的请求发送到代理。
```
