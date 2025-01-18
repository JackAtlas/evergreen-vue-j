<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import type { Options } from "@popperjs/core"

import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'
import type { TooltipInstance, TooltipProps } from './components/Tooltip/types'

import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'

import Icon from './components/Icon/Icon.vue'

import Input from './components/Input/Input.vue'

import Tooltip from './components/Tooltip/Tooltip.vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')

const openedValue = ref(['a'])
const trigger = ref<TooltipProps['trigger']>('hover')

// const options: Partial<Options> = { placement: "right-end", strategy: "fixed" }

const buttonRef = ref<ButtonInstance | null>(null)

const tooltipRef = ref<TooltipInstance | null>(null)
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}

onMounted(() => {
  if (buttonRef.value) console.log('buttonRef', buttonRef.value.ref)
})
</script>

<template>
  <Input placeholder="Text Input Placeholder" type="text" v-model="input1" size="small" />
  <Input placeholder="Text Input Placeholder" type="text" v-model="input2" />
  <Input placeholder="Text Input Placeholder" type="text" v-model="input3" size="large" />
  <Input disabled placeholder="Text Input Placeholder" type="text" v-model="input4" />
  <header>
    <Tooltip
      placement="right"
      :trigger="trigger"
      ref="tooltipRef"
      :open-delay="1000"
      :close-delay="1000"
      manual
    >
      <img src="https://picsum.photos/200" alt="img" />
      <template #content>Hello Tooltip</template>
    </Tooltip>
  </header>
  <Icon icon="arrow-up" size="2xl" color="green" />
  <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 16px">
    <div style="display: flex; gap: 8px">
      <Button size="small" @click="open">Normal</Button>
      <Button size="small" intent="success">Success</Button>
      <Button size="small" intent="danger">Danger</Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button intent="none" @click="close">Normal</Button>
      <Button intent="success">Success</Button>
      <Button intent="danger">Danger</Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button size="large">Normal</Button>
      <Button size="large" intent="success">Success</Button>
      <Button size="large" intent="danger">Danger</Button>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 16px">
    <div style="display: flex; gap: 8px">
      <Button appearance="primary" intent="none" size="small">Normal</Button>
      <Button appearance="primary" intent="success" size="small">Success</Button>
      <Button appearance="primary" intent="danger" size="small">Danger</Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button appearance="primary" intent="none">Normal</Button>
      <Button appearance="primary" intent="success">Success</Button>
      <Button appearance="primary" intent="danger">Danger</Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button appearance="primary" intent="none" size="large">Normal</Button>
      <Button appearance="primary" intent="success" size="large">Success</Button>
      <Button appearance="primary" intent="danger" size="large">Danger</Button>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 16px">
    <div>
      <Button appearance="minimal" intent="none" size="small">Normal</Button>
      <Button appearance="minimal" intent="success" size="small">Success</Button>
      <Button appearance="minimal" intent="danger" size="small">Danger</Button>
    </div>
    <div>
      <Button appearance="minimal" intent="none">Normal</Button>
      <Button appearance="minimal" intent="success">Success</Button>
      <Button appearance="minimal" intent="danger">Danger</Button>
    </div>
    <div>
      <Button appearance="minimal" intent="none" size="large">Normal</Button>
      <Button appearance="minimal" intent="success" size="large">Success</Button>
      <Button appearance="minimal" intent="danger" size="large">Danger</Button>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 16px">
    <div>
      <Button intent="none" disabled>Normal</Button>
      <Button intent="success" disabled>Success</Button>
      <Button intent="danger" disabled>Danger</Button>
    </div>
    <div>
      <Button appearance="primary" intent="none" disabled>Normal</Button>
      <Button appearance="primary" intent="success" disabled>Success</Button>
      <Button appearance="primary" intent="danger" disabled>Danger</Button>
    </div>
    <div>
      <Button appearance="minimal" intent="none" disabled>Normal</Button>
      <Button appearance="minimal" intent="success" disabled>Success</Button>
      <Button appearance="minimal" intent="danger" disabled>Danger</Button>
    </div>
  </div>
  <div>
    <Button disabled>Continue</Button>
  </div>
  <div>
    <Button is-loading>Continue</Button>
  </div>
  <div>
    <Button icon-before="arrow-up">Continue</Button>
  </div>
  <Collapse accordion v-model="openedValue">
    <Item name="a">
      <template #title>
        <h2>nice title</h2>
      </template>
      <h2>headline title</h2>
      <div>this is content a aaa</div>
    </Item>
    <Item name="b" title="nice title b item b">
      <div>this is bbbb test</div>
    </Item>
    <Item name="c" title="nice ccc" disabled>
      <div>this is cccc test</div>
    </Item>
  </Collapse>
</template>

<style scoped></style>
