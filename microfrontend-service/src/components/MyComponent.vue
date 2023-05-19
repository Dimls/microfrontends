<template>
  <div>
    <h1>Counter is {{ counter }}</h1>
    <p>Open the modal for awesome increments!</p>
    <scale-button @click="handleOpenModal">Open</scale-button>
    <scale-modal  size="small" :opened="showModal" id="modal" @scaleClose="handleCloseModal">
      <p>Click ok if you'd like to increment your counter by 50</p>
      <scale-button slot="action" variant="secondary" @click="handleCloseModal">
        Cancel
      </scale-button>
      <scale-button slot="action" variant="primary" @click="handleClickOk">OK</scale-button>
    </scale-modal>
  </div>
</template>

<script>
import {reactive, toRefs, onUpdated} from 'vue';

export default {
  setup() {
    const state = reactive({
      counter: 0,
      showModal: false
    });

    function handleOpenModal() {
      state.showModal = true;
    }

    function handleCloseModal() {
      state.showModal = false;
    }

    function handleClickOk() {
      state.counter = state.counter + 50;
      handleCloseModal();
    }

    const {counter, showModal} = toRefs(state);

    onUpdated(() => {
      console.log('Component updated');
    });

    return {
      showModal,
      counter,
      handleCloseModal,
      handleOpenModal,
      handleClickOk
    };
  },
};
</script>