<template>
  <section class="board-sec">
    <div class="board-sec__title">
      <h2>{{ listTitle }}</h2>
      <a href="#"><i class="fas fa-ellipsis-h"></i></a>
    </div>
    <!-- CARD -->
    <div v-if="listTitle == 'Backlog'">
      <Card
        v-for="card in Backlog"
        :key="card.id"
        :card="card"
        :categories="categories"
        @fetchTask="fetchTask"
      ></Card>
    </div>

    <div v-if="listTitle == 'Todo'">
      <Card
        v-for="card in Todo"
        :key="card.id"
        :card="card"
        :categories="categories"
        @fetchTask="fetchTask"
      ></Card>
    </div>

    <div v-if="listTitle == 'Doing'">
      <Card
        v-for="card in Doing"
        :key="card.id"
        :card="card"
        :categories="categories"
        @fetchTask="fetchTask"
      ></Card>
    </div>

    <div v-if="listTitle == 'Done'">
      <Card
        v-for="card in Done"
        :key="card.id"
        :card="card"
        :categories="categories"
        @fetchTask="fetchTask"
      ></Card>
    </div>
    <!-- ADD CARD -->
    <div v-if="showFormAdd == true">
      <div class="board-sec__add-card">
        <form>
          <textarea
            v-model="newTitle"
            placeholder=""
            @keydown.enter="addTask"
            @keydown.esc="cancleAddM"
          ></textarea>
        </form>
      </div>
      <div class="board-sec__bottom-add">
        <button @click="addTask">add Card</button>
        <a href="#"><i class="fas fa-times" @click.prevent="cancleAddM"></i></a>
      </div>
    </div>
    <!-- END ADD CARD -->
    <!-- END CARD -->

    <!-- BUTTON ADD CARD -->
    <div class="board-sec__bottom" v-if="showFormAdd == false">
      <p @click="showFormAddM">+ Add another card</p>
    </div>
    <!-- END BUTTON ADD CARD -->
  </section>
</template>

<script>
import axios from "axios";
import Card from "./TaskCard";

export default {
  components: {
    Card,
  },
  props: ["listTitle", "cards", "categories"],
  data() {
    return {
      list_cards: [],
      showFormAdd: false,
      newTitle: "",
    };
  },
  computed: {
    // filter data
    Backlog: function() {
      return this.cards.filter((card) => card.category == "Backlog");
    },
    Todo: function() {
      return this.cards.filter((card) => card.category == "Todo");
    },
    Doing: function() {
      return this.cards.filter((card) => card.category == "Doing");
    },
    Done: function() {
      return this.cards.filter((card) => card.category == "Done");
    },
  },
  methods: {
    fetchTask() {
      this.$emit("fetchTask");
    },
    showFormAddM() {
      this.showFormAdd = true;
    },
    cancleAddM() {
      this.showFormAdd = false;
    },
    addTask() {
      try {
        this.$emit("emitAddTask", {
          title: this.newTitle,
          category: this.listTitle,
        });
        this.newTitle = "";
        this.showFormAdd = false;
      } catch (error) {
        console.log(err);
      }
    },
  }
};
</script>

<style lang="scss"></style>
