const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    addValue(num) {
      return (this.counter += num);
    },
    reduceValue(num) {
      return (this.counter -= num);
    },
    setName(event, lastName) {
      return (this.name = `${event.target.value} ${lastName}`);
    },
    submitFrom(event) {
      // event.preventDefault();
      alert("Form Submited");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
