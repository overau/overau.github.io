import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t={},e=p(`<blockquote><p>由于我们可以通过 private关键字来保证数据对象只能被方法访问。所以我们只需要针对方法提出一套机制，这套机制就是<strong>synchronized关键字</strong>。它包括两种用法：<strong>synchronized方法</strong>和 <strong>synchronized块</strong>。</p></blockquote><h2 id="同步方法" tabindex="-1"><a class="header-anchor" href="#同步方法" aria-hidden="true">#</a> 同步方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>同步方法<span class="token operator">:</span> <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">int</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>synchronized方法控制对<strong>对象</strong>的访问，<strong>每个对象对应一把锁</strong>,每个synchronized方法都必须获得调用<strong>该方法的对象的锁</strong>才能执行。否则线程会阻塞。方法一旦执行，就<strong>独占该锁</strong>，直到该方法返回才释放锁。后面被阻塞的线程才能获得这个锁,继续执行。</p><p>缺陷：若将一个大的方法申明为synchronized将会<strong>影响效率</strong>。</p><blockquote><p>方法里面<strong>需要修改的内容</strong>才需要锁，锁得太多，浪费资源。</p></blockquote><h2 id="同步块" tabindex="-1"><a class="header-anchor" href="#同步块" aria-hidden="true">#</a> 同步块</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>同步块：<span class="token keyword">synchronized</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>obj称之为<strong>同步监视器</strong></p></blockquote><ul><li>obj可以是任何对象,但是推荐使用<strong>共享资源</strong>作为同步监视器</li><li>同步方法中无需指定同步监视器,因为同步方法的同步监视器就是this,就是这个对象本身,或者是class[反射中讲解]。</li></ul><blockquote><p>同步监视器的执行过程</p></blockquote><ol><li>第一个线程访问，锁定同步监视器，执行其中代码。</li><li>第二个线程访问，发现同步监视器被锁定，无法访问。</li><li>第一个线程访问完毕，解锁同步监视器。</li><li>第二个线程访问，发现同步监视器没有锁，然后锁定并访问。</li></ol><h2 id="安全的买票" tabindex="-1"><a class="header-anchor" href="#安全的买票" aria-hidden="true">#</a> 安全的买票</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnsafeBuyTicket</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BuyTicket</span> station <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuyTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>station<span class="token punctuation">,</span><span class="token string">&quot;苦逼的我&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>station<span class="token punctuation">,</span><span class="token string">&quot;牛逼的你们&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>station<span class="token punctuation">,</span><span class="token string">&quot;可恶的黄牛党&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BuyTicket</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 票 **/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> ticketNums <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 外部停止标识 **/</span>
    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 买票</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * synchronized 同步方法。锁得是this
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">buy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断是否有票</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ticketNums <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 买票</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;拿到了第&quot;</span><span class="token operator">+</span>ticketNums<span class="token operator">--</span><span class="token operator">+</span><span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>苦逼的我拿到了第<span class="token number">10</span>张票
可恶的黄牛党拿到了第<span class="token number">9</span>张票
牛逼的你们拿到了第<span class="token number">8</span>张票
苦逼的我拿到了第<span class="token number">7</span>张票
可恶的黄牛党拿到了第<span class="token number">6</span>张票
牛逼的你们拿到了第<span class="token number">5</span>张票
苦逼的我拿到了第<span class="token number">4</span>张票
可恶的黄牛党拿到了第<span class="token number">3</span>张票
牛逼的你们拿到了第<span class="token number">2</span>张票
苦逼的我拿到了第<span class="token number">1</span>张票

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全的取钱" tabindex="-1"><a class="header-anchor" href="#安全的取钱" aria-hidden="true">#</a> 安全的取钱</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnsafeBank</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Account</span> account <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token string">&quot;结婚基金&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Drawing</span> you <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span><span class="token string">&quot;你&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Drawing</span> girlFriend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token string">&quot;girlFriend&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        you<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        girlFriend<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 余额 **/</span>
    <span class="token keyword">int</span> money<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 卡名 **/</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token keyword">int</span> money<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> money<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Drawing</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 账户 **/</span>
    <span class="token class-name">Account</span> account<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 取多少钱 **/</span>
    <span class="token keyword">int</span> drawingMoney<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 现在手里有多少钱 **/</span>
    <span class="token keyword">int</span> nowMoney<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span><span class="token class-name">Account</span> account<span class="token punctuation">,</span><span class="token keyword">int</span> drawingMoney<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>account <span class="token operator">=</span> account<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>drawingMoney <span class="token operator">=</span> drawingMoney<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 取钱
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 锁得对象是变化的量：需要增删改</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>account<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 判断有没有钱</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>account<span class="token punctuation">.</span>money <span class="token operator">-</span> drawingMoney <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;钱不够了,取不了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 卡内余额 = 余额 - 取的钱</span>
            account<span class="token punctuation">.</span>money <span class="token operator">=</span> account<span class="token punctuation">.</span>money <span class="token operator">-</span> drawingMoney<span class="token punctuation">;</span>
            <span class="token comment">// 手里的钱</span>
            nowMoney <span class="token operator">=</span> nowMoney <span class="token operator">+</span> drawingMoney<span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&quot;余额为：&quot;</span><span class="token operator">+</span>account<span class="token punctuation">.</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;手里的钱：&quot;</span> <span class="token operator">+</span> nowMoney<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果1：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>结婚基金余额为：<span class="token number">950</span>
你手里的钱：<span class="token number">50</span>
结婚基金余额为：<span class="token number">850</span>
girlFriend手里的钱：<span class="token number">100</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果2：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>结婚基金余额为：<span class="token number">900</span>
girlFriend手里的钱：<span class="token number">100</span>
结婚基金余额为：<span class="token number">850</span>
你手里的钱：<span class="token number">50</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全的集合" tabindex="-1"><a class="header-anchor" href="#安全的集合" aria-hidden="true">#</a> 安全的集合</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnsafeList</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">10000</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当去掉延时的时候，发现打印的小于10000。这是因为<strong>打印语句是由主线程执行</strong>的，主线程虽然执行完了（电脑性能太好），但是往集合中<strong>添加元素的线程还没有执行完</strong>。这样打印结果就小于10000了。但是此时还是线程安全。</p>`,25),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","22.同步方法及同步块.html.vue"]]);export{k as default};
