import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t={},o=p(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 资源类</span>
        <span class="token class-name">Data3</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 实现效果：A ==&gt; B ==&gt; C ==&gt; A
         */</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                data<span class="token punctuation">.</span><span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                data<span class="token punctuation">.</span><span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                data<span class="token punctuation">.</span><span class="token function">printC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 资源类
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Data3</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Condition</span> condition1 <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Condition</span> condition2 <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Condition</span> condition3 <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 1A 2B 3C **/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 加锁</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 业务代码：判断 ==&gt; 执行 ==&gt; 通知</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 等待</span>
                condition1<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;==&gt;printA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 唤醒指定的人：B</span>
            num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            condition2<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 解锁</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 加锁</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 业务代码：判断 ==&gt; 执行 ==&gt; 通知</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                condition2<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;==&gt;printB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 唤醒指定的人：C</span>
            num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
            condition3<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 解锁</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 加锁</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 业务代码：判断 ==&gt; 执行 ==&gt; 通知</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                condition3<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;==&gt;printC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 唤醒指定的人：A</span>
            num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            condition1<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 解锁</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span>printA
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span>printB
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span>printC

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","07.Condition实现精准通知和唤醒.html.vue"]]);export{k as default};
