<template>
  <div class="container">
    <div style="width: 100%; margin-top:0; position:relative;">
      <ul class="breadcrumb">
        <li>
          <router-link to="/">Übersicht</router-link>
        </li>
        <li>Sentosa</li>
      </ul>
    </div>
    <div class="flex-container" style="margin-top: 10%; position: absolut; width:65%">
      <div class="card clickable" @click="card_click($event, '/sentosa/list')">
        <div class="card-container" style="text-align: center;">
          <h2>Liste erstellen</h2>
        </div>
      </div>
      <div class="card clickable" @click="card_click($event, 'sentosa/order')">
        <div class="card-container" style="text-align: center;">
          <h2>Alle Aufträge</h2>
        </div>
      </div>
      <div class="card clickable" @click="card_click($event, 'sentosa/list/archive')">
        <div class="card-container" style="text-align: center;">
          <h2>Erstellte Listen</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false
    };
  },

  methods: {
    card_click: function(event, path) {
      this.$router.push(path);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style>
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}
ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>
