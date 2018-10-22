<template>
  <div class="app-container">
    <div class="userList">
      <div class="userList_title">
        <span class="el-icon-document"/>
        <h3>用户列表</h3>
      </div>
      <div style="display:flex;justify-content: end;">
        <el-input v-model="input" placeholder="输入用户名或ID"/>
        <button class="el-button">搜索</button>
      </div>
    </div>
    <el-table
      :data="tableData3"
      style="width:100%">
      <el-table-column label="每日统计">
        <el-table-column
          prop="date"
          label="ID"
          width=""/>
        <el-table-column
          prop="name"
          label="用户"
          width=""/>
        <el-table-column
          prop="province"
          label="昵称"
          width=""/>
        <el-table-column
          prop="city"
          label="所属"
          width=""/>
        <el-table-column
          prop="zip"
          label="时间"
          width=""/>
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
        tableData3: [{
          date: '2016-05-03',
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '1',
          province: '2',
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
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
        }
      }
    }
</script>

<style lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
  .userList{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px 10px 0;
    border:1px solid #ebeef5;
    background-color:#f8f5f0;
    margin-bottom:10px;
    .userList_title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left:10px;
      color:#909399;
      span{
        font-size:24px;
      }
    }
  }
</style>
