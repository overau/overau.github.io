import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t="/img/springboot/image-20201209105829278.png",e={},o=p('<blockquote><p>yaml可以直接给实体类赋值。</p></blockquote><p>@ConfigurationProperties IDEA爆红</p><figure><img src="'+t+`" alt="image-20201209105829278" tabindex="0" loading="lazy"><figcaption>image-20201209105829278</figcaption></figure><p>导入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configurationproperties" tabindex="-1"><a class="header-anchor" href="#configurationproperties" aria-hidden="true">#</a> @ConfigurationProperties</h2><blockquote><p>绑定yaml赋值</p></blockquote><p><code>application.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> hejin$<span class="token punctuation">{</span>random.uuid<span class="token punctuation">}</span>
  <span class="token key atrule">age</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>random.int<span class="token punctuation">}</span>
  <span class="token key atrule">happy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2020/12/09
  <span class="token key atrule">maps</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">k1</span><span class="token punctuation">:</span> v1<span class="token punctuation">,</span><span class="token key atrule">k2</span><span class="token punctuation">:</span> v2<span class="token punctuation">,</span><span class="token key atrule">k3</span><span class="token punctuation">:</span> v3<span class="token punctuation">}</span>
  <span class="token key atrule">list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> code
    <span class="token punctuation">-</span> music
    <span class="token punctuation">-</span> girl
  <span class="token key atrule">dog</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>person.hello<span class="token punctuation">:</span>hello<span class="token punctuation">}</span>_旺旺
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Person.java</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/9 10:41
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">,</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">,</span> <span class="token class-name">Date</span> birth<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>happy <span class="token operator">=</span> happy<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birth <span class="token operator">=</span> birth<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maps <span class="token operator">=</span> maps<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dog <span class="token operator">=</span> dog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, happy=&quot;</span> <span class="token operator">+</span> happy <span class="token operator">+</span>
                <span class="token string">&quot;, birth=&quot;</span> <span class="token operator">+</span> birth <span class="token operator">+</span>
                <span class="token string">&quot;, maps=&quot;</span> <span class="token operator">+</span> maps <span class="token operator">+</span>
                <span class="token string">&quot;, list=&quot;</span> <span class="token operator">+</span> list <span class="token operator">+</span>
                <span class="token string">&quot;, dog=&quot;</span> <span class="token operator">+</span> dog <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">getHappy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> happy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHappy</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> happy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>happy <span class="token operator">=</span> happy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBirth</span><span class="token punctuation">(</span><span class="token class-name">Date</span> birth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birth <span class="token operator">=</span> birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">getMaps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMaps</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maps <span class="token operator">=</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span> <span class="token function">getDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDog</span><span class="token punctuation">(</span><span class="token class-name">Dog</span> dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dog <span class="token operator">=</span> dog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>测试</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">Springboot02ConfigApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Person</span> person<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Person</span><span class="token punctuation">{</span>name<span class="token operator">=</span>&#39;hejin24d6439b<span class="token operator">-</span><span class="token number">6f</span>a0<span class="token operator">-</span><span class="token number">4</span>aec<span class="token operator">-</span>b3a5<span class="token operator">-</span>b6ba2b67699e&#39;<span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token operator">-</span><span class="token number">78022062</span><span class="token punctuation">,</span> happy<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">,</span> birth<span class="token operator">=</span><span class="token class-name">Wed</span> <span class="token class-name">Dec</span> <span class="token number">09</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span> <span class="token class-name">CST</span> <span class="token number">2020</span><span class="token punctuation">,</span> maps<span class="token operator">=</span><span class="token punctuation">{</span>k1<span class="token operator">=</span>v1<span class="token punctuation">,</span> k2<span class="token operator">=</span>v2<span class="token punctuation">,</span> k3<span class="token operator">=</span>v3<span class="token punctuation">}</span><span class="token punctuation">,</span> list<span class="token operator">=</span><span class="token punctuation">[</span>code<span class="token punctuation">,</span> music<span class="token punctuation">,</span> girl<span class="token punctuation">]</span><span class="token punctuation">,</span> dog<span class="token operator">=</span><span class="token class-name">Dog</span><span class="token punctuation">{</span>name<span class="token operator">=</span>&#39;hello_旺旺&#39;<span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token number">2020</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">09</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">22</span><span class="token operator">:</span><span class="token number">12.497</span>  <span class="token constant">INFO</span> <span class="token number">11948</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>extShutdownHook<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span>s<span class="token punctuation">.</span>s<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>ThreadPoolTaskExecutor</span>  <span class="token operator">:</span> <span class="token class-name">Shutting</span> down <span class="token class-name">ExecutorService</span> &#39;applicationTaskExecutor&#39;

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="propertysource" tabindex="-1"><a class="header-anchor" href="#propertysource" aria-hidden="true">#</a> @PropertySource</h2><blockquote><p>加载自定义properties配置文件</p></blockquote><p><code>hejin.properties</code></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">name</span><span class="token punctuation">=</span><span class="token value attr-value">哔哩哔哩</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Person.java</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Description TODO
 * @Author Administrator
 * @Date 2020/12/9 10:41
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token comment">// 加载指定的配置文件</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;classpath:hejin.properties&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// SPEL取出配置文件的值</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">,</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">,</span> <span class="token class-name">Date</span> birth<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>happy <span class="token operator">=</span> happy<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birth <span class="token operator">=</span> birth<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maps <span class="token operator">=</span> maps<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dog <span class="token operator">=</span> dog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, happy=&quot;</span> <span class="token operator">+</span> happy <span class="token operator">+</span>
                <span class="token string">&quot;, birth=&quot;</span> <span class="token operator">+</span> birth <span class="token operator">+</span>
                <span class="token string">&quot;, maps=&quot;</span> <span class="token operator">+</span> maps <span class="token operator">+</span>
                <span class="token string">&quot;, list=&quot;</span> <span class="token operator">+</span> list <span class="token operator">+</span>
                <span class="token string">&quot;, dog=&quot;</span> <span class="token operator">+</span> dog <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">getHappy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> happy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHappy</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> happy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>happy <span class="token operator">=</span> happy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBirth</span><span class="token punctuation">(</span><span class="token class-name">Date</span> birth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birth <span class="token operator">=</span> birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">getMaps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMaps</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maps <span class="token operator">=</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span> <span class="token function">getDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDog</span><span class="token punctuation">(</span><span class="token class-name">Dog</span> dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dog <span class="token operator">=</span> dog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[o];function l(i,u){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","03.配置文件.html.vue"]]);export{r as default};
