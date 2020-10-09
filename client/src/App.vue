<template>
<div>
  <FrontPage
    v-if="whichPage == 'FrontPage'"
    @emitWhichPage='cangeWhichPage'
  ></FrontPage>
  <HomePage
    @emitChangePage='cangeWhichPage'
    v-if="whichPage == 'HomePage'"
  ></HomePage>
</div>
</template>

<script>
import FrontPage from './Views/FrontPage'
import HomePage from './Views/HomePage'
import axios from 'axios'

export default {
    name: 'App',
    components: {
        FrontPage,
        HomePage
    },
    data() {
      return {
        baseURL: 'http://localhost:3000',
        whichPage: 'FrontPage',
        dataTasks: []
      }
    },
    methods: {
      cangeWhichPage(pageName) {
        this.whichPage = pageName
      }
    },
    created() {
      if (localStorage.access_token) {
        this.whichPage = 'HomePage'
      } else {
        this.whichPage = 'FrontPage'
      }
    },
    beforeDestroy() {
      localStorage.removeItem('access_token')
    },
}
</script>

<style lang="scss">

</style>