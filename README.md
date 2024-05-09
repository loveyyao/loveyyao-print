# LoveyyaoPrint web打印

> 该打印依赖于`loveyyao-print`打印服务，使用先下载安装`loveyyao-print`打印服务。`loveyyao-print`详情[查看](https://github.com/loveyyao/loveyyao-electron-print)。
> 服务启动后可以将自动连接，连接成功后可以使用。目前支持`jpg, png, pdf`等格式打印，后续会持续更新。

## 安装

```
npm i loveyyao-print
```

## 使用

```js
import loveyyaoPrint from 'loveyyao-print'

Vue.use(loveyyaoPrint)
```
## 属性

- `socket`：`socket.io-client`对象
- `printerList`：打印机列表
- `clientInfo`：服务端信息
- `connected`：连接状态
## 方法

- `getPrinterList() => Promise<Array>`
- `refreshPrinterList() => Promise<Array>`
- `print(optins) => Promise<undefined>`

### options
- `{string} options.printer` - 将文件发送到指定的打印机
- `{string} options.pages` - 指定要打印 PDF 文档中的哪些页面
- `{string} options.subset` - 仅当值为 时打印奇数页`odd`，仅当值为 时打印偶数页`even`。
- `{string} options.orientation` - 提供内容 90 度旋转（不是纸张旋转，纸张旋转必须通过选择打印机默认值进行预设）。
- `{string} options.scale` - 支持的名称有`noscale`、`shrink`、 和`fit`。
- `{boolean} options.monochrome` - 以黑白方式打印文档。默认值为`false`。
- `{string} options.side` - 支持的名称有`duplex`、`duplexshort`、`duplexlong`和`simplex`。
- `{string} options.bin` - 选择要打印到的纸盘。号码或姓名。
- `{string} options.paperSize` - 指定纸张尺寸。`A2、A3、A4、A5、A6、letter、legal、tabloid、statement`或可从打印机设置中选择的名称。
- `{boolean} options.silent` - 使错误消息静音。
- `{boolean} options.printDialog` - 显示此命令行上指示的所有文件的打印对话框。
- `{number} options.copies` - 指定要打印的份数。
- `{string} options.type` - `jpg, png, pdf`（必填）
- `{string} options.url` - 文件路径（必填）
- `{string} options.name` - 文件名（可选）
