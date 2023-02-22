import{_ as e,V as t,W as d,X as a}from"./framework-a569e214.js";const i={},r=a('<h3 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h3><p>在员工管理列表页面点击编辑按钮，跳转到编辑页面，在编辑页面回显员工信息并进行修改，最后点击保存按钮完成编辑操作。</p><h3 id="接口设计" tabindex="-1"><a class="header-anchor" href="#接口设计" aria-hidden="true">#</a> 接口设计</h3><p>根据id查询员工信息：</p><ul><li><p>请求地址：<code>/employee/{id}</code></p></li><li><p>请求方式：<code>GET</code></p></li><li><p>请求参数：</p></li><li><p>响应格式：</p></li></ul><p>修改员工信息：使用之前的接口。</p><ul><li><p>请求地址：<code>/employee</code></p></li><li><p>请求方式：<code>PUT</code></p></li><li><p>请求参数：</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>员工id</td></tr><tr><td>status</td><td>员工账号状态</td></tr></tbody></table></li><li><p>响应格式：</p></li></ul><h3 id="代码开发" tabindex="-1"><a class="header-anchor" href="#代码开发" aria-hidden="true">#</a> 代码开发</h3><h3 id="功能测试" tabindex="-1"><a class="header-anchor" href="#功能测试" aria-hidden="true">#</a> 功能测试</h3>',9),l=[r];function h(c,o){return t(),d("div",null,l)}const n=e(i,[["render",h],["__file","08.编辑员工信息.html.vue"]]);export{n as default};
