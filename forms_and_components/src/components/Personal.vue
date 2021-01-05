<template>
  <div class="body">
    <h2>Personal Details</h2>
    <form>
      <div
        class="form-control"
        :class="{ invalid: nameValidity === 'invalid' }"
      >
        <label for="name" class="fields">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          @blur="validateName"
        />
        <p v-if="nameValidity === 'invalid'">Please enter a valid name.</p>
      </div>
      <div
        class="form-control"
        :class="{ invalid: addressValidity === 'invalid' }"
      >
        <label for="address" class="fields">Address :</label>
        <input
          type="textarea"
          name="address"
          id="address"
          v-model="address"
          @blur="validateAddress"
          class="inputAddress"
        />
        <p v-if="addressValidity === 'invalid'">Please add a valid Address.</p>
      </div>
      <div class="form-control">
        <p>
          <span class="fields">Age Group :</span>
          <input
            type="radio"
            name="ageGroup"
            id="under18"
            v-model="age"
            class="inputs"
          />
          <label for="under18">Under 18</label>
          <input
            type="radio"
            name="ageGroup"
            id="18-35"
            v-model="age"
            class="inputs"
          />
          <label for="18-35">18 - 35</label>
          <input
            type="radio"
            name="ageGroup"
            id="36-60"
            v-model="age"
            class="inputs"
          />
          <label for="36-60">36 - 60</label>
          <input
            type="radio"
            name="ageGroup"
            id="60+"
            v-model="age"
            class="inputs"
          />
          <label for="60+">60 +</label>
        </p>
      </div>
      <div class="form-control">
        <label for="hobbies" class="fields">Hobbies :</label>
        <input
          type="checkbox"
          name="hobbies1"
          id="hobbies"
          value="Singing"
          v-model="hobbies"
          class="inputs"
        />
        <label for="hobbies1">Singing</label>
        <input
          type="checkbox"
          name="hobbies2"
          id="hobbies"
          value="Reading"
          v-model="hobbies"
          class="inputs"
        />
        <label for="hobbies2">Reading</label>
        <input
          type="checkbox"
          name="hobbies3"
          id="hobbies"
          value="Listening Music"
          v-model="hobbies"
          class="inputs"
        />
        <label for="hobbies3">Listening Music</label>
        <input
          type="checkbox"
          name="hobbies4"
          id="hobbies"
          value="Playing Games"
          v-model="hobbies"
          class="inputs"
        />
        <label for="hobbies4">Playing Games</label>
      </div>
    </form>
    <button @click="next" class="navBtnNext">Next</button>
  </div>
</template>

<script>
export default {
  inject: [
    "changeComponent",
    "tempDetails",
    "changePersonalDetailsInTempDetails",
  ],
  data() {
    return {
      name: "",
      address: "",
      age: null,
      hobbies: [],
      nameValidity: "pending",
      addressValidity: "pending",
    };
  },
  methods: {
    next() {
      if (this.name === "") {
        this.nameValidity = "invalid";
        if (this.address === "") {
          this.addressValidity = "invalid";
          return;
        }
        return;
      }
      if (this.address === "") {
        this.addressValidity = "invalid";
        return;
      }
      this.submitPersonalDetails();
      this.changeComponent("contact");
    },
    submitPersonalDetails() {
      this.changePersonalDetailsInTempDetails(
        this.name,
        this.address,
        this.age,
        this.hobbies
      );
    },
    validateName() {
      if (this.name === "") {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
    },
    validateAddress() {
      if (this.address === "") {
        this.addressValidity = "invalid";
      } else {
        this.addressValidity = "valid";
      }
    },
  },
};
</script>

<style scoped>
input[type="textarea"] {
  height: 1.2em;
  width: 70%;
}
</style>
