import{_ as s,V as n,W as a,X as p}from"./framework-a569e214.js";const t="/img/annotation-reflection/classloader-load-process.png",e="/img/annotation-reflection/classloader-type.png",c={},o=p('<h2 id="类加载的作用" tabindex="-1"><a class="header-anchor" href="#类加载的作用" aria-hidden="true">#</a> 类加载的作用</h2><p>将class文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时数据结构，然后生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口。</p><h2 id="类缓存" tabindex="-1"><a class="header-anchor" href="#类缓存" aria-hidden="true">#</a> 类缓存</h2><p>标准的JavaSE类加载器可以按要求查找类，但是一旦某个类被加载到类加载器中，它将维持加载（缓存）一段时间。不过JVM垃圾回收机制可以回收这些Class对象。</p><h2 id="类加载流程" tabindex="-1"><a class="header-anchor" href="#类加载流程" aria-hidden="true">#</a> 类加载流程</h2><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="类加载器的类型" tabindex="-1"><a class="header-anchor" href="#类加载器的类型" aria-hidden="true">#</a> 类加载器的类型</h2><p>类加载器作用是把类（class）装载近内存的。JVM规范定义了如下类型的类的加载器。</p><ul><li>引导类加载器：用C++编写的，是JVM自带的类加载器，负责Java平台核心库，用来装载核心类库。该加载类无法直接获取。</li><li>扩展类加载器：负责jre/lib/ext目录下的jar包或-D java.ext.dirs指定目录下的jar包装入工作库。</li><li>系统类加载器：负责java -classpath或-D java.class.path所指的目录下的类与jar包装入工作库，是最常用的加载器。</li></ul><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 10:25
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test07</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取系统类的加载器</span>
        <span class="token class-name">ClassLoader</span> systemClassLoader <span class="token operator">=</span> <span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>systemClassLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取系统类的加载器的父类 --&gt; 扩展类加载器</span>
        <span class="token class-name">ClassLoader</span> parent <span class="token operator">=</span> systemClassLoader<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取扩展类加载器的父类 --&gt; 引导类加载器</span>
        <span class="token class-name">ClassLoader</span> parent1 <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>parent1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 当前类是哪个类加载器</span>
        <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.hejin.reflection.Test07&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// jdk内置类</span>
        classLoader <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 如何获取系统类加载器可以加载的路径</span>
        <span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;java.class.path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Launcher</span>$<span class="token class-name">AppClassLoader</span><span class="token annotation punctuation">@18b4aac2</span>
<span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Launcher</span>$<span class="token class-name">ExtClassLoader</span><span class="token annotation punctuation">@1540e19d</span>
<span class="token keyword">null</span>
<span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Launcher</span>$<span class="token class-name">AppClassLoader</span><span class="token annotation punctuation">@18b4aac2</span>
<span class="token keyword">null</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\charsets<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\deploy<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\access<span class="token operator">-</span>bridge<span class="token operator">-</span><span class="token number">64.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\cldrdata<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\dnsns<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\jaccess<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\jfxrt<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\localedata<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\nashorn<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\sunec<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\sunjce_provider<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\sunmscapi<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\sunpkcs11<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\ext\\zipfs<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\javaws<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\jce<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\jfr<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\jfxswt<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\jsse<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\management<span class="token operator">-</span>agent<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\plugin<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\resources<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Java</span>\\jdk1<span class="token punctuation">.</span><span class="token number">8.0_121</span>\\jre\\lib\\rt<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
<span class="token class-name">E</span><span class="token operator">:</span>\\code\\<span class="token class-name">Java</span>\\注解和反射\\target\\classes<span class="token punctuation">;</span>
<span class="token class-name">D</span><span class="token operator">:</span>\\<span class="token class-name">Program</span> <span class="token class-name">Files</span>\\<span class="token class-name">JetBrains</span>\\<span class="token class-name">IntelliJ</span> <span class="token constant">IDEA</span> <span class="token number">2019.3</span><span class="token number">.4</span>\\lib\\idea_rt<span class="token punctuation">.</span>jar

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[o];function i(u,k){return n(),a("div",null,l)}const d=s(c,[["render",i],["__file","11.类加载器的作用.html.vue"]]);export{d as default};
