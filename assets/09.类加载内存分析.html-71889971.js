import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i="/img/annotation-reflection/classloader-mem-analy.png",t={},l=e(`<h2 id="java内存" tabindex="-1"><a class="header-anchor" href="#java内存" aria-hidden="true">#</a> Java内存</h2><ul><li>堆</li><li>栈</li><li>方法区</li></ul><h2 id="类的加载过程" tabindex="-1"><a class="header-anchor" href="#类的加载过程" aria-hidden="true">#</a> 类的加载过程</h2><ul><li>类的加载：将class文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时数据结构，然后生成一个代表这个类的java.lang.Class对象。</li><li>类的链接：将Java的二级制代码合并到JVM的运行状态之中的过程。 <ul><li>验证：确保加载的类信息符合JVM规范，没有安全方面的问题</li><li>准备：正式为类变量（static）分配内存并设置类变量默认初始值的阶段，这些内存都将在方法区中进行分配。</li><li>解析：虚拟机常量池的符号引用（常量名）替换为直接引用（地址）的过程。</li></ul></li><li>类的初始化 <ul><li>执行类构造器&lt;clinit&gt;()方法的过程。类构造器&lt;clinit&gt;()方法是由编译器自动收集类中<mark>所有类变量的赋值动作和静态代码块中的语句合并</mark>产生的。（类构造器是构造类信息的，不是构造该类对象的构造器）。</li><li>当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先触发其父类的初始化。</li><li>虚拟机会保证一个类的&lt;clinit&gt;()方法在多线程环境中被正确加锁和同步。</li></ul></li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/11/29 21:01
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test05</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A类静态代码块初始化&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        m <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A类的无参构造初始化&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span>类静态代码块初始化
<span class="token class-name">A</span>类的无参构造初始化
<span class="token number">100</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行流程图" tabindex="-1"><a class="header-anchor" href="#执行流程图" aria-hidden="true">#</a> 执行流程图</h2><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),c=[l];function p(o,u){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","09.类加载内存分析.html.vue"]]);export{r as default};
