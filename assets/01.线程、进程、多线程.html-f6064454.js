import{_ as n,V as i,W as l,Y as e,Z as t,$ as r,X as c,F as a}from"./framework-a569e214.js";const s={},_={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"提示",-1),d={href:"https://www.bilibili.com/video/BV1V4411p7EF",target:"_blank",rel:"noopener noreferrer"},h=c('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><blockquote><p>一个进程可以有多个线程。</p></blockquote><p>说起进程，就不得不说下程序。<strong>程序是指令和数据的有序集合</strong>，其本身没有任何运行的含义，是一个静态的概念。而<strong>进程则是执行程序的一次执行过程</strong>，它是一个动态的概念。是系统资源分配的单位。</p><p><mark>通常在一个进程中可以包含若干个线程，当然一个进程中至少有一个线程，不然没有存在的意义。</mark>线程是CPU调度和执行的的单</p><p>位。</p><blockquote><p>注意：很多多线程是模拟出来的，真正的多线程是指有多个cpu。即多核，如服务器。如果是模拟出来的多线程，即在一个cpu的情况下,在同一个时间点，cpu只能执行一个代码。因为切换的很快，所以就有同时执行的错觉。</p></blockquote><ul><li>线程就是独立的执行路径。</li><li>在程序运行时,即使没有自己创建线程,后台也会有多个线程，如<strong>主线程、gc线程</strong>。</li><li>main()称之为主线程,为系统的入口，用于执行整个程序。</li><li>在一个进程中，如果开辟了多个线程，线程的运行由调度器安排调度。调度器是与操作系统紧密相关的，先后顺序是不能人为干预的。</li><li>对同一份资源操作时，会存在资源抢夺的问题，需要加入并发控制。</li><li>线程会带来额外的开销，如cpu调度时间、并发控制开销。</li><li><strong>每个线程在自己的工作内存交互，内存控制不当会造成数据不一致。</strong></li></ul>',7);function u(m,k){const o=a("ExternalLinkIcon");return i(),l("div",null,[e("div",_,[p,e("p",null,[t("狂神说Java："),e("a",d,[t("https://www.bilibili.com/video/BV1V4411p7EF"),r(o)])])]),h])}const f=n(s,[["render",u],["__file","01.线程、进程、多线程.html.vue"]]);export{f as default};
