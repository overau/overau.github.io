import{_ as n,V as s,W as e,X as a}from"./framework-a569e214.js";const i="/img/redis/image-20201230135701639.png",l="/img/redis/image-20201230140042185.png",t={},o=a('<p>启动的时候，就通过配置文件来启动。</p><blockquote><p>单位</p></blockquote><figure><img src="'+i+'" alt="image-20201230135701639" tabindex="0" loading="lazy"><figcaption>image-20201230135701639</figcaption></figure><p>配置文件 unit单位 对大小写不敏感。</p><blockquote><p>包含</p></blockquote><figure><img src="'+l+`" alt="image-20201230140042185" tabindex="0" loading="lazy"><figcaption>image-20201230140042185</figcaption></figure><p>就是好比我们学习Spring的import标签。</p><blockquote><p>网络</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 绑定IP地址</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1

<span class="token comment"># 保护模式</span>
protected-mode <span class="token function">yes</span>

<span class="token comment"># 端口设置</span>
port <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>GENERAL</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以守护进程的方式进行。默认是no。我们需要自己开启为yes</span>
daemonize <span class="token function">yes</span>

<span class="token comment"># 如果以后台的方式运行，我们就需要指定一个pid文件</span>
pidfile <span class="token string">&quot;/var/run/redis_6379.pid&quot;</span>

<span class="token comment"># 日志</span>
<span class="token comment"># Specify the server verbosity level.</span>
<span class="token comment"># This can be one of:</span>
<span class="token comment"># debug (a lot of information, useful for development/testing)</span>
<span class="token comment"># verbose (many rarely useful info, but not a mess like the debug level)</span>
<span class="token comment"># notice (moderately verbose, what you want in production probably) 生产环境</span>
<span class="token comment"># warning (only very important / critical messages are logged)</span>
loglevel notice

<span class="token comment"># Specify the log file name. Also the empty string can be used to force</span>
<span class="token comment"># Redis to log on the standard output. Note that if you use standard</span>
<span class="token comment"># output for logging but daemonize, logs will be sent to /dev/null</span>
logfile <span class="token string">&quot;&quot;</span>		<span class="token comment"># 日志的文件位置名</span>

<span class="token comment"># Set the number of databases. The default database is DB 0, you can select</span>
<span class="token comment"># a different one on a per-connection basis using SELECT &lt;dbid&gt; where</span>
<span class="token comment"># dbid is a number between 0 and &#39;databases&#39;-1</span>
databases <span class="token number">16</span>	<span class="token comment"># 数据库数量，默认16个</span>

<span class="token comment"># By default Redis shows an ASCII art logo only when started to log to the</span>
<span class="token comment"># standard output and if the standard output is a TTY. Basically this means</span>
<span class="token comment"># that normally a logo is displayed only in interactive sessions.</span>
<span class="token comment">#</span>
<span class="token comment"># However it is possible to force the pre-4.0 behavior and always show a</span>
<span class="token comment"># ASCII art logo in startup logs by setting the following option to yes.</span>
always-show-logo <span class="token function">yes</span>	<span class="token comment"># 是否总是显示logo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>SNAPSHOTTING 快照</p></blockquote><p>持久化，在规定的时间内，执行了多少次操作，则会持久化到文件 .rdb .aof。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 900s内，至少有一个key进行了修改，就进行持久化操作</span>
save <span class="token number">900</span> <span class="token number">1</span>
<span class="token comment"># 300s内，至少有10个key进行了修改，就进行持久化操作</span>
save <span class="token number">300</span> <span class="token number">10</span>
<span class="token comment"># 60s内，至少有10000个key进行了修改，就进行持久化操作</span>
save <span class="token number">60</span> <span class="token number">10000</span>

<span class="token comment"># 我们之后学习持久化，会自己设置</span>

<span class="token comment"># 持久化出错，是否还需要继续工作</span>
stop-writes-on-bgsave-error <span class="token function">yes</span>

<span class="token comment"># 是否压缩rdb文件，需要消耗CPU资源</span>
rdbcompression <span class="token function">yes</span>

<span class="token comment"># 保存rdb文件的时候，进行检查校验</span>
rdbchecksum <span class="token function">yes</span>

<span class="token comment"># The filename where to dump the DB</span>
dbfilename <span class="token string">&quot;dump.rdb&quot;</span>

<span class="token comment"># rdb文件保存的目录</span>
<span class="token function">dir</span> <span class="token string">&quot;/usr/local/bin&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>REPLICATION 复制</p></blockquote><blockquote><p>SECURITY 安全</p></blockquote><p>Redis密码设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;requirepass&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config <span class="token builtin class-name">set</span> requirepass ******		<span class="token comment"># 设置密码</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;requirepass&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;******&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config rewrite				<span class="token comment"># 将连接密码写进当前使用的redis.conf。不然下一次重启会报错</span>
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>CLIENTS 限制</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置能连接上redis客户端的最大连接数</span>
maxclients <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MEMORY MANAGEMENT</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># redis配置最大的内存容量</span>
maxmemory <span class="token operator">&lt;</span>bytes<span class="token operator">&gt;</span>
<span class="token comment"># 内存到达上限之后的处理策略：移除一些过期的key、报错</span>
maxmemory-policy noeviction
<span class="token comment"># 1、volatile-lru：只对设置了过期时间的key进行LRU（默认值） </span>
<span class="token comment"># 2、allkeys-lru ： 删除lru算法的key   </span>
<span class="token comment"># 3、volatile-random：随机删除即将过期key   </span>
<span class="token comment"># 4、allkeys-random：随机删除   </span>
<span class="token comment"># 5、volatile-ttl ： 删除即将过期的   </span>
<span class="token comment"># 6、noeviction ： 永不过期，返回错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>APPEND ONLY MODE 模式 AOF配置</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认不开启AOF模式。默认是使用RDB方式持久化的。在大部分所有的情况下，RDB完全够用</span>
appendonly no

<span class="token comment"># 持久化的文件名</span>
appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>

<span class="token comment"># appendfsync always	# 每次修改都会 sync。消耗性能</span>
appendfsync everysec 	<span class="token comment"># 每秒执行一次 sync，可能会丢失这1秒的数据</span>
<span class="token comment"># appendfsync no		# 不执行 sync，这个时候操作系统自己同步数据，速度最快</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[o];function d(p,m){return s(),e("div",null,c)}const u=n(t,[["render",d],["__file","26.Redis配置文件详解.html.vue"]]);export{u as default};
