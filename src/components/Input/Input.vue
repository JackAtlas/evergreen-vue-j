<template>
  <div
    :class="{
      [`ev-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus,
    }"
  >
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" class="ev-input__prepend">
        <slot name="prepend" />
      </div>
      <div class="ev-input__wrapper">
        <span v-if="$slots.prefix" class="ev-input__prefix">
          <slot name="prefix" />
        </span>
        <input
          class="ev-input__inner"
          ref="inputRef"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-bind="attrs"
          v-model="innerValue"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <span
          v-if="$slots.suffix || showClear || showPasswordArea"
          class="ev-input__suffix"
          @click="keepFocus"
        >
          <slot name="suffix" />
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="ev-input__clear"
            @click="clear"
            @mousedown.prevent="NOOP"
          />
          <Icon
            icon="eye"
            v-if="showPasswordArea && passwordVisible"
            class="ev-input__password"
            @click="togglePasswordVisible"
          />
          <Icon
            icon="eye-slash"
            v-if="showPasswordArea && !passwordVisible"
            class="ev-input__password"
            @click="togglePasswordVisible"
          />
        </span>
      </div>
      <div v-if="$slots.append" class="ev-input__append">
        <slot name="append" />
      </div>
    </template>
    <template v-else>
      <textarea
        class="ev-textarea__wrapper"
        ref="inputRef"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-bind="attrs"
        v-model="innerValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, ref, useAttrs, watch } from 'vue'
import type { Ref } from 'vue'
import type { InputEmits, InputProps } from './types'
import Icon from '../Icon/Icon.vue'
import { formItemContextKey } from '../Form/types'

defineOptions({
  name: 'ev-input',
  inheritAttrs: false,
})
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off',
})
const attrs = useAttrs()
const innerValue = ref(props.modelValue)
const isFocus = ref(false)
const passwordVisible = ref(false)

const formItemContext = inject(formItemContextKey)
const runValidation = (trigger?: string) => {
  formItemContext?.validate(trigger).catch((e) => console.log(e.errors))
}

const showClear = computed(
  () => props.clearable && !props.disabled && !!innerValue.value && isFocus.value,
)
const showPasswordArea = computed(() => props.showPassword && !props.disabled && !!innerValue.value)

const emits = defineEmits<InputEmits>()
const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
  runValidation('input')
}
const handleChange = () => {
  emits('change', innerValue.value)
  runValidation('change')
}
const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}
const handleBlur = (event: FocusEvent) => {
  isFocus.value = false
  emits('blur', event)
  runValidation('blur')
}
const clear = () => {
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}

const keepFocus = async () => {
  await nextTick()
  inputRef.value.focus()
}
const NOOP = () => {}
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue
  },
)

const inputRef = ref() as Ref<HTMLInputElement>
defineExpose({
  ref: inputRef,
})
</script>
