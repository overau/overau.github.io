import{_ as s,V as n,W as a,X as e}from"./framework-a569e214.js";const p={},t=e(`<h2 id="_01-mysql主从复制" tabindex="-1"><a class="header-anchor" href="#_01-mysql主从复制" aria-hidden="true">#</a> 01.MySQL主从复制</h2><p>MySQL主从复制是一个异步的复制过程，底层是基于MySQL数据库自带的二进制日志功能。就是一台或多台MySQL数据库（slave，即从库)从另一台MySQL数据库(master，即主库)进行日志的复制然后再解析日志并应用到自身，最 终实现从库的数据和主库的数据保持一致。<strong>MySQL主从复制是ySQL数据库自带功能，无需借助第三方工具。</strong></p><p>MySQL复制过程分成三步：</p><ul><li>master将改变记录到二进制日志(binary log)。</li><li>slave:将master的pinary log拷贝到它的中继日志(relay log)。</li><li>slave重做中继日志中的事件，将改变应用到自己的数据库中。</li></ul><h2 id="_02-安装docker-compose" tabindex="-1"><a class="header-anchor" href="#_02-安装docker-compose" aria-hidden="true">#</a> 02.安装docker-compose</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.16.0/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose 

<span class="token comment"># 设置文件可执行权限 </span>
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose 

<span class="token comment"># 查看版本信息 </span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose.yml</code></p><p>master：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql-master</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>8.0.32
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql-master&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/mysql/conf/my.cnf<span class="token punctuation">:</span>/etc/my.cnf
      <span class="token punctuation">-</span> /home/mysql/data<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> dev
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>7.0.8
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /etc/redis/redis.conf <span class="token punctuation">-</span><span class="token punctuation">-</span>appendonly yes
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> <span class="token string">&quot;redis&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/redis/conf/redis.conf<span class="token punctuation">:</span>/etc/redis/redis.conf
      <span class="token punctuation">-</span> /home/redis/data<span class="token punctuation">:</span>/data
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> dev    
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">dev</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
  <span class="token key atrule">pro</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>slave：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql-slave</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>8.0.32
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql-slave&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/mysql/conf/my.cnf<span class="token punctuation">:</span>/etc/my.cnf
      <span class="token punctuation">-</span> /home/mysql/data<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> dev  
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">dev</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
  <span class="token key atrule">pro</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将写好的脚本（.sh文件）放到目录 /etc/profile.d/ 下，系统启动后就会自动执行该目录下的所有shell脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> /home/mycompose/docker-compose.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_03-配置主从同步" tabindex="-1"><a class="header-anchor" href="#_03-配置主从同步" aria-hidden="true">#</a> 03.配置主从同步</h2><p>分别在两台虚拟机上使用docker安装mysql，也可以使用上面的docker-compose安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:8.0.32

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysqltest <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:8.0.32

<span class="token comment"># 拷贝配置文件</span>
<span class="token function">docker</span> <span class="token function">cp</span> mysqltest:/etc/my.cnf /home/mysql/conf/

<span class="token comment"># 主库</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql-master <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,src<span class="token operator">=</span>/home/mysql/conf/my.cnf,dst<span class="token operator">=</span>/etc/my.cnf <span class="token punctuation">\\</span>
<span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,src<span class="token operator">=</span>/home/mysql/data,dst<span class="token operator">=</span>/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>on-failure:3 <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:8.0.32

<span class="token comment"># 从库</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql-slave <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
<span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,src<span class="token operator">=</span>/home/mysql/conf/my.cnf,dst<span class="token operator">=</span>/etc/my.cnf <span class="token punctuation">\\</span>
<span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,src<span class="token operator">=</span>/home/mysql/data,dst<span class="token operator">=</span>/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>on-failure:3 <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:8.0.32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主库master配置" tabindex="-1"><a class="header-anchor" href="#主库master配置" aria-hidden="true">#</a> 主库master配置</h3><p>修改配置文件my.cnf：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">log_bin</span><span class="token operator">=</span>mysql-bin
server-id<span class="token operator">=</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入主库数据库配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-master <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&#39;repl&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;Root12345_&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">grant</span> <span class="token keyword">replication</span> slave <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;repl&#39;</span><span class="token variable">@&#39;%&#39;</span> <span class="token keyword">with</span> <span class="token keyword">grant</span> <span class="token keyword">option</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>


FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>

<span class="token keyword">show</span> master <span class="token keyword">status</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+------------------+-------------------+</span>
<span class="token operator">|</span> <span class="token keyword">File</span>             <span class="token operator">|</span> Position <span class="token operator">|</span> Binlog_Do_DB <span class="token operator">|</span> Binlog_Ignore_DB <span class="token operator">|</span> Executed_Gtid_Set <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+------------------+-------------------+</span>
<span class="token operator">|</span> mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span> <span class="token operator">|</span>      <span class="token number">898</span> <span class="token operator">|</span>              <span class="token operator">|</span>                  <span class="token operator">|</span>                   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+----------+--------------+------------------+-------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从库slave配置" tabindex="-1"><a class="header-anchor" href="#从库slave配置" aria-hidden="true">#</a> 从库slave配置</h3><p>修改配置文件my.cnf：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server-id<span class="token operator">=</span><span class="token number">101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入从库slave执行sql：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-slave <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>CHANGE MASTER <span class="token keyword">TO</span> 
MASTER_HOST <span class="token operator">=</span> <span class="token string">&#39;192.168.1.222&#39;</span><span class="token punctuation">,</span>  
MASTER_USER <span class="token operator">=</span> <span class="token string">&#39;repl&#39;</span><span class="token punctuation">,</span> 
MASTER_PASSWORD <span class="token operator">=</span> <span class="token string">&#39;Root12345_&#39;</span><span class="token punctuation">,</span>
MASTER_PORT <span class="token operator">=</span> <span class="token number">3306</span><span class="token punctuation">,</span>
MASTER_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;mysql-bin.000005&#39;</span><span class="token punctuation">,</span>
MASTER_LOG_POS<span class="token operator">=</span><span class="token number">1993</span><span class="token punctuation">,</span>
MASTER_HEARTBEAT_PERIOD <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span> 

<span class="token comment"># MASTER_LOG_FILE与主库File 保持一致</span>
<span class="token comment"># MASTER_LOG_POS=120 , #与主库Position 保持一致</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动从库：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">start</span> slave<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看是否配置成功：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> slave <span class="token keyword">status</span> \\G<span class="token punctuation">;</span>
<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token number">1.</span> <span class="token keyword">row</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
               Slave_IO_State: Waiting <span class="token keyword">for</span> source <span class="token keyword">to</span> send event
                  Master_Host: <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.222</span>
                  Master_User: repl
                  Master_Port: <span class="token number">3306</span>
                Connect_Retry: <span class="token number">60</span>
              Master_Log_File: mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span>
          Read_Master_Log_Pos: <span class="token number">3107</span>
               Relay_Log_File: c8942042d032<span class="token operator">-</span>relay<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000002</span>
                Relay_Log_Pos: <span class="token number">326</span>
        Relay_Master_Log_File: mysql<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span>
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB:
          Replicate_Ignore_DB:
           Replicate_Do_Table:
       Replicate_Ignore_Table:
      Replicate_Wild_Do_Table:
  Replicate_Wild_Ignore_Table:
                   Last_Errno: <span class="token number">0</span>
                   Last_Error:
                 Skip_Counter: <span class="token number">0</span>
          Exec_Master_Log_Pos: <span class="token number">3107</span>
              Relay_Log_Space: <span class="token number">543</span>
              Until_Condition: None
               Until_Log_File:
                Until_Log_Pos: <span class="token number">0</span>
           Master_SSL_Allowed: <span class="token keyword">No</span>
           Master_SSL_CA_File:
           Master_SSL_CA_Path:
              Master_SSL_Cert:
            Master_SSL_Cipher:
               Master_SSL_Key:
        Seconds_Behind_Master: <span class="token number">0</span>
Master_SSL_Verify_Server_Cert: <span class="token keyword">No</span>
                Last_IO_Errno: <span class="token number">0</span>
                Last_IO_Error:
               Last_SQL_Errno: <span class="token number">0</span>
               Last_SQL_Error:
  Replicate_Ignore_Server_Ids:
             Master_Server_Id: <span class="token number">100</span>
                  Master_UUID: <span class="token number">65519</span>a8a<span class="token operator">-</span>ab7a<span class="token operator">-</span><span class="token number">11</span>ed<span class="token operator">-</span><span class="token number">8025</span><span class="token operator">-</span><span class="token number">0242</span>ac110002
             Master_Info_File: mysql<span class="token punctuation">.</span>slave_master_info
                    SQL_Delay: <span class="token number">0</span>
          SQL_Remaining_Delay: <span class="token boolean">NULL</span>
      Slave_SQL_Running_State: Replica has <span class="token keyword">read</span> <span class="token keyword">all</span> relay log<span class="token punctuation">;</span> waiting <span class="token keyword">for</span> more updates
           Master_Retry_Count: <span class="token number">86400</span>
                  Master_Bind:
      Last_IO_Error_Timestamp:
     Last_SQL_Error_Timestamp:
               Master_SSL_Crl:
           Master_SSL_Crlpath:
           Retrieved_Gtid_Set:
            Executed_Gtid_Set:
                Auto_Position: <span class="token number">0</span>
         Replicate_Rewrite_DB:
                 Channel_Name:
           Master_TLS_Version:
       Master_public_key_path:
        Get_master_public_key: <span class="token number">0</span>
            Network_Namespace:
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

ERROR:
<span class="token keyword">No</span> query specified
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Slave_IO_Running：从库的IO线程，用来接收master发送的binlog，并将其写入到中继日志relag log</li><li>Slave_SQL_Running：从库的SQL线程，用来从relay log中读取并执行binlog。</li><li>Slave_IO_Running、Slave_SQL_Running：这两个进程的状态需全部为 YES，只要有一个为 NO，则复制就会停止。</li><li>Master_Log_File：要同步的主库的binlog文件名。</li><li>Read_Master_Log_Pos：已同步的位置，即同步的 binlog 文件内的字节偏移量，该值会随着主从同步的进行而不断地增长。</li><li>Relay_Log_File：从库的中继日志文件，对接收到的主库的 binlog 进行缓冲。从库的SQL线程不断地从 relay log 中读取 binlog 并执行。</li><li>Relay_Log_Pos：relay log 中已读取的位置偏移量。</li><li>Seconds_Behind_Master: 主从同步延时, 值为 0 为正常情况，正值表示已经出现延迟，数字越大从库落后主库越多。</li></ul><p>发现密码连接问题，修改<code>主库</code>：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> plugin <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>user<span class="token punctuation">\`</span></span> <span class="token keyword">where</span> <span class="token keyword">user</span> <span class="token operator">=</span> <span class="token string">&#39;repl&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------------+</span>
<span class="token operator">|</span> plugin                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------+</span>
<span class="token operator">|</span> caching_sha2_password <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;repl&#39;</span><span class="token variable">@&#39;192.168.1.223&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-springboot项目配置" tabindex="-1"><a class="header-anchor" href="#_03-springboot项目配置" aria-hidden="true">#</a> 03.SpringBoot项目配置</h2><h3 id="导入依赖" tabindex="-1"><a class="header-anchor" href="#导入依赖" aria-hidden="true">#</a> 导入依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.shardingsphere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sharding-jdbc-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.0.0-RC1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">main</span><span class="token punctuation">:</span>
    <span class="token comment"># 允许bean定义覆盖</span>
    <span class="token key atrule">allow-bean-definition-overriding</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">shardingsphere</span><span class="token punctuation">:</span>
    <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
      <span class="token key atrule">names</span><span class="token punctuation">:</span>
        master<span class="token punctuation">,</span>slave
      <span class="token comment"># 主数据源</span>
      <span class="token key atrule">master</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
        <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
        <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.1.222<span class="token punctuation">:</span>3306/rw<span class="token punctuation">?</span>characterEncoding=utf<span class="token punctuation">-</span><span class="token number">8</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> root
        <span class="token key atrule">password</span><span class="token punctuation">:</span> root
      <span class="token comment"># 从数据源</span>
      <span class="token key atrule">slave</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
        <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
        <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.1.223<span class="token punctuation">:</span>3306/rw<span class="token punctuation">?</span>characterEncoding=utf<span class="token punctuation">-</span><span class="token number">8</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> root
        <span class="token key atrule">password</span><span class="token punctuation">:</span> root
    <span class="token key atrule">masterslave</span><span class="token punctuation">:</span>
      <span class="token comment"># 读写分离配置</span>
      <span class="token key atrule">load-balance-algorithm-type</span><span class="token punctuation">:</span> round_robin
      <span class="token comment"># 最终的数据源名称</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> dataSource
      <span class="token comment"># 主库数据源名称</span>
      <span class="token key atrule">master-data-source-name</span><span class="token punctuation">:</span> master
      <span class="token comment"># 从库数据源名称列表，多个逗号分隔</span>
      <span class="token key atrule">slave-data-source-names</span><span class="token punctuation">:</span> slave
    <span class="token key atrule">props</span><span class="token punctuation">:</span>
      <span class="token key atrule">sql</span><span class="token punctuation">:</span>
        <span class="token key atrule">show</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#开启SQL显示，默认false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步" aria-hidden="true">#</a> 数据同步</h3><p>把旧数据的数据同步到主库master的mysql中。</p>`,42),l=[t];function o(i,c){return n(),a("div",null,l)}const u=s(p,[["render",o],["__file","02.MySQL主从复制.html.vue"]]);export{u as default};
