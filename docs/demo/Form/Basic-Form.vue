<template>
  <div>
    <Form ref="formRef" :model="model" :rules="rules">
      <FormItem label="the email" prop="email">
        <Input v-model="model.email" />
      </FormItem>
      <FormItem label="the password" prop="password">
        <template #label="{ label }">
          <Button>{{ label }}</Button>
        </template>
        <Input type="password" v-model="model.password" />
      </FormItem>
      <FormItem label="confirm password" prop="confirmPwd">
        <Input type="password" v-model="model.confirmPwd" />
      </FormItem>
      <div>
        <Button type="primary" @click.prevent="submit">Submit</Button>
        <Button @click.prevent="reset">Reset</Button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Button from '../../../src/components/Button/Button.vue'
import Form from '../../../src/components/Form/Form.vue'
import FormItem from '../../../src/components/Form/FormItem.vue'
import Input from '../../../src/components/Input/Input.vue'

const formRef = ref()

const model = reactive({
  email: '',
  password: '',
  confirmPwd: '',
})

const rules = {
  email: [
    { type: 'email', required: true, trigger: 'blur' },
    { type: 'string', required: true, trigger: 'input`' },
  ],
  password: [{ type: 'string', required: true, trigger: 'blur', min: 3, max: 5 }],
  confirmPwd: [
    { type: 'string', required: true, trigger: 'blur' },
    {
      validator: (rule, value) => value === model.password,
      trigger: 'blur',
      message: '两个密码必须相同',
    },
  ],
}

const submit = async () => {
  try {
    await formRef.value.validate()
  } catch (e) {
    console.log(e)
  }
}

const reset = () => {
  formRef.value.resetFields()
}
</script>
