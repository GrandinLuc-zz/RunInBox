<template>
  <div>
    <div id="main-header">
      <header id="tittle">
        <h1><router-link id="bigHome" to="/">RUN-IN-BOX</router-link> </h1>
      </header>
      <ul id="nav-link">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
      </ul>
      <div id="nav-btn">
        <button id="sing_up" class="btn btn-color" @click="$router.push('sign_in')">S'inscrire</button>
        <button id="sign_in" class="btn btn-transparent" @click="$router.push('sign_up')">Se connecter</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0;
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 50%, rgba(0,0,0,1) 100%);
}

form{
    background-color: #cbd18f;
    margin: 10%;
    padding: 2em;
    border: 2px solid #3a6b35;
    border-radius: 1em;
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
  color: #3a6b35;
  text-transform: uppercase;
}

.box input[type= "text"], .box input[type = "password"], .box input[type = "email"]{
  width: 200px;
  text-align: center;
  border: 2px solid #3a6b35;
}

.box input[type= "text"]:focus, .box input[type = "password"]:focus, .box input[type = "email"]:focus{
  width: 280px;
  border-color: #42b983;
}

input{
    padding: 1ex;
    margin: 0.5em;
    background-color: #cbd18f;
    border: 2px solid #3a6b35;
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
  color: #3a6b35;
}

#nav-link a.router-link-exact-active {
  color: #42b983;
}

#nav-link{
  margin: 1.5em;
  justify-content: space-around;
}

#nav-btn{
  justify-content: left;
}

#tittle{
  color: #ECF39E;
}

#main-header{
  display: flex;
  background-color: #132A13;
  padding-right: 0em;
  padding-left: 1em;
  padding-top: 0.75em;
  flex-direction: columb;
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
    color: #cbd18f;
    background-color: #3a6b35;
}

.btn-transparent{
    background-color: #cbd18f;
    color: #3a6b35;
    border: 2px solid #3a6b35;
}

#bigHome {
  color: #ECF39E;
}
</style>
