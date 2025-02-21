<script lang="ts" setup>
import { useTexture } from '@tresjs/core'
import { useDegreeToRadial } from '@/composables/DegreeToRadial.ts'

const { calculateDegreeToRadial } = useDegreeToRadial(90)

const materialOption: object = {
  transparent: true,
  opacity: 0.15,
  roughness: 0,
  metalness: 0.1,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  flatShading: true,
  emissive: '#fff',
}

const textureBaseDoor = await useTexture({
  map: 'src/assets/images/texture/TCom_Wood_ParquetFiveFinger_512_albedo.png',
  alphaMap: 'src/assets/images/texture/TCom_Wood_ParquetFiveFinger_512_ao.png',
  roughnessMap: 'src/assets/images/texture/TCom_Wood_ParquetFiveFinger_512_roughness.png',
})
</script>

<template>
  <!-- section glass right start -->
  <TresMesh :position="[-400, 90, 185]" :rotation="[0, calculateDegreeToRadial, 0]">
    <TresBoxGeometry :args="[150, 180, 2]" />
    <TresMeshPhysicalMaterial v-bind="materialOption" />
  </TresMesh>

  <!-- sides glass right -->
  <TresMesh :position="[-400, 90, 257]" :rotation="[0, 0, 0]">
    <TresBoxGeometry :args="[3, 180, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>

  <TresMesh :position="[-400, 90, 107]" :rotation="[0, 0, 0]">
    <TresBoxGeometry :args="[3, 180, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>

  <TresMesh :position="[-400, 178, 182]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[3, 155, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>

  <TresMesh :position="[-400, 0, 182]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[3, 155, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>
  <!-- section glass right end -->

  <!-- section glass left start -->
  <TresMesh :position="[-400, 90, -185]" :rotation="[0, calculateDegreeToRadial, 0]">
    <TresBoxGeometry :args="[150, 180, 2]" />
    <TresMeshPhysicalMaterial v-bind="materialOption" />
  </TresMesh>

  <!-- sides glass left -->
  <TresMesh :position="[-400, 90, -257]" :rotation="[0, 0, 0]">
    <TresBoxGeometry :args="[3, 180, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>

  <TresMesh :position="[-400, 90, -107]" :rotation="[0, 0, 0]">
    <TresBoxGeometry :args="[3, 180, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>

  <TresMesh :position="[-400, 178, -182]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[3, 155, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>

  <TresMesh :position="[-400, 0, -182]" :rotation="[calculateDegreeToRadial, 0, 0]">
    <TresBoxGeometry :args="[3, 155, 5]" />
    <TresMeshBasicMaterial v-bind="textureBaseDoor" color="rgba(255,255,0)" />
  </TresMesh>
  <!-- section glass left end -->
</template>

<style></style>
