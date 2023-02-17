import{_ as e,V as s,W as n,X as a}from"./framework-a569e214.js";const i="/img/redis/image-20210101103948790.png",l={},o=a('<blockquote><p>层层链路</p></blockquote><figure><img src="'+i+`" alt="image-20210101103948790" tabindex="0" loading="lazy"><figcaption>image-20210101103948790</figcaption></figure><p>这时候也可以完成只从复制。</p><p>如果主机断开了连接，可以使用<code>SLAVEOF no one</code>让自己变成主机。其他的节点就可以连接到最新的主节点（<code>手动配置</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> SLAVEOF no one		<span class="token comment"># 让自己变成主机</span>
OK
<span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master
connected_slaves:1
slave0:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">6381</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">0</span>,lag<span class="token operator">=</span><span class="token number">1</span>
master_replid:0851cb8013091e32e801780ff0ed35dc3515b0fe
master_replid2:14ecac98d69efd070d012e12ef27a3eaee2c19f6
master_repl_offset:2177
second_repl_offset:2178
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:2177
<span class="token number">127.0</span>.0.1:638<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这个时候原来的恢复了，那就只能重新配置连接。</p>`,6),t=[o];function c(r,p){return s(),n("div",null,t)}const m=e(l,[["render",c],["__file","31.宕机后手动配置主机.html.vue"]]);export{m as default};
