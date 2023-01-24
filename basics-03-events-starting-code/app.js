const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "",
      confirmedName: "",
      //   fullName: "",
      lastName: "",
    };
  },
  methods: {
    outpuFullName() {
      console.log("Running again");
      if (this.name === "") {
        return "";
      } else {
        return `${this.name} Cosmin`;
      }
    },
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
  computed: {
    fullName() {
      console.log("Running again");
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return `${this.name} ${this.lastName}`;
      }
    },
  },
  watch: {
    counter(value) {
      if (value > 15) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = `${value} ${this.lastName}`;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = `${value} ${this.name}`;
    //   }
    // },
  },
});

app.mount("#events");
