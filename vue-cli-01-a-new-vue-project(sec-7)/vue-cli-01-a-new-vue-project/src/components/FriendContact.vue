<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">
      {{ isFavourite ? "Remove" : "Add" }} as Favourite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-contact', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  emits: [ 'toggle-favourite', 'delete-contact'],
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavourite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.id);
    },
    // deleteFriend() {
    //   this.$emit('delete-friend', this.id);
    // }
  },
};
</script>
