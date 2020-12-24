<template>
  <div class="home">
    <h1 class="contentBoxes">Content of your random box :</h1>
    <h2 class="orderBox"><a>Order your box</a></h2>
    <div class='titres' v-for='title in titles' :key='titles.indexOf(title)'>
      <div class="bigBox" :style="'background-image: url(' + title[1] + ')'">
        <div class="textBox">
            {{title[0]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var faker = require('faker')

export default {
  data () {
    return {
      titles: [...Array(10)].map(e => [faker.commerce.product()]),
      titlesImage: []
    }
  },
  methods: {
    loggedInInterface () {
      const orderBox = document.querySelector('.orderBox')
      orderBox.classList.add('logged')
    },
    isLoggedIn () {
      const token = localStorage.getItem('token')
      fetch('http://localhost:4000/api/v1/verify/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token
        })
      })
        .then(res => res.json())
        .then(
          (toCheck) => {
            const username = localStorage.getItem('username')
            if (toCheck.toCheck.login === username) {
              this.loggedInInterface()
            }
          }
        )
    },
    async fetchPhoto (nom) {
      return fetch('https://unsplash.com/s/photos/' + nom)
        .then((resp) => resp.text())
        .then(function (data) {
          // console.log(data)
          // On va chercher le premier srcSet pour avoir l'url de la première image puis on va chercher jusqu'au ;
          data = data.substring(data.indexOf('srcSet="', data.search('srcSet="') + 50) + 8)
          data = data.substring(0, data.search(';'))
          // console.log(data)
          // console.log('data printed')
          return data
        })
        .catch(function (err) {
          console.log('Failed to fetch page: ', err)
          return ''
        })
    }
  },
  async beforeMount () {
    let url = ''
    for (let i = 0; i < (this.titles).length; i++) {
      url = await this.fetchPhoto(this.titles[i])
      this.titles[i].push(url)
    }
    this.isLoggedIn()
  },
  mounted () {
    this.isLoggedIn()
  }
}
</script>

<style>
.home{
  display: flex;
  padding: 5em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.bigBox{
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 600px;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 1%;
}

.titres{
  display: flex;
  width: 100%;
}

.container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.textBox{
  color: white;
  font-size: 50px;
  flex-wrap: wrap;
  margin: 50px;
  backdrop-filter: blur(100px);
  width: 200px;
  left: 50%;
  right: 50%;
}

.contentBoxes{
  font-size: 60px;
  color: white;
  margin-bottom: 40px;
  margin-top: -30px;
}

.orderBox{
  color: white;
  margin-bottom: 20px;
  visibility: collapse;
}

.orderBox.logged{
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
  visibility: visible;
}
</style>
