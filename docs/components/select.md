---
title: Select
description: Select 组件的文档
---

# Select 选择

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。

<preview path="../demo/Select/Basic-Select.vue" title="基础选择器" description="Select 基础选择器"></preview>

## 远程搜索

输入关键字以从远程服务器中查找数据。

服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 true，同时传入一个 `remote-method`。`remote-method` 为一个返回 Promise 的 Function，类型为 `(value: String) => Promise<SelectOption[]>`。

<preview path="../demo/Select/Remote-Select.vue" title="远程搜索" description="远程搜索"></preview>
