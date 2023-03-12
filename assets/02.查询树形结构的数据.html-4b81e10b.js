import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const p="/img/code/image-20230312134235301.png",e={},o=t(`<h2 id="查询动态路由" tabindex="-1"><a class="header-anchor" href="#查询动态路由" aria-hidden="true">#</a> 查询动态路由</h2><h3 id="菜单vo" tabindex="-1"><a class="header-anchor" href="#菜单vo" aria-hidden="true">#</a> 菜单vo</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MenuVo</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 子菜单
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> children<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 菜单ID
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 菜单名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> menuName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 父菜单ID
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> parentId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 显示顺序
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> orderNum<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 路由地址
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> path<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 组件路径
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> component<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否为外链（0是 1否）
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> isFrame<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 菜单类型（M目录 C菜单 F按钮）
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> menuType<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 菜单状态（0显示 1隐藏）
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> visible<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 菜单状态（0正常 1停用）
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

    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> controller</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/getRouters&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RoutersVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getRouters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 获取当前登录用户</span>
    <span class="token class-name">Long</span> userId <span class="token operator">=</span> <span class="token class-name">SecurityUtils</span><span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 查询menu，结果是tree的形式</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> menus <span class="token operator">=</span> menuService<span class="token punctuation">.</span><span class="token function">selectRouterMenuTreeByUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 封装数据返回</span>
    <span class="token keyword">return</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">.</span><span class="token function">okResult</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RoutersVo</span><span class="token punctuation">(</span>menus<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回数据：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;menus&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content/article/write/index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-08 03:39:58&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;写博文&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;write&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content:article:writer&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system/user/index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-11-12 10:46:19&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户管理&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system:user:list&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system/role/index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-11-12 10:46:19&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;peoples&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;101&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;角色管理&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;role&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system:role:list&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system/menu/index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-11-12 10:46:19&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tree-table&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;102&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;菜单管理&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;menu&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system:menu:list&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-11-12 10:46:19&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;系统管理&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content/article/index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-08 02:53:10&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文章管理&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2017&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content:article:list&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content/category/index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-08 02:51:45&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分类管理&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2017&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content:category:list&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content/link/index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-08 02:56:50&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;404&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;友链管理&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2017&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content:link:list&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content/tag/index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-08 02:55:37&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标签管理&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2017&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content:tag:index&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-08 02:44:38&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;table&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2017&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;内容管理&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;405&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-12-06 11:25:42&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;404&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2041&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;405&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2039&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;405&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;405&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;buttton&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-12-06 11:27:03&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2042&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;buttton&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2039&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;buttton&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;buttton&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-12-06 11:24:34&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bug&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2039&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isFrame&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bug&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;menuType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;orderNum&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bug&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;perms&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="image-20230312134235301" tabindex="0" loading="lazy"><figcaption>image-20230312134235301</figcaption></figure><h3 id="service实现" tabindex="-1"><a class="header-anchor" href="#service实现" aria-hidden="true">#</a> service实现</h3><p>接口定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 根据用户id查询路由菜单
 * <span class="token keyword">@param</span> <span class="token parameter">userId</span> 用户id
 * <span class="token keyword">@return</span> 菜单(tree的形式)
 */</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectRouterMenuTreeByUserId</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口实现：</p><ul><li>先查询出所有的菜单，返回一个集合。</li><li>根据父id字段进行子菜单的设置，并且子菜单可能还有子菜单，也无法确定有多少层级，需要使用递归调用。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectRouterMenuTreeByUserId</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MenuMapper</span> menuMapper <span class="token operator">=</span> <span class="token function">getBaseMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> menus <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断是否是管理员</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">SecurityUtils</span><span class="token punctuation">.</span><span class="token function">isAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 是,返回所有符合要求的Menu</span>
        menus <span class="token operator">=</span> menuMapper<span class="token punctuation">.</span><span class="token function">selectAllRouterMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 否,获取当前用户所具有的Menu</span>
        menus <span class="token operator">=</span> menuMapper<span class="token punctuation">.</span><span class="token function">selectRouterMenuTreeByUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 构建tree: 先找出第一层的菜单,然后找它们的子菜单, 设置到children中</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> menuTree <span class="token operator">=</span> <span class="token function">builderMenuTree</span><span class="token punctuation">(</span>menus<span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> menuTree<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询菜单的sql：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--查询所有的路由菜单--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectAllRouterMenu<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.sanfen.domain.vo.MenuVo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT
        DISTINCT
            id,
            parent_id,
            menu_name,
            path,
            component,
            visible,
            status,
            IFNULL(perms,&#39;&#39;) AS perms,
            is_frame,
            menu_type,
            icon,
            order_num,
            create_time
    FROM sys_menu
    WHERE
        menu_type IN (&#39;C&#39;,&#39;M&#39;) AND
        status = 0 AND
        del_flag = 0
    ORDER By parent_id,order_num
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--根据用户id查询路由菜单--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectRouterMenuTreeByUserId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.sanfen.domain.vo.MenuVo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    SELECT
    DISTINCT
    m.id,
    m.parent_id,
    m.menu_name,
    m.path,
    m.component,
    m.visible,
    m.status,
    IFNULL(m.perms,&#39;&#39;) AS perms,
    m.is_frame,
    m.menu_type,
    m.icon,
    m.order_num,
    m.create_time
    FROM sys_user_role ur
    LEFT JOIN sys_role_menu rm on ur.role_id = rm.role_id
    LEFT JOIN sys_menu m on rm.menu_id = m.id
    WHERE
    ur.user_id = #{userId} AND
    m.menu_type IN (&#39;C&#39;,&#39;M&#39;) AND
    m.\`status\` = 0 AND
    m.del_flag = 0
    ORDER By m.parent_id,m.order_num
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造建树形菜单的关键代码：<code>builderMenuTree()</code>。这里传入的父菜单<code>parentId</code>是根节点，也就是根菜单。我们是<code>从树根自上而下构建菜单树</code>（也可以自下而上构建，原理差不多）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 根据查询到的Menu构建tree
 * <span class="token keyword">@param</span> <span class="token parameter">menus</span> 菜单集合
 * <span class="token keyword">@param</span> <span class="token parameter">parentId</span> 菜单的父id
 * <span class="token keyword">@return</span> menuTree
 */</span>
<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">builderMenuTree</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> menus<span class="token punctuation">,</span> <span class="token class-name">Long</span> parentId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> menuTree <span class="token operator">=</span> menus<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>menu <span class="token operator">-&gt;</span> menu<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>parentId<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>menu <span class="token operator">-&gt;</span> menu<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span><span class="token function">getChildren</span><span class="token punctuation">(</span>menu<span class="token punctuation">,</span> menus<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> menuTree<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里传入所有的菜单集合和父菜单的id，找出父菜单的孩子，并进行属性设置。通过一个方法<code>getChildren</code>获取传入菜单的孩子。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 查询指定菜单menu在menus中的子菜单集合
 * <span class="token keyword">@param</span> <span class="token parameter">menu</span> 指定菜单
 * <span class="token keyword">@param</span> <span class="token parameter">menus</span> 菜单集合
 * <span class="token keyword">@return</span> 传入菜单的子菜单集合
 */</span>
<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token class-name">MenuVo</span> menu<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> menus<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MenuVo</span><span class="token punctuation">&gt;</span></span> children <span class="token operator">=</span> menus<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>menu<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 子菜单还有子菜单: 递归调用</span>
            <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span><span class="token function">getChildren</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> menus<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> children<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[o];function l(u,i){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","02.查询树形结构的数据.html.vue"]]);export{k as default};
