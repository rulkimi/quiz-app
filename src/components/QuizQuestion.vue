<template>
  <h1>{{ title }}</h1>
  <div class="container">
    <h3>{{ questionsStored[curQues].question }}</h3>
    <h4>{{ questionsStored[curQues].questionMain }}</h4>
    <ul class="list-group">
      <quiz-answers
        :questions="questionsStored"
        :currentQuestion="curQues"
      ></quiz-answers>
    </ul>
  </div>
  <button @click="previousQuestion">Previous question</button>
  <button @click="nextQuestion">Next question</button>
</template>

<script>
import QuizAnswers from './QuizAnswers.vue';

export default {
  components: {
    QuizAnswers,
  },
  data() {
    return {
      title: 'HSK4 Quiz',
    };
  },
  methods: {
    toggleActive(event) {
      event.target.classList.toggle('active');
    },
    nextQuestion() {
    this.$store.commit('nextQuestion');
    },
    previousQuestion() {
      this.$store.commit('previousQuestion');
    },
  },
  computed: {
    questionsStored() {
      return this.$store.getters.questions;
    },
    curQues() {
      return this.$store.getters.currentQuestion;
    }
  }
};
</script>
