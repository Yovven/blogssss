SourceMap（eval-cheap-source-map）
sourceMap是一项将编译、打包、压缩后的代码映射回源代码的技术，由于打包压缩后的代码并没有阅读性可言，一旦在开发中报错或者遇到问题，直接在混淆代码中debug问题会带来非常糟糕的体验，sourceMap可以帮助我们快速定位到源代码的位置，提高我们的开发效率。
sourcemap是需要浏览器支持的，webpack在打包过程中会生成一份代码映射文件，里面说明了打包后的代码与源文件的映射关系，通常这份映射文件以.map结尾，里边的数据结构大概长这样：
{
  "version" : 3,                          // Source Map版本
  "file": "out.js",                       // 输出文件（可选）
  "sourceRoot": "",                       // 源文件根目录（可选）
  "sources": ["foo.js", "bar.js"],        // 源文件列表
  "sourcesContent": [null, null],         // 源内容列表（可选，和源文件列表顺序一致）
  "names": ["src", "maps", "are", "fun"], // mappings使用的符号名称列表
  "mappings": "A,AAAB;;ABCDE;"            // 带有编码映射数据的字符串
}
其中mappings数据有如下规则：
生成文件中的一行的每个组用“;”分隔；
每一段用“,”分隔；
每个段由1、4或5个可变长度字段组成；

有了这份映射文件，webpack还在我们的压缩代码的最末端加上这句注释，指明该代码文件的映射文件的路径sourceURL，即可让sourceMap生效：
//# sourceURL=/path/to/file.js.map

浏览器读到上面这行代码时，就会通过sourceURL去获取对应的映射文件，通过解析后，实现源码和混淆代码之间的映射。因此sourceMap其实也是一项需要浏览器支持的技术。

