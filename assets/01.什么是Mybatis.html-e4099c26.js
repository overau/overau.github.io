import{_ as i,V as o,W as l,Y as a,Z as n,$ as e,X as t,F as c}from"./framework-a569e214.js";const p={},r={class:"hint-container tip"},d=a("p",{class:"hint-container-title"},"提示",-1),u={href:"https://www.bilibili.com/video/BV1NE411Q7Nx",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="_1、环境准备" tabindex="-1"><a class="header-anchor" href="#_1、环境准备" aria-hidden="true">#</a> 1、环境准备</h2><h3 id="jdk环境" tabindex="-1"><a class="header-anchor" href="#jdk环境" aria-hidden="true">#</a> JDK环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>java <span class="token parameter variable">-version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.8.0_121&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_121-b13<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.121</span>-b13, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql环境" tabindex="-1"><a class="header-anchor" href="#mysql环境" aria-hidden="true">#</a> MySQL环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Server version: <span class="token number">8.0</span>.18 MySQL Community Server - GPL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="maven环境" tabindex="-1"><a class="header-anchor" href="#maven环境" aria-hidden="true">#</a> maven环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>mvn <span class="token parameter variable">-v</span>
Apache Maven <span class="token number">3.6</span>.2 <span class="token punctuation">(</span>40f52333136460af0dc0d7232c0dc0bcf0d9e117<span class="token punctuation">;</span> <span class="token number">2019</span>-08-27T23:06:16+08:00<span class="token punctuation">)</span>
Maven home: D:<span class="token punctuation">\\</span>Maven<span class="token punctuation">\\</span>apache-maven-3.6.2<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span><span class="token punctuation">..</span>
Java version: <span class="token number">1.8</span>.0_121, vendor: Oracle Corporation, runtime: D:<span class="token punctuation">\\</span>Java<span class="token punctuation">\\</span>jdk1.8.0_121<span class="token punctuation">\\</span>jre
Default locale: zh_CN, platform encoding: GBK
OS name: <span class="token string">&quot;windows 10&quot;</span>, version: <span class="token string">&quot;10.0&quot;</span>, arch: <span class="token string">&quot;amd64&quot;</span>, family: <span class="token string">&quot;windows&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IDEA <span class="token number">2019.3</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2、必备基础" tabindex="-1"><a class="header-anchor" href="#_2、必备基础" aria-hidden="true">#</a> 2、必备基础</h2><ul><li>JDBC</li><li>MySQL</li><li>Java基础</li><li>Maven</li><li>Junit</li></ul><h2 id="_3、什么是mybatis" tabindex="-1"><a class="header-anchor" href="#_3、什么是mybatis" aria-hidden="true">#</a> 3、什么是mybatis</h2><h3 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h3><blockquote><p>MyBatis 是一款优秀的<mark>持久层</mark>框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。</p></blockquote><blockquote><p>MyBatis 本是apache的一个开源项目iBatis, 2010年这个项目由apache software foundation 迁移到了google code，并且改名为MyBatis 。2013年11月迁移到Github。iBATIS一词来源于“internet”和“abatis”的组合，是一个基于Java的持久层框架。iBATIS提供的持久层框架包括SQL Maps和Data Access Objects（DAOs）。</p></blockquote><h3 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h3>`,16),m={href:"https://github.com/mybatis/mybatis-3",target:"_blank",rel:"noopener noreferrer"},b=a("h3",{id:"中文文档",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#中文文档","aria-hidden":"true"},"#"),n(" 中文文档")],-1),v={href:"https://mybatis.org/mybatis-3/zh/index.html",target:"_blank",rel:"noopener noreferrer"},k=a("h3",{id:"maven包",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#maven包","aria-hidden":"true"},"#"),n(" maven包")],-1),g={href:"https://mvnrepository.com/artifact/org.mybatis/mybatis",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.mybatis/mybatis --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、持久化" tabindex="-1"><a class="header-anchor" href="#_4、持久化" aria-hidden="true">#</a> 4、持久化</h2><h3 id="数据持久化" tabindex="-1"><a class="header-anchor" href="#数据持久化" aria-hidden="true">#</a> 数据持久化</h3><blockquote><p>持久化就是将程序的数据在持久状态和瞬时状态转化的过程。</p><p>内存：断电即失</p><p>数据库，IO文件持久化</p></blockquote><h2 id="_5、持久层" tabindex="-1"><a class="header-anchor" href="#_5、持久层" aria-hidden="true">#</a> 5、持久层</h2><blockquote><p>Dao层、Service层、Controller层</p></blockquote><p>完成持久化工作的代码块就叫持久层。层界限十分明显。</p><h2 id="_6、为什么需要mybatis" tabindex="-1"><a class="header-anchor" href="#_6、为什么需要mybatis" aria-hidden="true">#</a> 6、为什么需要Mybatis</h2><p>帮助程序将数据存入到数据库中。</p><p>方便。</p><p>传统的JDBC代码太复杂了。简化，框架。😄</p><p>不用Mybatis也可以。更容易上手。<mark>技术没有高低之分。</mark></p><p>优点</p><ul><li>简单易学：本身就很小且简单。没有任何第三方依赖，最简单安装只要两个jar文件+配置几个sql映射文件易于学习，易于使用，通过文档和源代码，可以比较完全的掌握它的设计思路和实现。</li><li>灵活：mybatis不会对应用程序或者数据库的现有设计强加任何影响。 sql写在xml里，便于统一管理和优化。通过sql语句可以满足操作数据库的所有需求。</li><li>解除sql与程序代码的耦合：通过提供DAO层，将业务逻辑和数据访问逻辑分离，使系统的设计更清晰，更易维护，更易单元测试。sql和代码的分离，提高了可维护性。</li><li>提供映射标签，支持对象与数据库的orm字段关系映射</li><li>提供对象关系映射标签，支持对象关系组建维护</li><li>提供xml标签，支持编写动态sql。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>最重要的一点：使用的人多。</p></div>`,15);function f(y,x){const s=c("ExternalLinkIcon");return o(),l("div",null,[a("div",r,[d,a("p",null,[n("狂神说Java："),a("a",u,[n("https://www.bilibili.com/video/BV1NE411Q7Nx"),e(s)])])]),h,a("p",null,[a("a",m,[n("https://github.com/mybatis/mybatis-3"),e(s)])]),b,a("p",null,[a("a",v,[n("https://mybatis.org/mybatis-3/zh/index.html"),e(s)])]),k,a("p",null,[a("a",g,[n("https://mvnrepository.com/artifact/org.mybatis/mybatis"),e(s)])]),_])}const M=i(p,[["render",f],["__file","01.什么是Mybatis.html.vue"]]);export{M as default};
