function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min));
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        //Player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // A draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Monster lost
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      //Round count
      this.currentRound++;

      //The attack must be between 5 and 12 dmg
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;

      //Add log message
      this.addLogMessage("player", "attack", attackValue);

      this.attackPlayer();
    },
    attackPlayer() {
      //The attack must be between 8 and 15 dmg
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;

      //Add log message
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      //Round count
      this.currentRound++;

      //The attack must be between 5 and 12 dmg
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;

      //Add log message
      this.addLogMessage("player", "special-attack", attackValue);

      this.attackPlayer();
    },
    healPlayer() {
      //Round count
      this.currentRound++;

      //The heal must be between 5 and 12 dmg
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      //Add log message
      this.addLogMessage("player", "heal", healValue);

      this.attackPlayer();
    },
    startGame() {
      this.logMessages = [];
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    surrender() {
      this.winner = "monster";

      //Add log message
      this.addLogMessage("player", "surrendered", null);
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
