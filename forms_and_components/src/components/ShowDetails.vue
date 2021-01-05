<template>
  <ul>
    <li v-for="detail in details" :key="detail.id">
      <div class="d">
        <p><span>Name : </span>{{ detail.name }}</p>
        <p><span>Address: </span>{{ detail.address }}</p>
        <p><span>Age Group: </span>{{ detail.age }}</p>
        <p><span>Hobbies : </span>{{ convertArrToString(detail.hobbies) }}</p>
      </div>
      <div class="d">
        <p><span>Phone Number : </span>{{ detail.phoneNumber }}</p>
        <p><span>Emergency Contact : </span>{{ detail.emerContact }}</p>
        <p><span>Email : </span>{{ detail.email }}</p>
      </div>
      <div>
        <p><span>Account Name : </span>{{ detail.accountName }}</p>
        <p><span>Account Type : </span>{{ detail.accountType }}</p>
        <p><span>Account Number : </span>{{ detail.accountNumber }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["details"],
  data() {
    return {};
  },
  methods: {
    convertArrToString(arr) {
      let arrToString = "";
      let last = arr.pop();
      for (let a of arr) {
        arrToString += a + ", ";
      }
      arrToString += last;
      return arrToString;
    },
  },
};
</script>

<style scoped>
ul {
  display: block;
  font-family: Cambria, Cochin, Georgia, Times, "Times NewRoman", serif;
  text-align: center;
  font-size: 18px;
}

li {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  width: 50%;
}

div .d {
  border-bottom: 1px solid #4ab560;
}

span {
  font-weight: 700;
  font-size: 110%;
}
</style>
