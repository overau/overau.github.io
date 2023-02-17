import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t={},e=p(`<blockquote><p>若依自己封装的</p></blockquote><details class="hint-container details"><summary>详情</summary><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 文件处理工具类
 * 
 * <span class="token keyword">@author</span> ruoyi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileUtils</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">FILENAME_PATTERN</span> <span class="token operator">=</span> <span class="token string">&quot;[a-zA-Z0-9_\\\\-\\\\|\\\\.\\\\u4e00-\\\\u9fa5]+&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 输出指定文件的byte数组
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">filePath</span> 文件路径
     * <span class="token keyword">@param</span> <span class="token parameter">os</span> 输出流
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">writeBytes</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> os<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">FileNotFoundException</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> length<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>length <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 写数据到文件中
     *
     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 数据
     * <span class="token keyword">@return</span> 目标文件
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span> IO异常
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">writeImportBytes</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">writeBytes</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token class-name">RuoYiConfig</span><span class="token punctuation">.</span><span class="token function">getImportPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 写数据到文件中
     *
     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 数据
     * <span class="token keyword">@param</span> <span class="token parameter">uploadDir</span> 目标文件
     * <span class="token keyword">@return</span> 目标文件
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span> IO异常
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">writeBytes</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">,</span> <span class="token class-name">String</span> uploadDir<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> pathName <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">String</span> extension <span class="token operator">=</span> <span class="token function">getFileExtendName</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            pathName <span class="token operator">=</span> <span class="token class-name">DateUtils</span><span class="token punctuation">.</span><span class="token function">datePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> <span class="token class-name">IdUtils</span><span class="token punctuation">.</span><span class="token function">fastUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> extension<span class="token punctuation">;</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token class-name">FileUploadUtils</span><span class="token punctuation">.</span><span class="token function">getAbsoluteFile</span><span class="token punctuation">(</span>uploadDir<span class="token punctuation">,</span> pathName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">FileUploadUtils</span><span class="token punctuation">.</span><span class="token function">getPathFileName</span><span class="token punctuation">(</span>uploadDir<span class="token punctuation">,</span> pathName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除文件
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">filePath</span> 文件
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">deleteFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 路径为文件且不为空则进行删除</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            file<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 文件名称验证
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">filename</span> 文件名称
     * <span class="token keyword">@return</span> true 正常 false 非法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isValidFilename</span><span class="token punctuation">(</span><span class="token class-name">String</span> filename<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> filename<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token constant">FILENAME_PATTERN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 检查文件是否可下载
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">resource</span> 需要下载的文件
     * <span class="token keyword">@return</span> true 正常 false 非法
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">checkAllowDownload</span><span class="token punctuation">(</span><span class="token class-name">String</span> resource<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 禁止目录上跳级别</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>resource<span class="token punctuation">,</span> <span class="token string">&quot;..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 检查允许下载的文件规则</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ArrayUtils</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">MimeTypeUtils</span><span class="token punctuation">.</span><span class="token constant">DEFAULT_ALLOWED_EXTENSION</span><span class="token punctuation">,</span> <span class="token class-name">FileTypeUtils</span><span class="token punctuation">.</span><span class="token function">getFileType</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 不在允许下载的文件规则</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 下载文件名重新编码
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">request</span> 请求对象
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span> 文件名
     * <span class="token keyword">@return</span> 编码后的文件名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">setFileDownloadHeader</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">String</span> agent <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;USER-AGENT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> filename <span class="token operator">=</span> fileName<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>agent<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;MSIE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// IE浏览器</span>
            filename <span class="token operator">=</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            filename <span class="token operator">=</span> filename<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>agent<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;Firefox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 火狐浏览器</span>
            filename <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>fileName<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ISO8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>agent<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;Chrome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// google浏览器</span>
            filename <span class="token operator">=</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 其它浏览器</span>
            filename <span class="token operator">=</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> filename<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 下载文件名重新编码
     *
     * <span class="token keyword">@param</span> <span class="token parameter">response</span> 响应对象
     * <span class="token keyword">@param</span> <span class="token parameter">realFileName</span> 真实文件名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setAttachmentResponseHeader</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> realFileName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> percentEncodedFileName <span class="token operator">=</span> <span class="token function">percentEncode</span><span class="token punctuation">(</span>realFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">StringBuilder</span> contentDispositionValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        contentDispositionValue<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;attachment; filename=&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>percentEncodedFileName<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;filename*=&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&#39;&#39;&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>percentEncodedFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>

        response<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Disposition,download-filename&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-disposition&quot;</span><span class="token punctuation">,</span> contentDispositionValue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;download-filename&quot;</span><span class="token punctuation">,</span> percentEncodedFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 百分号编码工具方法
     *
     * <span class="token keyword">@param</span> <span class="token parameter">s</span> 需要百分号编码的字符串
     * <span class="token keyword">@return</span> 百分号编码后的字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">percentEncode</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> encode <span class="token operator">=</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> encode<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;%20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取图像后缀
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">photoByte</span> 图像数据
     * <span class="token keyword">@return</span> 后缀名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getFileExtendName</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> photoByte<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> strFileExtendName <span class="token operator">=</span> <span class="token string">&quot;jpg&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">71</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">73</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">70</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">56</span><span class="token punctuation">)</span>
                <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">55</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">57</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            strFileExtendName <span class="token operator">=</span> <span class="token string">&quot;gif&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">74</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">70</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">73</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            strFileExtendName <span class="token operator">=</span> <span class="token string">&quot;jpg&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">66</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            strFileExtendName <span class="token operator">=</span> <span class="token string">&quot;bmp&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">78</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>photoByte<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">71</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            strFileExtendName <span class="token operator">=</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> strFileExtendName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取文件名称 /profile/upload/2022/04/16/ruoyi.png -- ruoyi.png
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span> 路径名称
     * <span class="token keyword">@return</span> 没有文件路径的名称
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> lastUnixPos <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> lastWindowsPos <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token char">&#39;\\\\&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>lastUnixPos<span class="token punctuation">,</span> lastWindowsPos<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> fileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取不带后缀文件名称 /profile/upload/2022/04/16/ruoyi.png -- ruoyi
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span> 路径名称
     * <span class="token keyword">@return</span> 没有文件路径和后缀的名称
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getNameNotSuffix</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> baseName <span class="token operator">=</span> <span class="token class-name">FilenameUtils</span><span class="token punctuation">.</span><span class="token function">getBaseName</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> baseName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","03.文件处理工具类.html.vue"]]);export{k as default};
