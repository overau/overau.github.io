import{_ as n,V as a,W as s,X as e}from"./framework-a569e214.js";const i={},t=e(`<p><mark>元注解的作用是负责注解其他注解</mark>。除了直接使用JDK 定义好的注解，我们还可以自定义注解，在<mark>JDK 1.5中提供了4个标准的用来对注解类型进行注解的注解类</mark>，我们称之为 <mark>meta-annotation</mark>（元注解），他们分别是：</p><ul><li><p>@Target</p></li><li><p>@Retention</p></li><li><p>@Documented</p></li><li><p>@Inherited</p></li></ul><p>我们可以使用这<mark>4个元注解来对我们自定义的注解类型进行注解</mark>。</p><h2 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> @Target</h2><p>描述注解的使用范围（即：被修饰的注解可以用在什么地方）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ElementType</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** Class, interface (including annotation type), or enum declaration */</span>
    <span class="token constant">TYPE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Field declaration (includes enum constants) */</span>
    <span class="token constant">FIELD</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Method declaration */</span>
    <span class="token constant">METHOD</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Formal parameter declaration */</span>
    <span class="token constant">PARAMETER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Constructor declaration */</span>
    <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Local variable declaration */</span>
    <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Annotation type declaration */</span>
    <span class="token constant">ANNOTATION_TYPE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/** Package declaration */</span>
    <span class="token constant">PACKAGE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Type parameter declaration
     *
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_PARAMETER</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Use of a type
     *
     * <span class="token keyword">@since</span> 1.8
     */</span>
    <span class="token constant">TYPE_USE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retention" tabindex="-1"><a class="header-anchor" href="#retention" aria-hidden="true">#</a> @Retention</h2><p>描述注解保留的时间范围（即：被描述的注解在它所修饰的类中可以被保留到何时）。描述注解的生命周期。</p><p>SOURCE &lt; CLASS &lt; <mark>RUNTIME</mark></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">RetentionPolicy</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Annotations are to be discarded by the compiler.
     */</span>
    <span class="token constant">SOURCE</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Annotations are to be recorded in the class file by the compiler
     * but need not be retained by the VM at run time.  This is the default
     * behavior.
     */</span>
    <span class="token constant">CLASS</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * Annotations are to be recorded in the class file by the compiler and
     * retained by the VM at run time, so they may be read reflectively.
     *
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">AnnotatedElement</span></span>
     */</span>
    <span class="token constant">RUNTIME</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documented" tabindex="-1"><a class="header-anchor" href="#documented" aria-hidden="true">#</a> @Documented</h2><p>描述在使用 javadoc 工具为类生成帮助文档时是否要保留其注解信息。</p><h2 id="inherited" tabindex="-1"><a class="header-anchor" href="#inherited" aria-hidden="true">#</a> @Inherited</h2><p>使被它修饰的注解具有继承性（如果某个类使用了被@Inherited修饰的注解，则其子类将自动具有该注解）。</p><h2 id="注解定义" tabindex="-1"><a class="header-anchor" href="#注解定义" aria-hidden="true">#</a> 注解定义</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[t];function l(o,d){return a(),s("div",null,c)}const r=n(i,[["render",l],["__file","03.元注解.html.vue"]]);export{r as default};
