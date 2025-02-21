<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { scene: model } = await useGLTF('@/assets/models/scene.gltf')
</script>

<template>
  <primitive :object="model" />
</template>
