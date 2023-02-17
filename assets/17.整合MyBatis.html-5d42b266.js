import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<h2 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p><code>application.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/test<span class="token punctuation">?</span>useSSL=true<span class="token important">&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> mapper/<span class="token important">*Mapper.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.hejin.pojo    
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">map-underscore-to-camel-case</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库创建表" tabindex="-1"><a class="header-anchor" href="#数据库创建表" aria-hidden="true">#</a> 数据库创建表</h2><p><code>t_user</code></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE t_user  (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`username\` varchar(255) NULL DEFAULT NULL,
  \`password\` varchar(255) NULL DEFAULT NULL,
  \`salt\` varchar(10) NULL DEFAULT NULL,
  \`birth\` datetime(0) NULL DEFAULT NULL,
  \`create_time\` datetime(0) NULL DEFAULT NULL,
  \`update_time\` datetime(0) NULL DEFAULT NULL,
  \`dept_id\` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (\`id\`) USING BTREE
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>t_dept</code></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE t_dept  (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`deptName\` varchar(255)  NULL DEFAULT NULL,
  \`createTime\` datetime(0) NULL DEFAULT NULL,
  \`updateTime\` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (\`id\`) USING BTREE
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实体类" tabindex="-1"><a class="header-anchor" href="#实体类" aria-hidden="true">#</a> 实体类</h2><blockquote><p>User</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> salt<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> deptId<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Dept</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dept</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> deptName<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapper接口" tabindex="-1"><a class="header-anchor" href="#mapper接口" aria-hidden="true">#</a> mapper接口</h2><p><code>UserMapper</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 根据ID查找用户
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 用户id
     * <span class="token keyword">@return</span> 用户对象
     */</span>
    <span class="token class-name">User</span> <span class="token function">findUserById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapper文件编写" tabindex="-1"><a class="header-anchor" href="#mapper文件编写" aria-hidden="true">#</a> mapper文件编写</h2><p><code>UserMapper.xml</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> mapper <span class="token constant">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>mapper namespace<span class="token operator">=</span><span class="token string">&quot;com.hejin.dao.UserMapper&quot;</span><span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>select id<span class="token operator">=</span><span class="token string">&quot;findUserById&quot;</span> resultType<span class="token operator">=</span><span class="token string">&quot;user&quot;</span><span class="token operator">&gt;</span>
        select <span class="token operator">*</span> from t_user where id <span class="token operator">=</span> #<span class="token punctuation">{</span>id<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>mapper<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service层" tabindex="-1"><a class="header-anchor" href="#service层" aria-hidden="true">#</a> service层</h2><p><code>UserService</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 根据ID查找用户
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 用户id
     * <span class="token keyword">@return</span> 用户对象
     */</span>
    <span class="token class-name">User</span> <span class="token function">findUserById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>UserServiceImpl</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findUserById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userMapper<span class="token punctuation">.</span><span class="token function">findUserById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="controller层" tabindex="-1"><a class="header-anchor" href="#controller层" aria-hidden="true">#</a> controller层</h2><p><code>UserController</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findUserById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">findUserById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),i=[p];function l(c,o){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","17.整合MyBatis.html.vue"]]);export{d as default};
