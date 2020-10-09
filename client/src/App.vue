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

export default {
    name: 'App',
    components: {
        FrontPage,
        HomePage
    },
    data() {
      return {
        whichPage: 'FrontPage',
        dataTasks: [],
        // connection: null
      }
    },
    methods: {
      cangeWhichPage(pageName) {
        this.whichPage = pageName
      },
      sendMessage (message) {
        console.log (this.connection)
        this.connection.send(message)
      }
    },
    created() {
      if (localStorage.access_token) {
        this.whichPage = 'HomePage'
      } else {
        this.whichPage = 'FrontPage'
      }


      // this.connection  = new WebSocket("wss://echo.websocket.org")
      // this.connection.onopen = (event) => {
      //   console.log (event)
      //   console.log ('successfully connected to echo web socket')
      // }
      // this.connection.onmessage = (event) => {
      //   console.log (event)
      // }
    },
    beforeDestroy() {
      localStorage.clear()
    },
}
</script>

<style lang="scss">

</style>