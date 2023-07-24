<script lang="ts">
  import { CodatLink } from "https://link-sdk.codat.io";
  import { onMount } from "svelte";
  export let closeModal: () => {};
  export let companyId: string;
  let target: HTMLElement | undefined;

  onMount(() => {
    new CodatLink({
      target,
      props: {
        companyId,
        onConnection: (connection) =>
          alert(`On connection callback - ${connection.connectionId}`),
        onClose: () => closeModal(),
        onFinish: () => alert("On finish callback"),
        onError: (error) => alert(`On error callback - ${error.message}`),
      },
    });
  });
</script>

<div class="modal-wrapper">
  <div class="modal" bind:this={target} />
</div>

<style>
  .modal-wrapper {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: fixed;
    inset: 0;
  }

  .modal {
    width: 460px;
    height: 840px;
    max-height: 95%;
  }
</style>
