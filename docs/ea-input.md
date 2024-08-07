<script setup>
import { onMounted, ref } from 'vue'

onMounted(() => {
  import('../index.js')
  import('./index.scss')

  // document.querySelector('#basicInput').addEventListener('change', (e) => {
  //   console.log(e.target.value)
  // })

  const valArr = [
    { value: '1' },
    { value: '2' },
    { value: '张三' },
    { value: '李四' },
    { value: '王五' },
    { value: '赵六' },
    { value: '孙七' },
    { value: '周八' },
    { value: '吴九' },
    { value: '郑十' },
  ];

  document.querySelector('#trigger-on-focus').suggestion = valArr;
  
  document.querySelector('#trigger-after-input').suggestion = valArr;

  setTimeout(() => {  
    try{
      const input = document.querySelector('#trigger-on-focus_for-remote');
      input.suggestion = [
        { value: '5' },
        { value: '6' },
      ];
      input.refresh();
      input.remote = false;
    } catch(e) {}
  }, 5 * 1000)
})
</script>

<style lang="scss" scoped>
  .prepend,
  .append {
    background-color: #f5f7fa;
    padding: 0.5rem;
  }
</style>

# Input 输入框

通过鼠标或键盘输入字符

## 引入

> `js`

```js
<script type="module">
  import "./node_modules/easy-component-ui/components/ea-input/index.js";
</script>
```

## 基础用法

<div class="row left">
    <ea-input placeholder="请输入内容"></ea-input>
    <ea-input placeholder="请输入内容" value="hello"></ea-input>
</div>

```html
<div class="row left">
  <ea-input placeholder="请输入内容"></ea-input>
  <ea-input placeholder="请输入内容" value="hello"></ea-input>
</div>
```

## 禁用状态

<div class="row left">
    <ea-input id="basicInput" placeholder="请输入内容" disabled></ea-input>
    <ea-input id="basicInput" placeholder="请输入内容" value="hello" disabled></ea-input>
</div>

```html
<div class="row left">
  <ea-input id="basicInput" placeholder="请输入内容" disabled></ea-input>
  <ea-input
    id="basicInput"
    placeholder="请输入内容"
    value="hello"
    disabled
  ></ea-input>
</div>
```

## 可清空

<div class="row left">
    <ea-input id="basicInput" placeholder="这不是空的" clearable></ea-input>
    <ea-input id="basicInput" placeholder="请输入内容" value="这是空的" clearable></ea-input>
</div>

```html
<div class="row left">
  <ea-input id="basicInput" placeholder="这不是空的" clearable></ea-input>
  <ea-input
    id="basicInput"
    placeholder="请输入内容"
    value="这是空的"
    clearable
  ></ea-input>
</div>
```

## 密码框

<div class="row left">
    <ea-input id="basicInput" placeholder="这不是空的" show-password></ea-input>
    <ea-input id="basicInput" placeholder="这不是空的" value="这是空的" show-password></ea-input>
</div>

```html
<div class="row left">
  <ea-input id="basicInput" placeholder="这不是空的" show-password></ea-input>
  <ea-input
    id="basicInput"
    placeholder="这不是空的"
    value="这是空的"
    show-password
  ></ea-input>
</div>
```

## 带 icon 的输入框

带有图标标记输入类型

<div class="row left">
    <ea-input placeholder="这不是空的" prefix-icon="icon-search"></ea-input>
    <ea-input placeholder="这不是空的" suffix-icon="icon-search"></ea-input>
</div>

```html
<div class="row left">
  <ea-input placeholder="这不是空的" prefix-icon="icon-search"></ea-input>
  <ea-input placeholder="这不是空的" suffix-icon="icon-search"></ea-input>
</div>
```

## 复合型输入框

可前置或后置元素，一般为标签或按钮

> 使用 div 标签来定义前置或后置元素, 而非其他标签

<div class="col left">
    <ea-input placeholder="假装有网址">
      <div class="prepend" slot="prepend">Http://</div>
    </ea-input>
    <ea-input placeholder="假装有网址">
      <div class="append" slot="append">.com</div>
    </ea-input>
    <ea-input placeholder="假装有网址">
      <div class="prepend" slot="prepend">Http://</div>
      <div class="append" slot="append">
        <i class="icon-search"></i>
      </div>
    </ea-input>
</div>

```css
.prepend,
.append {
  background-color: #f5f7fa;
  padding: 0.5rem;
}
```

```html
<div class="col left">
  <ea-input placeholder="假装有网址">
    <div class="prepend" slot="prepend">Http://</div>
  </ea-input>
  <ea-input placeholder="假装有网址">
    <div class="append" slot="append">.com</div>
  </ea-input>
  <ea-input placeholder="假装有网址">
    <div class="prepend" slot="prepend">Http://</div>
    <div class="append" slot="append">
      <i class="icon-search"></i>
    </div>
  </ea-input>
</div>
```

## 带输入建议

根据输入内容提供对应的输入建议(建议使用场景: 建议数据为静态数据)

> 因文档库搭建框架的技术限制, 若案例未弹出输入建议, 需要刷新该页面

<div class="row">
  {{
    "搜索词: [" + 
    [ { value: '1' },
    { value: '2' },
    { value: '张三' },
    { value: '李四' },
    { value: '王五' },
    { value: '赵六' },
    { value: '孙七' },
    { value: '周八' },
    { value: '吴九' },
    { value: '郑十' },]
    .map(item => {
      return item.value
    }) +"]"
  }}
</div>
<div class="row">
  <section>
    <p>激活时列出输入建议</p>
    <ea-input id="trigger-on-focus" placeholder="请输入内容" trigger-on-focus></ea-input>
  </section>
  <section>
    <p>输入后匹配输入建议</p>
    <ea-input id="trigger-after-input" placeholder="请输入内容" trigger-after-input></ea-input>
  </section>
</div>

```html
<div class="row">
  <section>
    <p>激活时列出输入建议</p>
    <ea-input
      id="trigger-on-focus"
      placeholder="请输入内容"
      trigger-on-focus
    ></ea-input>
  </section>
  <section>
    <p>输入后匹配输入建议</p>
    <ea-input
      id="trigger-after-input"
      placeholder="请输入内容"
      trigger-after-input
    ></ea-input>
  </section>
</div>
```

`get` 和 `set` 操作

```js
// 获取值
EaInput.suggestion;

// 赋值: 页面初始化时
EaInput.suggestion = [{ value: "1" }, { value: "2" }];

// 延迟性赋值: 还需手动调用内置函数来进行数据刷新
EaInput.suggestion = [{ value: "1" }, { value: "2" }];
EaInput.refresh();
```

## 远程搜索

从服务端搜索数据

<div class="row">
  {{
    "搜索词: [" + 
    [ { value: '1' },
    { value: '2' },
    { value: '张三' },
    { value: '李四' },
    { value: '王五' },
    { value: '赵六' },
    { value: '孙七' },
    { value: '周八' },
    { value: '吴九' },
    { value: '郑十' },]
    .map(item => {
      return item.value
    }) +"]"
  }}
</div>
<div class="row">
  <section>
    <p>激活时列出输入建议</p>
    <ea-input id="trigger-on-focus_for-remote" placeholder="请输入内容" trigger-on-focus remote></ea-input>
  </section>
</div>

```html
<div class="row">
  <section>
    <p>激活时列出输入建议</p>
    <ea-input
      id="trigger-on-focus_for-remote"
      placeholder="请输入内容"
      trigger-on-focus
      remote
    ></ea-input>
  </section>
</div>
```

```js
setTimeout(() => {
  const input = document.querySelector("#trigger-on-focus_for-remote");
  input.suggestion = [{ value: "5" }, { value: "6" }];
  input.remote = false;
}, 10 * 1000);
```

`set` 和 `get` 操作

```js
// 获取值
EaInput.remote;

// 赋值: 当数据返回时
EaInput.remote = true;
```

## 输入长度限制

<div class="col left">
    <ea-input placeholder="请输入内容" show-word-limit max-length="10"></ea-input>
    <ea-input placeholder="请输入内容" show-word-limit min-length="2"></ea-input>
</div>

```html
<div class="col left">
  <ea-input placeholder="请输入内容" show-word-limit max-length="10"></ea-input>
  <ea-input placeholder="请输入内容" show-word-limit min-length="2"></ea-input>
</div>
```

## Attributes

| 参数                | 说明               | 类型    | 可选值                                                                                                       | 默认值 |
| ------------------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------------ | ------ |
| type                | 输入框类型         | String  | text / password / number / email / url / search / tel / date / time / datetime / week / month / color / file | text   |
| value               | 输入框的值         | String  | -                                                                                                            | -      |
| placeholder         | 占位符             | String  | -                                                                                                            | -      |
| disabled            | 禁用               | Boolean | true / false                                                                                                 | false  |
| clearable           | 可清空             | Boolean | true / false                                                                                                 | false  |
| show-password       | 显示密码           | Boolean | true / false                                                                                                 | false  |
| prefix-icon         | 输入框图标(前)     | String  | -                                                                                                            | -      |
| suffix-icon         | 输入框图标(后)     | String  | -                                                                                                            | -      |
| trigger-on-focus    | 激活时列出输入建议 | Boolean | true / false                                                                                                 | false  |
| trigger-after-input | 输入后匹配输入建议 | Boolean | true / false                                                                                                 | false  |
| remote              | 远程搜索           | Boolean | true / false                                                                                                 | false  |
| max-length          | 最大输入长度       | Number  | -                                                                                                            | -      |
| min-length          | 最小输入长度       | Number  | -                                                                                                            | -      |
| show-word-limit     | 显示输入长度限制   | Boolean | true / false                                                                                                 | false  |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

## 事件

| 事件名 | 说明                 | 参数 | 获取值         | 值的类型 |
| ------ | -------------------- | ---- | -------------- | -------- |
| input  | 输入时触发           | -    | e.detail.value | String   |
| focus  | 输入框聚焦时触发     | -    | e.detail.value | String   |
| blur   | 输入框失去焦点时触发 | -    | e.detail.value | String   |
