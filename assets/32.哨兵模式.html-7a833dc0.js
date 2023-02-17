import{_ as s,V as n,W as a,X as e}from"./framework-a569e214.js";const l="/img/redis/image-20210101202935629.png",i="/img/redis/image-20210101204006435.png",p="/img/redis/image-20210101191239818.png",t={},c=e('<p>自动选举老大。</p><blockquote><p>概述</p></blockquote><ul><li>主从切换技术的方法是：当主服务器宕机后，需要手动把一台从服务器切换为主服务器。这就需要人工干预，费事费力，还会造成一段时间内服务不可用。这不是一种推荐的方式。更多时候，我们优先考虑哨兵模式。Redis从2.8开始正式提供了Sentinel(哨兵)架构来解决这个问题。</li><li>谋朝篡位的自动版，能够后台监控主机是否故障。如果故障了根据投票数自动将从库转换为主库。</li><li>哨兵模式是一种特殊的模式。首先 Redis提供了哨兵的命令，哨兵是一个独立的进程。作为进程，它会独立运行。其原理是<code>哨兵通过发送命令，等待 Redis服务器响应，从而监控运行的多个 Redis实例。</code></li></ul><figure><img src="'+l+'" alt="image-20210101202935629" tabindex="0" loading="lazy"><figcaption>image-20210101202935629</figcaption></figure><p>这里的哨兵有两个作用</p><ul><li>通过发送命令，让Reds服务器返回监控其运行状态，包括主服务器和从服务器。</li><li>当哨兵监测到 master宕机，会自动将 slave切换成 master。然后通过发布订阅模式通知其他的从服务器，修改配置文件，让它们切换主机。</li></ul><p>然而一个哨兵进程对 Redis服务器进行监控，可能会岀现问题。为此，我们可以使用多个哨兵进行监控。各个哨兵之间还会进行监控,这样就形成了多哨兵模式。</p><figure><img src="'+i+`" alt="image-20210101204006435" tabindex="0" loading="lazy"><figcaption>image-20210101204006435</figcaption></figure><p>假设主服务器宕机，哨兵1先检测到这个结果。系统并不会马上进行fallover过程，仅仅是哨兵1主观的认为主服务器不可用。这个现象成为<code>主观下线</code>。当后面的哨兵也检测到主服务器不可用，并且数量达到一定值时，那么哨兵之间就会进行一次投票。投票的结果由一个哨兵发起，进行failover故障转移操作。切换成功后，就会通过发布订阅模式，让各个哨兵把自己监控的从服务器实现切换主机，这个过程称为<code>客观下线</code>。</p><blockquote><p>测试</p></blockquote><p>我们能目前的状态是一主二从。</p><p>1、配置哨兵配置文件sentinel.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># sentinel monitor 被监控的名称 host port 1</span>
sentinel monitor myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span> <span class="token number">1</span>
<span class="token comment"># 密码配置</span>
sentinel auth-pass myredis ******
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后面的这个数字1，代表主机挂了。1是有多少个哨兵认为挂了，master才算真的挂了。salve投票看让谁接替成为主机，票数最多的，就会成为主机。</p><p>2、启动哨兵</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@iz2ze88y8n1wfg7e488dbkz bin<span class="token punctuation">]</span><span class="token comment">#redis-sentinel hconfig/sentinel.conf </span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.308 <span class="token comment"># oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.308 <span class="token comment"># Redis version=6.0.9, bits=64, commit=00000000, modified=0, pid=20523, just started</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.308 <span class="token comment"># Configuration loaded</span>
                _._                                                  
           _.-\`<span class="token variable"><span class="token variable">\`</span>__ <span class="token string">&#39;&#39;</span>-._                                             
      _.-<span class="token variable">\`</span></span><span class="token variable"><span class="token variable">\`</span>    <span class="token variable">\`</span></span><span class="token builtin class-name">.</span>  <span class="token variable"><span class="token variable">\`</span>_.  <span class="token string">&#39;&#39;</span>-._           Redis <span class="token number">6.0</span>.9 <span class="token punctuation">(</span>00000000/0<span class="token punctuation">)</span> <span class="token number">64</span> bit
  .-<span class="token variable">\`</span></span><span class="token variable"><span class="token variable">\`</span> .-<span class="token variable">\`</span></span>\`<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span>  <span class="token variable">\`</span></span>\`<span class="token variable"><span class="token variable">\`</span><span class="token punctuation">\\</span>/    _.,_ <span class="token string">&#39;&#39;</span>-._                                   
 <span class="token punctuation">(</span>    &#39;      ,       .-<span class="token variable">\`</span></span>  <span class="token operator">|</span> <span class="token variable"><span class="token variable">\`</span>,    <span class="token punctuation">)</span>     Running <span class="token keyword">in</span> sentinel mode
 <span class="token operator">|</span><span class="token variable">\`</span></span>-._<span class="token variable"><span class="token variable">\`</span>-<span class="token punctuation">..</span>.-<span class="token variable">\`</span></span> __<span class="token punctuation">..</span>.-.\`<span class="token variable"><span class="token variable">\`</span>-._<span class="token operator">|</span>&#39;<span class="token variable">\`</span></span> _.-<span class="token string">&#39;|     Port: 26379
 |    \`-._   \`._    /     _.-&#39;</span>    <span class="token operator">|</span>     PID: <span class="token number">20523</span>
  <span class="token variable"><span class="token variable">\`</span>-._    <span class="token variable">\`</span></span>-._  <span class="token variable"><span class="token variable">\`</span>-./  _.-<span class="token string">&#39;    _.-&#39;</span>                                   
 <span class="token operator">|</span><span class="token variable">\`</span></span>-._<span class="token variable"><span class="token variable">\`</span>-._    <span class="token variable">\`</span></span>-.__.-<span class="token string">&#39;    _.-&#39;</span>_.-<span class="token string">&#39;|                                  
 |    \`-._\`-._        _.-&#39;</span>_.-<span class="token string">&#39;    |           http://redis.io        
  \`-._    \`-._\`-.__.-&#39;</span>_.-<span class="token string">&#39;    _.-&#39;</span>                                   
 <span class="token operator">|</span><span class="token variable"><span class="token variable">\`</span>-._<span class="token variable">\`</span></span>-._    <span class="token variable"><span class="token variable">\`</span>-.__.-<span class="token string">&#39;    _.-&#39;</span>_.-&#39;<span class="token operator">|</span>                                  
 <span class="token operator">|</span>    <span class="token variable">\`</span></span>-._<span class="token variable"><span class="token variable">\`</span>-._        _.-<span class="token string">&#39;_.-&#39;</span>    <span class="token operator">|</span>                                  
  <span class="token variable">\`</span></span>-._    <span class="token variable"><span class="token variable">\`</span>-._<span class="token variable">\`</span></span>-.__.-<span class="token string">&#39;_.-&#39;</span>    _.-<span class="token string">&#39;                                   
      \`-._    \`-.__.-&#39;</span>    _.-<span class="token string">&#39;                                       
          \`-._        _.-&#39;</span>                                           
              \`-.__.-&#39;                                               

<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.309 <span class="token comment"># WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.314 <span class="token comment"># Sentinel ID is c838dfc70d8c45e2b8cf360b84437f6b92237bc8</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.314 <span class="token comment"># +monitor master myredis 127.0.0.1 6379 quorum 1</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.315 * +slave slave <span class="token number">127.0</span>.0.1:6380 <span class="token number">127.0</span>.0.1 <span class="token number">6380</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:04:04.318 * +slave slave <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1 <span class="token number">6381</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、当断掉Master主机6379时，过一会可以哨兵命令行看到日志。</p><blockquote><p>failover 故障转移</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.209 <span class="token comment"># +sdown master myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.209 <span class="token comment"># +odown master myredis 127.0.0.1 6379 #quorum 1/1</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.209 <span class="token comment"># +new-epoch 1</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.209 <span class="token comment"># +try-failover master myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.213 <span class="token comment"># +vote-for-leader c838dfc70d8c45e2b8cf360b84437f6b92237bc8 1</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.213 <span class="token comment"># +elected-leader master myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.213 <span class="token comment"># +failover-state-select-slave master myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.269 <span class="token comment"># +selected-slave slave 127.0.0.1:6380 127.0.0.1 6380 @ myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.269 * +failover-state-send-slaveof-noone slave <span class="token number">127.0</span>.0.1:6380 <span class="token number">127.0</span>.0.1 <span class="token number">6380</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.369 * +failover-state-wait-promotion slave <span class="token number">127.0</span>.0.1:6380 <span class="token number">127.0</span>.0.1 <span class="token number">6380</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.450 <span class="token comment"># +promoted-slave slave 127.0.0.1:6380 127.0.0.1 6380 @ myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.450 <span class="token comment"># +failover-state-reconf-slaves master myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:05.535 * +slave-reconf-sent slave <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1 <span class="token number">6381</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:06.482 * +slave-reconf-inprog slave <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1 <span class="token number">6381</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:06.482 * +slave-reconf-done slave <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1 <span class="token number">6381</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:06.537 <span class="token comment"># +failover-end master myredis 127.0.0.1 6379</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:06.537 <span class="token comment"># +switch-master myredis 127.0.0.1 6379 127.0.0.1 6380</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:06.537 * +slave slave <span class="token number">127.0</span>.0.1:6381 <span class="token number">127.0</span>.0.1 <span class="token number">6381</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6380</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:06.537 * +slave slave <span class="token number">127.0</span>.0.1:6379 <span class="token number">127.0</span>.0.1 <span class="token number">6379</span> @ myredis <span class="token number">127.0</span>.0.1 <span class="token number">6380</span>
<span class="token number">20523</span>:X 01 Jan <span class="token number">2021</span> <span class="token number">19</span>:05:36.614 <span class="token comment"># +sdown slave 127.0.0.1:6379 127.0.0.1 6379 @ myredis 127.0.0.1 6380</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候会从从机中随机选择一个服务器作为主机（投票算法）。然后发现6380从之前的从机变成了主机。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master			<span class="token comment"># 当前角色</span>
connected_slaves:1
slave0:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">6381</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">5773</span>,lag<span class="token operator">=</span><span class="token number">0</span>
master_replid:2b4946c1ac6bbfcb7d675e34e647f2b570a96e1b
master_replid2:77652651140f6cf88b98952c939d3c798ebca407
master_repl_offset:5905
second_repl_offset:2117
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:5905
<span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、当又把6379重启，发现成为了6380的从机。哨兵日志：</p><figure><img src="`+p+`" alt="image-20210101191239818" tabindex="0" loading="lazy"><figcaption>image-20210101191239818</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:slave				<span class="token comment"># 当前角色是从机</span>
master_host:127.0.0.1	<span class="token comment"># 主机是6380</span>
master_port:6380
master_link_status:down
master_last_io_seconds_ago:-1
master_sync_in_progress:0
slave_repl_offset:1
master_link_down_since_seconds:1609499681
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:9f85ec3bba18ca61715c352b68dc612ed73bd55d
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:0
second_repl_offset:-1
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>优点</p><ul><li>哨兵集群，基于主从复制。所有的主从配置优点，它全有。</li><li>主从可以切换，故障可以转移。系统的可用性就会更好。</li><li>哨兵模式就是主从模式的升级，手动到自动，更加健壮。</li></ul><p>缺点</p><ul><li>Redis不好在线扩容。集群容量一旦达到上限，在线扩容就十分麻烦。</li><li>实现哨兵模式的配置其实是很麻烦的，里面有很多选择。</li></ul></blockquote><p>哨兵模式的全部配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Example sentinel.conf</span>
 
<span class="token comment"># 哨兵sentinel实例运行的端口 默认26379</span>
port <span class="token number">26379</span>
 
<span class="token comment"># 哨兵sentinel的工作目录</span>
<span class="token function">dir</span> /tmp
 
<span class="token comment"># 哨兵sentinel监控的redis主节点的 ip port </span>
<span class="token comment"># master-name  可以自己命名的主节点名字 只能由字母A-z、数字0-9 、这三个字符&quot;.-_&quot;组成。</span>
<span class="token comment"># quorum 当这些quorum个数sentinel哨兵认为master主节点失联 那么这时 客观上认为主节点失联了</span>
<span class="token comment"># sentinel monitor &lt;master-name&gt; &lt;ip&gt; &lt;redis-port&gt; &lt;quorum&gt;</span>
  sentinel monitor mymaster <span class="token number">127.0</span>.0.1 <span class="token number">6379</span> <span class="token number">2</span>
 
<span class="token comment"># 当在Redis实例中开启了requirepass foobared 授权密码 这样所有连接Redis实例的客户端都要提供密码</span>
<span class="token comment"># 设置哨兵sentinel 连接主从的密码 注意必须为主从设置一样的验证密码</span>
<span class="token comment"># sentinel auth-pass &lt;master-name&gt; &lt;password&gt;</span>
sentinel auth-pass mymaster MySUPER--secret-0123passw0rd
 
 
<span class="token comment"># 指定多少毫秒之后 主节点没有应答哨兵sentinel 此时 哨兵主观上认为主节点下线 默认30秒</span>
<span class="token comment"># sentinel down-after-milliseconds &lt;master-name&gt; &lt;milliseconds&gt;</span>
sentinel down-after-milliseconds mymaster <span class="token number">30000</span>
 
<span class="token comment"># 这个配置项指定了在发生failover主备切换时最多可以有多少个slave同时对新的master进行 同步，</span>
这个数字越小，完成failover所需的时间就越长，
但是如果这个数字越大，就意味着越 多的slave因为replication而不可用。
可以通过将这个值设为 <span class="token number">1</span> 来保证每次只有一个slave 处于不能处理命令请求的状态。
<span class="token comment"># sentinel parallel-syncs &lt;master-name&gt; &lt;numslaves&gt;</span>
sentinel parallel-syncs mymaster <span class="token number">1</span>
 
 
 
<span class="token comment"># 故障转移的超时时间 failover-timeout 可以用在以下这些方面： </span>
<span class="token comment">#1. 同一个sentinel对同一个master两次failover之间的间隔时间。</span>
<span class="token comment">#2. 当一个slave从一个错误的master那里同步数据开始计算时间。直到slave被纠正为向正确的master那里同步数据时。</span>
<span class="token comment">#3.当想要取消一个正在进行的failover所需要的时间。  </span>
<span class="token comment">#4.当进行failover时，配置所有slaves指向新的master所需的最大时间。不过，即使过了这个超时，slaves依然会被正确配置为指向master，但是就不按parallel-syncs所配置的规则来了</span>
<span class="token comment"># 默认三分钟</span>
<span class="token comment"># sentinel failover-timeout &lt;master-name&gt; &lt;milliseconds&gt;</span>
sentinel failover-timeout mymaster <span class="token number">180000</span>
 
<span class="token comment"># SCRIPTS EXECUTION</span>
 
<span class="token comment">#配置当某一事件发生时所需要执行的脚本，可以通过脚本来通知管理员，例如当系统运行不正常时发邮件通知相关人员。</span>
<span class="token comment">#对于脚本的运行结果有以下规则：</span>
<span class="token comment">#若脚本执行后返回1，那么该脚本稍后将会被再次执行，重复次数目前默认为10</span>
<span class="token comment">#若脚本执行后返回2，或者比2更高的一个返回值，脚本将不会重复执行。</span>
<span class="token comment">#如果脚本在执行过程中由于收到系统中断信号被终止了，则同返回值为1时的行为相同。</span>
<span class="token comment">#一个脚本的最大执行时间为60s，如果超过这个时间，脚本将会被一个SIGKILL信号终止，之后重新执行。</span>
 
<span class="token comment">#通知型脚本:当sentinel有任何警告级别的事件发生时（比如说redis实例的主观失效和客观失效等等），将会去调用这个脚本，</span>
这时这个脚本应该通过邮件，SMS等方式去通知系统管理员关于系统不正常运行的信息。调用该脚本时，将传给脚本两个参数，
一个是事件的类型，
一个是事件的描述。
如果sentinel.conf配置文件中配置了这个脚本路径，那么必须保证这个脚本存在于这个路径，并且是可执行的，否则sentinel无法正常启动成功。
<span class="token comment">#通知脚本</span>
<span class="token comment"># sentinel notification-script &lt;master-name&gt; &lt;script-path&gt;</span>
  sentinel notification-script mymaster /var/redis/notify.sh
 
<span class="token comment"># 客户端重新配置主节点参数脚本</span>
<span class="token comment"># 当一个master由于failover而发生改变时，这个脚本将会被调用，通知相关的客户端关于master地址已经发生改变的信息。</span>
<span class="token comment"># 以下参数将会在调用脚本时传给脚本:</span>
<span class="token comment"># &lt;master-name&gt; &lt;role&gt; &lt;state&gt; &lt;from-ip&gt; &lt;from-port&gt; &lt;to-ip&gt; &lt;to-port&gt;</span>
<span class="token comment"># 目前&lt;state&gt;总是“failover”,</span>
<span class="token comment"># &lt;role&gt;是“leader”或者“observer”中的一个。 </span>
<span class="token comment"># 参数 from-ip, from-port, to-ip, to-port是用来和旧的master和新的master(即旧的slave)通信的</span>
<span class="token comment"># 这个脚本应该是通用的，能被多次调用，不是针对性的。</span>
<span class="token comment"># sentinel client-reconfig-script &lt;master-name&gt; &lt;script-path&gt;</span>
 sentinel client-reconfig-script mymaster /var/redis/reconfig.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),r=[c];function o(m,d){return n(),a("div",null,r)}const b=s(t,[["render",o],["__file","32.哨兵模式.html.vue"]]);export{b as default};
