import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i={},t=e(`<h2 id="_01-安装nginx" tabindex="-1"><a class="header-anchor" href="#_01-安装nginx" aria-hidden="true">#</a> 01.安装nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># docker pull nginx:1.23.3</span>

<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /home/nginx/conf</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /home/nginx/log</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /home/nginx/html</span>

<span class="token punctuation">[</span>root@master nginx<span class="token punctuation">]</span><span class="token comment"># docker run --name nginx -p 9001:80 -d nginx:1.23.3</span>
7d95e62214f16efeb5611c29fdc32ec01fb2912c029d622a8ac5d0475227b036

<span class="token comment"># 将容器nginx.conf文件复制到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/nginx.conf /home/nginx/conf/nginx.conf
<span class="token comment"># 将容器conf.d文件夹下内容复制到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/conf.d /home/nginx/conf/conf.d
<span class="token comment"># 将容器中的html文件夹复制到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/usr/share/nginx/html /home/nginx/

<span class="token comment"># 删除正在运行的nginx容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> nginx

<span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/nginx/conf/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/nginx/log:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> nginx:1.23.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">web</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.23.3
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> /home/nginx/conf/nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf
   <span class="token punctuation">-</span> /home/nginx/conf/conf.d<span class="token punctuation">:</span>/etc/nginx/conf.d
   <span class="token punctuation">-</span> /home/nginx/log<span class="token punctuation">:</span>/var/log/nginx
   <span class="token punctuation">-</span> /home/nginx/html<span class="token punctuation">:</span>/usr/share/nginx/html
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> dev
      <span class="token punctuation">-</span> pro 
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> NGINX_HOST=foobar.com
   <span class="token punctuation">-</span> NGINX_PORT=80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-nginx配置" tabindex="-1"><a class="header-anchor" href="#_02-nginx配置" aria-hidden="true">#</a> 02.nginx配置</h2><h3 id="部署静态资源" tabindex="-1"><a class="header-anchor" href="#部署静态资源" aria-hidden="true">#</a> 部署静态资源</h3><ul><li>nginx可以作为静态Wb服务器来部署静态资源。静态资源指在服务端真实存在并且能够直接展示的一些文件，比如常见的html页面、css文件、js文件、图片、视频等资源。</li><li>相对于Tomcat，Nginx处理静态资源的能力更加高效，所以在生产环境下，一般都会将静态资源部署到Nginx中。</li><li>将静态资源部署到Nginx非常简单，只需要将文件复制到Nginx安装目录下的html目录中即可。</li></ul><p><code>nginx.conf</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user  nginx<span class="token punctuation">;</span>
worker_processes  auto<span class="token punctuation">;</span>

error_log  /var/log/nginx/error.log notice<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">8080</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
       
        location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><blockquote><p>正向代理</p></blockquote><ul><li>是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标（原始服务器），然后代理向原始服务器转交请求并将获得的内容返回给客户端。</li><li>正向代理的典型用途是为在防火墙内的局域网客户端提供访问Internet的途径。</li><li>正向代理一般是在客户端设置代理服务器，通过代理服务器转发请求，最终访问到目标服务器。</li></ul><blockquote><p>反向代理</p></blockquote><p>反向代理服务器位于用户与目标服务器之间，但是对于用户而言，反向代理服务器就相当于目标服务器，即用户直接访问反向代理服务器就可以获得目标服务器的资源，反向代理服务器负责将请求转发给目标服务器。用户不需要知道目标服务器的地址，也无须在用户端作任何设定。</p><p>配置<code>/home/nginx/conf/conf.d</code>下的<code>default.conf</code>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        <span class="token comment"># root   /usr/share/nginx/html;</span>
        <span class="token comment"># index  index.html index.htm;</span>
        proxy_pass   http://192.168.1.223:8080<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    root           html;</span>
    <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
    <span class="token comment">#    fastcgi_index  index.php;</span>
    <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
    <span class="token comment">#    include        fastcgi_params;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
    <span class="token comment"># concurs with nginx&#39;s one</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ /\\.ht {</span>
    <span class="token comment">#    deny  all;</span>
    <span class="token comment">#}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><p>早期的网站流量和业务功能都比较简单，单台服务器就可以满足基本需求，但是随着互联网的发展，业务流量越来越大并且业务逻辑也越来越复杂，单台服务器的性能及单点故障问题就凸显出来了，因此需要多台服务器组成应用集群，进行性能的水平扩展以及避免单点故障出现。</p><ul><li>应用集群：将同一应用部署到多台机器上，组成应用集群，接收负载均衡器分发的请求，进行业务处理并返回响应数据。</li><li>负载均衡器：将用户请求根据对应的负载均衡算法分发到应用集群中的一台服务器进行处理。</li></ul><p>配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream targetserver <span class="token punctuation">{</span>
    server <span class="token number">192.168</span>.1.223:8080<span class="token punctuation">;</span>
    server <span class="token number">192.168</span>.1.223:8081<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        <span class="token comment"># root   /usr/share/nginx/html;</span>
        <span class="token comment"># index  index.html index.htm;</span>
        proxy_pass   http://targetserver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ \\.php$ {</span>
    <span class="token comment">#    root           html;</span>
    <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
    <span class="token comment">#    fastcgi_index  index.php;</span>
    <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
    <span class="token comment">#    include        fastcgi_params;</span>
    <span class="token comment">#}</span>

    <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
    <span class="token comment"># concurs with nginx&#39;s one</span>
    <span class="token comment">#</span>
    <span class="token comment">#location ~ /\\.ht {</span>
    <span class="token comment">#    deny  all;</span>
    <span class="token comment">#}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>负载均衡策略：</p><table><thead><tr><th>轮询</th><th>默认方式</th></tr></thead><tbody><tr><td>weight</td><td>权重方式</td></tr><tr><td>ip_hash</td><td>依据ip分配方式</td></tr><tr><td>least_conn</td><td>最少连接方式</td></tr><tr><td>fair（第三方）</td><td>响应时间方式</td></tr><tr><td>url_hash（第三方）</td><td>依据URL分配方式</td></tr></tbody></table>`,22),l=[t];function c(p,o){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","03.nginx.html.vue"]]);export{u as default};
