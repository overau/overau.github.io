const e=JSON.parse('{"key":"v-1bdbd758","path":"/open-project/ruoyi/04.%E9%98%B2%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4/01.%E6%80%9D%E8%B7%AF.html","title":"思路","lang":"zh-CN","frontmatter":{"title":"思路","date":"2022-12-13T15:19:21.000Z","categories":["开源项目","若依分离版","防重复提交"],"description":"自定义注解，对需要进行防重复提交处理的方法加注解。; 每次请求通过拦截器，判断方法是否有防重复提交请求。有就进行防重复提交处理，没有就放行。; 防重复提交处理：; 先从redis中获取存入的请求url和参数信息，获取不到，说明是第一次请求，把url和参数信息存入redis。; 获取到了Redis中的url和参数信息preDataMap，判断本次请求的u...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/open-project/ruoyi/04.%E9%98%B2%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4/01.%E6%80%9D%E8%B7%AF.html"}],["meta",{"property":"og:site_name","content":"真理并无尽头"}],["meta",{"property":"og:title","content":"思路"}],["meta",{"property":"og:description","content":"自定义注解，对需要进行防重复提交处理的方法加注解。; 每次请求通过拦截器，判断方法是否有防重复提交请求。有就进行防重复提交处理，没有就放行。; 防重复提交处理：; 先从redis中获取存入的请求url和参数信息，获取不到，说明是第一次请求，把url和参数信息存入redis。; 获取到了Redis中的url和参数信息preDataMap，判断本次请求的u..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T15:21:19.000Z"}],["meta",{"property":"article:published_time","content":"2022-12-13T15:19:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T15:21:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"思路\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-13T15:19:21.000Z\\",\\"dateModified\\":\\"2023-02-17T15:21:19.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1676647279000,"updatedTime":1676647279000,"contributors":[{"name":"木叶萧萧","email":"deciphers@163.com","commits":1}]},"readingTime":{"minutes":0.81,"words":243},"filePathRelative":"open-project/ruoyi/04.防重复提交/01.思路.md","localizedDate":"2022年12月13日","autoDesc":true}');export{e as data};
