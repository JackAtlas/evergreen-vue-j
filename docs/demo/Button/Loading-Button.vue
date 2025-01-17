<script setup lang="ts">
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <Button is-loading> Loading </Button>
  <Button intent="success" is-loading> Loading </Button>
  <Button intent="danger" is-loading> Loading </Button>
  <hr />
  <Button appearance="primary" is-loading> Loading </Button>
  <Button appearance="primary" intent="success" is-loading> Loading </Button>
  <Button appearance="primary" intent="danger" is-loading> Loading </Button>
  <hr />
  <Button appearance="minimal" is-loading> Loading </Button>
  <Button appearance="minimal" intent="success" is-loading> Loading </Button>
  <Button appearance="minimal" intent="danger" is-loading> Loading </Button>
</template>
