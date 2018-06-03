<template>
  <section>
    <div class="head-image"></div>
    <div class="introduce">
      <div class="introduce-title"></div>
      <p class="introduce-time">
        <span class="tile-time">活动时间：</span>
        <span class="time">2018年6月20日 - 7月28日</span>
      </p>
      <div class="content">《绝地求生》是一款战术竞技类、讲求策略、枪法、充满各种随机性的游戏。在游戏中每位玩家都在为自己而战，就如同定制首饰，每一个设计都是独一无二，充满个性。
        本次《PUBG官方正版首饰周边设计大赛》不仅为设计师带来了展示自己水平的机会，也为PUBG玩家们带来了超级大福利！
        上万名首饰设计师将根据每位PUBG玩家提出的设计理念，选择自己心仪的命题进行首饰设计。“你的创想，我来实现”为每位PUBG玩家实现属于自己的“幸运符”设计！参与赛事的玩家与设计师们都将有机会获赛事主办方提供的丰厚奖励！</div>
    </div>
    <div class="buttons">
      <div class="button-left"></div>
      <div class="button-right"></div>
    </div>
  </section>
</template>
<script>
    
</script>
<style scoped>
.head-image{
  height: 285px;
  background-image: url('../assets/homePage/KV.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.introduce{
  position: relative;
  height: 350px;
  background-image: url('../assets/homePage/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.introduce-title{
  width: 134px;
  height: 30px;
  margin: 0 auto;
  position: relative;
  top: 24px;
  background-image: url('../assets/homePage/title.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.introduce-time{
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
}
.tile-time{
  color: #333333;
  font-weight: 800;
}
.content{
  margin: 0 30px 0 30px;
  font-size: 12px;
  color: #333333;
  line-height: 23px;
}
.buttons{
  height: 132px;
  background-image: url('../assets/homePage/button.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.button-left{
  width: 167px;
  height: 72px;
  position: absolute;
  bottom: 16px;
  left: 15px;
}
.button-right{
  width: 167px;
  height: 72px;
  position: absolute;
  bottom: 16px;
  right: 15px;
}
</style>
