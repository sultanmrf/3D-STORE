<script lang="ts" setup>
import { useTexture } from '@tresjs/core'

const pbrTexture = await useTexture({
  map: 'src/assets/images/textureWall.webp',
})
</script>

<template>
  <TresMesh :position="[-400, 125, 300]" :rotation="[0, 0, 0]">
    <TresCylinderGeometry :args="[40, 40, 250, 32]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(80,80,80)" />
  </TresMesh>

  <TresMesh :position="[-400, 125, -300]" :rotation="[0, 0, 0]">
    <TresCylinderGeometry :args="[40, 40, 250, 32]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(80,80,80)" />
  </TresMesh>
</template>

<style></style>
