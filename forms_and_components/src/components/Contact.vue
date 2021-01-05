<template>
  <div class="body">
    <h2>Contact Details</h2>
    <form>
      <div
        class="form-control"
        :class="{ invalid: numberValidity === 'invalid' }"
      >
        <label for="number" class="fields">Phone Number :</label>
        <input
          type="number"
          name="number"
          id="number"
          minlength="10"
          maxlength="10"
          v-model="phoneNumber"
          @blur="validateNumber"
        />
        <p v-if="numberValidity === 'invalid'">
          Please enter a valid Phone Number(Phone Number must be of 10 Digits)
        </p>
      </div>
      <div class="form-control">
        <label for="emerContact" class="fields">Emergency Contact :</label>
        <input
          type="number"
          name="emerContact"
          id="emerContact"
          minlength="10"
          maxlength="10"
          v-model="emerContact"
        />
      </div>
      <div
        class="form-control"
        :class="{ invalid: emailValidity === 'invalid' }"
      >
        <label for="email" class="fields">Email Address :</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          @blur="validateEmail"
        />
        <p v-if="emailValidity === 'invalid'">
          Please enter a valid Email Address
        </p>
      </div>
      <div class="footer">
        <button @click="changeComponent('personal')" class="navBtnPrevious">
          Previous
        </button>
        <button @click="next" class="navBtnNext">
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  inject: ["changeComponent", "changeContactDetailsInTempDetails"],
  data() {
    return {
      phoneNumber: null,
      emerContact: null,
      email: "",
      numberValidity: "pending",
      emailValidity: "pending",
    };
  },
  methods: {
    submitContactDetails() {
      this.changeContactDetailsInTempDetails(
        this.phoneNumber,
        this.emerContact,
        this.email
      );
    },
    validateNumber() {
      if (this.phoneNumber.toString().length != 10) {
        this.numberValidity = "invalid";
      } else {
        this.numberValidity = "valid";
      }
    },
    validateEmail() {
      if (this.email === "") {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
    },
    next() {
      if (this.phoneNumber.length != 10) {
        this.numberValidity = "invalid";
        if (this.email === "") {
          this.emailValidity = "invalid";
          return;
        }
        return;
      }
      if (this.email === "") {
        this.emailValidity = "invalid";
        return;
      }
      this.submitContactDetails();
      this.changeComponent("account");
    },
  },
};
</script>

<style scoped></style>
