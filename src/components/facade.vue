<script lang="ts" setup>
import { useTexture } from '@tresjs/core'
import { useDegreeToRadial } from '@/composables/DegreeToRadial.ts'

const { calculateDegreeToRadial } = useDegreeToRadial(90)

const pbrTexture = await useTexture({
  map: 'src/assets/images/wood.svg',
})
</script>

<template>
  <TresMesh :position="[-512, 250, 0]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[5, 800, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>

  <TresMesh :position="[-512, 180, 0]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[5, 800, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>

  <TresMesh :position="[-14, 250, 400]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[1000, 5, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>

  <TresMesh :position="[-14, 180, 400]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[1000, 5, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>

  <TresMesh :position="[-14, 250, -400]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[1000, 5, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>

  <TresMesh :position="[-14, 180, -400]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[1000, 5, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>

  <TresMesh :position="[485, 250, 0]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[5, 800, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>

  <TresMesh :position="[485, 180, 0]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[5, 800, 10]" />
    <TresMeshBasicMaterial v-bind="pbrTexture" color="rgba(255,255,255)" />
  </TresMesh>
</template>

<style></style>
