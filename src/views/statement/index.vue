<template>
  <div class="app-container">
    <el-table
      :data="tableData3"
      style="width:100%">
      <el-table-column label="收支明细">
        <el-table-column
          prop="date"
          label="时间"
          width="100"/>
        <el-table-column
          prop="name"
          label="类型"
          width="280"/>
        <el-table-column
          prop="province"
          label="收入（支出）"
          width="200"/>
        <el-table-column
          prop="city"
          label="余额"
          width="200"/>
        <el-table-column
          prop="zip"
          label="备注"
          width="200"/>
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
    name:'Statement',
    data(){
      return{
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
          name: '王小王小虎王小虎王小虎王小虎王小虎王小虎王小虎王小虎虎',
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

<style scoped>
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
</style>
