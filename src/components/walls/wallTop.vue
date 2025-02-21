<script lang="ts" setup>
import { useTexture } from '@tresjs/core'
import { useDegreeToRadial } from '@/composables/DegreeToRadial.ts'

const { calculateDegreeToRadial } = useDegreeToRadial(90)

const pbrTexture = await useTexture({
  map: 'src/assets/images/textureWall.webp',
})
</script>

<template>
  <TresMesh :position="[-14, 215, 0]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[1000, 800, 70]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(80,80,80)" />
  </TresMesh>
</template>

<style></style>
