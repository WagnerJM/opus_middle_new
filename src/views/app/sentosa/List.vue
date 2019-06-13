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
          <button @click="prepareList">Liste vorbereiten</button>
          <button @click="toggleModal">Kontrolle hinzufügen</button>

          <Modal
            v-bind="{ closeCallback: toggleModal, showModal, customClass: 'custom_modal_class'}"
          >
            <div>
              <h2>Kontrolle</h2>
              <label for>Position</label>
              <input v-model="this.kontrolle.pos" type="text">
              <label for>Untersuchung</label>
              <input v-model="kontrolle.untersuchung" type="text">
              <i
                @click="addKontrolle"
                class="material-icons icon-button"
                style=" padding: 10px 20px 10px 20px; border-radius: 0; float: right;"
              >add</i>
            </div>
          </Modal>
          <button @click="createList">Liste erstellen</button>
        </div>
        <button @click="resetList">Reset</button>

        <h2>Listennummer # {{ listnummer === 0 ? "" : listnummer }}</h2>
        <FlashMessage></FlashMessage>
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Auftragsnummer</th>
              <th>Untersuchung</th>
            </tr>
          </thead>
          <draggable v-model="list" tag="tbody">
            <tr v-for="(auftrag, i) in list" :key="i">
              <td scope="row">{{ i + 1 }}</td>
              <td>{{ auftrag.anr }}</td>
              <td>{{ auftrag.untersuchung }}</td>
            </tr>
          </draggable>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/axios-instance";
import draggable from "vuedraggable";

import Modal from "@/components/Modal";

export default {
  display: "Table",
  order: 8,
  components: {
    draggable,
    Modal
  },
  data() {
    return {
      showModal: false,
      test: "Tunnel",
      list: [],
      kontrolle: {
        pos: 0,
        anr: "0000000",
        untersuchung: ""
      },
      default_kontrolle: {
        pos: 0,
        anr: "0000000",
        untersuchung: ""
      },
      listnummer: 0
    };
  },
  methods: {
    card_click: function(event, path) {
      this.$router.push(path);
    },
    prepareList() {
      this.list.push({
        anr: "0000000",
        untersuchung: "positive Kontrolle"
      });
      this.list.push({
        anr: "0000000",
        untersuchung: "negativ Kontrolle"
      });

      //set pk, nk according settings
      /*
      if (state.admin.config.sentosa.auto_pk_anfang) {
        tempList.push({ pos: 1, anr: "00000000", untersuchung: "pk" });
      }
      if (state.admin.config.sentosa.auto_nk_anfang) {
        tempList.push({ pos: 2, anr: "00000000", untersuchung: "nk" });
      }
      */
      //let array = state.admin.config.sentosa.sentosa_unters;

      // für jede Untersuchung in dem Array mach ein axios call zum GET Endpoint mit ?untersuchung=sentosaUntersuchung['bezeichnung]
      //for (var i = 0; i < sentosaUntersuchungen.lenght(); i++) {}
      /*
      
      for (let i = 0; i < array.length; i++) {
        http
          .get(`/auftrag?untersuchung=${array[i]}`)
          .then(res => {
            tempList.push(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      } 
      */
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    addKontrolle() {
      this.$store.commit("loading");
      const formData = {
        pos: this.kontrolle.pos - 1,
        anr: this.kontrolle.anr,
        untersuchung: this.kontrolle.untersuchung
      };
      this.list.push({
        pos: formData.pos,
        anr: formData.anr,
        untersuchung: formData.untersuchung
      });
      this.$store.commit("loading");
      setTimeout(() => {
        this.kontrolle = Object.assign({}, this.default_kontrolle);
      }, 300);
      this.showModal = false;
    },
    resetList() {
      this.list = Object.assign([], []);
      this.flashMessage.success({
        title: "Erfolg",
        message: "Die Liste wurde erfolgreich resettet"
      });
    },
    createList() {
      this.$store.commit("loading");
      http
        .post("/list", this.list)
        .then(res => {
          this.listnummer = res.data.listnummer;
          this.flashMessage.success({
            titel: "Erfolg",
            message:
              "Liste wurde erfolgreich angelegt und in kürze an das Gerät gesendet."
          });
          this.$store.commit("loading");
        })
        .catch(error => {
          this.flashMessage.error({
            titel: "Error",
            message: error
          });
        });
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