import{_ as o,V as n,W as r,X as s}from"./framework-a569e214.js";const t={},e=s('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><blockquote><p>1、synchronized<strong>内置关键字</strong>，Lock是一个<strong>接口</strong>。</p><p>2、synchronized无法判断获取锁得状态，Lock可以判断是否获取到了锁。</p><p>3、synchronized<strong>自动</strong>释放锁。Lock锁必须要<strong>手动</strong>释放锁。如果不释放锁，<strong>死锁</strong>。</p><p>4、synchronized 线程1（获得锁，阻塞），线程2（等待，傻傻的等）。Lock锁就<strong>不一定会等待</strong>下去。</p><p>5、synchronized 可重入锁，不可以中断的，非公平锁。Lock，可重入锁，可以判断锁，非公平（可以自己设置）。</p><p>6、synchronized 适合锁<strong>少量</strong>的代码同步问题，Lock锁适合锁<strong>大量</strong>的同步代码。</p></blockquote><p><code>锁是什么？如何判断锁的是谁？</code></p>',3),c=[e];function d(_,i){return n(),r("div",null,c)}const h=o(t,[["render",d],["__file","04.synchronized和Lock区别.html.vue"]]);export{h as default};
