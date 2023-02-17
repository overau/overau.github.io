import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const p={},e=t(`<p>使用@interface自定义注解时，自动继承了java.lang.annotation.Annotation接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Retention</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RetentionPolicy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Target</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/11/28 16:47
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test03</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@MyAnnotation2</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;hejin&quot;</span><span class="token punctuation">,</span>schools <span class="token operator">=</span> <span class="token string">&quot;西南大学&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@MyAnnotation3</span><span class="token punctuation">(</span><span class="token string">&quot;hejin&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation2</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 注解的参数
     * 没有默认值。使用注解时必须显示赋值
     */</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     *默认值为-1.代表不存在。
     */</span>
    <span class="token keyword">int</span> <span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">schools</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token string">&quot;清华大学&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;西南大学&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation3</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 使用value在使用注解时可不写。使用其他名称必须写。
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","04.自定义注解.html.vue"]]);export{k as default};
