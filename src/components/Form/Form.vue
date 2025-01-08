<template>
  <form class="ev-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { ValidateFieldsError } from 'async-validator'
import { provide } from 'vue'
import { formContextKey } from './types'
import type {
  FormContext,
  FormInstance,
  FormItemContext,
  FormProps,
  FormValidateFailure,
} from './types'
defineOptions({
  name: 'ev-form',
})
const props = defineProps<FormProps>()

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}
const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}

provide(formContextKey, { ...props, addField, removeField })

const resetFields = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  filterArr.forEach((field) => field.resetField())
}

const clearValidate = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  filterArr.forEach((field) => field.clearValidate())
}

const validate = async () => {
  let validationErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (e) {
      const error = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...error.fields,
      }
    }
  }
  if (Object.keys(validationErrors).length === 0) return true
  return Promise.reject(validationErrors)
}

defineExpose<FormInstance>({
  validate,
  resetFields,
  clearValidate,
})
</script>
