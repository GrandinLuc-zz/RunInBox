<template>
  <div class="home">
    <div class="bigBox" id="aboutBox">
      <p class="textHalfBox">
          Profitez d'une mystery box tout les mois dans votre boîte aux lettres !
      </p>
    </div>
    <div class="boxContainer">
      <div class="halfBox" id="leftBox">
        <p class="textHalfBox" id="rightBox">
            Parfaite pour offrir à Noël ou aux anniverssaires.
        </p>
      </div>
      <div class="halfBox">
         <p class="textHalfBox" id="rightBox">
            Souscrivez pour seulent $49.99 par mois et découvrez les surprises que vous réserve votre box.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.boxContainer{
  display: flex;
  width: 100%;
}

.halfBox{
  /* background-image:url('../assets/gift.jpg'); */
  background: rgb(117,0,0);
  background: linear-gradient(90deg, rgba(85,0,0,1) 33%, rgba(70,0,75,1) 100%);
  width: 49.5%;
  min-height: 300px;
  height: 75vh;
  border-radius: 10px;
  padding: 30px;
}
#leftBox{
  margin-right: 1%;
}
#rightBox{
  margin-left: 1%;
}
.textHalfBox{
  color: white;
  font-size: 50px;
  flex-wrap: wrap;
  margin: 10px;
}

#aboutBox{
  padding: 30px;
  height: 50vh;
  min-height: 300px;
}

@media (max-width: 920px) {
  .textHalfBox{
    font-size: 30px;
  }
}
</style>
