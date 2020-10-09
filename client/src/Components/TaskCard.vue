<template>
  <div class="board-sec__card">
    <div class="card__main">
      <p class="card__desc" @click="showFormEdit(card.id)">
        {{title}}
      </p>
      <i class="fas fa-pen" @click="showModal = true"></i>
    </div>
    <div class="card__bottom">
      <p class="card__bottom__date">{{card.createdAt.split('T')[0]}} <span>{{(card.createdAt.split('T')[1])}}</span></p>
      <p class="card__bottom__author">{{card.User.id}}</p>
    </div>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="showModal" @click="showModal = false">
    </div>
  </transition>
  <transition name="slide" appear>
    <div class="modal" v-if="showModal">
          <h2>Edit Card</h2>
          <i class="fas fa-trash" @click="deleteTask(card.id)"></i>
      <form>
          <br>
          <textarea v-model="title"></textarea>
          <br>
          <label for="category">Change to List: </label>
          <select v-model="category" id="category">
            <option
              v-for="(ctgry, index) in categories"
              :key="index"
            >{{ctgry}}</option>
          </select>
      </form>
      <br>
      <p>This card Created by: {{card.User.id}}</p>
      <br><br><br>
      <button class="button" @click="showModal = false">Close</button>
      <button class="button" @click="saveEdit(card.id)">Save</button>
    </div>
  </transition>
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: this.card.title,
      category: this.card.category,
      showModal: false
    }
  },
  props: ['card', 'categories'],
  methods: {
      fetchTask () {
        return this.$emit('fetchTask')
      },
      deleteTask(id) {
          // console.log (id)
          axios.delete('http://localhost:3000' + `/tasks/${id}`, {
            headers: {
              access_token: localStorage.access_token
            }
          }).then(res => {
                console.log(res)
                this.showModal = false
                this.fetchTask()
                // this.$emit('fetchTasks')
          }).catch(err => {
              console.error(err); 
          })
      },
      saveEdit(id) {
        axios({
          method:'put',
          url: 'http://localhost:3000' + `/tasks/${id}`,
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            title: this.title,
            category: this.category
          }
        }).then((result) => {
          console.log ('berhasil merubah ', result)
          this.fetchTask()
          this.showModal = false
        }).catch((err) => {
          console.log (err)
        });
      },
      showFormEdit(id) {
        console.log ("masu edit yang idnya: ", id)
      }
  },
};
</script>

<style lang="scss">
@import "../styles/_base.scss";

.board-sec__bottom {
  cursor: pointer;
}

form textarea {
  @include basic-card;
  font-size: 1rem;
  border: none;
  outline: none;
  resize: none;
  height: 6rem;
  min-width: 100%;
  max-width: 100%;
  background: $card-color;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  box-sizing: border-box;
  width: 100%;
}

button {
  &:hover {
    background-color: darken($primary-color, 10%);
    cursor: pointer;
  }

  color: $a-text-color;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: $primary-color;
}


.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(#a2a2a2, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 55;

  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 300px;
  background:#ebecf0;
  border-radius: 10px;

  padding: 15px;

  i {
    position: absolute;
    right: 2rem;
    top: 1rem;
    padding: 0.3rem;
    border-radius: 5px;

    &:hover {
        background-color: darken($main-color, 5%);
    }
}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 1s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}

</style>
