<template>
  <button @click="confirmInut()">Back</button>
  <button @click="saveChanges()">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false,
    };
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInut() {
      // do st
      // this.$router.push('/teams');
      this.$router.back();
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('User List cmp before enter');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouterLEave');
    console.log(to, from);
    if (this.changesSaved == true) {
      next(true);
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!!!'
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    if (this.saveChanges == false) {
      alert('qweqwe');
    }
    console.log('Unmonted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
