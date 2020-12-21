<template>
  <div>
    <div id="main-header">
      <header id="title">
        <h1><router-link id="bigHome" to="/">RUN-IN-BOX</router-link> </h1>
      </header>
      <div id="nav-btn">
        <ul id="nav-link">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
        </ul>
        <button id="sing_up" class="btn btn-color" @click="$router.push('sign_up')"><a>S'inscrire</a></button>
        <button id="sign_in" class="btn btn-transparent" @click="$router.push('sign_in')">Se connecter</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
    font-family:'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
}

a:active{
  background-color: #333333;
}

a, button{
  outline: 0;
}

button:hover{
  cursor: pointer;
}

body{
      background: linear-gradient(0deg, rgba(20,20,25,1), rgba(30,30,30,1));
}

.home{
    height: 80vh;
}

form{
    background-color: white;
    margin: 10%;
    margin-top: 0;
    padding: 2em;
    border: 2px solid #202025;
    border-radius: 1em;
    margin-top: 50px;
}

.box{
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-85%,-80%);
  text-align: center;
}

.box h1{
  color: #202025;
  text-transform: uppercase;
}

.box input[type= "text"], .box input[type = "password"], .box input[type = "email"]{
  width: 200px;
  text-align: center;
  border: 2px solid #202025;
}

.box input[type= "text"]:focus, .box input[type = "password"]:focus, .box input[type = "email"]:focus{
  width: 280px;
  border-color: #42b983;
}

input{
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
}

#nav-link a.router-link-exact-active {
  color: white;
}

#nav-link{
  justify-content: space-around;
}

#nav-btn{
  justify-content: left;
  display: flex;
  align-items: center;
}

#title{
  color: white;
}

#main-header{
  display: flex;
  background-color: #202025;
  padding-right: 0em;
  padding-left: 1em;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
}

.btn {
  border-radius: 8px;
  border: 0;
  padding: 1em 1.5em;
  font-weight: 800;
  justify-content: flex-end;
  margin: 0.5em;
}

.btn-color{
    color: white;
    background-color: #202025;
}

.btn-transparent{
    background-color: white;
    color: #202025;
    border: 2px solid #202025;
}

#bigHome {
  color: white;
}
</style>
