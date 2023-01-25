const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index);
    },
  },
});

app.mount("#user-goals");
