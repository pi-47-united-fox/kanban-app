<template>
  <main>
        <Navbar @emitWhichPage='changePage' ></Navbar>
        <div class="board">
            <Board v-for="(list, index) in lists"
                :key="index"
                :listTitle="list"
                :cards="dataTasks"
                :categories='lists'
                @emitAddTask='addCard'
                @fetchTask='fetchTaskFromChild'
            ></Board>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Board from "../Components/TaskBoard";
export default {
    name: 'HomePage',
    components: {
        Board,
        Navbar
    },
    data() {
        return {
            lists: [
                'Backlog', 'Todo', 'Doing', 'Done'
            ],
            dataTasks: []
        }
    },
    methods: {
      fetchTaskFromChild() {
          this.fetchTask()
      },
      fetchTask() {
        axios
        .get('http://localhost:3000' + '/tasks', {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then (({data}) => {
            return this.dataTasks = data
        }).catch((err) => {
            console.log (err)
        });
      },
      changePage (value) {
          this.$emit('emitChangePage', value)
      },
      addCard (data) {
          axios({
        method: "post",
        url: "http://localhost:3000" + "/tasks",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          title: data.title,
          category: data.category,
        },
      }).then((result) => {
          this.fetchTask()
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
    created() {
        this.fetchTask()
    },
    beforeUpdate() {
        for (const ctg in this.dataTask) {
              this.dataTasks[ctg] = []
              console.log (this.dataTasks)
          }
    },
}
</script>

<style lang="scss">
@import '../styles/_base.scss';

main {
    width: 100%;

    .board {
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;

        .board-sec_blank {
            background-color: transparentize($main-color, 0.1) !important;

            &__add {
                padding: 10px;
                text-align: center;
                border: dashed $b-text-color 0.1rem;
                border-radius: 5px;
            }
        }

        .board-sec {
            border-radius: 5px;
            background-color: $main-color;
            width: 280px;
            padding: 5px;
            margin: 20px;
            font-weight: 400;
            height: fit-content;
            max-height: 85vh;
            overflow: auto;
            @include scrollbars(.3em, $primary-color);

            &__title {
                font-weight: 700;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                padding: 0 15px 5px;

                a {
                    color: $b-text-color;
                }
            }

            &__card {
                @include basic-card;

                &:hover {
                    background-color: darken($card-color, 3%);
                    cursor: pointer;
                }

                &:hover .card__main > i {
                    visibility: visible;
                }

                .card__main {
                    padding-bottom: 20px;
                    line-height: 1.5rem;
                    font-weight: 400;
                    font-size: 0.9rem;
                    color: $c-text-color;
                    position: relative;

                    i {
                        position: absolute;
                        right: 0;
                        top: 0;
                        padding: 0.3rem;
                        border-radius: 5px;
                        visibility: hidden;

                        &:hover {
                            background-color: darken($main-color, 5%);
                        }
                    }

                    p {
                        max-width: 96%;
                    }
                }

                .card__bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: small;
                    color: $b-text-color;

                    &__author {
                        padding: 5px;
                        box-sizing: content-box;
                        border-radius: 5px;

                        &:hover {
                            background-color: darken($main-color, 5%);
                        }
                    }
                }
            }

            &__bottom {
                // padding: 10px;
                border-radius: 5px;
                padding: 10px 7px;

                // margin: 5px 0;
                color: $b-text-color;
                font-weight: 200;

                &:hover {
                    background-color: darken($main-color, 5%);
                }
            }

            &__bottom-add {
                margin-bottom: 5px;

                .fas {
                    transform: scale(1.2);
                    margin-left: 15px;
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
            }
        }
    }
}
</style>