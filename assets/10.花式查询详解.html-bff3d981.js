import{_ as n,V as s,W as a,X as i}from"./framework-a569e214.js";const e="/img/elasticsearch/image-20210319121112021.png",t="/img/elasticsearch/image-20210319121511029.png",l="/img/elasticsearch/image-20210319122050791.png",c="/img/elasticsearch/image-20210319122457886.png",u="/img/elasticsearch/image-20210319122724074.png",p="/img/elasticsearch/image-20210319123326036.png",o="/img/elasticsearch/image-20210319123719891.png",d="/img/elasticsearch/image-20210319123856586.png",r="/img/elasticsearch/image-20210319124203290.png",m="/img/elasticsearch/image-20210319124527922.png",v="/img/elasticsearch/image-20210319124803445.png",b="/img/elasticsearch/image-20210319125256090.png",g="/img/elasticsearch/image-20210319130101217.png",k="/img/elasticsearch/image-20210319130235086.png",q="/img/elasticsearch/image-20210319130351005.png",h="/img/elasticsearch/image-20210319130641604.png",f="/img/elasticsearch/image-20210319130720307.png",_="/img/elasticsearch/image-20210319131106970.png",x="/img/elasticsearch/image-20210319131237778.png",y="/img/elasticsearch/image-20210319131804733.png",z="/img/elasticsearch/image-20210319132222768.png",T="/img/elasticsearch/image-20210319132703528.png",E={},G=i(`<h2 id="简单查询" tabindex="-1"><a class="header-anchor" href="#简单查询" aria-hidden="true">#</a> 简单查询</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token comment"># 查询的参数体，使用json构建</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+`" alt="image-20210319121112021" tabindex="0" loading="lazy"><figcaption>image-20210319121112021</figcaption></figure><p>再添加一个4号用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /kuangshen/user/4
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说前端&quot;</span>,
  <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
  <span class="token string">&quot;desc&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;一顿操作猛如虎，一看工资2500&quot;</span>,
  <span class="token string">&quot;tags&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;技术宅&quot;</span>,<span class="token string">&quot;直男&quot;</span>,<span class="token string">&quot;温暖&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查询：</p><figure><img src="`+t+`" alt="image-20210319121511029" tabindex="0" loading="lazy"><figcaption>image-20210319121511029</figcaption></figure><p>其中hits包含索引和文档的信息。数据中的东西都可以遍历出来。</p><ul><li>查询结果总数。</li><li>具体的文档。</li><li>分数。可以通过判断谁更加符合结果。</li></ul><h2 id="结果过滤" tabindex="-1"><a class="header-anchor" href="#结果过滤" aria-hidden="true">#</a> 结果过滤</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span>, <span class="token string">&quot;desc&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image-20210319122050791" tabindex="0" loading="lazy"><figcaption>image-20210319122050791</figcaption></figure><p>之后使用Java操作ES，所有的方法和对象就是这里面的key。</p><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      // 通过哪个字段排序.asc升序，desc降序
      <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20210319122457886" tabindex="0" loading="lazy"><figcaption>image-20210319122457886</figcaption></figure><h2 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  // 第几条数据开始
  <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  // 单页数据大小
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="image-20210319122724074" tabindex="0" loading="lazy"><figcaption>image-20210319122724074</figcaption></figure><h2 id="bool值查询" tabindex="-1"><a class="header-anchor" href="#bool值查询" aria-hidden="true">#</a> bool值查询</h2><p>多条件查询：</p><ul><li>must，相当于mysql的and。所有的条件都要符合。</li><li>should，相当于mysql的or。满足其一就符合。</li><li>must_not，相当于mysql的not。全部都不满足。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="image-20210319123326036" tabindex="0" loading="lazy"><figcaption>image-20210319123326036</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;should&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">23</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="image-20210319123719891" tabindex="0" loading="lazy"><figcaption>image-20210319123719891</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must_not&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">23</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="image-20210319123856586" tabindex="0" loading="lazy"><figcaption>image-20210319123856586</figcaption></figure><h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2><blockquote><p>使用filter进行数据的过滤。</p></blockquote><ul><li>gt 大于</li><li>gte 大于等于</li><li>lt 小于</li><li>lte 小于等于</li><li></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;gt&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="image-20210319124203290" tabindex="0" loading="lazy"><figcaption>image-20210319124203290</figcaption></figure><figure><img src="'+m+`" alt="image-20210319124527922" tabindex="0" loading="lazy"><figcaption>image-20210319124527922</figcaption></figure><h2 id="匹配多个条件" tabindex="-1"><a class="header-anchor" href="#匹配多个条件" aria-hidden="true">#</a> 匹配多个条件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;tags&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;女&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image-20210319124803445" tabindex="0" loading="lazy"><figcaption>image-20210319124803445</figcaption></figure><blockquote><p>多个条件用空格隔开。主要满足其中一个条件，就会被查出。这个时候可以通过分值进行基本的判断。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;tags&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;男 技术&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="image-20210319125256090" tabindex="0" loading="lazy"><figcaption>image-20210319125256090</figcaption></figure><h2 id="精确查询" tabindex="-1"><a class="header-anchor" href="#精确查询" aria-hidden="true">#</a> 精确查询</h2><ul><li><p>term，直接查询精确的值。</p></li><li><p>match，会使用分词器解析。先分析文档，然后通过分析的文档进行查询。</p></li></ul><h2 id="两个类型" tabindex="-1"><a class="header-anchor" href="#两个类型" aria-hidden="true">#</a> 两个类型</h2><ul><li>text会被分词器解析。</li><li>keyword不会被分词器解析。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT  tesdb
<span class="token punctuation">{</span>
  <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;desc&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="image-20210319130101217" tabindex="0" loading="lazy"><figcaption>image-20210319130101217</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT tesdb/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说Java name&quot;</span>,
  <span class="token string">&quot;desc&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说Java desc&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="image-20210319130235086" tabindex="0" loading="lazy"><figcaption>image-20210319130235086</figcaption></figure><p>再插入一条：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT tesdb/_doc/2
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说Java name&quot;</span>,
  <span class="token string">&quot;desc&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说Java desc2&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看head界面：</p><figure><img src="`+q+`" alt="image-20210319130351005" tabindex="0" loading="lazy"><figcaption>image-20210319130351005</figcaption></figure><p><code>keyword不会被分词器解析</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;狂神说Java name&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="image-20210319130641604" tabindex="0" loading="lazy"><figcaption>image-20210319130641604</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;standard&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;狂神说Java name&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+`" alt="image-20210319130720307" tabindex="0" loading="lazy"><figcaption>image-20210319130720307</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET tesdb/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+`" alt="image-20210319131106970" tabindex="0" loading="lazy"><figcaption>image-20210319131106970</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET tesdb/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;desc&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说Java desc&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+`" alt="image-20210319131237778" tabindex="0" loading="lazy"><figcaption>image-20210319131237778</figcaption></figure><blockquote><p>keyword类型的字段不会被分词器解析。</p></blockquote><h2 id="多个值匹配的精确查询" tabindex="-1"><a class="header-anchor" href="#多个值匹配的精确查询" aria-hidden="true">#</a> 多个值匹配的精确查询</h2><p>先插入两条数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT tesdb/_doc/3
<span class="token punctuation">{</span>
  <span class="token string">&quot;t1&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;22&quot;</span>,
  <span class="token string">&quot;t2&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2021-03-19&quot;</span>
<span class="token punctuation">}</span>

PUT tesdb/_doc/4
<span class="token punctuation">{</span>
  <span class="token string">&quot;t1&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;33&quot;</span>,
  <span class="token string">&quot;t2&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2021-03-20&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET tesdb/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;should&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;t1&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;22&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;t1&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;33&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+`" alt="image-20210319131804733" tabindex="0" loading="lazy"><figcaption>image-20210319131804733</figcaption></figure><h2 id="高亮查询" tabindex="-1"><a class="header-anchor" href="#高亮查询" aria-hidden="true">#</a> 高亮查询</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;highlight&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span>:<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+z+`" alt="image-20210319132222768" tabindex="0" loading="lazy"><figcaption>image-20210319132222768</figcaption></figure><p>搜索相关的结果可以高亮显示。</p><blockquote><p>自定义高亮标签</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET kuangshen/user/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;狂神说&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;highlight&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;pre_tags&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;p class=&#39;key&#39; style=&#39;color:red&#39;&gt;&quot;</span>, 
    <span class="token string">&quot;post_tags&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;/p&gt;&quot;</span>, 
    <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span>:<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+T+'" alt="image-20210319132703528" tabindex="0" loading="lazy"><figcaption>image-20210319132703528</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>匹配</li><li>按照条件匹配</li><li>精确匹配</li><li>区间范围匹配</li><li>匹配字段过滤</li><li>多条件查询</li><li>高亮查询</li></ul><p>这些MySQL都可以做，只是MySQL效率比较低。</p>',78),J=[G];function P(U,w){return s(),a("div",null,J)}const B=n(E,[["render",P],["__file","10.花式查询详解.html.vue"]]);export{B as default};
