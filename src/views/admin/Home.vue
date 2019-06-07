<template>
  <div class="container">
    <h2>System Einstellungen</h2>
    <div class="tabbed">
      <input checked="checked" id="tab1" type="radio" name="tabs">
      <input id="tab2" type="radio" name="tabs">
      <input id="tab3" type="radio" name="tabs">

      <nav>
        <label for="tab1">User</label>
        <label for="tab2" style="display:none;">Sentosa</label>
      </nav>

      <figure>
        <div class="tab1">
          <h3>User verwaltung</h3>
        </div>
        <div class="tab2">
          <h3>Sentosa Grundeinstellungen</h3>
          <div class="flex-container">
            <h4>Kontrollen automatisch hinzufügen</h4>
            <label class="checkbox">
              Positiv Konstrolle
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
            <label class="checkbox">
              Negativ Konstrolle
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {},
    sentosa: {}
  })
};
</script>

<style>
/* The container */
.checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: #ffcc00;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid grey;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
nav label {
  float: left;
  padding: 15px 15px;
  border-top: 1px solid silver;
  border-right: 1px solid silver;
  background: #ffcc00;
  color: #grey;
}

nav label:nth-child(1) {
  border-left: 1px solid silver;
}
nav label:hover {
  background: #e6e6e6;
}
nav label:active {
  background: #ffffff;
}
#tab1:checked ~ figure .tab1,
#tab2:checked ~ figure .tab2,
#tab3:checked ~ figure .tab3 {
  display: block;
}

#tab1:checked ~ nav label[for="tab1"],
#tab2:checked ~ nav label[for="tab2"],
#tab3:checked ~ nav label[for="tab3"] {
  background: white;
  color: #111;
  position: relative;
  border-bottom: none;
}

#tab1:checked ~ nav label[for="tab1"]:after,
#tab2:checked ~ nav label[for="tab2"]:after,
#tab3:checked ~ nav label[for="tab3"]:after {
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: white;
  left: 0;
  bottom: -1px;
}
/* Tabs mit radio-Buttons */
.tabbed figure {
  display: block;
  margin-left: 0;
  border-bottom: 1px solid silver;
  clear: both;
}

.tabbed > input,
.tabbed figure > div {
  display: none;
}

.tabbed figure > div {
  padding: 20px;
  width: 100%;
  border: 1px solid silver;
  background: #fff;
  line-height: 1.5em;
  letter-spacing: 0.3px;
  color: #444;
}
</style>
