<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    import('../index.js')
    import('./index.scss')
})
</script>

# Badge 徽标

出现在按钮、图标旁的数字或状态标记。

## 引入

> `js`

```js
<script type="module">
  import "./node_modules/easy-component-ui/components/ea-badge/index.js";
</script>
```

## 基础用法

展示新消息数量。

<div class="row left">
  <ea-badge value="12">
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge value="3" type="primary">
    <ea-button size="small">回复</ea-button>
  </ea-badge>
  <ea-badge value="12" type="success">
    <ea-button size="small">成功</ea-button>
  </ea-badge>
  <ea-badge value="3" type="warning">
    <ea-button size="small">警告</ea-button>
  </ea-badge>
  <ea-badge value="3" type="info">
    <ea-button size="small">信息</ea-button>
  </ea-badge>
</div>

```html
<div class="row left">
  <ea-badge value="12">
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge value="3" type="primary">
    <ea-button size="small">回复</ea-button>
  </ea-badge>
  <ea-badge value="12" type="success">
    <ea-button size="small">成功</ea-button>
  </ea-badge>
  <ea-badge value="3" type="warning">
    <ea-button size="small">警告</ea-button>
  </ea-badge>
  <ea-badge value="3" type="info">
    <ea-button size="small">信息</ea-button>
  </ea-badge>
</div>
```

## 最大值

可自定义最大值。

> 由 `max` 属性定义，它接受一个 `Number`，需要注意的是，只有当 `value` 为 `Number` 时，它才会生效。

<div class="row left">
  <ea-badge value="11" max="10">
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge value="100" max="99">
    <ea-button size="small">回复</ea-button>
  </ea-badge>
</div>

```html
<div class="row left">
  <ea-badge value="11" max="10">
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge value="100" max="99">
    <ea-button size="small">回复</ea-button>
  </ea-badge>
</div>
```

## 自定义内容

可以显示数字以外的文本内容。

> 定义 value 为 String 类型是时可以用于显示自定义文本。

<div class="row left">
  <ea-badge value="new">
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge value="hot">
    <ea-button size="small">回复</ea-button>
  </ea-badge>
</div>

```html
<div class="row left">
  <ea-badge value="new">
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge value="hot">
    <ea-button size="small">回复</ea-button>
  </ea-badge>
</div>
```

## 小红点

以红点的形式标注需要关注的内容

<div class="row left">
  <ea-badge is-dot>
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge is-dot>信息</ea-badge>
  <ea-badge is-dot>
    <ea-button size="small" icon="icon-mail"></ea-button>
  </ea-badge>
</div>

```html
<div class="row left">
  <ea-badge is-dot>
    <ea-button size="small">评论</ea-button>
  </ea-badge>
  <ea-badge is-dot>信息</ea-badge>
  <ea-badge is-dot>
    <ea-button size="small" icon="icon-mail"></ea-button>
  </ea-badge>
</div>
```

## Attributes

| 参数   | 说明                                                               | 类型            | 可选值                                      | 默认值  |
| ------ | ------------------------------------------------------------------ | --------------- | ------------------------------------------- | ------- |
| value  | 显示值                                                             | String / Number | —                                           | —       |
| max    | 最大值，超过最大值会显示 `{max}+`，仅当 `value` 为 `Number` 时生效 | Number          | —                                           | —       |
| is-dot | 是否显示小圆点                                                     | Boolean         | —                                           | false   |
| type   | 徽标颜色                                                           | String          | primary / success / warning / danger / info | primary |
