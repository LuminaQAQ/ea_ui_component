<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // import('../index.js')
    import('../components/ea-calendar/index.js')
    import('./index.scss')

    document.querySelector('ea-calendar').addEventListener('select', (e) => {
        console.log(e.detail)
    })
})
</script>

# Calendar 日历

显示日期

## 引入

> `js`

```html
<script type="module">
  import "./node_modules/easy-component-ui/components/ea-calendar/index.js";
</script>
```

## 基本

<div class="demo">
    <ea-calendar></ea-calendar>
</div>

```html
<div class="demo">
  <ea-calendar></ea-calendar>
</div>
```

> `js` 监听日期选择

```js
document.querySelector("ea-calendar").addEventListener("select", (e) => {
  console.log(e.detail);
});
```

## 自定义日期

> 通过设置 `date` 属性可以自定义日期

<div class="demo">
    <ea-calendar date="2024-5"></ea-calendar>
</div>

```html
<div class="demo">
  <ea-calendar date="2024-5"></ea-calendar>
</div>
```

## 自定义周起始日

> 通过设置 `week-start` 属性可以设置周起始日

<div class="demo">
    <ea-calendar date="2024-6" week-start="六"></ea-calendar>
</div>

```html
<div class="demo">
  <ea-calendar date="2024-6" week-start="六"></ea-calendar>
</div>
```

## Attributes

| 参数       | 说明     | 类型   | 可选值                                   | 默认值 |
| ---------- | -------- | ------ | ---------------------------------------- | ------ |
| date       | 指定日期 | String | -                                        | -      |
| week-start | 周起始日 | String | 周一，周二，周三，周四，周五，周六，周日 | 周一   |
