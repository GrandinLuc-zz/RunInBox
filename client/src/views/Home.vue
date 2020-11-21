<template>
  <div class="home">
    <div class="container">
      <div class="halfBox">
        <p class="textBox">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, suscipit architecto? Pariatur magni nulla assumenda quibusdam quaerat perspiciatis iusto dicta voluptates autem sed! Eius, suscipit ex voluptatibus enim dolore autem.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptas sint itaque quas ipsum temporibus, fugiat consequatur tempore eum sapiente. A asperiores maxime quia illum? Quas perspiciatis odio expedita nulla.
        </p>
      </div>
      <div class="halfBox">
        <p class="textBox">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, suscipit architecto? Pariatur magni nulla assumenda quibusdam quaerat perspiciatis iusto dicta voluptates autem sed! Eius, suscipit ex voluptatibus enim dolore autem.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptas sint itaque quas ipsum temporibus, fugiat consequatur tempore eum sapiente. A asperiores maxime quia illum? Quas perspiciatis odio expedita nulla.
        </p>
      </div>
    </div>
    <div class="bigBox">
      <p class="textBox">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, suscipit architecto? Pariatur magni nulla assumenda quibusdam quaerat perspiciatis iusto dicta voluptates autem sed! Eius, suscipit ex voluptatibus enim dolore autem.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptas sint itaque quas ipsum temporibus, fugiat consequatur tempore eum sapiente. A asperiores maxime quia illum? Quas perspiciatis odio expedita nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, suscipit architecto? Pariatur magni nulla assumenda quibusdam quaerat perspiciatis iusto dicta voluptates autem sed! Eius, suscipit ex voluptatibus enim dolore autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, suscipit architecto? Pariatur magni nulla assumenda quibusdam quaerat perspiciatis iusto dicta voluptates autem sed! Eius, suscipit ex voluptatibus enim dolore autem.
        </p>
    </div>
  </div>
</template>

<script>
</script>

<style>
.home{
  display: flex;
  padding: 2em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.halfBox{
  background: rgb(107,107,107);
  background: linear-gradient(0deg, rgba(107,107,107,1) 0%, rgba(26,26,26,1) 100%);
  width: 500px;
  height: 300px;
  border-radius: 10px;
  margin: 10px;
}
.bigBox{
  background: rgb(107,107,107);
  background: linear-gradient(0deg, rgba(107,107,107,1) 0%, rgba(26,26,26,1) 100%);
  width: 1020px;
  height: 300px;
  border-radius: 10px;
  justify-content: center;
  margin: 10px;
}
.container{
  display: flex;
  justify-content: center;
}
.textBox{
  color: white;
  font-size: 20px;
  flex-wrap: wrap;
  margin: 20px
}
</style>
