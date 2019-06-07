<template>
  <div class="flex-container" style="margin-top: 10%; position: absolut; width:65%">
    <div class="card clickable" @click="card_click($event, '/list')">
      <div class="card-container" style="text-align: center;">
        <h2>Liste erstellen</h2>
      </div>
    </div>
    <div class="card clickable" @click="card_click($event, '/order')">
      <div class="card-container" style="text-align: center;">
        <h2>Alle Aufträge</h2>
      </div>
    </div>
    <div class="card clickable" @click="card_click($event, '/list/archive')">
      <div class="card-container" style="text-align: center;">
        <h2>Erstellte Listen</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
