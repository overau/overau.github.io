import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const e={},p=t(`<h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2><table><thead><tr><th style="text-align:left;">方法名</th><th>功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">static Class.forName(String name)</td><td>返回指定类名的Class对象</td></tr><tr><td style="text-align:left;">newInstance()</td><td>根据对象的class新建一个对象</td></tr><tr><td style="text-align:left;">getName()</td><td>返回String形式的该类的名称</td></tr><tr><td style="text-align:left;">getSuperclass()</td><td>获取继承的父类</td></tr><tr><td style="text-align:left;">getInterfaces()</td><td>获取继承的接口</td></tr><tr><td style="text-align:left;">getClassLoader()</td><td>获得类的类加载器</td></tr><tr><td style="text-align:left;">getConstructors()</td><td>获得所有的构造函数</td></tr><tr><td style="text-align:left;">getMethods()</td><td>获得公共的方法</td></tr><tr><td style="text-align:left;">getDeclaredMethods()</td><td>获取当前类的所有方法</td></tr></tbody></table><h2 id="获取class的几种方式" tabindex="-1"><a class="header-anchor" href="#获取class的几种方式" aria-hidden="true">#</a> 获取Class的几种方式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>hejin<span class="token punctuation">.</span>reflection</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/11/29 20:27
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test03</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这个人是：&quot;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 1、通过getClass获得
         */</span>
        <span class="token class-name">Class</span> c1 <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 2、通过Class.forName获得
         */</span>
        <span class="token class-name">Class</span> c2 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.hejin.reflection.Student&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 3、类名.class
         */</span>
        <span class="token class-name">Class</span> c3 <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c3<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 4、基本内置属性的包装类都有Type属性
         */</span>
        <span class="token class-name">Class</span> type <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 获得父类类型
         */</span>
        <span class="token class-name">Class</span> c5 <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;学生&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;老师&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>这个人是：学生
<span class="token number">356573597</span>
<span class="token number">356573597</span>
<span class="token number">356573597</span>
<span class="token keyword">int</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>hejin<span class="token punctuation">.</span>reflection<span class="token punctuation">.</span></span>Person</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","07.Class类.html.vue"]]);export{d as default};
