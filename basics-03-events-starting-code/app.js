const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: ''
    };
  },
  methods:{
    addValue(num) {
      return this.counter += num;
    },
    reduceValue(num) {
      return this.counter -= num;
    },
    setName(event, lastName) {
      return this.name = `${event.target.value} ${lastName}`;
    }
  },
});

app.mount('#events');
