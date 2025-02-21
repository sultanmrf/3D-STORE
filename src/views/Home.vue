<script lang="ts" setup>
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import FloorStore from '@/components/floorStore.vue'
import WallBack from '@/components/walls/wallBack.vue'
import WallRight from '@/components/walls/wallRight.vue'
import WallLeft from '@/components/walls/wallLeft.vue'
import WallTop from '@/components/walls/wallTop.vue'
import Bases from '@/components/walls/bases.vue'
import DoorsConst from '@/components/doorsGlass/doorsConst.vue'
import DoorsOpenUp from '@/components/doorsGlass/doorsOpenUp.vue'
import Facade from '@/components/facade.vue'

const { onLoop } = useRenderLoop()

onLoop(() => {})
</script>

<template>
  <TresCanvas shadows alpha window-size clear-color="white">
    <TresPerspectiveCamera :position="[1 - 900, 600, -200]" :args="[100, 1, 0.1, 2000]" />
    <OrbitControls />

    <Suspense>
      <FloorStore />
    </Suspense>

    <Suspense>
      <WallBack />
    </Suspense>

    <Suspense>
      <WallRight />
    </Suspense>

    <Suspense>
      <WallLeft />
    </Suspense>

    <Suspense>
      <WallTop />
    </Suspense>

    <Suspense>
      <Bases />
    </Suspense>

    <Suspense>
      <DoorsConst />
    </Suspense>

    <Suspense>
      <DoorsOpenUp />
    </Suspense>

    <Suspense>
      <Facade />
    </Suspense>
    <TresAxesHelper :size="50" />
    <TresGridHelper :args="[900, 20, 0x0000ff, 0x808080]" />
  </TresCanvas>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
