import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const e={},t=p(`<h2 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>hutool工具<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>cn<span class="token punctuation">.</span>hutool<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>hutool<span class="token operator">-</span>all<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">5.7</span><span class="token number">.22</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>mybatis<span class="token operator">-</span>plus<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>baomidou<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>mybatis<span class="token operator">-</span>plus<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">3.4</span><span class="token number">.2</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>mysql驱动<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>mysql<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>mysql<span class="token operator">-</span>connector<span class="token operator">-</span>java<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>jwt<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>io<span class="token punctuation">.</span>jsonwebtoken<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>jjwt<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">0.9</span><span class="token number">.1</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>fastjson<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>alibaba<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>fastjson<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">1.2</span><span class="token number">.78</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>redis<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>data<span class="token operator">-</span>redis<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>springsecurity<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>security<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>lombok<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>projectlombok<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>lombok<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>optional<span class="token punctuation">&gt;</span></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>optional<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>web<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>web<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p><code>application.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/security<span class="token punctuation">?</span>useSSL=true<span class="token important">&amp;useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token important">*:/mapper/**/*.xml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis相关配置" tabindex="-1"><a class="header-anchor" href="#redis相关配置" aria-hidden="true">#</a> redis相关配置</h2><h3 id="fastjson序列化" tabindex="-1"><a class="header-anchor" href="#fastjson序列化" aria-hidden="true">#</a> fastjson序列化</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastJsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">RedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Charset</span> <span class="token constant">DEFAULT_CHARSET</span> <span class="token operator">=</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">ParserConfig</span><span class="token punctuation">.</span><span class="token function">getGlobalInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAutoTypeSupport</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">FastJsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>clazz <span class="token operator">=</span> clazz<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SerializationException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token class-name">SerializerFeature<span class="token punctuation">.</span>WriteClassName</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_CHARSET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SerializationException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> bytes <span class="token operator">||</span> bytes<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token constant">DEFAULT_CHARSET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">JavaType</span> <span class="token function">getJavaType</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">TypeFactory</span><span class="token punctuation">.</span><span class="token function">defaultInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructType</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis配置类" tabindex="-1"><a class="header-anchor" href="#redis配置类" aria-hidden="true">#</a> redis配置类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;customRedisTemplate&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rawtypes&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> connectionFactory<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>connectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FastJsonRedisSerializer</span> serializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FastJsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">;</span>

        template<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统一响应" tabindex="-1"><a class="header-anchor" href="#统一响应" aria-hidden="true">#</a> 统一响应</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@JsonInclude</span><span class="token punctuation">(</span><span class="token class-name">JsonInclude<span class="token punctuation">.</span>Include</span><span class="token punctuation">.</span><span class="token constant">NON_NULL</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 状态码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 提示信息
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 结果数据
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> data<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">,</span> <span class="token class-name">T</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具类" tabindex="-1"><a class="header-anchor" href="#工具类" aria-hidden="true">#</a> 工具类</h2><h3 id="jwt工具类" tabindex="-1"><a class="header-anchor" href="#jwt工具类" aria-hidden="true">#</a> JWT工具类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtUtil</span> <span class="token punctuation">{</span>

    <span class="token comment">//有效期为</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Long</span> <span class="token constant">JWT_TTL</span> <span class="token operator">=</span> <span class="token number">24</span><span class="token operator">*</span><span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span><span class="token number">1000L</span><span class="token punctuation">;</span><span class="token comment">// 60 * 60 *1000  一个小时</span>
    <span class="token comment">//设置秘钥明文</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">JWT_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;abcdefghijklmnopqrstuvwxyz&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 生成jtw
     * <span class="token keyword">@param</span> <span class="token parameter">subject</span> token中要存放的数据（json格式）
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createJWT</span><span class="token punctuation">(</span><span class="token class-name">String</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JwtBuilder</span> builder <span class="token operator">=</span> <span class="token function">getJwtBuilder</span><span class="token punctuation">(</span>subject<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">getUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 设置过期时间</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成jtw
     * <span class="token keyword">@param</span> <span class="token parameter">subject</span> token中要存放的数据（json格式）
     * <span class="token keyword">@param</span> <span class="token parameter">ttlMillis</span> token超时时间
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createJWT</span><span class="token punctuation">(</span><span class="token class-name">String</span> subject<span class="token punctuation">,</span> <span class="token class-name">Long</span> ttlMillis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JwtBuilder</span> builder <span class="token operator">=</span> <span class="token function">getJwtBuilder</span><span class="token punctuation">(</span>subject<span class="token punctuation">,</span> ttlMillis<span class="token punctuation">,</span> <span class="token function">getUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 设置过期时间</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">JwtBuilder</span> <span class="token function">getJwtBuilder</span><span class="token punctuation">(</span><span class="token class-name">String</span> subject<span class="token punctuation">,</span> <span class="token class-name">Long</span> ttlMillis<span class="token punctuation">,</span> <span class="token class-name">String</span> uuid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SignatureAlgorithm</span> signatureAlgorithm <span class="token operator">=</span> <span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS256</span><span class="token punctuation">;</span>
        <span class="token class-name">SecretKey</span> secretKey <span class="token operator">=</span> <span class="token function">generalKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> nowMillis <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>nowMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ttlMillis<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            ttlMillis<span class="token operator">=</span><span class="token class-name">JwtUtil</span><span class="token punctuation">.</span><span class="token constant">JWT_TTL</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> expMillis <span class="token operator">=</span> nowMillis <span class="token operator">+</span> ttlMillis<span class="token punctuation">;</span>
        <span class="token class-name">Date</span> expDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>expMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>uuid<span class="token punctuation">)</span>              <span class="token comment">//唯一的ID</span>
                <span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span>   <span class="token comment">// 主题  可以是JSON数据</span>
                <span class="token punctuation">.</span><span class="token function">setIssuer</span><span class="token punctuation">(</span><span class="token string">&quot;sg&quot;</span><span class="token punctuation">)</span>     <span class="token comment">// 签发者</span>
                <span class="token punctuation">.</span><span class="token function">setIssuedAt</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span>      <span class="token comment">// 签发时间</span>
                <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span>signatureAlgorithm<span class="token punctuation">,</span> secretKey<span class="token punctuation">)</span> <span class="token comment">//使用HS256对称加密算法签名, 第二个参数为秘钥</span>
                <span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span>expDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 创建token
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@param</span> <span class="token parameter">subject</span>
     * <span class="token keyword">@param</span> <span class="token parameter">ttlMillis</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createJWT</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> subject<span class="token punctuation">,</span> <span class="token class-name">Long</span> ttlMillis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JwtBuilder</span> builder <span class="token operator">=</span> <span class="token function">getJwtBuilder</span><span class="token punctuation">(</span>subject<span class="token punctuation">,</span> ttlMillis<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 设置过期时间</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjYWM2ZDVhZi1mNjVlLTQ0MDAtYjcxMi0zYWEwOGIyOTIwYjQiLCJzdWIiOiJzZyIsImlzcyI6InNnIiwiaWF0IjoxNjM4MTA2NzEyLCJleHAiOjE2MzgxMTAzMTJ9.JVsSbkP94wuczb4QryQbAke3ysBDIL5ou8fWsbt_ebg&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Claims</span> claims <span class="token operator">=</span> <span class="token function">parseJWT</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>claims<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成加密后的秘钥 secretKey
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SecretKey</span> <span class="token function">generalKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encodedKey <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">JwtUtil</span><span class="token punctuation">.</span><span class="token constant">JWT_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SecretKey</span> key <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecretKeySpec</span><span class="token punctuation">(</span>encodedKey<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> encodedKey<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token string">&quot;AES&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 解析
     *
     * <span class="token keyword">@param</span> <span class="token parameter">jwt</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Claims</span> <span class="token function">parseJWT</span><span class="token punctuation">(</span><span class="token class-name">String</span> jwt<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">SecretKey</span> secretKey <span class="token operator">=</span> <span class="token function">generalKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>secretKey<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>jwt<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis工具类" tabindex="-1"><a class="header-anchor" href="#redis工具类" aria-hidden="true">#</a> redis工具类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rawtypes&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisCache</span>
<span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;customRedisTemplate&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 缓存基本的对象，Integer、String、实体类等
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 缓存的键值
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 缓存的值
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 缓存基本的对象，Integer、String、实体类等
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 缓存的键值
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 缓存的值
     * <span class="token keyword">@param</span> <span class="token parameter">timeout</span> 时间
     * <span class="token keyword">@param</span> <span class="token parameter">timeUnit</span> 时间颗粒度
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">T</span> value<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> timeout<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">TimeUnit</span> timeUnit<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> timeUnit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置有效时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> Redis键
     * <span class="token keyword">@param</span> <span class="token parameter">timeout</span> 超时时间
     * <span class="token keyword">@return</span> true=设置成功；false=设置失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置有效时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> Redis键
     * <span class="token keyword">@param</span> <span class="token parameter">timeout</span> 超时时间
     * <span class="token keyword">@param</span> <span class="token parameter">unit</span> 时间单位
     * <span class="token keyword">@return</span> true=设置成功；false=设置失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的基本对象。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 缓存键值
     * <span class="token keyword">@return</span> 缓存键值对应的数据
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getCacheObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> operation <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> operation<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除单个对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">deleteObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除集合对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">collection</span> 多个对象
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">deleteObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Collection</span> collection<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 缓存List数据
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 缓存的键值
     * <span class="token keyword">@param</span> <span class="token parameter">dataList</span> 待缓存的List数据
     * <span class="token keyword">@return</span> 缓存的对象
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">long</span> <span class="token function">setCacheList</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataList<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dataList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的list对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 缓存的键值
     * <span class="token keyword">@return</span> 缓存键值对应的数据
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCacheList</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 缓存Set
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 缓存键值
     * <span class="token keyword">@param</span> <span class="token parameter">dataSet</span> 缓存的数据
     * <span class="token keyword">@return</span> 缓存数据的对象
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">BoundSetOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">setCacheSet</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataSet<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">BoundSetOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> setOperation <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">boundSetOps</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> dataSet<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            setOperation<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> setOperation<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的set
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCacheSet</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">members</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 缓存Map
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@param</span> <span class="token parameter">dataMap</span>
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">setCacheMap</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataMap<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataMap <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dataMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的Map
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCacheMap</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 往Hash中存入数据
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> Redis键
     * <span class="token keyword">@param</span> <span class="token parameter">hKey</span> Hash键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">setCacheMapValue</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> hKey<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> hKey<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取Hash中的数据
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> Redis键
     * <span class="token keyword">@param</span> <span class="token parameter">hKey</span> Hash键
     * <span class="token keyword">@return</span> Hash中的对象
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getCacheMapValue</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> hKey<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">HashOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> opsForHash <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> opsForHash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> hKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取多个Hash中的数据
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> Redis键
     * <span class="token keyword">@param</span> <span class="token parameter">hKeys</span> Hash键集合
     * <span class="token keyword">@return</span> Hash对象集合
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getMultiCacheMapValue</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> hKeys<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiGet</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> hKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的基本对象列表
     *
     * <span class="token keyword">@param</span> <span class="token parameter">pattern</span> 字符串前缀
     * <span class="token keyword">@return</span> 对象列表
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> pattern<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web工具类" tabindex="-1"><a class="header-anchor" href="#web工具类" aria-hidden="true">#</a> web工具类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">renderString</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实体类" tabindex="-1"><a class="header-anchor" href="#实体类" aria-hidden="true">#</a> 实体类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 主键
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用户名
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 昵称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> nickName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 密码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 账号状态: 0正常 1停用
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> status<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 邮箱
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 手机号
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> phoneNumber<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用户性别(0男，1女，2未知)
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 头像
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> avatar<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用户类型:0 管理员; 1 普通用户
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userType<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建人的用户ID
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> createBy<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建人的用户ID
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> updateBy<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 更新时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 删除标志: 0未删除 1已删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleteFlag<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[t];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","07.项目准备工作.html.vue"]]);export{k as default};
