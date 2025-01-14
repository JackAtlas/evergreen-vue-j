---
title: Button | Evergreen
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `appearance`、`intent` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

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
