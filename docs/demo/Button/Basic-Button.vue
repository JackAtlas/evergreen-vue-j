<script setup lang="ts">
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <Button> hello </Button>
  <Button intent="success"> Default </Button>
  <Button intent="danger"> Danger </Button>

  <Button is-loading> Loading </Button>
</template>
