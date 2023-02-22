import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i={},t=e(`<h2 id="_01-前端部署" tabindex="-1"><a class="header-anchor" href="#_01-前端部署" aria-hidden="true">#</a> 01.前端部署</h2><p>nginx配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html/dist<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location ^~ /api/ <span class="token punctuation">{</span>
        rewrite ^/api/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
        proxy_pass   http://192.168.1.223:8080<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-后端部署" tabindex="-1"><a class="header-anchor" href="#_02-后端部署" aria-hidden="true">#</a> 02.后端部署</h2>`,4),l=[t];function c(p,o){return s(),a("div",null,l)}const r=n(i,[["render",c],["__file","04.项目部署.html.vue"]]);export{r as default};
