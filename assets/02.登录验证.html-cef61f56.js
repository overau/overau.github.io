import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const e={},p=t(`<h2 id="接口设计" tabindex="-1"><a class="header-anchor" href="#接口设计" aria-hidden="true">#</a> 接口设计</h2><ul><li><p>请求地址：<code>/login</code></p></li><li><p>请求方式：<code>POST</code></p></li><li><p>请求参数：</p><table><thead><tr><th>字段</th><th>解释说明</th></tr></thead><tbody><tr><td>username</td><td>输入的用户名</td></tr><tr><td>password</td><td>输入的密码</td></tr><tr><td>code</td><td>输入的验证码</td></tr><tr><td>uuid</td><td>验证码唯一标识：前端请求验证码图片会返回这个标识</td></tr></tbody></table></li><li><p>响应格式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;操作成功&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjhhOGNmYzIzLTY5NWEtNDE5Ny1iNmFkLTIxZjE4MTc2YjA0MiJ9.6bYzfruw1z6peeID4RnHyj4fh5xkN0i7J9r5pSRD9rbnrcgHYMRwgqbjcph2Hx8JjnVe5ro6TZWrRKYoeYwTjQ&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><blockquote><p>SysLoginController</p></blockquote><p><code>com.ruoyi.web.controller.system.SysLoginController</code></p><h3 id="校验验证码" tabindex="-1"><a class="header-anchor" href="#校验验证码" aria-hidden="true">#</a> 校验验证码</h3><p><code>com.ruoyi.framework.web.service.SysLoginService</code></p><blockquote><p>获取验证码开关</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> captchaEnabled <span class="token operator">=</span> configService<span class="token punctuation">.</span><span class="token function">selectCaptchaEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 验证码开关</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>captchaEnabled<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">validateCaptcha</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> code<span class="token punctuation">,</span> uuid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从redis中获取验证码结果</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> verifyKey <span class="token operator">=</span> <span class="token class-name">CacheConstants</span><span class="token punctuation">.</span><span class="token constant">CAPTCHA_CODE_KEY</span> <span class="token operator">+</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">nvl</span><span class="token punctuation">(</span>uuid<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1.从redis中获取验证码结果</span>
<span class="token class-name">String</span> captcha <span class="token operator">=</span> redisCache<span class="token punctuation">.</span><span class="token function">getCacheObject</span><span class="token punctuation">(</span>verifyKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.删除redis中已经使用过的验证码</span>
redisCache<span class="token punctuation">.</span><span class="token function">deleteObject</span><span class="token punctuation">(</span>verifyKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>验证码校验</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 验证码过期</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>captcha <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordLogininfor</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_FAIL</span><span class="token punctuation">,</span> <span class="token class-name">MessageUtils</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&quot;user.jcaptcha.expire&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CaptchaExpireException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输入验证码不正确</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>code<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>captcha<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordLogininfor</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_FAIL</span><span class="token punctuation">,</span> <span class="token class-name">MessageUtils</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&quot;user.jcaptcha.error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CaptchaException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户验证" tabindex="-1"><a class="header-anchor" href="#用户验证" aria-hidden="true">#</a> 用户验证</h3><blockquote><p>使用SpringSecurity的<code>AuthenticationManager</code>进行用户验证，并进行异常的处理</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Resource</span>
<span class="token keyword">private</span> <span class="token class-name">AuthenticationManager</span> authenticationManager<span class="token punctuation">;</span>

<span class="token comment">// 用户验证</span>
<span class="token class-name">Authentication</span> authentication <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">try</span>
<span class="token punctuation">{</span>
    <span class="token class-name">UsernamePasswordAuthenticationToken</span> authenticationToken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsernamePasswordAuthenticationToken</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">AuthenticationContextHolder</span><span class="token punctuation">.</span><span class="token function">setContext</span><span class="token punctuation">(</span>authenticationToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 该方法会去调用UserDetailsServiceImpl.loadUserByUsername</span>
    authentication <span class="token operator">=</span> authenticationManager<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>authenticationToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 用户不存在/密码错误</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">BadCredentialsException</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordLogininfor</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_FAIL</span><span class="token punctuation">,</span> <span class="token class-name">MessageUtils</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&quot;user.password.not.match&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UserPasswordNotMatchException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordLogininfor</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_FAIL</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>验证通过，更新用户登录信息</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">LoginUser</span> loginUser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">LoginUser</span><span class="token punctuation">)</span> authentication<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">recordLoginInfo</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 记录登录信息</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">recordLoginInfo</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">SysUser</span> sysUser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SysUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sysUser<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    sysUser<span class="token punctuation">.</span><span class="token function">setLoginIp</span><span class="token punctuation">(</span><span class="token class-name">IpUtils</span><span class="token punctuation">.</span><span class="token function">getIpAddr</span><span class="token punctuation">(</span><span class="token class-name">ServletUtils</span><span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sysUser<span class="token punctuation">.</span><span class="token function">setLoginDate</span><span class="token punctuation">(</span><span class="token class-name">DateUtils</span><span class="token punctuation">.</span><span class="token function">getNowDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 更新数据库中的登录信息</span>
    userService<span class="token punctuation">.</span><span class="token function">updateUserProfile</span><span class="token punctuation">(</span>sysUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成token" tabindex="-1"><a class="header-anchor" href="#生成token" aria-hidden="true">#</a> 生成token</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 生成token</span>
<span class="token keyword">return</span> tokenService<span class="token punctuation">.</span><span class="token function">createToken</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技术难点" tabindex="-1"><a class="header-anchor" href="#技术难点" aria-hidden="true">#</a> 技术难点</h2><h3 id="springsecurity用户验证" tabindex="-1"><a class="header-anchor" href="#springsecurity用户验证" aria-hidden="true">#</a> SpringSecurity用户验证</h3><h4 id="config配置类" tabindex="-1"><a class="header-anchor" href="#config配置类" aria-hidden="true">#</a> config配置类</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * spring security配置
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token annotation punctuation">@EnableGlobalMethodSecurity</span><span class="token punctuation">(</span>prePostEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> securedEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 自定义用户认证逻辑
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserDetailsService</span> userDetailsService<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 认证失败处理类
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AuthenticationEntryPointImpl</span> unauthorizedHandler<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 退出处理类
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">LogoutSuccessHandlerImpl</span> logoutSuccessHandler<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * token认证过滤器
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">JwtAuthenticationTokenFilter</span> authenticationTokenFilter<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 跨域过滤器
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CorsFilter</span> corsFilter<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 允许匿名访问的地址
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">PermitAllUrlProperties</span> permitAllUrl<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 解决 无法直接注入 AuthenticationManager
     *
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">AuthenticationManager</span> <span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * anyRequest          |   匹配所有请求路径
     * access              |   SpringEl表达式结果为true时可以访问
     * anonymous           |   匿名可以访问
     * denyAll             |   用户不能访问
     * fullyAuthenticated  |   用户完全认证可以访问（非remember-me下自动登录）
     * hasAnyAuthority     |   如果有参数，参数表示权限，则其中任何一个权限可以访问
     * hasAnyRole          |   如果有参数，参数表示角色，则其中任何一个角色可以访问
     * hasAuthority        |   如果有参数，参数表示权限，则其权限可以访问
     * hasIpAddress        |   如果有参数，参数表示IP地址，如果用户IP和参数匹配，则可以访问
     * hasRole             |   如果有参数，参数表示角色，则其角色可以访问
     * permitAll           |   用户可以任意访问
     * rememberMe          |   允许通过remember-me登录的用户访问
     * authenticated       |   用户登录后可访问
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> httpSecurity<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 注解标记允许匿名访问的url</span>
        <span class="token class-name">ExpressionUrlAuthorizationConfigurer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HttpSecurity</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span>ExpressionInterceptUrlRegistry registry <span class="token operator">=</span> httpSecurity<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        permitAllUrl<span class="token punctuation">.</span><span class="token function">getUrls</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>url <span class="token operator">-&gt;</span> registry<span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        httpSecurity
                <span class="token comment">// CSRF禁用，因为不使用session</span>
                <span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 认证失败处理类</span>
                <span class="token punctuation">.</span><span class="token function">exceptionHandling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticationEntryPoint</span><span class="token punctuation">(</span>unauthorizedHandler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 基于token，所以不需要session</span>
                <span class="token punctuation">.</span><span class="token function">sessionManagement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sessionCreationPolicy</span><span class="token punctuation">(</span><span class="token class-name">SessionCreationPolicy</span><span class="token punctuation">.</span><span class="token constant">STATELESS</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 过滤请求</span>
                <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 对于登录login 注册register 验证码captchaImage 允许匿名访问</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/register&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/captchaImage&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 静态资源，可匿名访问</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/*.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/**/*.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/**/*.css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/**/*.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/profile/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger-ui.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/swagger-resources/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/webjars/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/*/api-docs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/druid/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 除上面外的所有请求全部需要鉴权认证</span>
                <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">frameOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加Logout filter</span>
        httpSecurity<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logoutUrl</span><span class="token punctuation">(</span><span class="token string">&quot;/logout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logoutSuccessHandler</span><span class="token punctuation">(</span>logoutSuccessHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加JWT filter</span>
        httpSecurity<span class="token punctuation">.</span><span class="token function">addFilterBefore</span><span class="token punctuation">(</span>authenticationTokenFilter<span class="token punctuation">,</span> <span class="token class-name">UsernamePasswordAuthenticationFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加CORS filter</span>
        httpSecurity<span class="token punctuation">.</span><span class="token function">addFilterBefore</span><span class="token punctuation">(</span>corsFilter<span class="token punctuation">,</span> <span class="token class-name">JwtAuthenticationTokenFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        httpSecurity<span class="token punctuation">.</span><span class="token function">addFilterBefore</span><span class="token punctuation">(</span>corsFilter<span class="token punctuation">,</span> <span class="token class-name">LogoutFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 强散列哈希加密实现
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">BCryptPasswordEncoder</span> <span class="token function">bCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 身份认证接口
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span>
    <span class="token punctuation">{</span>
        auth<span class="token punctuation">.</span><span class="token function">userDetailsService</span><span class="token punctuation">(</span>userDetailsService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token function">bCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="authenticationentrypoint" tabindex="-1"><a class="header-anchor" href="#authenticationentrypoint" aria-hidden="true">#</a> AuthenticationEntryPoint</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 认证失败处理类 返回未授权
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthenticationEntryPointImpl</span> <span class="token keyword">implements</span> <span class="token class-name">AuthenticationEntryPoint</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">8970718410437077606L</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">commence</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">AuthenticationException</span> e<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> code <span class="token operator">=</span> <span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">UNAUTHORIZED</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;请求访问：{}，认证失败，无法访问系统资源&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletUtils</span><span class="token punctuation">.</span><span class="token function">renderString</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="logoutsuccesshandler" tabindex="-1"><a class="header-anchor" href="#logoutsuccesshandler" aria-hidden="true">#</a> LogoutSuccessHandler</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义退出处理类 返回成功
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogoutSuccessHandlerImpl</span> <span class="token keyword">implements</span> <span class="token class-name">LogoutSuccessHandler</span>
<span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TokenService</span> tokenService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 退出处理
     * 
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onLogoutSuccess</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Authentication</span> authentication<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">LoginUser</span> loginUser <span class="token operator">=</span> tokenService<span class="token punctuation">.</span><span class="token function">getLoginUser</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotNull</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">String</span> userName <span class="token operator">=</span> loginUser<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 删除用户缓存记录</span>
            tokenService<span class="token punctuation">.</span><span class="token function">delLoginUser</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">.</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 记录用户退出日志</span>
            <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordLogininfor</span><span class="token punctuation">(</span>userName<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGOUT</span><span class="token punctuation">,</span> <span class="token string">&quot;退出成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ServletUtils</span><span class="token punctuation">.</span><span class="token function">renderString</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token class-name">AjaxResult</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">,</span> <span class="token string">&quot;退出成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jwtauthenticationtokenfilter" tabindex="-1"><a class="header-anchor" href="#jwtauthenticationtokenfilter" aria-hidden="true">#</a> JwtAuthenticationTokenFilter</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * token过滤器 验证token有效性
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtAuthenticationTokenFilter</span> <span class="token keyword">extends</span> <span class="token class-name">OncePerRequestFilter</span>
<span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TokenService</span> tokenService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doFilterInternal</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">LoginUser</span> loginUser <span class="token operator">=</span> tokenService<span class="token punctuation">.</span><span class="token function">getLoginUser</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotNull</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token class-name">SecurityUtils</span><span class="token punctuation">.</span><span class="token function">getAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            tokenService<span class="token punctuation">.</span><span class="token function">verifyToken</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">UsernamePasswordAuthenticationToken</span> authenticationToken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UsernamePasswordAuthenticationToken</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> loginUser<span class="token punctuation">.</span><span class="token function">getAuthorities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            authenticationToken<span class="token punctuation">.</span><span class="token function">setDetails</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WebAuthenticationDetailsSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">buildDetails</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAuthentication</span><span class="token punctuation">(</span>authenticationToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="跨域处理" tabindex="-1"><a class="header-anchor" href="#跨域处理" aria-hidden="true">#</a> 跨域处理</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 跨域配置
 */</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">CorsFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">CorsConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span><span class="token function">setAllowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置访问源地址</span>
    config<span class="token punctuation">.</span><span class="token function">addAllowedOriginPattern</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置访问源请求头</span>
    config<span class="token punctuation">.</span><span class="token function">addAllowedHeader</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置访问源请求方法</span>
    config<span class="token punctuation">.</span><span class="token function">addAllowedMethod</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 有效期 1800秒</span>
    config<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">1800L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加映射路径，拦截一切请求</span>
    <span class="token class-name">UrlBasedCorsConfigurationSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    source<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回新的CorsFilter</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现userdetails" tabindex="-1"><a class="header-anchor" href="#实现userdetails" aria-hidden="true">#</a> 实现UserDetails</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 登录用户身份权限
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginUser</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetails</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用户ID
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> userId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 部门ID
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> deptId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用户唯一标识
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> token<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 登录时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> loginTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 过期时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> expireTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 登录IP地址
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ipaddr<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 登录地点
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> loginLocation<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 浏览器类型
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> browser<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 操作系统
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> os<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 权限列表
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> permissions<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用户信息
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">SysUser</span> user<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LoginUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">LoginUser</span><span class="token punctuation">(</span><span class="token class-name">SysUser</span> user<span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> permissions<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>permissions <span class="token operator">=</span> permissions<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">LoginUser</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token class-name">Long</span> deptId<span class="token punctuation">,</span> <span class="token class-name">SysUser</span> user<span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> permissions<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token operator">=</span> userId<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deptId <span class="token operator">=</span> deptId<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>permissions <span class="token operator">=</span> permissions<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 账户是否未过期,过期无法验证
     */</span>
    <span class="token annotation punctuation">@JSONField</span><span class="token punctuation">(</span>serialize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAccountNonExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 指定用户是否解锁,锁定的用户无法进行身份验证
     * 
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@JSONField</span><span class="token punctuation">(</span>serialize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAccountNonLocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 指示是否已过期的用户的凭据(密码),过期的凭据防止认证
     * 
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@JSONField</span><span class="token punctuation">(</span>serialize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isCredentialsNonExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 是否可用 ,禁用的用户不能身份验证
     * 
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@JSONField</span><span class="token punctuation">(</span>serialize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">GrantedAuthority</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAuthorities</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现userdetailsservice" tabindex="-1"><a class="header-anchor" href="#实现userdetailsservice" aria-hidden="true">#</a> 实现UserDetailsService</h4><ul><li>根据用户名到数据库查询。</li><li>判断数据库返回结果。</li><li>校验密码。</li><li>返回用户登录信息。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDetailsServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetailsService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">UserDetailsServiceImpl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ISysUserService</span> userService<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">SysPasswordService</span> passwordService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">SysPermissionService</span> permissionService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserDetails</span> <span class="token function">loadUserByUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UsernameNotFoundException</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 数据库查询用户信息</span>
        <span class="token class-name">SysUser</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">selectUserByUserName</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;登录用户：{} 不存在.&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token string">&quot;登录用户：&quot;</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token string">&quot; 不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">UserStatus</span><span class="token punctuation">.</span><span class="token constant">DELETED</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getDelFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;登录用户：{} 已被删除.&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token string">&quot;对不起，您的账号：&quot;</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token string">&quot; 已被删除&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">UserStatus</span><span class="token punctuation">.</span><span class="token constant">DISABLE</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;登录用户：{} 已被停用.&quot;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ServiceException</span><span class="token punctuation">(</span><span class="token string">&quot;对不起，您的账号：&quot;</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token string">&quot; 已停用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 密码校验</span>
        passwordService<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 封装权限信息进行返回</span>
        <span class="token keyword">return</span> <span class="token function">createLoginUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">UserDetails</span> <span class="token function">createLoginUser</span><span class="token punctuation">(</span><span class="token class-name">SysUser</span> user<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LoginUser</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token punctuation">,</span> permissionService<span class="token punctuation">.</span><span class="token function">getMenuPermission</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>密码校验：会记录密码错误次数，超过最大次数，限制登录。</p></blockquote><ul><li>SecurityContextHolder获取当前登录用户信息。</li><li>redis中获取密码错误次数。</li><li>BCryptPasswordEncoder进行密码校验。</li><li>校验成功，清除redis中的密码错误记录。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token class-name">SysUser</span> user<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 获取当前登录用户</span>
    <span class="token class-name">Authentication</span> usernamePasswordAuthenticationToken <span class="token operator">=</span> <span class="token class-name">AuthenticationContextHolder</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> usernamePasswordAuthenticationToken<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> usernamePasswordAuthenticationToken<span class="token punctuation">.</span><span class="token function">getCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 根据用户名从redis中获取密码错误次数</span>
    <span class="token class-name">Integer</span> retryCount <span class="token operator">=</span> redisCache<span class="token punctuation">.</span><span class="token function">getCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>retryCount <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        retryCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 密码错误次数达到上限，限制登录</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>retryCount <span class="token operator">&gt;=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>maxRetryCount<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordLogininfor</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_FAIL</span><span class="token punctuation">,</span>
                <span class="token class-name">MessageUtils</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&quot;user.password.retry.limit.exceed&quot;</span><span class="token punctuation">,</span> maxRetryCount<span class="token punctuation">,</span> lockTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UserPasswordRetryLimitExceedException</span><span class="token punctuation">(</span>maxRetryCount<span class="token punctuation">,</span> lockTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 密码不正确，记录错误次数到redis</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">matches</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        retryCount <span class="token operator">=</span> retryCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordLogininfor</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_FAIL</span><span class="token punctuation">,</span>
                <span class="token class-name">MessageUtils</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&quot;user.password.retry.limit.count&quot;</span><span class="token punctuation">,</span> retryCount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 记录错误次数到redis</span>
        redisCache<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token function">getCacheKey</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">,</span> retryCount<span class="token punctuation">,</span> lockTime<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MINUTES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UserPasswordNotMatchException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 密码正确</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 清除redis中的密码错误记录</span>
        <span class="token function">clearLoginRecordCache</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="token的生成和刷新" tabindex="-1"><a class="header-anchor" href="#token的生成和刷新" aria-hidden="true">#</a> token的生成和刷新</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 创建令牌
 *
 * <span class="token keyword">@param</span> <span class="token parameter">loginUser</span> 用户信息
 * <span class="token keyword">@return</span> 令牌
 */</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token class-name">LoginUser</span> loginUser<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token class-name">IdUtils</span><span class="token punctuation">.</span><span class="token function">fastUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    loginUser<span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setUserAgent</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">refreshToken</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用JWT生成token返回给前端</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> claims <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    claims<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_USER_KEY</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">createToken</span><span class="token punctuation">(</span>claims<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>刷新用户token：登录和登录之后访问资源都会进行刷新。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">refreshToken</span><span class="token punctuation">(</span><span class="token class-name">LoginUser</span> loginUser<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 刷新令牌有效期</span>
    loginUser<span class="token punctuation">.</span><span class="token function">setLoginTime</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    loginUser<span class="token punctuation">.</span><span class="token function">setExpireTime</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">.</span><span class="token function">getLoginTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> expireTime <span class="token operator">*</span> <span class="token constant">MILLIS_MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// login_tokens:b497d7d2-c739-4258-a9e9-758f98d5064e</span>
    <span class="token class-name">String</span> userKey <span class="token operator">=</span> <span class="token function">getTokenKey</span><span class="token punctuation">(</span>loginUser<span class="token punctuation">.</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 用户登录信息存入redis: </span>
    redisCache<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span>userKey<span class="token punctuation">,</span> loginUser<span class="token punctuation">,</span> expireTime<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MINUTES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用JWT生成token返回给前端</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 从数据声明生成令牌
 *
 * <span class="token keyword">@param</span> <span class="token parameter">claims</span> 数据声明
 * <span class="token keyword">@return</span> 令牌
 */</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> claims<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setClaims</span><span class="token punctuation">(</span>claims<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS512</span><span class="token punctuation">,</span> secret<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> token<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","02.登录验证.html.vue"]]);export{k as default};
