<script setup lang="ts">
import CodatLink from './components/CodatLink.vue'
import { ref } from 'vue'
import type { ConnectionCallbackArgs, ErrorCallbackArgs } from 'https://link-sdk.codat.io'

const companyId = ref('')
const modalOpen = ref(false)
const isFinished = ref(false);

const handleOnConnection = (connection: ConnectionCallbackArgs) => {
  // Perform any logic here that should happen when a connection is linked
  console.log(`New connection linked with ID: ${connection.connectionId}`);}

const handleOnClose = () => {
  modalOpen.value = false
}

const handleOnFinish = () => {
  handleOnClose();
  isFinished.value = true;
}

const handleOnError = (error: ErrorCallbackArgs) => {
  // this error should be logged in your error tracking service
  console.error(`Codat Link SDK error`, error);
  if (!error.userRecoverable) {
    handleOnClose();
  }
}
</script>

<template>
  <main class="main">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <h1 class="title">
        <a target="_blank" rel="noreferrer" href="https://github.com/codatio/sdk-link/tree/main/examples/vue/README.md">
          Link SDK X Vue
        </a>
      </h1>
    </header>
    <div class="content">
      <p>An example of embedding Link SDK within a brand new create-vue project</p>
      <div v-if="isFinished">
        <p>Thank you for sharing your data</p>
        <button @click="isFinished = false">Connect again</button>
      </div>
      <div v-if="!isFinished">
        <ol>
          <li>
            <a href="https://github.com/codatio/sdk-link/tree/main#create-a-new-company" target="_blank" rel="noreferrer">
              Create a company
            </a>
          </li>
          <li>Paste the company ID below</li>
        </ol>
        <div class="inputWrapper">
          <input type="text" v-model="companyId" placeholder="Provide a valid company ID" />
          <button @click="modalOpen = !modalOpen">
            {{ modalOpen ? 'Exit' : 'Start authing' }}
          </button>
        </div>
      </div>
    </div>
    <div v-if="modalOpen" class="modalWrapper">
      <CodatLink :company-id="companyId" :on-connection="handleOnConnection" :on-close="handleOnClose"
        :on-finish="handleOnFinish" :on-error="handleOnError" />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  gap: 1rem;
  min-height: 100vh;
  box-sizing: border-box;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.modalWrapper {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 2;
}

.inputWrapper {
  display: flex;
  gap: .5rem
}
</style>
