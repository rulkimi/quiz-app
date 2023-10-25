<template>
  <li
    class="list-group-item"
    v-for="(answer, index) in questions[currentQuestion].answers"
    :key="answer"
    @click="checkAnswer($event, index)"
  >
    {{ answer }}
  </li>
</template>

<script>
export default {
  props: ['questions', 'currentQuestion'],
  methods: {
    checkAnswer(event, index) {
      const element = event.target;
      if (element) {
        const isCorrect = index === this.questions[this.currentQuestion].correct;
        this.$store.dispatch('updateResults', { isCorrect });

        if (isCorrect) {
          element.classList.add('correct');
        } else {
          element.classList.add('false');
        }

        setTimeout(() => {
          this.$store.dispatch('nextQuestion');
        }, 1000);
      }
    },
  }
}
</script>

<style scoped>
.correct {
  background-color: green;
}
.false {
  background-color: red;
}
</style>
