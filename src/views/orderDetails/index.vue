<template>
  <div class="app-container">
    <div class="orderDetail">
      <h5>所有订单详情</h5>
      <div style="display:flex;justify-content: end;">
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <div class="block">
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
          <button class="el-button">搜索</button>
        </div>
      </div>
    </div>
    <el-table
      :data="tableData3"
      style="width:100%">
      <el-table-column label="每日统计">
        <el-table-column
          prop="date"
          label="日期"
          width="200"/>
        <el-table-column
          prop="name"
          label="订单数"
          width="200"/>
        <el-table-column
          prop="province"
          label="论文篇数"
          width="200"/>
        <el-table-column
          prop="city"
          label="销售额"
          width="200"/>
        <el-table-column
          prop="zip"
          label="收入"
          width="200"/>
      </el-table-column>

    </el-table>
    <el-pagination
      :total="num"
      background
      layout="prev, pager, next"/>
  </div>
</template>

<script>
    export default {
      name: "OrderDetails",
      data(){
        return{
          options: [{
            value: '选项1',
            label: '检测系统'
          }, {
            value: '选项2',
            label: '检测系统'
          }, {
            value: '选项3',
            label: '检测系统'
          }, {
            value: '选项4',
            label: '检测系统'
          }, {
            value: '选项5',
            label: '检测系统'
          }],
          value6: '',
          value: '所有检测系统',
          num: 100,
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

<style>
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
  .el-date-editor .el-range-separator{
    width:10%;
  }
  .orderDetail{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px 10px 0;
  }
</style>
