import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i={},c=e(`<h2 id="原来的步骤" tabindex="-1"><a class="header-anchor" href="#原来的步骤" aria-hidden="true">#</a> 原来的步骤</h2><p>UserDao.java接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 19:01
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取用户
     */</span>
    <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserDaoImpl.java实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 19:01
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;默认获取用户的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserService.java业务接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 19:02
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取用户
     */</span>
    <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserServiceImpl.java业务实现类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 19:03
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 组合引用调用dao层
     */</span>
    <span class="token class-name">UserDao</span> userDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDaoMySqlImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userDao<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="业务调用" tabindex="-1"><a class="header-anchor" href="#业务调用" aria-hidden="true">#</a> 业务调用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 19:05
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 用户实际调用的业务
         * dao层他们不需要接触
         */</span>
        <span class="token class-name">UserService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        service<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>默认获取用户的数据

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="需求有变动" tabindex="-1"><a class="header-anchor" href="#需求有变动" aria-hidden="true">#</a> 需求有变动</h2><p>需要使用MySQL数据库实现。则需要一个UserDao接口的MySQL实现类。并且在UserServiceImpl实现类中修改调用的dao层代码。</p><p>UserDaoMySqlImpl.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description UserDao接口MySQL实现
 * @Author Administrator
 * @Date 2020/12/2 19:08
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoMySqlImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MySQL获取数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserServiceImpl.java实现类中修改</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 19:03
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 组合引用调用dao层
     */</span>
<span class="token comment">//    UserDao userDao = new UserDaoImpl(); // 默认实现</span>
    <span class="token class-name">UserDao</span> userDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDaoMySqlImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userDao<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MySQL</span>获取数据

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缺陷" tabindex="-1"><a class="header-anchor" href="#缺陷" aria-hidden="true">#</a> 缺陷</h2><p>程序适应不了需求。每次需求变动都需要新增dao层实现类，并且修改service层实现类的调用代码。代码修改太多。当需求变得很频繁时，工作量太大。</p><h2 id="改进" tabindex="-1"><a class="header-anchor" href="#改进" aria-hidden="true">#</a> 改进</h2><p>在之前的业务中，用户的需求可能会影响我们原来的代码，我们需要根据用户的需求取修改原代码！如果程序代码量十分大，修改一次的代价十分昂贵！</p><p>我们在service层的实现类中使用一个set接口实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/2 19:03
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">UserDao</span> userDao<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 利用set方法动态实现值的注入
     * <span class="token keyword">@param</span> <span class="token parameter">userDao</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span> userDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userDao <span class="token operator">=</span> userDao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userDao<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>业务调用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 用户实际调用的业务
     * dao层他们不需要接触
     */</span>
    <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserDao</span> userDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDaoMySqlImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserServiceImpl</span><span class="token punctuation">)</span> userService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setUserDao</span><span class="token punctuation">(</span>userDao<span class="token punctuation">)</span><span class="token punctuation">;</span>
    userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MySQL</span>获取数据

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>把对UserDao的实现选择权交给了用户。service层的代码不用再修改。只需要扩展UserDao接口实现类，以及再业务调用的实现选择调用哪一种实现即可。service层代码不用在修改。</p></blockquote><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><ul><li>之前，是程序主动创建对象！控制权在程序猿手上！</li><li>使用了set注入后，<mark>程序不再具有主动性。而是变成了被动的接收对象</mark>。</li></ul><p>这种思想，从本质上解决了问题。我们能程序猿不用再去管理对象的创建了。系统的耦合性大大降低。可以更加地专注业务的实现。</p>`,35),p=[c];function l(t,o){return s(),a("div",null,p)}const u=n(i,[["render",l],["__file","03.IOC理论推导.html.vue"]]);export{u as default};
