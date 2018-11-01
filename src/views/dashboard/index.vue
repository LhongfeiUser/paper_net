<template>
  <div class="dashboard-container">
    <div class="box-card-component" style="margin-left:8px;">
      <div class="box-card-header">
        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
      </div>
      <PanThumb class="head_portrait" width="100px" height="100px"
                image="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"/>
      <div class="dashboard-text">
        <div>姓名 : {{ name }}</div>
        <div>身份 :<span v-for="role in roles" :key="role"> {{ role }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PanThumb from '@/components/PanThumb'

  export default {
    name: 'Dashboard',
    components: {PanThumb},
    computed: {
      ...mapGetters([
        'name',
        'roles'
      ])
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      width:60vw;
      margin: 30px auto;
    }
    &-text {
      margin-top:60px;
      margin-left:20px;
      font-size: 24px;
      line-height: 46px;
    }
  }
  .box-card-component{
    position: relative;
    padding-bottom: 200px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    overflow: hidden;
    .box-card-header {
      padding:0;
      position: relative;
      height: 280px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1.1, 1.1);
          filter: contrast(130%);
        }
      }
    }
    .head_portrait{
      position: absolute;
      top:230px;
      left:30px;
    }
  }
</style>
