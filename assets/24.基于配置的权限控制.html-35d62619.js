import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const e={},p=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
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
                <span class="token comment">// 配置test接口的权限</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">&quot;system:dept:list&quot;</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>经过测试发现，如果同时使用了上面的类配置权限和使用@PreAuthorize注解，注解配置的优先生效。推荐使用注解进行权限控制。</p></blockquote>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","24.基于配置的权限控制.html.vue"]]);export{k as default};
