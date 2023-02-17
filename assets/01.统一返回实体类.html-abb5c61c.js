import{_ as e,V as p,W as t,Y as n,Z as s,$ as c,X as l,F as o}from"./framework-a569e214.js";const i={},u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"提示",-1),k={href:"http://doc.ruoyi.vip/ruoyi-vue/",target:"_blank",rel:"noopener noreferrer"},r=l(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 操作消息提醒
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AjaxResult</span> <span class="token keyword">extends</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 状态码 */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">CODE_TAG</span> <span class="token operator">=</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 返回内容 */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">MSG_TAG</span> <span class="token operator">=</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 数据对象 */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DATA_TAG</span> <span class="token operator">=</span> <span class="token string">&quot;data&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 初始化一个新创建的 AjaxResult 对象，使其表示一个空消息。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化一个新创建的 AjaxResult 对象
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">code</span> 状态码
     * <span class="token keyword">@param</span> <span class="token parameter">msg</span> 返回内容
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">(</span><span class="token keyword">int</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token constant">CODE_TAG</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token constant">MSG_TAG</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化一个新创建的 AjaxResult 对象
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">code</span> 状态码
     * <span class="token keyword">@param</span> <span class="token parameter">msg</span> 返回内容
     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 数据对象
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">(</span><span class="token keyword">int</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Object</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token constant">CODE_TAG</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token constant">MSG_TAG</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotNull</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token constant">DATA_TAG</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回成功消息
     * 
     * <span class="token keyword">@return</span> 成功消息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;操作成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回成功数据
     * 
     * <span class="token keyword">@return</span> 成功消息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">Object</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;操作成功&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回成功消息
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">msg</span> 返回内容
     * <span class="token keyword">@return</span> 成功消息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回成功消息
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">msg</span> 返回内容
     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 数据对象
     * <span class="token keyword">@return</span> 成功消息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Object</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回错误消息
     * 
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;操作失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回错误消息
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">msg</span> 返回内容
     * <span class="token keyword">@return</span> 警告消息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回错误消息
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">msg</span> 返回内容
     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 数据对象
     * <span class="token keyword">@return</span> 警告消息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Object</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回错误消息
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">code</span> 状态码
     * <span class="token keyword">@param</span> <span class="token parameter">msg</span> 返回内容
     * <span class="token keyword">@return</span> 警告消息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AjaxResult</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token keyword">int</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AjaxResult</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 方便链式调用
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@return</span> 数据对象
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">AjaxResult</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,b){const a=o("ExternalLinkIcon");return p(),t("div",null,[n("div",u,[d,n("p",null,[s("官网："),n("a",k,[s("http://doc.ruoyi.vip/ruoyi-vue/"),c(a)])])]),r])}const w=e(i,[["render",v],["__file","01.统一返回实体类.html.vue"]]);export{w as default};
