const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //   console.log(this.$refs.userText);
      this.message = this.$refs.userText.value;
      //   this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
});
const app2 = Vue.createApp({
  template: `
  	<p>{{pizza}}</p>
  `,
  data() {
    return {
      pizza: "pizza peperonni",
    };
  },
});

app.mount("#app");
app2.mount("#app2");

// // Vanilla Js
// const data = {
//   message: "hello",
//   longMessage: "Hellow Word",
// };
// const handler = {
//   set(target, key, value) {
//     if (key === "message") {
//       target.longMessage = value + "Word";
//     }
//     // console.log(target);
//     // console.log(key);
//     // console.log(value);
//   },
// };
// const proxy = new Proxy(data, handler);

// proxy.message = "hello";
