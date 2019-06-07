<template>
  <div class="flex-container row wrap" style="margin-top: 10%; position: absolut; width:65%">
    <div class="card clickable" @click="card_click($event, '/sentosa')">
      <div class="card-container" style="text-align: center;">
        <h2>Sentosa</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    card_click: function(event, path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
.row {
  flex-direction: row;
  margin: auto;
}
.wrap {
  flex-wrap: wrap;
}
</style>
