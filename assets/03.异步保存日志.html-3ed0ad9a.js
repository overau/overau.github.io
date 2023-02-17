import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const p={},e=t(`<h2 id="线程池配置" tabindex="-1"><a class="header-anchor" href="#线程池配置" aria-hidden="true">#</a> 线程池配置</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 线程池配置
 *
 * <span class="token keyword">@author</span> ruoyi
 **/</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolConfig</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 核心线程池大小</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> corePoolSize <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>

    <span class="token comment">// 最大可创建的线程数</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxPoolSize <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

    <span class="token comment">// 队列最大长度</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> queueCapacity <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>

    <span class="token comment">// 线程池维护线程所允许的空闲时间</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> keepAliveSeconds <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;threadPoolTaskExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ThreadPoolTaskExecutor</span> <span class="token function">threadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">ThreadPoolTaskExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setMaxPoolSize</span><span class="token punctuation">(</span>maxPoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setCorePoolSize</span><span class="token punctuation">(</span>corePoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setQueueCapacity</span><span class="token punctuation">(</span>queueCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setKeepAliveSeconds</span><span class="token punctuation">(</span>keepAliveSeconds<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 线程池对拒绝任务(无线程可用)的处理策略</span>
        executor<span class="token punctuation">.</span><span class="token function">setRejectedExecutionHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>CallerRunsPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> executor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 执行周期性或定时任务
     */</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;scheduledExecutorService&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> <span class="token class-name">ScheduledExecutorService</span> <span class="token function">scheduledExecutorService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledThreadPoolExecutor</span><span class="token punctuation">(</span>corePoolSize<span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">BasicThreadFactory<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">namingPattern</span><span class="token punctuation">(</span><span class="token string">&quot;schedule-pool-%d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">daemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>CallerRunsPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterExecute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> t<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterExecute</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Threads</span><span class="token punctuation">.</span><span class="token function">printException</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步工厂" tabindex="-1"><a class="header-anchor" href="#异步工厂" aria-hidden="true">#</a> 异步工厂</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 异步工厂（产生任务用）
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> sys_user_logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;sys-user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 记录登录信息
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">username</span> 用户名
     * <span class="token keyword">@param</span> <span class="token parameter">status</span> 状态
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> 列表
     * <span class="token keyword">@return</span> 任务task
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TimerTask</span> <span class="token function">recordLogininfor</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> status<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> message<span class="token punctuation">,</span>
            <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">UserAgent</span> userAgent <span class="token operator">=</span> <span class="token class-name">UserAgent</span><span class="token punctuation">.</span><span class="token function">parseUserAgentString</span><span class="token punctuation">(</span><span class="token class-name">ServletUtils</span><span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">String</span> ip <span class="token operator">=</span> <span class="token class-name">IpUtils</span><span class="token punctuation">.</span><span class="token function">getIpAddr</span><span class="token punctuation">(</span><span class="token class-name">ServletUtils</span><span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name">String</span> address <span class="token operator">=</span> <span class="token class-name">AddressUtils</span><span class="token punctuation">.</span><span class="token function">getRealAddressByIP</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">StringBuilder</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">LogUtils</span><span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
                s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">LogUtils</span><span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">LogUtils</span><span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">LogUtils</span><span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 打印信息到日志</span>
                sys_user_logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 获取客户端操作系统</span>
                <span class="token class-name">String</span> os <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">getOperatingSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 获取客户端浏览器</span>
                <span class="token class-name">String</span> browser <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">getBrowser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 封装对象</span>
                <span class="token class-name">SysLogininfor</span> logininfor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SysLogininfor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                logininfor<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
                logininfor<span class="token punctuation">.</span><span class="token function">setIpaddr</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
                logininfor<span class="token punctuation">.</span><span class="token function">setLoginLocation</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
                logininfor<span class="token punctuation">.</span><span class="token function">setBrowser</span><span class="token punctuation">(</span>browser<span class="token punctuation">)</span><span class="token punctuation">;</span>
                logininfor<span class="token punctuation">.</span><span class="token function">setOs</span><span class="token punctuation">(</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>
                logininfor<span class="token punctuation">.</span><span class="token function">setMsg</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 日志状态</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">equalsAny</span><span class="token punctuation">(</span>status<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_SUCCESS</span><span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGOUT</span><span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">REGISTER</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    logininfor<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_FAIL</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    logininfor<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">FAIL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 插入数据</span>
                <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">ISysLogininforService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertLogininfor</span><span class="token punctuation">(</span>logininfor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 操作日志记录
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">operLog</span> 操作日志信息
     * <span class="token keyword">@return</span> 任务task
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TimerTask</span> <span class="token function">recordOper</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">SysOperLog</span> operLog<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 远程查询操作地点</span>
                operLog<span class="token punctuation">.</span><span class="token function">setOperLocation</span><span class="token punctuation">(</span><span class="token class-name">AddressUtils</span><span class="token punctuation">.</span><span class="token function">getRealAddressByIP</span><span class="token punctuation">(</span>operLog<span class="token punctuation">.</span><span class="token function">getOperIp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">ISysOperLogService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOperlog</span><span class="token punctuation">(</span>operLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步任务管理器" tabindex="-1"><a class="header-anchor" href="#异步任务管理器" aria-hidden="true">#</a> 异步任务管理器</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncManager</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 操作延迟10毫秒
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">OPERATE_DELAY_TIME</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 异步操作任务调度线程池
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">ScheduledExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;scheduledExecutorService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 单例模式
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">AsyncManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AsyncManager</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AsyncManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AsyncManager</span> <span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> me<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 执行任务
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">task</span> 任务
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">TimerTask</span> task<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        executor<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token constant">OPERATE_DELAY_TIME</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 停止任务线程池
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Threads</span><span class="token punctuation">.</span><span class="token function">shutdownAndAwaitTermination</span><span class="token punctuation">(</span>executor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","03.异步保存日志.html.vue"]]);export{k as default};
