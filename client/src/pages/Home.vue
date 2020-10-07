<template>
  <div>
    <!-- <div style="background: #f9f9f9"></div> -->
    <div class="container">
      <div class="bgc">
        <div class="board">
          <div class="header">
            <div class="he-l"></div>
            <div class="he-r">
              <button type="button" class="add-btn" @click="showModal">
                Add Project
              </button>
            </div>
          </div>
        </div>
        <!-- --------------------------------------->
        <div class="info"></div>
        <div>
          <div class="grid">
            <div class="grid-task">
              <div class="task-title">Backlog</div>
              <div class="scroll">
                <card />
                <card />
                <card />
                <card />
                <card />
                <card />

              </div>
            </div>
            <!-- ------------------- -->
            <div class="grid-task">
              <div class="task-title">Todo</div>
              <div class="scroll">
                <card />
              </div>
            </div>
            <!-- ------------------- -->
            <div class="grid-task">
              <div class="task-title">Doing</div>
              <div class="scroll">
                <card />
              </div>
            </div>
            <!-- ------------------- -->
            <div class="grid-task">
              <div class="task-title">Done</div>
              <div class="scroll">
                <card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <addMmodal v-show="isAddModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import card from "../components/card";
import addMmodal from "../components/add-modal";
export default {
  name: "Home",
  components: {
    card,
    addMmodal,
  },
  data() {
    return {
      isAddModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isAddModalVisible = true;
    },
    closeModal() {
      this.isAddModalVisible = false;
    },
  },
};
</script>

<style>

</style>