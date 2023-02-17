import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i={},t=e(`<h2 id="什么时候会发生类初始化" tabindex="-1"><a class="header-anchor" href="#什么时候会发生类初始化" aria-hidden="true">#</a> 什么时候会发生类初始化</h2><ul><li>类的主动引用（一定会发生类的初始化） <ul><li>当虚拟机启动时，先初始化main方法所在的类</li><li>new一个类的对象</li><li>调用类的静态成员（除了final常量）和静态方法</li><li>使用java.lang.reflect包的方法对类进行反射调用</li><li>当初始化一个类，如果其父类没有被初始化，则会先初始化它的父类</li></ul></li><li>类的被动引用（不会发生类的初始化） <ul><li>当访问一个静态域时，只有真正声明这个域的类才会被初始化。如：当通过子类引用父类的静态变量，不会导致子类初始化。</li><li>通过数组定义类引用，不会触发此类的初始化。</li><li>引用常量不会触发此类的初始化（常量在链接阶段就存入类的常量池中了）</li></ul></li></ul><h2 id="主动引用测试" tabindex="-1"><a class="header-anchor" href="#主动引用测试" aria-hidden="true">#</a> 主动引用测试</h2><h3 id="new一个类" tabindex="-1"><a class="header-anchor" href="#new一个类" aria-hidden="true">#</a> new一个类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>hejin<span class="token punctuation">.</span>reflection</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description 类什么时候会初始化
 * @Author Administrator
 * @Date 2020/12/2 9:51
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test06</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Main类被加载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 1、new
         */</span>
        <span class="token class-name">Son</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;父类被加载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;子类被加载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        m <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token class-name">M</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Main</span>类被加载
父类被加载
子类被加载

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>hejin<span class="token punctuation">.</span>reflection</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description 类什么时候会初始化
 * @Author Administrator
 * @Date 2020/12/2 9:51
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test06</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Main类被加载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 2、反射
         */</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.hejin.reflection.Son&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;父类被加载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;子类被加载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        m <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token class-name">M</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Main</span>类被加载
父类被加载
子类被加载

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="被动引用测试" tabindex="-1"><a class="header-anchor" href="#被动引用测试" aria-hidden="true">#</a> 被动引用测试</h2><h3 id="子类引用父类的静态变量" tabindex="-1"><a class="header-anchor" href="#子类引用父类的静态变量" aria-hidden="true">#</a> 子类引用父类的静态变量</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 子类引用父类的静态变量</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Son</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Main</span>类被加载
父类被加载
<span class="token number">2</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组定义类引用" tabindex="-1"><a class="header-anchor" href="#数组定义类引用" aria-hidden="true">#</a> 数组定义类引用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 数组定义类引用</span>
<span class="token class-name">Son</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Main</span>类被加载

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用常量" tabindex="-1"><a class="header-anchor" href="#引用常量" aria-hidden="true">#</a> 引用常量</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 引用常量</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Son<span class="token punctuation">.</span>M</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Main</span>类被加载
<span class="token number">1</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),p=[t];function c(l,o){return s(),a("div",null,p)}const d=n(i,[["render",c],["__file","10.分析类初始化.html.vue"]]);export{d as default};
