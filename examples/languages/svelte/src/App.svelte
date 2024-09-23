<script lang="ts">
  import welcome from "./assets/svelte-welcome.webp";
  import Header from "./lib/Header.svelte";
  import welcome_fallback from "./assets/svelte-welcome.png";
  import "./styles.css";
  import CodatLink from "./lib/CodatLink.svelte";
  import type {
    ConnectionCallbackArgs,
    ErrorCallbackArgs,
  } from "https://link-sdk.codat.io";

  let modalOpen = false;
  let isFinished = false;
  let companyId = "";

  const onConnection = (connection: ConnectionCallbackArgs) => {
    // Perform any logic here that should happen when a connection is linked
    console.log(`New connection linked with ID: ${connection.connectionId}`);
  }
  const onClose = () => (modalOpen = false);
  const onFinish = () => {
    onClose();
    isFinished = true;
  }
  const onError = (error: ErrorCallbackArgs) => {
    // this error should be logged in your error tracking service
    console.error(`Codat Link SDK error`, error);
    if (!error.userRecoverable) {
      onClose();
    }
  }
</script>

<div class="app">
  <Header/>
  <main>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp"/>
        <img src={welcome_fallback} alt="Welcome"/>
      </picture>
    </span>
    <h1>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/codatio/sdk-link/blob/main/examples/svelte/README.md"
      >
        Link SDK X Svelte
      </a>
    </h1>
    <p>An example of embedding Link SDK within a Svelte App</p>
    {#if isFinished}
      <div>
        <p>Thank you for sharing your data</p>
        <button on:click={() => isFinished = false}>Connect again</button>
      </div>
    {:else}
      <div>
        <ol>
          <li>
            <a
              href="https://github.com/codatio/sdk-link/tree/main#create-a-new-company"
              target="_blank"
              rel="noreferrer"
            >
              Create a company
            </a>
          </li>
          <li>Paste the company ID below</li>
        </ol>
        <div class="input-wrapper">
          <input
            bind:value={companyId}
            placeholder="Provide a valid company ID"
          />
          <button
            on:click={() => {
            modalOpen = true;
          }}>Start authing
          </button
          >
        </div>
      </div>
    {/if}
    {#if modalOpen}
      <div class="modal-wrapper">
        <CodatLink {companyId} {onConnection} {onClose} {onError} {onFinish}/>
      </div>
    {/if}
  </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    h1 {
        margin: 0;
    }

    main {
        flex: 0.6;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin-top: 20px;
        padding: 0 0 min(200px, calc(100% * 495 / 2048)) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }

    .modal-wrapper {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        position: fixed;
        inset: 0;
    }
</style>
