<template>
  <div class="container">
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
        <button id="myBtn" @click="openModal">Kontrolle hinzufügen</button>
        <button>Aufträge holen</button>
        <button>Liste erstellen</button>
      </div>

      <!-- The Modal -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>
            <label for="Bezeichnung">Bezeichnung</label>
            <input
              type="text"
              id="Bezeichnung"
              name="Bezeichnung"
              placeholder="Bezeichnung.."
              v-model="kontrolle.bezeichnung"
            >
          </p>
          <p>
            <button>Hinzufügen</button>
            <button>Schließen</button>
          </p>
        </div>
      </div>

      <table>
        <thead>
          <th>Pos</th>
          <th>Auftragsnummer</th>
          <th>Untersuchung</th>
          <th>Sortierung</th>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
 
  created() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    this.modal = modal;
    this.btn = btn;
    this.span = span;
  },
  computed: {},
  methods: {
    openModal() {
      this.modal.style.display = "block";
    },
    closeModal() {
      this.modal.style.display = "none";
    }
  },
  data: () => ({
    kontrolle: {
      bezeichnung: ""
    },
    liste: [],
    modal: null,
    btn: null,
    span: null
  })
};
</script>

<style>
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
