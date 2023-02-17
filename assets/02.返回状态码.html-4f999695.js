import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const c={},l=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 返回状态码
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpStatus</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 操作成功
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SUCCESS</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 对象创建成功
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">CREATED</span> <span class="token operator">=</span> <span class="token number">201</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 请求已经被接受
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">ACCEPTED</span> <span class="token operator">=</span> <span class="token number">202</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 操作已经执行成功，但是没有返回数据
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">NO_CONTENT</span> <span class="token operator">=</span> <span class="token number">204</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 资源已被移除
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MOVED_PERM</span> <span class="token operator">=</span> <span class="token number">301</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 重定向
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">SEE_OTHER</span> <span class="token operator">=</span> <span class="token number">303</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 资源没有被修改
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">NOT_MODIFIED</span> <span class="token operator">=</span> <span class="token number">304</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 参数列表错误（缺少，格式不匹配）
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">BAD_REQUEST</span> <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 未授权
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">UNAUTHORIZED</span> <span class="token operator">=</span> <span class="token number">401</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 访问受限，授权过期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">FORBIDDEN</span> <span class="token operator">=</span> <span class="token number">403</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 资源，服务未找到
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">NOT_FOUND</span> <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 不允许的http方法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">BAD_METHOD</span> <span class="token operator">=</span> <span class="token number">405</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 资源冲突，或者资源被锁
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">CONFLICT</span> <span class="token operator">=</span> <span class="token number">409</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 不支持的数据，媒体类型
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">UNSUPPORTED_TYPE</span> <span class="token operator">=</span> <span class="token number">415</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 系统内部错误
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">ERROR</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 接口未实现
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">NOT_IMPLEMENTED</span> <span class="token operator">=</span> <span class="token number">501</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function p(o,t){return s(),a("div",null,i)}const r=n(c,[["render",p],["__file","02.返回状态码.html.vue"]]);export{r as default};
