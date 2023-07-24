<script lang="ts">
  import welcome from "./assets/svelte-welcome.webp";
  import Header from "./lib/Header.svelte";
  import welcome_fallback from "./assets/svelte-welcome.png";
  import LinkSdk from "./lib/CodatLink.svelte";
  import "./styles.css";

  let modalOpen = false;
  let companyId = "";

  const closeModal = () => (modalOpen = false);
</script>

<div class="app">
  <Header />
  <main>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
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
          }}>Start authing</button
        >
      </div>
    </div>
    {#if modalOpen}
      <LinkSdk {companyId} {closeModal} />
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
</style>
