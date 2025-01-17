---
title: Button | Evergreen
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `appearance`、`intent` 来定义按钮的样式。

<preview path="../demo/Button/Basic-Button.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 加载中

添加/删除 `is-loading` 属性以切换加载中状态。

<preview path="../demo/Button/Loading-Button.vue" title="加载中" description="Button 组件的加载中状态"></preview>

## 图标

通过 `icon-before` 属性添加图标，支持 fontawesome 系列图标。

<preview path="../demo/Button/Icon-Button.vue" title="图标" description="Button 组件添加图标"></preview>

## API

### Button

| PROPERTY     | TYPE                             | DESCRIPTION                                                                              |
| ------------ | -------------------------------- | ---------------------------------------------------------------------------------------- |
| `intent`     | `string`                         | The intent of the button.                                                                |
| `appearance` | `string`                         | The appearance of the button.                                                            |
| `size`       | `'small' \| 'medium' \| 'large'` | The size of the button.                                                                  |
| `isLoading`  | `bool`                           | When true, show a loading spinner before the children.<br>This also disables the button. |
| `isActive`   | `bool`                           | Forcefully set the active state of a button. Useful in conjunction with a Popover.       |
| `iconBefore` | `elementType \| element`         | Sets an icon before the text. Can be any icon from Evergreen or a custom element.        |
| `iconAfter`  | `elementType \| element`         | Sets an icon after the text. Can be any icon from Evergreen or a custom element.         |
| `disabled`   | `bool`                           | When true, the button is disabled. `isLoading` also sets the button to disabled.         |
| `className`  | `string`                         | Class name passed to the button. Only use if you know what you are doing.                |

<!--
### IconButton

| PROPERTY     | TYPE                             | DESCRIPTION                                                                        |
| ------------ | -------------------------------- | ---------------------------------------------------------------------------------- |
| `intent`     | `string`                         | The intent of the button.                                                          |
| `appearance` | `string`                         | The appearance of the button.                                                      |
| `size`       | `'small' \| 'medium' \| 'large'` | The size of the button.                                                            |
| `isActive`   | `bool`                           | Forcefully set the active state of a button. Useful in conjunction with a Popover. |
| `icon`       | `elementType \| element`         | The Evergreen icon or custom icon to render.                                       |
| `iconSize`   | `number`                         | Specifics an explict icon size instead of the default value.                       |
| `disabled`   | `bool`                           | When true, the button is disabled.                                                 |
| `className`  | `string`                         | Class name passed to the button. Only use if you know what you are doing.          |

### TextDropdownButton

| PROPERTY    | TYPE                     | DESCRIPTION                                                                        |
| ----------- | ------------------------ | ---------------------------------------------------------------------------------- |
| `isActive`  | `bool`                   | Forcefully set the active state of a button. Useful in conjunction with a Popover. |
| `icon`      | `elementType \| element` | An Evergreen icon or custom icon node. By default it uses CaretDownIcon.           |
| `disabled`  | `bool`                   | When true, the button is disabled.                                                 |
| `className` | `string`                 | Class name passed to the button. Only use if you know what you are doing.          |
-->
