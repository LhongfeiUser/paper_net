<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="ID"
        width=""/>
      <el-table-column
        fixed
        prop="date"
        label="标题"
        width=""/>
      <el-table-column
        prop="name"
        label="类别"
        width=""/>
      <el-table-column
        prop="province"
        label="作者"
        width=""/>
      <el-table-column
        prop="city"
        label="发布时间"
        width=""/>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)" >删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
       data(){
         return{
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
           }]
         }
       },
      methods: {
        handleClick(row) {
          console.log(row);
        }
      }
    }
</script>

<style scoped>

</style>
