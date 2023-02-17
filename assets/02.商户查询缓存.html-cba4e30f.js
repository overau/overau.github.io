const e=JSON.parse('{"key":"v-59722df8","path":"/do-project/Redis/02.%E5%95%86%E6%88%B7%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98.html","title":"商户查询缓存","lang":"zh-CN","frontmatter":{"title":"商户查询缓存","date":"2023-01-31T12:57:13.000Z","category":["项目实战","Redis项目实战"],"description":"01.什么是缓存 缓存就是数据交换的缓冲区（称作Cache），是存贮数据的临时地方，一般读写性能较高。 浏览器缓存。; 应用层缓存。; 数据库缓存。; CPU缓存。; 磁盘缓存。; 缓存的作用 降低后端负载。; 提高读写效率，降低响应时间。; 缓存的成本 数据一致性成本。; 代码维护成本。; 运维成本。; 02.添加商户缓存 缓存作用模型 image-...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/do-project/Redis/02.%E5%95%86%E6%88%B7%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98.html"}],["meta",{"property":"og:site_name","content":"真理并无尽头"}],["meta",{"property":"og:title","content":"商户查询缓存"}],["meta",{"property":"og:description","content":"01.什么是缓存 缓存就是数据交换的缓冲区（称作Cache），是存贮数据的临时地方，一般读写性能较高。 浏览器缓存。; 应用层缓存。; 数据库缓存。; CPU缓存。; 磁盘缓存。; 缓存的作用 降低后端负载。; 提高读写效率，降低响应时间。; 缓存的成本 数据一致性成本。; 代码维护成本。; 运维成本。; 02.添加商户缓存 缓存作用模型 image-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T15:21:19.000Z"}],["meta",{"property":"article:published_time","content":"2023-01-31T12:57:13.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T15:21:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"商户查询缓存\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-31T12:57:13.000Z\\",\\"dateModified\\":\\"2023-02-17T15:21:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"01.什么是缓存","slug":"_01-什么是缓存","link":"#_01-什么是缓存","children":[{"level":3,"title":"缓存的作用","slug":"缓存的作用","link":"#缓存的作用","children":[]},{"level":3,"title":"缓存的成本","slug":"缓存的成本","link":"#缓存的成本","children":[]}]},{"level":2,"title":"02.添加商户缓存","slug":"_02-添加商户缓存","link":"#_02-添加商户缓存","children":[{"level":3,"title":"缓存作用模型","slug":"缓存作用模型","link":"#缓存作用模型","children":[]},{"level":3,"title":"根据id查询商铺缓存的流程","slug":"根据id查询商铺缓存的流程","link":"#根据id查询商铺缓存的流程","children":[]},{"level":3,"title":"添加商铺查询缓存","slug":"添加商铺查询缓存","link":"#添加商铺查询缓存","children":[]},{"level":3,"title":"添加店铺类型查询缓存","slug":"添加店铺类型查询缓存","link":"#添加店铺类型查询缓存","children":[]}]},{"level":2,"title":"03.缓存更新策略","slug":"_03-缓存更新策略","link":"#_03-缓存更新策略","children":[{"level":3,"title":"策略选择","slug":"策略选择","link":"#策略选择","children":[]},{"level":3,"title":"主动更新","slug":"主动更新","link":"#主动更新","children":[]},{"level":3,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}]},{"level":2,"title":"04.商铺缓存和数据库的双写一致","slug":"_04-商铺缓存和数据库的双写一致","link":"#_04-商铺缓存和数据库的双写一致","children":[]},{"level":2,"title":"05.缓存穿透问题及解决思路","slug":"_05-缓存穿透问题及解决思路","link":"#_05-缓存穿透问题及解决思路","children":[]},{"level":2,"title":"06.解决商铺查询缓存穿透","slug":"_06-解决商铺查询缓存穿透","link":"#_06-解决商铺查询缓存穿透","children":[]},{"level":2,"title":"07.缓存雪崩问题及解决思路","slug":"_07-缓存雪崩问题及解决思路","link":"#_07-缓存雪崩问题及解决思路","children":[]},{"level":2,"title":"08.缓存击穿问题及解决思路","slug":"_08-缓存击穿问题及解决思路","link":"#_08-缓存击穿问题及解决思路","children":[]},{"level":2,"title":"09.利用互斥锁解决缓存击穿问题","slug":"_09-利用互斥锁解决缓存击穿问题","link":"#_09-利用互斥锁解决缓存击穿问题","children":[{"level":3,"title":"互斥锁解决商铺查询","slug":"互斥锁解决商铺查询","link":"#互斥锁解决商铺查询","children":[]},{"level":3,"title":"互斥锁的获取和释放","slug":"互斥锁的获取和释放","link":"#互斥锁的获取和释放","children":[]}]},{"level":2,"title":"10.利用逻辑过期解决缓存击穿问题","slug":"_10-利用逻辑过期解决缓存击穿问题","link":"#_10-利用逻辑过期解决缓存击穿问题","children":[]},{"level":2,"title":"11.封装Redis工具类","slug":"_11-封装redis工具类","link":"#_11-封装redis工具类","children":[]}],"git":{"createdTime":1676647279000,"updatedTime":1676647279000,"contributors":[{"name":"木叶萧萧","email":"deciphers@163.com","commits":1}]},"readingTime":{"minutes":10.64,"words":3192},"filePathRelative":"do-project/Redis/02.商户查询缓存.md","localizedDate":"2023年1月31日","autoDesc":true}');export{e as data};
