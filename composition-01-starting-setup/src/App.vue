<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <!-- <p>{{ user }}</p> -->
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  // methods: {
  //   setNewAge(){
  //     this.age = 32;
  //   }
  // }
  setup() {
    // const userName = ref('Maximilian');
    const uAge = ref(31);
    const firstName = ref('');
    const lastName = ref('');
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    function setNewAge() {
      uAge.value = 32;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const userName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    // setTimeout(() => {
    //   user.name = 'Max';
    //   user.age = reactive(32);
    // }, 2000);
    // console.log(user);
    return {
      userName,
      age: uAge,
      setAge: setNewAge,
      setFirstName,
      setLastName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
