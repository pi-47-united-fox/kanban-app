<template>
  <header>
    <nav>
      <div class="nav-items"><p>Hacktiv8</p></div>
      <div class="nav-items"><h1 class="logo">Not Trello</h1></div>
      <ul class="nav-items">
        <li><a href="#" @click.prevent="logMeOut">Logout</a></li>
        <li><a href="#">Bagus</a></li>
        <li><a href="#"><img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
              class="avatar"/>
            </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    logMeOut() {
      localStorage.removeItem('access_token')
      this.$emit('emitWhichPage', 'FrontPage')
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/base';

header  {
    z-index: 100;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.10);
        padding: 10px;

        .logo {
            font-weight: 700;
            font-size: 1.5rem;
            text-decoration: line-through;
        }

        .nav-items {
            color: $a-text-color;
            display: flex;
            align-items: center;
            margin: 0 1rem;

            li {
              margin-right: 20px;
            }

            a {
                color: $a-text-color;
                text-decoration: none;
            }

            .avatar {
                width:30px;
                border-radius: 50%;
            }
        }
    }
}
</style>