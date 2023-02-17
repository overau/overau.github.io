import{_ as s,V as n,W as e,X as a}from"./framework-a569e214.js";const i="/img/redis/image-20210101100907802.png",l="/img/redis/image-20210101101342917.png",t="/img/redis/image-20210101101404648.png",o={},r=a(`<p><code>默认情况下，毎台 Redis服务器都是主节点</code>。一般情况下，只要配置从机就可以了。</p><p>认老大。一主（79）二从（80、81）。</p><blockquote><p>如果Redis有设置密码。需要在从机的配置文件中添加主机密码。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>masterauth ******
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>从机6380</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> SLAVEOF <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>		<span class="token comment"># 找谁当自己的老大</span>
OK
<span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:slave				<span class="token comment"># 当前角色</span>
master_host:127.0.0.1	<span class="token comment"># 主机的信息</span>
master_port:6379
master_link_status:down
master_last_io_seconds_ago:-1
master_sync_in_progress:0
slave_repl_offset:1
master_link_down_since_seconds:1609465822
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:d947f2bda9ff69e14167bdcf68e7a1752599f6a7
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:0
second_repl_offset:-1
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0

<span class="token comment"># 在主机中查看</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master				<span class="token comment"># 当前角色</span>
connected_slaves:1		<span class="token comment"># 已连接的从机</span>
slave0:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">6380</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">14</span>,lag<span class="token operator">=</span><span class="token number">0</span> <span class="token comment"># 从机信息</span>
master_replid:ae8477e18ac231f90a0936698b8c3fb17e8cbbed
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:14
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>从机6381</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> SLAVEOF <span class="token number">127.0</span>.0.1 <span class="token number">6379</span>
OK
<span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:slave				<span class="token comment"># 当前角色</span>
master_host:127.0.0.1	<span class="token comment"># 主机信息</span>
master_port:6379
master_link_status:up
master_last_io_seconds_ago:9
master_sync_in_progress:0
slave_repl_offset:406
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:ae8477e18ac231f90a0936698b8c3fb17e8cbbed
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:406
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:393
repl_backlog_histlen:14

<span class="token comment"># 查看主机信息</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master				<span class="token comment"># 当前角色</span>
connected_slaves:2		<span class="token comment"># 已连接2个从机</span>
slave0:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">6380</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">448</span>,lag<span class="token operator">=</span><span class="token number">1</span>		<span class="token comment"># 从机6380信息</span>
slave1:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">6381</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">448</span>,lag<span class="token operator">=</span><span class="token number">1</span>		<span class="token comment"># 从机6381信息</span>
master_replid:ae8477e18ac231f90a0936698b8c3fb17e8cbbed
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:448
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:448
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>真实的主从配置应该在配置文件中配置，这样就是永久的。命令行修改时暂时的。</p></blockquote><figure><img src="`+i+'" alt="image-20210101100907802" tabindex="0" loading="lazy"><figcaption>image-20210101100907802</figcaption></figure><blockquote><p>细节</p></blockquote><p>主机可以设置值，从机不能写只能读。主机中的所有信息和数据，都会被从机保存。</p><p>主机可以写：</p><figure><img src="'+l+'" alt="image-20210101101342917" tabindex="0" loading="lazy"><figcaption>image-20210101101342917</figcaption></figure><p>从机只能读不能写：</p><figure><img src="'+t+'" alt="image-20210101101404648" tabindex="0" loading="lazy"><figcaption>image-20210101101404648</figcaption></figure><blockquote><p>测试</p></blockquote><p>主机断开连接，从机依旧连接到主机的。但是没有写操作了。主机如果回来了，从机依旧可以直接获取主机写的信息。</p><p>如果是使用命令行配置的主从，这个时候重启了，就会变为主机。只要变为了从机，数据立马就会从主机中获取值。</p><blockquote><p>复制原理</p></blockquote><ul><li>Slave启动成功连接到 master后会发送一个<code>sync</code>同步命令。</li><li>Master接到命令，启动后台的存盘进程，同时收集所有接收到的用于修改数据集命令。在后台进程执行完毕之后，<code>master将传送整个数据文件到slave，并完成一次完全同步。</code></li><li><code>全量复制</code>：而 slave服务在接收到数据库文件数据后,将其存盘并加载到内存中。</li><li><code>增量复制</code>：Master继续将新的所有收集到的修改命令依次传给save,完成同步。</li><li><code>只要是重新连接 master，一次完全同步(全量复制)将被自动执行</code>。数据一定可以在从机中看到。</li></ul>',20),c=[r];function p(d,m){return n(),e("div",null,c)}const b=s(o,[["render",p],["__file","30.主从复制之复制原理.html.vue"]]);export{b as default};
