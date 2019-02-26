<template>
  <div>
    <section class="row">
      <div class="small-8 large-5 column">
        <h1 class="text-center">YOU</h1>
        <div class="healthbar">
          <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width: playerHealth + '%'}">{{playerHealth}}</div>
        </div>
      </div>
      <div class="small-8 large-5 column">
        <h1 class="text-center">MONSTER</h1>
        <div class="healthbar">
          <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width: monsterHealth + '%'}">{{monsterHealth}}</div>
        </div>
      </div>
    </section>
    <section class="row controls" v-if="!gameIsRunning">
      <div class="small-12 columns">
        <button id="start-game" @click="reset">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls" v-else>
      <div class="small-12 columns">
        <button id="attack" @click="attack">ATTACK</button>
        <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
        <button id="heal" @click="heal">HEAL</button>
        <button id="give-up" @click="giveUp">GIVE UP</button>
      </div>
    </section>
    <section class="row log" v-if="turns.length > 0">
      <div class="small-12 columns">
        <ul>
          <li v-for="(turn, index) in turns" :key="index">
            {{turn.text}}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Monster',
  data () {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: []
    }
  },
  methods: {
    reset: function () {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.gameIsRunning = true
    },
    attack: function () {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}`
      })
      if (this.checkWin()) {
        return
      }

      this.monsterAttack()
    },
    specialAttack: function () {
      let damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}`
      })
      if (this.checkWin()) {
        return
      }
      this.monsterAttack()
    },
    heal: function () {
      this.playerHealth = Math.min(100, this.playerHealth + 10)
      this.monsterAttack()
    },
    giveUp: function () {
      this.gameIsRunning = false
    },
    monsterAttack: function () {
      let damage = this.calculateDamage(4, 12)
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}`
      })
      this.playerHealth -= damage
      this.checkWin()
    },
    calculateDamage: function (min, max) {
      return Math.max(min, Math.floor(Math.random() * max) + 1)
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.reset()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.reset()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
  @import '../assets/style/app.css';

  @import '../assets/style/foundation.min.css';
</style>
