<template>
  <keep-alive>
    <component
      :is="currentAddComponent"
      @contact-details="addContactDetails"
      @account-details="addAccountDetails"
      @submit-form="checkSubmitStatus"
    ></component>
  </keep-alive>
</template>

<script>
import Account from "./Account.vue";
import Contact from "./Contact.vue";
import Personal from "./Personal.vue";

export default {
  components: {
    Account,
    Personal,
    Contact,
  },
  emits: ["final-details"],
  inject: ["addNewDetails", "tempDetails", "name", "address", "age", "hobbies"],
  provide() {
    return {
      changeComponent: this.changeComponent,
      finalDetails: this.finaldetails,
      submitDetails: this.submitDetails,
    };
  },
  data() {
    return {
      currentAddComponent: "personal",
    };
  },
  methods: {
    changeComponent(comp) {
      this.currentAddComponent = comp;
    },
    addPersonalDetails(id, name, address, age, hobbies) {
      console.log("inside addPersonalDetails" + this.finalDetails);
      this.finaldetails.id = id;
      this.finaldetails.name = name;
      this.finaldetails.address = address;
      this.finaldetails.age = age;
      this.finaldetails.hobbies = hobbies;
    },
    addContactDetails(phoneNumber, emerContact, email) {
      this.contactDetails = {
        phoneNumber: phoneNumber,
        emerContact: emerContact,
        email: email,
      };
    },
    addAccountDetails(accName, accType, accNumber, confirmTerms) {
      this.accountDetails = {
        accName: accName,
        accType: accType,
        accNumber: accName,
        confirmTerms: confirmTerms,
      };
    },
    checkSubmitStatus(status) {
      if (status) {
        this.submitDetails();
      }
    },
    submitDetails() {
      this.addNewDetails(this.tempDetails);
    },
  },
};
</script>

<style>
body {
  font-family: "Hanalei Fill", cursive;
}

.body {
  width: 60%;
  height: 600px;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 40px auto;
  padding: 0px 30px;
  box-shadow: 2px 3px 4px gray;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 120%;
}

h2 {
  font-family: "Hanalei Fill", cursive;
  letter-spacing: 2px;
  font-size: 40px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #4ab560;
  border-bottom-width: 5px;
}

form {
  padding: 0 60px;
}

.fields {
  font-weight: 600;
  padding-right: 20px;
  /* float: left; */
  width: 120px;
}

input,
select {
  padding: 6px 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="checkbox"],
input[type="radio"] {
  margin-left: 20px;
  height: 0.8em;
  width: 0.8em;
}

#confirm-terms {
  margin-right: 10px;
}

.form-control {
  margin: 40px 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

.navBtnPrevious {
  float: left;
  margin-left: 40px;
}

.navBtnNext {
  float: right;
  margin-right: 40px;
}
</style>
