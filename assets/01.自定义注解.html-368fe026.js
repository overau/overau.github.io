import{_ as e,V as i,W as c,Y as n,Z as s,$ as l,X as t,F as o}from"./framework-a569e214.js";const p={},d={class:"hint-container tip"},u=n("p",{class:"hint-container-title"},"提示",-1),v={href:"http://doc.ruoyi.vip/ruoyi-vue/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> @Log</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义操作日志记录注解
 * 
 * <span class="token keyword">@author</span> ruoyi
 *
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Log</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 模块 
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 功能
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">BusinessType</span> <span class="token function">businessType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">BusinessType</span><span class="token punctuation">.</span><span class="token constant">OTHER</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 操作人类别
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">OperatorType</span> <span class="token function">operatorType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">OperatorType</span><span class="token punctuation">.</span><span class="token constant">MANAGE</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否保存请求的参数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSaveRequestData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否保存响应的参数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSaveResponseData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="businesstype" tabindex="-1"><a class="header-anchor" href="#businesstype" aria-hidden="true">#</a> BusinessType</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 业务操作类型
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">BusinessType</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 其它
     */</span>
    <span class="token constant">OTHER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 新增
     */</span>
    <span class="token constant">INSERT</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 修改
     */</span>
    <span class="token constant">UPDATE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 删除
     */</span>
    <span class="token constant">DELETE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 授权
     */</span>
    <span class="token constant">GRANT</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 导出
     */</span>
    <span class="token constant">EXPORT</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 导入
     */</span>
    <span class="token constant">IMPORT</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 强退
     */</span>
    <span class="token constant">FORCE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 生成代码
     */</span>
    <span class="token constant">GENCODE</span><span class="token punctuation">,</span>
    
    <span class="token doc-comment comment">/**
     * 清空数据
     */</span>
    <span class="token constant">CLEAN</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="operatortype" tabindex="-1"><a class="header-anchor" href="#operatortype" aria-hidden="true">#</a> OperatorType</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 操作人类别
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">OperatorType</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 其它
     */</span>
    <span class="token constant">OTHER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 后台用户
     */</span>
    <span class="token constant">MANAGE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 手机端用户
     */</span>
    <span class="token constant">MOBILE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function r(k,b){const a=o("ExternalLinkIcon");return i(),c("div",null,[n("div",d,[u,n("p",null,[s("官网："),n("a",v,[s("http://doc.ruoyi.vip/ruoyi-vue/"),l(a)])])]),m])}const h=e(p,[["render",r],["__file","01.自定义注解.html.vue"]]);export{h as default};
