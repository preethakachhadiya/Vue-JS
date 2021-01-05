<template>
  <div class="body">
    <h2>Account Details</h2>
    <div
      class="form-control"
      :class="{ invalid: accNameValidity === 'invalid' }"
    >
      <label for="accName" class="fields">Account Name :</label>
      <input
        type="text"
        name="accName"
        id="accName"
        v-model="accountName"
        required
        @blur="validateAccName"
      />
      <p v-if="accNameValidity === 'invalid'">
        Please enter a valid Account Name
      </p>
    </div>
    <div class="form-control">
      <p>
        <span class="fields">Account Type :</span>
        <select name="accountType" id="accountType" v-model="accountType">
          <option value="Current">Current Account</option>
          <option value="Savings">Savings Account</option>
          <option value="Recurring">Recurring Account</option>
          <option value="Fixed Deposit">Fixed Deposit Account</option>
        </select>
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: accNumberValidity === 'invalid' }"
    >
      <label for="accNumber" class="fields">Account Number</label>
      <input
        type="number"
        name="accNumber"
        id="accNumber"
        @blur="validateAccNumber"
        v-model="accountNumber"
      />
      <p v-if="accNumberValidity === 'invalid'">
        Please enter a valid Account Number(Account Number must be of 12
        digits).
      </p>
    </div>
    <div class="form-control">
      <input
        type="checkbox"
        name="confirm-terms"
        id="confirm-terms"
        v-model="confirmTerms"
      />
      <label for="confirm-terms">Agree to terms of use</label>
    </div>
    <div>
      <button @click="changeComponent('contact')" class="navBtnPrevious">
        Previous
      </button>
      <button class="submitBtn" @click="submit">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  inject: [
    "changeComponent",
    "changeAccountDetailsInTempDetails",
    "submitDetails",
    "changeMainComponent",
    "selectedComp",
  ],
  data() {
    return {
      accountName: "",
      accountType: null,
      accountNumber: null,
      confirmTerms: false,
      submitBtnIsClicked: false,
      accNameValidity: "pending",
      accNumberValidity: "pending",
    };
  },
  methods: {
    submit() {
      if (this.accountName === "") {
        this.accNameValidity = "invalid";
        if (
          this.accountNumber === null ||
          this.accountNumber.toString().length != 12
        ) {
          this.accNumberValidity = "invalid";
          return;
        }
        return;
      }
      if (
        this.accountNumber === null ||
        this.accountNumber.toString().length != 12
      ) {
        this.accNumberValidity = "invalid";
        return;
      }
      if (!this.confirmTerms) {
        alert(
          "You have not agreed to the Terms And Conditions. Please Agree to them to submit the details."
        );
        return;
      }

      this.submitAccountDetails();
      this.changeMainComponent("show-details");
      this.selectedComp("show");
    },
    submitAccountDetails() {
      this.changeAccountDetailsInTempDetails(
        this.accountName,
        this.accountType,
        this.accountNumber
      );
    },
    validateAccName() {
      if (this.accountName === "") {
        this.accNameValidity = "invalid";
      } else {
        this.accNameValidity = "valid";
      }
    },
    validateAccNumber() {
      if (
        this.accountNumber === null ||
        this.accountNumber.toString().length != 12
      ) {
        this.accNumberValidity = "invalid";
      } else {
        this.accNumberValidity = "valid";
      }
    },
  },
};
</script>

<style scoped>
.submitBtn {
  background-color: #63d67a;
  font-weight: 500;
  width: 30%;
  float: right;
  margin-right: 20%;
}

.submitBtn:hover {
  background-color: #4ab560;
  font-weight: bold;
  font-size: 120%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.navBtnPrevious {
  margin-left: 20%;
}
</style>
