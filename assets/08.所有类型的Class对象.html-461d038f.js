import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t={},c=p(`<ul><li>class</li><li>interface</li><li>数组</li><li>枚举</li><li>注解</li><li>基本数据类型</li><li>void</li></ul><p>例子</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/11/29 20:45
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test04</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * 类
         */</span>
        <span class="token class-name">Class</span> c1 <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 接口
         */</span>
        <span class="token class-name">Class</span> c2 <span class="token operator">=</span> <span class="token class-name">Comparable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 一维数组
         */</span>
        <span class="token class-name">Class</span> c3 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 二维数组
         */</span>
        <span class="token class-name">Class</span> c4 <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 注解
         */</span>
        <span class="token class-name">Class</span> c5 <span class="token operator">=</span> <span class="token class-name">Override</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 枚举
         */</span>
        <span class="token class-name">Class</span> c6 <span class="token operator">=</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 基本类型
         */</span>
        <span class="token class-name">Class</span> c7 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> c72 <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * void
         */</span>
        <span class="token class-name">Class</span> c8 <span class="token operator">=</span> <span class="token keyword">void</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * Class类
         */</span>
        <span class="token class-name">Class</span> c9 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c4<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c6<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c7<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c72<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c8<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c9<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Object</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Comparable</span>
<span class="token keyword">class</span> <span class="token punctuation">[</span><span class="token class-name">Ljava</span><span class="token punctuation">.</span>lang<span class="token punctuation">.</span>String<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">I</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Override</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span>ElementType</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Integer</span>
<span class="token keyword">int</span>
<span class="token keyword">void</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Class</span>
<span class="token number">356573597</span>
<span class="token number">356573597</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[c];function l(o,i){return s(),a("div",null,e)}const k=n(t,[["render",l],["__file","08.所有类型的Class对象.html.vue"]]);export{k as default};
