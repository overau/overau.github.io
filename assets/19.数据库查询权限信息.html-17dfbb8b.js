import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t="/img/springsecurity/rbac-model-03.png",p="/img/springsecurity/rbac-model-04.png",i="/img/springsecurity/rbac-model-05.png",c="/img/springsecurity/rbac-model-06.png",l={},o=e(`<h2 id="定义mapper接口" tabindex="-1"><a class="header-anchor" href="#定义mapper接口" aria-hidden="true">#</a> 定义mapper接口</h2><blockquote><p>Menu实体类</p></blockquote><p>这里使用的是IDEA的插件easy-code生成的，比较方便。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;sys_menu&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Menu</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@TableId</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 菜单名
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> menuName<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 路由地址
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> path<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 组件路径
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> component<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 菜单状态(0显示1隐藏)
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> visible<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 菜单状态(0正常1停用)
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> status<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 权限标识
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> perms<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 菜单图标
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> icon<span class="token punctuation">;</span>
    
         
    <span class="token keyword">private</span> <span class="token class-name">Long</span> createBy<span class="token punctuation">;</span>
    
         
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    
         
    <span class="token keyword">private</span> <span class="token class-name">Long</span> updateBy<span class="token punctuation">;</span>
    
         
    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 是否删除(0未删除1已删除)
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> delFlag<span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 备注
     */</span>     
    <span class="token keyword">private</span> <span class="token class-name">String</span> remark<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mapper接口</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MenuMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 根据用户ID查询权限信息
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span> 用户ID
     * <span class="token keyword">@return</span> 权限信息
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectPermsById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapper文件编写" tabindex="-1"><a class="header-anchor" href="#mapper文件编写" aria-hidden="true">#</a> mapper文件编写</h2><blockquote><p>需要在配置文件中指定mapper文件位置。</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token important">*:/mapper/**/*.xml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>MenuMapper.xml</code></p><p>可以使用IDEA插件从mapper接口生成mapper文件。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.sanfen.mapper.MenuMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectPermsById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.String<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        SELECT
            DISTINCT m.perms
        FROM
            sys_user u
                LEFT JOIN sys_user_role ur ON u.id = ur.user_id
                LEFT JOIN sys_role r ON ur.role_id = r.id
                LEFT JOIN sys_role_menu rm ON r.id = rm.role_id
                LEFT JOIN sys_menu m ON rm.menu_id = m.id
        WHERE
            u.id = #{userId}
          AND u.status = 0
          AND r.status = 0
          AND m.status = 0
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试mapper接口" tabindex="-1"><a class="header-anchor" href="#测试mapper接口" aria-hidden="true">#</a> 测试mapper接口</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">MenuMapper</span> menuMapper<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> perms <span class="token operator">=</span> menuMapper<span class="token punctuation">.</span><span class="token function">selectPermsById</span><span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>perms<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span>system<span class="token operator">:</span>dept<span class="token operator">:</span>list<span class="token punctuation">,</span> system<span class="token operator">:</span>test<span class="token operator">:</span>list<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改userdetailsserviceimpl" tabindex="-1"><a class="header-anchor" href="#修改userdetailsserviceimpl" aria-hidden="true">#</a> 修改UserDetailsServiceImpl</h2><blockquote><p>修改UserDetailsServiceImpl，从数据库获取权限信息，之前是写死的。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDetailsServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDetailsService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MenuMapper</span> menuMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserDetails</span> <span class="token function">loadUserByUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UsernameNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查询用户信息</span>
        <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getUserName</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果没有查询到用户,就抛出异常</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;用户名或者密码错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//从数据库查询对应的权限信息</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> permissionList <span class="token operator">=</span> menuMapper<span class="token punctuation">.</span><span class="token function">selectPermsById</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LoginUser</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> permissionList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试数据库查询的权限" tabindex="-1"><a class="header-anchor" href="#测试数据库查询的权限" aria-hidden="true">#</a> 测试数据库查询的权限</h2><blockquote><p>测试接口</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@PreAuthorize</span><span class="token punctuation">(</span><span class="token string">&quot;hasAuthority(&#39;system:test:list&#39;)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;hello SpringSecurity&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在UserDetailsServiceImpl中打一个断点看看：</p><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>登录成功后，查看redis：</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用登录成功后的token访问test接口，在认证拦截器JwtAuthenticationTokenFilter打个断点：</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>放行，访问成功：</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',30),u=[o];function r(d,m){return s(),a("div",null,u)}const k=n(l,[["render",r],["__file","19.数据库查询权限信息.html.vue"]]);export{k as default};
