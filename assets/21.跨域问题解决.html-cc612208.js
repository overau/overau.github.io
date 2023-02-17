import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const e={},p=t(`<p><code>浏览器出于安全的考虑</code>，使用XMLHttpRequest对象发起HTTP请求时必须遵守<code>同源第略</code>，否则就是跨域的HTTP请求，默认情况下是被禁止的。同源策略要求源相同才能正常进行通信，即协议、域名、端口号都完全一致。</p><p>前后端分离项目，前端项目和后端项目一般都不是同源的，所以肯定会存在跨域请求的问题。所以我们就要处理一下，让前端能进行跨域请求。</p><h2 id="springboot配置跨域请求" tabindex="-1"><a class="header-anchor" href="#springboot配置跨域请求" aria-hidden="true">#</a> SpringBoot配置跨域请求</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 设置允许跨域请求的路径</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 设置允许跨域请求的域名</span>
                <span class="token punctuation">.</span><span class="token function">allowedOriginPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 是否允许cookie</span>
                <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token comment">// 设置允许的请求方式</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 设置允许的header</span>
                <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 跨域允许时间</span>
                <span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开启springsecurity的跨域访问" tabindex="-1"><a class="header-anchor" href="#开启springsecurity的跨域访问" aria-hidden="true">#</a> 开启SpringSecurity的跨域访问</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableGlobalMethodSecurity</span><span class="token punctuation">(</span>prePostEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">JwtAuthenticationTokenFilter</span> jwtAuthenticationTokenFilter<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AuthenticationEntryPoint</span> authenticationEntryPoint<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AccessDeniedHandler</span> accessDeniedHandler<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">AuthenticationManager</span> <span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 关闭csrf</span>
        http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 不通过session获取SecurityContext</span>
                <span class="token punctuation">.</span><span class="token function">sessionManagement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sessionCreationPolicy</span><span class="token punctuation">(</span><span class="token class-name">SessionCreationPolicy</span><span class="token punctuation">.</span><span class="token constant">STATELESS</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 对于登录接口,允许匿名访问</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/user/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 除上面外的所有请求全部需要鉴权认证</span>
                <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 配置认证过滤器在UsernamePasswordAuthenticationFilter之前</span>
        http<span class="token punctuation">.</span><span class="token function">addFilterBefore</span><span class="token punctuation">(</span>jwtAuthenticationTokenFilter<span class="token punctuation">,</span> <span class="token class-name">UsernamePasswordAuthenticationFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        http<span class="token punctuation">.</span><span class="token function">exceptionHandling</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 认证失败处理器</span>
                <span class="token punctuation">.</span><span class="token function">authenticationEntryPoint</span><span class="token punctuation">(</span>authenticationEntryPoint<span class="token punctuation">)</span>
                <span class="token comment">// 授权异常处理器</span>
                <span class="token punctuation">.</span><span class="token function">accessDeniedHandler</span><span class="token punctuation">(</span>accessDeniedHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 允许跨域</span>
        http<span class="token punctuation">.</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","21.跨域问题解决.html.vue"]]);export{d as default};
