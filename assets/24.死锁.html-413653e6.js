import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t={},e=p(`<blockquote><p>多个线程各自占有一些共享资源，并且互相等待其他线程占有的资源才能运行。从而<strong>导致两个或者多个线程都在等待对方释放资源，都停止执行</strong>的情形。某一个同步块同时拥有<strong>两个以上对象</strong>的锁时，就可能会发生<strong>死锁</strong>的问题。</p></blockquote><p><mark>多个线程互相抱着对方需要的资源，然后形成僵持。</mark></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">*</span><span class="token operator">*</span>
 <span class="token operator">*</span> <span class="token annotation punctuation">@Desc</span> 死锁：多个线程互相抱着对方需要的资源，然后形成僵持。
 <span class="token operator">*</span> <span class="token annotation punctuation">@Author</span> <span class="token class-name">HeJin</span>
 <span class="token operator">*</span> <span class="token annotation punctuation">@Date</span> <span class="token number">2021</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">/</span><span class="token number">10</span> <span class="token number">19</span><span class="token operator">:</span><span class="token number">07</span>
 <span class="token operator">*</span><span class="token operator">/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLock</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Makeup</span> g1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Makeup</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;灰姑凉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Makeup</span> g2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Makeup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;白雪公主&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        g1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 口红
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Lipstick</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 镜子
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Mirror</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Makeup</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 需要的资源只有一份。用static来保证只有一份
     */</span>
    <span class="token keyword">static</span> <span class="token class-name">Lipstick</span> lipstick <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lipstick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">Mirror</span> mirror <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mirror</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 选择 **/</span>
    <span class="token keyword">int</span> choice<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 名字 **/</span>
    <span class="token class-name">String</span> girlName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Makeup</span><span class="token punctuation">(</span><span class="token keyword">int</span> choice<span class="token punctuation">,</span> <span class="token class-name">String</span> girlName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>choice <span class="token operator">=</span> choice<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">=</span> girlName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 化妆</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">makeUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 化妆：互相持有对方的锁，就是要拿到对方的资源
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">makeUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 获得口红的锁</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lipstick<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得口红的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 1秒钟后想获得镜子</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>mirror<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得镜子的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>mirror<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得镜子的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 1秒钟后想获得镜子</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lipstick<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得口红的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试会发现程序卡死：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>灰姑凉获得口红的锁
白雪公主获得镜子的锁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改makeUp()方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">makeUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 获得口红的锁</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lipstick<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得口红的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 1秒钟后想获得镜子</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>mirror<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得镜子的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>mirror<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得镜子的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 1秒钟后想获得镜子</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lipstick<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>girlName <span class="token operator">+</span> <span class="token string">&quot;获得口红的锁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>灰姑凉获得口红的锁
白雪公主获得镜子的锁
白雪公主获得口红的锁
灰姑凉获得镜子的锁

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>产生死锁的四个必要条件</p></blockquote><ul><li><strong>互斥</strong>条件：一个资源每次只能被一个进程使用。</li><li><strong>请求与保持</strong>条件：一个进程因请求资源而阻塞时，对已获得的资源保持不放。</li><li><strong>不剥夺</strong>条件：进程已获得的资源，在末使用完之前，不能强行剥夺。</li><li><strong>循环等待</strong>条件：若干进程之间形成一种头尾相接的循环等待资源关系。</li></ul><p>上面列出了死锁的四个必要条件，我们只要想办法<strong>破坏其中的任意一个或多个条件就可以避免死锁</strong>发生。</p>`,11),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","24.死锁.html.vue"]]);export{k as default};
