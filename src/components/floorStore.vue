<script lang="ts" setup>
import { useTexture } from '@tresjs/core'

const pbrTexture = await useTexture({
  map: 'src/assets/images/textureFloor.jpg',
})
</script>

<template>
  <TresMesh :position="[0, 0, 0]" :rotation="[-0.5 * Math.PI, 0, 0]">
    <TresPlaneGeometry :args="[900, 900, 10, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" />
  </TresMesh>
</template>

<style></style>
