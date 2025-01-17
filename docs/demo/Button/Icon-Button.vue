<script setup lang="ts">
import Button from '../../../src/components/Button/Button.vue'
</script>

<template>
  <Button icon-before="home"> hello </Button>
  <Button intent="success" icon-before="car"> Default </Button>
  <Button intent="danger" icon-before="gear"> Danger </Button>
  <hr />
  <Button appearance="primary" icon-before="camera"> hello </Button>
  <Button appearance="primary" icon-before="glasses" intent="success"> Default </Button>
  <Button appearance="primary" icon-before="music" intent="danger"> Danger </Button>
  <hr />
  <Button appearance="minimal" icon-before="paperclip"> hello </Button>
  <Button appearance="minimal" icon-before="file" intent="success"> Default </Button>
  <Button appearance="minimal" icon-before="cloud" intent="danger"> Danger </Button>
</template>
