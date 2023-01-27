Vue.createApp({
    data() {
        return {
            goals: [],
            enteredVal: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredVal);
            this.enteredVal = "";
        }
    }
}).mount('#app');

// const buttonEL = document.querySelector('button')
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('ul')

// function addGoal() {
//     const enteredVal = inputEl.value;
//     const listItemElem = document.createElement('li');
//     listItemElem.textContent = enteredVal;
//     listEl.appendChild(listItemElem)
//     inputEl.value = '';
// }

// buttonEL.addEventListener('click',addGoal)