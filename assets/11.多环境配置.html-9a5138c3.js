import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i={},l=e(`<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> properties</h2><p>文件名必须以application开头：</p><ul><li>application.properties</li><li>application-dev.properties （开发环境）</li><li>application-test.properties （测试环境）</li><li>application-prd.properties（生产环境）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># springboot多环境配置。可以选择激活那个文件</span>
<span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token value attr-value">dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml" aria-hidden="true">#</a> yaml</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> prd

<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8083</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev

<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> prd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>推荐使用多个配置文件，不同的文件配置不同的环境。</p></blockquote><h2 id="激活指定profile" tabindex="-1"><a class="header-anchor" href="#激活指定profile" aria-hidden="true">#</a> 激活指定profile</h2><ul><li><p>配置文件中：<code>spring.profiles.active=dev</code> 或者</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>命令行：<code>java -jar jar包 --spring.profiles.active=dev 　</code></p></li><li><p>可以直接在测试的时候，配置传入命令行参数</p></li><li><p>虚拟机参数 ：<code>-Dspring.profiles.active=dev</code></p></li></ul><blockquote><p>优先级</p></blockquote><p>命令行参数 &gt; JVM参数 &gt; 配置文件</p>`,11),p=[l];function t(r,c){return s(),a("div",null,p)}const d=n(i,[["render",t],["__file","11.多环境配置.html.vue"]]);export{d as default};
