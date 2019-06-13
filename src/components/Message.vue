<template>
  <div
    class="message"
    v-bind:class="customClass"
    v-bind:style="{ display: showMessage ? 'block' : 'none' }"
  >
    <div class="overlay" @click="closeCallback()"></div>
    <div class="message_content">
      <i style="float: right;" @click="closeCallback()" class="material-icons">clear</i>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    showMessage: Boolean,
    customClass: String,
    closeCallback: Function
  }
};
</script>
<style>
.message {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
}

.message .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
}

.message .message_content {
  z-index: 999;
  position: absolute;

  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  width: 520px; /* This just a default width */
}

.message .message_content > h2 {
  font-size: 28px;
  font-weight: 200;
  margin: 20px 0 40px;
  text-align: center;
}

.message .message_content .buttons_wrapper {
  padding: 20px;
}

.message .close_message {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.2s ease;
}

.message .close_message:hover {
  opacity: 0.9;
}
</style>
