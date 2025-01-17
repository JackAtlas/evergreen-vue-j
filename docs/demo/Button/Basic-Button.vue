<script setup lang="ts">
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <Button> hello </Button>
  <Button intent="success"> Default </Button>
  <Button intent="danger"> Danger </Button>
  <hr />
  <Button appearance="primary"> hello </Button>
  <Button appearance="primary" intent="success"> Default </Button>
  <Button appearance="primary" intent="danger"> Danger </Button>
  <hr />
  <Button appearance="minimal"> hello </Button>
  <Button appearance="minimal" intent="success"> Default </Button>
  <Button appearance="minimal" intent="danger"> Danger </Button>
</template>
