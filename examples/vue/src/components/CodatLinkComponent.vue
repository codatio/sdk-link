<script setup lang="ts">
import type { ConnectionCallbackArgs, ErrorCallbackArgs } from 'https://link-sdk.codat.io'

import { ref, onMounted } from 'vue'

const props = defineProps<{
  companyId: string
  onConnection: (args: ConnectionCallbackArgs) => void
  onError: (args: ErrorCallbackArgs) => void
  onClose: () => void
  onFinish: () => void
}>()

const target = ref()

onMounted(() => {
  if (target.value && target.value.children.length === 0) {
    import('https://link-sdk.codat.io').then(({ CodatLink }) => {
      new CodatLink({
        target: target.value,
        props: {
          companyId: props.companyId,
          onConnection: props.onConnection,
          onClose: props.onClose,
          onFinish: props.onFinish,
          onError: props.onError
        }
      })
    })
  }
})
</script>

<template>
  <div class="wrapper" ref="target"></div>
</template>

<style scoped>
.wrapper {
  width: 460px;
  height: 840px;
  max-height: 95%;
}
</style>
