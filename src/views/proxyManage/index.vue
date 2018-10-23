<template>
  <div class="app-container">
    <div class="proxyManage">
      <div class="proxyManage_title">
        <span class="el-icon-document"/>
        <h4>代理列表</h4>
        <el-button type="success" size="mini">增加代理</el-button>
      </div>
      <div style="display:flex;justify-content: end;">
        <el-input v-model="input" placeholder="搜代理姓名、手机号、ID"/>
        <button class="el-button" style="margin-left:1vw;">搜索</button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="ID"
        width="100"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="100"/>
      <el-table-column
        prop="province"
        label="手机号"
        width="100"/>
      <el-table-column
        prop="city"
        label="用户角色"
        width="100"/>
      <el-table-column
        prop="address"
        label="余额"
        width="200"/>
      <el-table-column
        prop="zip"
        label="所属"
        width="200"/>
      <el-table-column
        prop="zip"
        label="时间"
        width="200"/>
      <el-table-column
        prop="zip"
        label="状态 "
        width="100"/>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="1000"
      background
      layout="prev, pager, next"/>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          input:'',
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
        }
      },
      methods: {
      },
    }
</script>

<style scoped lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
  .proxyManage{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin:5vh auto 0;
    background-color:#f8f5f0;
    padding:10px;
    .proxyManage_title{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #909399;
      h4{
        margin:auto 10px;
      }
      span{
        font-size:24px;
      }
    }
  }
</style>
