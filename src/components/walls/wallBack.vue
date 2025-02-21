<script lang="ts" setup>
import { useTexture } from '@tresjs/core'
import { useDegreeToRadial } from '@/composables/DegreeToRadial.ts'

const { calculateDegreeToRadial } = useDegreeToRadial(90)

const pbrTexture = await useTexture({
  map: 'src/assets/images/textureWall.webp',
})
</script>

<template>
  <TresMesh :position="[400, 90, 0]" :rotation="[0, calculateDegreeToRadial, 0]">
    <TresBoxGeometry :args="[640, 180, 5]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(80,80,80)" />
  </TresMesh>
</template>

<style></style>
