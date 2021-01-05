<template>
  <header>
    <nav>
      <ul>
        <li>
          <button
            @click="
              setSelectedComponent('add-details');
              selectedComp('add');
            "
            :class="{ btnActive: addCompIsActive }"
          >
            Add Details
          </button>
        </li>
        <li>
          <button
            @click="
              setSelectedComponent('show-details');
              selectedComp('show');
            "
            :class="{ btnActive: !addCompIsActive }"
          >
            Show Details
          </button>
        </li>
      </ul>
    </nav>
  </header>

  <component :is="selectedComponent"></component>
</template>

<script>
import AddDetails from "./components/AddDetails.vue";
import ShowDetails from "./components/ShowDetails.vue";

export default {
  components: {
    AddDetails,
    ShowDetails,
  },
  provide() {
    return {
      addNewDetails: this.addNewDetails,
      changeMainComponent: this.setSelectedComponent,
      selectedComp: this.selectedComp,
      details: this.storedDetails,
      tempDetails: this.tempDetails,
      changePersonalDetailsInTempDetails: this
        .changePersonalDetailsInTempDetails,
      changeContactDetailsInTempDetails: this.changeContactDetailsInTempDetails,
      changeAccountDetailsInTempDetails: this.changeAccountDetailsInTempDetails,
    };
  },
  data() {
    return {
      selectedComponent: "add-details",
      addCompIsActive: true,
      tempDetails: {
        id: "",
        name: "",
        address: "",
        age: "",
        hobbies: null,
        phoneNumber: null,
        emerContact: null,
        email: "",
        accountName: "",
        accountType: "",
        accountNumber: null,
        confirmTerms: false,
      },
      storedDetails: [
        {
          id: "dummy",
          name: "dummy",
          address: "dummy",
          age: "60+",
          hobbies: ["Reading", "Listening Music"],
          phoneNumber: 123,
          emerContact: 789,
          email: "dummy@gmail.com",
          accountName: "dummy",
          accountType: "Savings",
          accountNumber: 555,
          confirmTerms: true,
        },
      ],
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
    selectedComp(comp) {
      if (comp === "add") this.addCompIsActive = true;
      else this.addCompIsActive = false;
    },
    addNewDetails(details) {
      this.storedDetails.unshift(details);
    },
    changePersonalDetailsInTempDetails(name, address, age, hobbies) {
      this.tempDetails.id = new Date().toISOString();
      this.tempDetails.name = name;
      this.tempDetails.address = address;
      this.tempDetails.age = age;
      this.tempDetails.hobbies = hobbies.map((x) => x);
    },
    changeContactDetailsInTempDetails(number, emerContact, email) {
      this.tempDetails.phoneNumber = number;
      this.tempDetails.emerContact = emerContact;
      this.tempDetails.email = email;
    },
    changeAccountDetailsInTempDetails(accName, accType, accNumber) {
      this.tempDetails.accountName = accName;
      this.tempDetails.accountType = accType;
      this.tempDetails.accountNumber = accNumber;
      this.addNewDetails(this.tempDetails);
    },
  },
};
</script>

<style>
body {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

header {
  width: 100%;
  height: 5rem;
  background-color: lightgray;
  margin: 0;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

button {
  text-decoration: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  font-size: 110%;
  border-color: rgba(0, 0, 0, 0.2);
}

button:hover,
.btnActive {
  background-color: #4ab560;
  font-weight: bold;
  font-size: 120%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
