import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i="/img/redis/image-20201230170746412.png",l="/img/redis/image-20201230162501461.png",p="/img/redis/image-20201230162944684.png",o="/img/redis/image-20201230164326860.png",t="/img/redis/image-20201231141225524.png",c="/img/redis/image-20201231130300533.png",r="/img/redis/image-20201231130815841.png",d="/img/redis/image-20201231131346481.png",u="/img/redis/image-20201231132631397.png",m={},b=e('<p>面试和工作，持久化是重点。</p><blockquote><p>Redis是内存数据库，如果不能内存中的数据库状态保存到磁盘，那么一旦服务器进程退出，服务器中的数据库状态也会消失。所以Redis提供了持久化功能。</p></blockquote><h2 id="持久化之rdb" tabindex="-1"><a class="header-anchor" href="#持久化之rdb" aria-hidden="true">#</a> 持久化之RDB</h2><blockquote><p>Redis DataBase</p></blockquote><figure><img src="'+i+'" alt="image-20201230170746412" tabindex="0" loading="lazy"><figcaption>image-20201230170746412</figcaption></figure><p>指定的时间间隔内将内存中的数据集快照写入磁盘，也就是行话讲的Snapshot快照，它恢复时是将快照文件直接读到内存中。</p><p>Redis会单独创建（fork）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何IO操作的。这就确保了极高的性能。如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那RDB方式比AOF方式更加地高效。RDB地缺点是最后一次持久化后的数据可能丢失。我们默认的就是RDB方式 ，一般情况下不需要修改这个配置。</p><p>有时候在生产环境我们会将这个文件备份。</p><p><code>rdb保存的文件是 dump.rdb</code></p><figure><img src="'+l+'" alt="image-20201230162501461" tabindex="0" loading="lazy"><figcaption>image-20201230162501461</figcaption></figure><p>测试</p><figure><img src="'+p+'" alt="image-20201230162944684" tabindex="0" loading="lazy"><figcaption>image-20201230162944684</figcaption></figure><blockquote><p>触发机制</p></blockquote><ul><li>save的规则满足的情况下，会自动触发rdb规则。</li><li>执行flushdb（第一次会）或者flushall命令。</li><li>退出redis，也会产生rdb文件。</li></ul><p>备份就会自动生成一个dump.rdb文件。</p><figure><img src="'+o+`" alt="image-20201230164326860" tabindex="0" loading="lazy"><figcaption>image-20201230164326860</figcaption></figure><blockquote><p>如何恢复rdb文件</p></blockquote><ul><li><p>只需要将rdb文件放在我们redis启动目录下就可以了。redis启动的时候会自动检查dump.rdb文件。恢复其中的数据。</p></li><li><p>查看需要存放的位置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get <span class="token function">dir</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;dir&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;/usr/local/bin&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>几乎默认的配置就够用了，但是还是需要我们去学习。</p></blockquote><blockquote><p>优点</p><ul><li>适合大规模的数据恢复。</li><li>对数据的完整性要求不高。</li></ul><p>缺点</p><ul><li>需要一定的时间间隔进行操作。如果redis意外宕机了，最后一次修改的数据就没了。</li><li>fork进程的时候，会占用一定的内存空间。</li></ul></blockquote><h2 id="持久化之aof" tabindex="-1"><a class="header-anchor" href="#持久化之aof" aria-hidden="true">#</a> 持久化之AOF</h2><blockquote><p>AOF Append Only File</p></blockquote><figure><img src="`+t+'" alt="image-20201231141225524" tabindex="0" loading="lazy"><figcaption>image-20201231141225524</figcaption></figure><p>在主从复制中，RDB就是备用的。从机上面。将我们的所有命令都记录下来，恢复的时候就把这个文件全部再执行一遍。</p><p>以日志的形式来记录每个写操作，将Redis执行过的所有指令记录下来（读操作不记录）。只允许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据。换言之，redis重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作。</p><p><code>aof保存的文件是 appendonly.aof</code></p><blockquote><p>APPEND ONLY MODE</p></blockquote><figure><img src="'+c+`" alt="image-20201231130300533" tabindex="0" loading="lazy"><figcaption>image-20201231130300533</figcaption></figure><p>默认是不开启的，需要手动进行配置。改为yes就开启了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Please check http://redis.io/topics/persistence for more information.</span>

appendonly <span class="token function">yes</span> <span class="token comment"># 默认是不开启的，需要手动进行配置。改为yes就开启了</span>

<span class="token comment"># The name of the append only file (default: &quot;appendonly.aof&quot;)</span>

appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>

<span class="token comment"># appendfsync always</span>
appendfsync everysec
<span class="token comment"># appendfsync no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启，redis就可以生效了。</p><figure><img src="`+r+`" alt="image-20201231130815841" tabindex="0" loading="lazy"><figcaption>image-20201231130815841</figcaption></figure><blockquote><p>破环appendonly.aof文件。redis就启动不了。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iz2ze88y8n1wfg7e488dbkz bin<span class="token punctuation">]</span><span class="token comment">#redis-server hconfig/redis.conf </span>
<span class="token punctuation">[</span>root@iz2ze88y8n1wfg7e488dbkz bin<span class="token punctuation">]</span><span class="token comment">#redis-cli -p 6379</span>
Could not connect to Redis at <span class="token number">127.0</span>.0.1:6379: Connection refused
not connected<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@iz2ze88y8n1wfg7e488dbkz bin<span class="token punctuation">]</span><span class="token comment">#ps -ef|grep redis</span>
root     <span class="token number">29533</span> <span class="token number">29183</span>  <span class="token number">0</span> <span class="token number">13</span>:12 pts/1    00:00:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修复appendonly.aof文件</p></blockquote><figure><img src="`+d+`" alt="image-20201231131346481" tabindex="0" loading="lazy"><figcaption>image-20201231131346481</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iz2ze88y8n1wfg7e488dbkz bin<span class="token punctuation">]</span><span class="token comment">#redis-check-aof --fix appendonly.aof </span>
0x              a8: Expected prefix <span class="token string">&#39;*&#39;</span>, got: <span class="token string">&#39;j&#39;</span>
AOF analyzed: <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">185</span>, <span class="token assign-left variable">ok_up_to</span><span class="token operator">=</span><span class="token number">168</span>, <span class="token assign-left variable">diff</span><span class="token operator">=</span><span class="token number">17</span>
This will shrink the AOF from <span class="token number">185</span> bytes, with <span class="token number">17</span> bytes, to <span class="token number">168</span> bytes
Continue? <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span>: y
Successfully truncated AOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启redis，成功，数据也恢复了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iz2ze88y8n1wfg7e488dbkz bin<span class="token punctuation">]</span><span class="token comment">#redis-server hconfig/redis.conf </span>
<span class="token punctuation">[</span>root@iz2ze88y8n1wfg7e488dbkz bin<span class="token punctuation">]</span><span class="token comment">#redis-cli -p 6379</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth ******
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;k3&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;k5&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;k1&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;k4&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;k2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>重写规则</p></blockquote><p>AOF默认是文件的无限制追加，文件就会越来越大。</p><figure><img src="`+u+`" alt="image-20201231132631397" tabindex="0" loading="lazy"><figcaption>image-20201231132631397</figcaption></figure><p>如果AOF文件大于64mb，太大了。就会fork一个新的进程来将我们的文件进行重写。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Please check http://redis.io/topics/persistence for more information.</span>

appendonly <span class="token function">yes</span> <span class="token comment"># 默认是不开启的，需要手动进行配置。改为yes就开启了</span>

<span class="token comment"># The name of the append only file (default: &quot;appendonly.aof&quot;)</span>

appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>

<span class="token comment"># appendfsync always</span>
appendfsync everysec
<span class="token comment"># appendfsync no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点</p><ul><li>每一次修改都同步，文件的完整性会更加好。</li><li>每秒同步一次，可能会丢失1秒的数据。</li><li>从不同步，效率是最高的。</li></ul><p>缺点</p><ul><li>相对于数据文件来说，AOF远远大于RDB，修复的速度也比RDB慢。</li><li>AOF运行效率也要比RDB慢，所以我们Redis默认的配置就是RDB持久化。</li></ul></blockquote><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><ul><li>RDB持久化方式能够在指定的时间间隔内对你的数据进行快照存储。</li><li>AOF下持久化方式记录每次对服务器写的操作，当服务器重启的时候会重新执行这些命令来恢复原始的数据。AOF命令以Redis协议追加保存每次写的操作到文件末尾。Redis还能对AOF文件进行后台重写，使得AOF的体积不至于过大。</li><li><code>只做缓存。入股你希望你的数据在服务器运行的时候存在，也可以不使用任何持久化。</code></li><li>同时开启两种方式 <ul><li>在这种情况下，当Redis重启的时候会优先载入AOF文件来恢复原始的数据，因为在通常情况下AOF文件保存的数据集要比RDB文件保存的数据集要完整。</li><li>RDB的数据不实时，同时使用两者时服务器重启也只会找AOF文件，那要不要只使用AOF呢？作者建议不要，因为RDB更适合用户备份数据库（AOF在不断变化不好备份）。快速重启，而且不会有AOF潜在的bug，留着作为一个万一的手段。</li></ul></li><li>性能建议 <ul><li>因为RDB文件只用作后备用途，建议只在Slave上持久RDB文件，而且只要15分钟备份一次就够了。只保留save 900 1这条规则。</li><li>如果Enale AOF，好处是在最恶劣情况下也只会丢失不超过2秒数据，启动脚本较简单只load自己的AOF文件就可以了。代价一是带来了持续的IO，二是AOF rewrite过程中产生的新数据写到新文件造成的阻塞几乎是不可避免的。只要硬盘许可，应该尽量减少AOF rewrite，AOF重写的基础大小默认64MB太小了。可以设到5G以上。默认超过原大小100%大小重写可以改到适当的数据</li><li>如果不Enable AOF，仅靠Master-Slave Replication实现高可用性也可以，能省掉一大笔IO，也减少了rewrite是带来的系统波动。代价是如果Master/Slave同时倒掉，会丢失十几分钟的数据，启动脚本也要比较两个Master/Slave中的RDB文件，载入较新的那个。微博就是这种架构。</li></ul></li></ul>`,46),g=[b];function k(v,f){return s(),a("div",null,g)}const y=n(m,[["render",k],["__file","27.Redis持久化.html.vue"]]);export{y as default};
