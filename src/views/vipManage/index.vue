<template>
  <div class="app-container">
    <div class="proxyManage">
      <div class="proxyManage_title">
        <span class="el-icon-document"/>
        <h4>代理列表</h4>
        <el-popover
          placement="right"
          width="400"
          trigger="click">
          <div style="margin: 20px;"/>
          <el-form :model="formLabelAlign" :label-position="labelPosition" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name"/>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="formLabelAlign.region"/>
            </el-form-item>
            <el-form-item label="用户角色">
              <el-input v-model="formLabelAlign.type"/>
            </el-form-item>
            <el-button @click="addUser">增加</el-button>
          </el-form>
          <el-button slot="reference" type="success" size="mini">增加代理</el-button>
        </el-popover>
      </div>
      <div style="display:flex;justify-content: end;">
        <el-input v-model="input" placeholder="搜代理姓名、手机号、ID"/>
        <button class="el-button" style="margin-left:1vw;" @click="search">搜索</button>
      </div>
    </div>
    <el-table
      :data="c"
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
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="removeUser(scope.$index,tableData)">删除</el-button>
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
  import {parseTime} from '@/utils/index'
    export default {
      data(){
        return{
          input:'',
          c:null,
          labelPosition: 'left',
          formLabelAlign: {
            name: '',
            region: '',
            type: '',
            date:''
          },
          tableData: [{
            date: '2016-05-03',
            name: '1',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '2',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '3',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '4',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },{
            date: '2016-05-02',
            name: '5',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },{
            date: '2016-05-02',
            name: '6',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },{
            date: '2016-05-02',
            name: '7',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
        }
      },
      created(){},
      methods: {
        addUser(){
          this.formLabelAlign.date =parseTime(new Date());
          let addInfo = this.formLabelAlign;
          if(addInfo.name&&addInfo.region&&addInfo.type){
            this.tableData.unshift(addInfo)
          }else {
            alert('输入框不能为空')
          }
          this.formLabelAlign = {};
        },
        removeUser(index,row){
          row.splice(index,1)
        },
        search(){
          let b = this.tableData;
          let a = b.filter((item)=>{
            if(item.name.indexOf(this.input)!==-1){
              return item;
            }
          });
          this.c = a;
          if(this.input===''){
            this.c =this.tableData;
          }
        }
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
