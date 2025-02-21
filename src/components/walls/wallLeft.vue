<script lang="ts" setup>
import { useTexture } from '@tresjs/core'
import { useDegreeToRadial } from '@/composables/DegreeToRadial.ts'

const { calculateDegreeToRadial } = useDegreeToRadial(180)

const pbrTexture = await useTexture({
  map: 'src/assets/images/textureWall.webp',
})
</script>

<template>
  <TresMesh :position="[0, 90, -320]" :rotation="[0, calculateDegreeToRadial, 0]">
    <TresBoxGeometry :args="[800, 180, 5]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(80,80,80)" />
  </TresMesh>
</template>

<style></style>
