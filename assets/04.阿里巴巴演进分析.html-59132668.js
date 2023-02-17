import{_ as l,V as i,W as a,Y as e,Z as n,$ as t,X as c,F as d}from"./framework-a569e214.js";const o={},r=e("h1",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),v=e("p",null,[e("code",null,"阿里巴巴中文站架构设计实践(何崚).pdf")],-1),u=e("p",null,"技术急不得，越是慢慢学，才能越扎实！",-1),m=e("p",null,"敏捷开发、极限编程。",-1),_=e("p",null,"开源才是技术的王道！",-1),p=e("blockquote",null,[e("p",null,"任何一家互联网的公司，都不可能只是简简单单让用户能用就好了。大量公司做的都是相同的业务。")],-1),b=e("p",null,"如果你未来想当一个架构师：没有什么是加一层解决不了的。",-1),h={href:"https://developer.aliyun.com/article/653511",target:"_blank",rel:"noopener noreferrer"},k=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、商品的基本信息</span>
	名称、价格、商家信息
	关系数据库就可以解决了。MySQL / Oracle （淘宝早年就去IOE了。- 王坚）
	淘宝内部的MySQL 不是大家用的MySQL
<span class="token comment"># 2、商品的描述、评论（文字比较多）</span>
	文档型数据库中，MongDB
<span class="token comment"># 3、图片</span>
	分布式文件系统，FastDFS
	- 淘宝自己的 TFS
	- Google的 GFS
	- Hadoop的 HDFS
	- 阿里云的 OSS
<span class="token comment"># 4、商品的关键字（搜索）</span>
	- 搜索引擎，solar elasticsearch
	- ISearch，多隆
	所有牛逼的人都有一段苦逼的岁月！但是你只要像SB一样的去坚持，终将牛逼！
<span class="token comment"># 5、商品热门的波段信息</span>
	- 内存数据库
	- Redis
	- Tair
	- Memcached
<span class="token comment"># 6、商品的交易，外部的支付接口</span>
	- 第三方应用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要知道，一个简单的网页背后的技术一定不是大家所想的那么简单！</p><p>大型互联网应用问题：</p><blockquote><ul><li>数据类型太多了</li><li>数据源繁多，经常重构</li><li>数据要改造，大面积MySQL</li></ul></blockquote>`,4);function S(f,x){const s=d("ExternalLinkIcon");return i(),a("div",null,[r,v,u,m,_,p,b,e("blockquote",null,[e("p",null,[n("阿里云的这群疯子："),e("a",h,[n("https://developer.aliyun.com/article/653511"),t(s)])])]),k])}const y=l(o,[["render",S],["__file","04.阿里巴巴演进分析.html.vue"]]);export{y as default};
