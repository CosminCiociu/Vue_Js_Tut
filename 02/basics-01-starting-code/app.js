const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Learn Vue",
            courseGoalB: "MasterVue",
            htmlEl: "<h3>htmlEl<h3>",
            vueLink: "https://www.google.com/search?q=vlc+media+player+enqueue&oq=player+media+enqu&aqs=chrome.1.69i57j0i22i30.7270j1j7&sourceid=chrome&ie=UTF-8"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            }else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');