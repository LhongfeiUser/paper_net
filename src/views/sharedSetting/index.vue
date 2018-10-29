<template>
  <div class="app-container">
    <div class="proataManage_title">
      <span class="el-icon-setting"/>
      <h4>分成设置 - 蒋石文</h4>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="系统类型"
        width="100"/>
      <el-table-column
        prop="name"
        label="官网售价"
        width="100"/>
      <el-table-column
        prop="province"
        label="总利润"
        width="100"/>
      <el-table-column
        prop="city"
        label="下级分成"
        width="100"/>
      <el-table-column
        prop="address"
        label="我的利润"
        width="200"/>
      <el-table-column
        prop="zip"
        label="下级利润"
        width="200"/>
      <el-table-column
        prop="zip"
        label="状态"
        width="200"/>
      <el-table-column
        prop="zip"
        label="备注 "
        width="100"/>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
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
      }
    }
</script>

<style scoped lang="scss">
.el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
.proataManage_title{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color:#f8f5f0;
  padding-left:1vw;
  color:#606266;
  span{
    font-size:20px;
  }
  h4{
    margin-left:1vw;
  }
}
</style>
