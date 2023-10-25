import { createStore } from 'vuex';
import questions from '../../questions.json';

const store = createStore({
  state() {
    return {
      questions: questions,
      currentQuestion: 0,
      results: {
        correctCount: 0,
        falseCount: 0,
      },
    }
  },
  mutations: {
    updateResults(state, { correctCount, falseCount }) {
      state.results.correctCount += correctCount;
      state.results.falseCount += falseCount;
    },
    nextQuestion(state) {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion++;
      }
    },
    previousQuestion(state) {
      if (state.currentQuestion > 0) {
        state.currentQuestion--;
      }
    },
  },
  actions: {
    updateResults(context, { isCorrect }) {
      const correctCount = isCorrect ? 1 : 0;
      const falseCount = isCorrect ? 0 : 1;
      context.commit('updateResults', { correctCount, falseCount });
    },
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    currentQuestion(state) {
      return state.currentQuestion;
    }
  }
});

export default store;