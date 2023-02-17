import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<h2 id="构建可重复读取inputstream的request" tabindex="-1"><a class="header-anchor" href="#构建可重复读取inputstream的request" aria-hidden="true">#</a> 构建可重复读取inputStream的request</h2><p>在判断是否为重复提交的方法中，使用了下面这段代码<code>获取请求参数</code>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isRepeatSubmit</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">RepeatSubmit</span> annotation<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">String</span> nowParams <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request <span class="token keyword">instanceof</span> <span class="token class-name">RepeatedlyRequestWrapper</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">RepeatedlyRequestWrapper</span> repeatedlyRequest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">RepeatedlyRequestWrapper</span><span class="token punctuation">)</span> request<span class="token punctuation">;</span>
        nowParams <span class="token operator">=</span> <span class="token class-name">HttpHelper</span><span class="token punctuation">.</span><span class="token function">getBodyString</span><span class="token punctuation">(</span>repeatedlyRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// body参数为空，获取Parameter的数据</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>nowParams<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        nowParams <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getParameterMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为什么不直接使用<code>request.getParameterMap()</code>获取参数，而是要先判断request的类型？</p></blockquote><ul><li><p>对于GET请求没有问题，可以很好的记录前端提交过来的参数。</p></li><li><p>根据POST请求中Content-Type类型我们常用的有下面几种：</p><ul><li>application/x-www-form-urlencoded：这种方式是最常见的方式，浏览器原生的form表单就是这种方式提交。</li><li>application/json：这种方式也算是一种常见的方式，当我们在提交一个复杂的对象时往往采用这种方式。</li><li>multipart/form-data：这种方式通常在使用表单上传文件时会用。</li></ul></li><li><p>当Content-Type为<code>application/json</code>时，通过调用Request对象中getParameter*相关方法是无法获取到请求参数的。</p></li></ul><blockquote><p>application/json解决方案及问题</p></blockquote><ul><li><p>可以通过读取Request中流的方式来获取请求JSON请求参数。但是因为Request中的流只能读取一次，我们在过滤器中读取之后，如果后面有再次读取流的操作就会导致服务异常，简单的说就是<strong>Request中获取的流不支持重复读取</strong>。</p></li><li><p>Servlet中提供了一个<code>HttpServletRequestWrapper</code>类，这个类是一个Wrapper类，可以通过它将原先获取流的方法包装一下，让它<code>支持重复读取</code>。</p><details class="hint-container details"><summary>详情</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 构建可重复读取inputStream的request
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RepeatedlyRequestWrapper</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServletRequestWrapper</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 缓存流</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">RepeatedlyRequestWrapper</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        request<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">UTF8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">UTF8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        body <span class="token operator">=</span> <span class="token class-name">HttpHelper</span><span class="token punctuation">.</span><span class="token function">getBodyString</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">UTF8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BufferedReader</span> <span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取流的时候，用缓存的流body创建一个新流</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletInputStream</span> <span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">ByteArrayInputStream</span> bais <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ServletInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> bais<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> body<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFinished</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setReadListener</span><span class="token punctuation">(</span><span class="token class-name">ReadListener</span> readListener<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li></ul><p>在获取流的同时将流里面的内容缓存起来，如果再次获取流时返回一个新创建的流给你。</p><blockquote><p>执行流程</p></blockquote><ul><li><p>如果是普通的GET请求，直接使用request的方法回去请求参数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// body参数为空，获取Parameter的数据</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>nowParams<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    nowParams <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getParameterMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果是POST请求，并且<code>content-type: application/json;charset=UTF-8</code>，就使用包装之后的request，通过流获取：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> nowParams <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>request <span class="token keyword">instanceof</span> <span class="token class-name">RepeatedlyRequestWrapper</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">RepeatedlyRequestWrapper</span> repeatedlyRequest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">RepeatedlyRequestWrapper</span><span class="token punctuation">)</span> request<span class="token punctuation">;</span>
    nowParams <span class="token operator">=</span> <span class="token class-name">HttpHelper</span><span class="token punctuation">.</span><span class="token function">getBodyString</span><span class="token punctuation">(</span>repeatedlyRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HttpHelper工具类：</p><details class="hint-container details"><summary>详情</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 通用http工具封装
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpHelper</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span> <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">HttpHelper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getBodyString</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> line <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;getBodyString出现问题！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>reader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">try</span>
                <span class="token punctuation">{</span>
                    reader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">ExceptionUtils</span><span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li></ul>`,10),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","03.重要知识点.html.vue"]]);export{r as default};
