<template>
  <div class="app-container">
    <div class="article_title">
      文章列表
    </div>
    <el-table
      v-if="isCompile"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="city"
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
        prop="date"
        sortable
        label="发布时间"
        width=""/>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.$index,tableData)" >删除</el-button>
          <el-button type="text" size="small" @click="compile(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="!isCompile">
      <el-form :label-position="labelPosition" :model="formLabelAlign" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.name"/>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.region"/>
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="formLabelAlign.type"/>
        </el-form-item>
      </el-form>
      <el-button @click="success()">完成</el-button>
    </div>
  </div>
</template>

<script>
    export default {
       data(){
         return{
           labelPosition: 'right',
           formLabelAlign: {
             name: '',
             region: '',
             type: ''
           },
           meg:null,
           isCompile:true,
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
        handleClick(index,row) {
          row.splice(index,1)
        },
        compile(row){
          this.isCompile = !this.isCompile;
          this.formLabelAlign=row;
          console.log(this.meg);
        },
        success(){
          this.isCompile = !this.isCompile;
          console.log(this.meg);
          this.meg='';
        }
      }
    }
</script>

<style scoped lang="scss">
    .article_title{
      width:100%;
      padding:10px;
      background-color:#f8f5f0;
      color:#909399;
    }
</style>
