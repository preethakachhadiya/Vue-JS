<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated,
  // onBeforeUnmount,
  // onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  // setup(props, context) {
  setup(props) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    // context.emit('save-data', 1);

    onBeforeMount(() => {
      console.log('Before Mounted');
    });

    const age = inject('userAge');

    return { userName: uName, age: age };
  }
};
</script>
