const e=JSON.parse('{"key":"v-f7515bac","path":"/JavaSE/11.JUC%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/27.%E6%8C%87%E4%BB%A4%E9%87%8D%E6%8E%92%E8%AF%A6%E8%A7%A3.html","title":"指令重排详解","lang":"zh-CN","frontmatter":{"title":"指令重排详解","date":"2022-03-23T21:25:34.000Z","category":["Java","JUC并发编程"],"description":"指令重排 写的程序，计算机并不是按照你写的那样去执行的。 源代码 -> 编译器优化的重排 -> 指令并行也可能重排 -> 内存系统也会重排 处理器在进行指令重排的时候，会考虑数据之间的依赖性。 可能造成影响的结果：a、b、x、y默认都是0 线程A 线程B :---- :---- x = a y = b b = 1 a = 2 正常的结果：x = 0，y...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/JavaSE/11.JUC%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/27.%E6%8C%87%E4%BB%A4%E9%87%8D%E6%8E%92%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"真理并无尽头"}],["meta",{"property":"og:title","content":"指令重排详解"}],["meta",{"property":"og:description","content":"指令重排 写的程序，计算机并不是按照你写的那样去执行的。 源代码 -> 编译器优化的重排 -> 指令并行也可能重排 -> 内存系统也会重排 处理器在进行指令重排的时候，会考虑数据之间的依赖性。 可能造成影响的结果：a、b、x、y默认都是0 线程A 线程B :---- :---- x = a y = b b = 1 a = 2 正常的结果：x = 0，y..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T15:21:19.000Z"}],["meta",{"property":"article:published_time","content":"2022-03-23T21:25:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T15:21:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指令重排详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-23T21:25:34.000Z\\",\\"dateModified\\":\\"2023-02-17T15:21:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令重排","slug":"指令重排","link":"#指令重排","children":[]},{"level":2,"title":"volatile禁止指令重排","slug":"volatile禁止指令重排","link":"#volatile禁止指令重排","children":[]}],"git":{"createdTime":1676647279000,"updatedTime":1676647279000,"contributors":[{"name":"木叶萧萧","email":"deciphers@163.com","commits":1}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"JavaSE/11.JUC并发编程/27.指令重排详解.md","localizedDate":"2022年3月23日","autoDesc":true}');export{e as data};
