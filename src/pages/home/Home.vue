<template>
    <img src="../../assets/pedro-henrique-santos-4IoS45J9pmk-unsplash.jpg" alt="">
    <div class="secondDiv grid gap-2 grid-cols-2 bg-darkblue">
  <div class="my-20">
    <b class="text-2xl py-10">4Life® Products
        <hr class="h-10">
    </b>
  <p class="text-xl">
    4Life Трансфер Фактор
  </p>
  <p class="pt-5">
    Та өөртөө болон хамгаас хайртай хүмүүсийнхээ эрүүл мэндэд анхаарч байгаа бол манай бүтээгдэхүүнийг сонгоорой.
  </p>
  <p class="pt-4">
    Дархлаа дэмжигч шилдэг бүтээгдэхүүн Трансфер фактор.
  </p>
  </div>
  <div class="background2 ml-5">
    
  </div>
</div>

</template>

<script>
export default {
    data() {
        return{

        }
    }
}
</script>
<style>

.secondDiv {
  background-color: #181C4B;
  background-size: 300px 100px;
  height: 413px;
  text-align: center;
  color: white;
  background-repeat: no-repeat;
}

.background2 {
    background-image: url(../../assets/b1.png);
    background-repeat: no-repeat;
}
@media screen and (max-width: 500px) {
  .secondDiv {
    text-align: center;
    grid: none;
  }
  .background2 {
    background-image: none;
    background-size: 300px 100px;
  }
}
</style>