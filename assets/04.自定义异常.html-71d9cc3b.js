import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const p={},t=e(`<h2 id="serviceexception" tabindex="-1"><a class="header-anchor" href="#serviceexception" aria-hidden="true">#</a> ServiceException</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 业务异常
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">ServiceException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 错误码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 错误提示
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 错误明细，内部调试错误
     *
     * 和 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">CommonResult</span><span class="token punctuation">#</span><span class="token function">getDetailMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> 一致的设计
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> detailMessage<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 空构造方法，避免反序列化问题
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Integer</span> code<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDetailMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> detailMessage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ServiceException</span> <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ServiceException</span> <span class="token function">setDetailMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> detailMessage<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>detailMessage <span class="token operator">=</span> detailMessage<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="baseexception" tabindex="-1"><a class="header-anchor" href="#baseexception" aria-hidden="true">#</a> BaseException</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 基础异常
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 所属模块
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token keyword">module</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 错误码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 错误码对应的参数
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 错误消息
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> defaultMessage<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token keyword">module</span><span class="token punctuation">,</span> <span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">String</span> defaultMessage<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">module</span> <span class="token operator">=</span> <span class="token keyword">module</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> args<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>defaultMessage <span class="token operator">=</span> defaultMessage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token keyword">module</span><span class="token punctuation">,</span> <span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token keyword">module</span><span class="token punctuation">,</span> code<span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token keyword">module</span><span class="token punctuation">,</span> <span class="token class-name">String</span> defaultMessage<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token keyword">module</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> defaultMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> code<span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BaseException</span><span class="token punctuation">(</span><span class="token class-name">String</span> defaultMessage<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> defaultMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            message <span class="token operator">=</span> <span class="token class-name">MessageUtils</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            message <span class="token operator">=</span> defaultMessage<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">module</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> args<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> defaultMessage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userexception" tabindex="-1"><a class="header-anchor" href="#userexception" aria-hidden="true">#</a> UserException</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 用户信息异常类
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserException</span> <span class="token keyword">extends</span> <span class="token class-name">BaseException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserException</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> code<span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userpasswordnotmatchexception" tabindex="-1"><a class="header-anchor" href="#userpasswordnotmatchexception" aria-hidden="true">#</a> UserPasswordNotMatchException</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 用户密码不正确或不符合规范异常类
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserPasswordNotMatchException</span> <span class="token keyword">extends</span> <span class="token class-name">UserException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserPasswordNotMatchException</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;user.password.not.match&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userpasswordretrylimitexceedexception" tabindex="-1"><a class="header-anchor" href="#userpasswordretrylimitexceedexception" aria-hidden="true">#</a> UserPasswordRetryLimitExceedException</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 用户错误最大次数异常类
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserPasswordRetryLimitExceedException</span> <span class="token keyword">extends</span> <span class="token class-name">UserException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserPasswordRetryLimitExceedException</span><span class="token punctuation">(</span><span class="token keyword">int</span> retryLimitCount<span class="token punctuation">,</span> <span class="token keyword">int</span> lockTime<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;user.password.retry.limit.exceed&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> retryLimitCount<span class="token punctuation">,</span> lockTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="captchaexpireexception" tabindex="-1"><a class="header-anchor" href="#captchaexpireexception" aria-hidden="true">#</a> CaptchaExpireException</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 验证码失效异常类
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CaptchaExpireException</span> <span class="token keyword">extends</span> <span class="token class-name">UserException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CaptchaExpireException</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;user.jcaptcha.expire&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="captchaexception" tabindex="-1"><a class="header-anchor" href="#captchaexception" aria-hidden="true">#</a> CaptchaException</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 验证码错误异常类
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CaptchaException</span> <span class="token keyword">extends</span> <span class="token class-name">UserException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CaptchaException</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;user.jcaptcha.error&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[t];function i(l,o){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","04.自定义异常.html.vue"]]);export{d as default};
