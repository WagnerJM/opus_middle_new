<template>
  <div class="container" v-if="this.$store.state.loading">
    <div class="loader"></div>
  </div>
  <div class="container" v-else>
    <div v-if="this.$store.state.showListLoader" class="loader-container">
      <div class="loader"></div>
    </div>
    <div v-else>
      <div>
        <ul class="breadcrumb">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/sentosa">Sentosa</router-link>
          </li>
          <li>Übersicht</li>
        </ul>
      </div>
      <h2>Liste erstellen</h2>
      <div class="flex-container">
        <div class="toolbar">
          <button @click="showModal">Liste vorbereiten</button>
          <button>Liste erstellen</button>
        </div>

        <table>
          <thead>
            <th>Pos</th>
            <th>Auftragsnummer</th>
            <th>Untersuchung</th>
            <th>Sortierung</th>
          </thead>
          <tr v-for="(auftrag, i) in orders" :key="i">
            <td>{{auftrag.pos}}</td>
            <td>{{auftrag.anr}}</td>
            <td>{{auftrag.untersuchung}}</td>
            <td>
              <i class="material-icons icon-button">arrow_drop_up</i>
              <i class="material-icons icon-button">arrow_drop_down</i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      test: "Tunnel"
    };
  },

  methods: {
    card_click: function(event, path) {
      this.$router.push(path);
    },
    showModal() {
      this.$store.dispatch("PREPARE_SENTOSA_LIST");
    },
    closeModal() {
      this.showDialog = false;
    }
  },
  computed: {
    orders() {
      return this.$store.getters["sentosaList"];
    }
  }
};
</script>

<style>
.icon-button {
  background: #ffcc00;
  padding: 5px;
  border-radius: 50%;
  margin: 5px;
}
.icon-button:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.toolbar {
  display: flex;
  flex-direction: row;

  overflow: hidden;

  justify-content: center;
  margin-bottom: 10%;
  margin-top: 10%;
}
button {
  background-color: #ffcc00;
  border: none;
  width: 10;
  color: #5e5e5e;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
button:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 25%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
