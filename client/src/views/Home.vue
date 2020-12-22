<template>
  <div class="home">
    <div class="bigBox">
      <p class="textBox">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, suscipit architecto? Pariatur magni nulla !
        </p>
    </div>
    <div class="container">
      <div class="halfBox" id="leftBox">
        <p class="textBox" id="rightBox">
          Profitez d'une mystery box tout les mois dans votre boîte aux lettres !
        </p>
      </div>
      <div class="halfBox">
        <p class="textBox">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.home{
  display: flex;
  padding: 5em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.halfBox{
  /* background-image:url('../assets/gift.jpg'); */
  background: rgb(117,0,0);
  background: linear-gradient(90deg, rgba(117,0,0,1) 33%, rgba(98,0,103,1) 100%);
  width: 49.5%;
  height: 300px;
  border-radius: 10px;
  background-size: cover;
  background-attachment: fixed;
  backdrop-filter: blur(1000px);
}
#leftBox{
  margin-right: 1%;
}
#rightBox{
  margin-left: 1%;
}

.bigBox{
  background: url("../assets/toy.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(10px);
  width: 100%;
  min-height: 600px;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 1%;
}
.bigBox p{
  font-size: 80px;
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
  backdrop-filter: blur(10px);
}
</style>
