<template>
  <div id='mainContainer'>
    <div id='main-header'>
      <header id='title'>
        <h1><router-link id='bigHome' to='/'>RUN-IN-BOX</router-link></h1>
      </header>
      <div class='menu-btn'>
        <div class='menu-btn_burger'></div>
      </div>
      <div id='nav-btn'>
        <ul id='nav-link'>
          <router-link to='/'>Home</router-link>
          |
          <router-link to='/about'>About</router-link>
        </ul>
        <div class='delogs logged'>
          <button
          id='sign_off'
          class='btn btn-transparent'
          @click='this.logOut()'
        >
          Log out
          </button>
        </div>
        <div class='logs'>
          <button
          id='sign_up'
          class='btn btn-color'
          @click='$router.push("sign_up")'
        >
          <a>Sign up</a>
        </button>
        <button
          id='sign_in'
          class='btn btn-transparent'
          @click='$router.push("sign_in")'
        >
          Log in
          </button>
        </div>
      </div>
    </div>
    <div class='menu'>
      <ul class='menuList'>
        <li class='item1'><a class='menuItem1' @click='$router.push("./")'>Home</a></li>
        <li class='item2'><a class='menuItem2' @click='$router.push("about")'>About</a></li>
        <li class='item3'><a class='menuItem3' @click='$router.push("sign_in")'>Log in</a></li>
        <li class='item4'><a class='menuItem4' @click='$router.push("sign_up")'>Sign up</a></li>
        <li class='item5 logged'><a class='menuItem5' @click='this.logOut()'>Log out</a></li>

      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Run-In-Box',
  methods: {
    loggedInInterface () {
      const logs = document.querySelector('.logs')
      const delogs = document.querySelector('.delogs')
      const item3 = document.querySelector('.item3')
      const item4 = document.querySelector('.item4')
      const item5 = document.querySelector('.item5')
      logs.classList.add('logged')
      item3.classList.add('logged')
      item4.classList.add('logged')
      item5.classList.remove('logged')
      delogs.classList.remove('logged')
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
    logOut () {
      localStorage.setItem('token', '')
      localStorage.setItem('username', '')
      window.location.replace('/')
    },
    Menu () {
      const menuBtn = document.querySelector('.menu-btn')
      const menu = document.querySelector('.menu')
      let menuOpen = false
      const menuClick = () => {
        if (!menuOpen) {
          menuBtn.classList.add('open')
          menuOpen = true
          menu.classList.add('open')
        } else {
          menuBtn.classList.remove('open')
          menuOpen = false
          menu.classList.remove('open')
        }
      }
      menuBtn.addEventListener('click', () => menuClick())
      const Scroll = () => {
        if (menuOpen) {
          menuClick()
        }
      }
      window.addEventListener('scroll', () => Scroll())

      const menuItem1 = document.querySelector('.menuItem1')
      const menuItem2 = document.querySelector('.menuItem2')
      const menuItem3 = document.querySelector('.menuItem3')
      const menuItem4 = document.querySelector('.menuItem4')
      const menuItem5 = document.querySelector('.menuItem5')
      menuItem1.addEventListener('click', () => menuClick())
      menuItem2.addEventListener('click', () => menuClick())
      menuItem3.addEventListener('click', () => menuClick())
      menuItem4.addEventListener('click', () => menuClick())
      menuItem5.addEventListener('click', () => menuClick())
    }
  },
  mounted () {
    this.Menu()
    this.isLoggedIn()
  }
}
</script>

<style>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
}

body {
  overflow-x: hidden;
}

a:active {
  background-color: #333333;
}

a,
button {
  outline: 0;
}

button:hover {
  cursor: pointer;
}

body {
  background-image: url('./assets/bg.jpg');
  background-attachment: fixed;
  backdrop-filter: blur(10px);
}

.home {
  align-items: center;
  min-height: 90vh;
}

form {
  background-color: white;
  margin: 10%;
  margin-top: 0;
  padding: 2em;
  border: 2px solid #202025;
  border-radius: 1em;
  margin-top: 50px;
}

.box {
  width: 300px;
  justify-content: center;
  text-align: center;
  margin-top: -200px;
}

.box h1 {
  color: #202025;
  text-transform: uppercase;
}

.box input[type='text'],
.box input[type='password'],
.box input[type='email'] {
  width: 200px;
  text-align: center;
  border: 2px solid #202025;
}

.box input[type='text']:focus,
.box input[type='password']:focus,
.box input[type='email']:focus {
  width: 280px;
  border-color: #42b983;
}

input {
  padding: 1ex;
  margin: 0.5em;
  background-color: #bbbbbb;
  border: 2px solid #202025;
  border-radius: 1ch;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-link a {
  font-weight: bold;
  color: white;
  font-size: 30px;
}
#nav-link {
  margin-right: 30px;
}

#nav-btn {
  justify-content: left;
  display: flex;
  align-items: center;
}

#title {
  color: white;
}

#main-header {
  display: flex;
  background-color: #202025;
  padding-right: 1em;
  padding-left: 2em;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  /*
  position: fixed;
  width: 100%;
  */
}

.btn {
  border-radius: 8px;
  border: 0;
  padding: 1em 1.5em;
  font-weight: 800;
  justify-content: flex-end;
  margin: 0.5em;
}

.btn-color {
  color: white;
  background-color: #202025;
}

.btn-transparent {
  background-color: white;
  color: #202025;
  border: 2px solid #202025;
}
.logs {
  visibility: visible;
  display: flex;
}
.logs.logged {
  visibility: collapse;
  width: 0;
}

.delogs {
  visibility: visible;
  display: flex;
}
.delogs.logged {
  visibility: collapse;
  width: 0;
}

.item3{
  visibility: visible;
}
.item4{
  visibility: visible;
}

.item3.logged {
  visibility: collapse;
  height: 0;
}
.item4.logged {
  visibility: collapse;
  height: 0;
}

.item5 {
  visibility: visible;
}

.item5.logged {
  visibility: collapse;
  height: 0;
}

#mainContainer {
  width: 100%;
}

#bigHome {
  color: white;
}

/* HB menu */
.menu-btn {
  position: absolute;
  right: 50px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  margin-top: 18px;
  visibility: hidden;
  /* border: solid white; */
}
.menu-btn_burger {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 2px white;
  transition: all 0.5s ease-in-out;
  transform: translateX(12px)
}
.menu-btn_burger::before,
.menu-btn_burger::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2.5px;
  box-shadow: 0 1px 2px white;
  transition: all 0.5s ease-in-out;
}
.menu-btn_burger::before {
  transform: translate(-12px,-8px);
}
.menu-btn_burger::after {
  transform: translate(-12px,8px);
}

/* ANIMATION */
.menu-btn.open .menu-btn_burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn_burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  box-shadow: 0 1px 2.5px white;
  background: white;
}
.menu-btn.open .menu-btn_burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  box-shadow: 0 1px 2.5px white;
  background: white;
}

.menu-btn {
  transform: scale(1.5);
}
@media only screen and (max-width: 700px) {
  .menu-btn {
    transform: scale(1.2);
  }
}
.menu-btn.open {
  margin-top: 18px;
}
.menu {
  height: 0vh;
  display: none;
  padding: 50px;
  font-size: 30px;
  color: white;
}

.menu.open {
  height: 90vh;
  display: block;
  padding: 50px;
  font-size: 30px;
  color: white;
}

.menu.open ul{
  list-style-type: none;
}

.menu.open ul li{
  margin: 20px;
  font-weight: bolder;
}

.menu.open ul a{
  cursor: pointer;
}

.menuList {
    visibility: hidden;
  }

@media (max-width: 920px) {
  #nav-btn {
    visibility: hidden;
    width: 0px;
  }
  .menu-btn {
    visibility: visible;
  }
  .menuList {
    visibility: visible;
  }
}
</style>
