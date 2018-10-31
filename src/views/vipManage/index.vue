<template>
  <div class="app-container">
    <div class="proxyManage">
      <div class="proxyManage_title">
        <span class="el-icon-document"/>
        <h4>代理列表</h4>
        <el-button class="el-button--success" size="small" @click="addUser">增加代理</el-button>
      </div>
      <div style="display:flex;justify-content: end;margin-right:10px;">
        <el-input v-model="searchDate" placeholder="搜代理姓名、手机号、ID"/>
        <el-button class="el-button el-button--primary" style="margin-left:1vw;"> 搜索</el-button>
      </div>
    </div>
    <el-table
      :data="tableDataList"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        align="center"
        width="100"/>
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="100"/>
      <el-table-column
        prop="phone"
        label="手机号"
        align="center"
        width="200"/>
      <el-table-column
        prop="userType"
        label="用户角色"
        align="center"
        width="100"/>
      <el-table-column
        prop="balance"
        label="余额"
        align="center"
        width="200"/>
      <el-table-column
        prop="their"
        label="所属"
        align="center"
        width="200"/>
      <el-table-column
        prop="date"
        label="时间"
        align="center"
        width="200"/>
      <el-table-column
        prop="state"
        label="状态 "
        align="center"
        width="100"/>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="200">
        <template slot-scope="scope">
          <el-button class="el-button--danger" size="small" @click="deleteUser(scope.$index,tableDataList)"><i class="el-icon-delete" style="padding-right:5px;"></i>删除</el-button>
          <el-button class="el-button--primary" size="small" @click="compile(scope.row)"><i class="el-icon-edit" style="padding-right:5px;"></i>编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="pageNum"
      :page-size="3"
      background
      layout="prev, pager, next"
      @current-change="changePage"/>
    <el-dialog :visible.sync="dialogFormVisible" title="增加代理" >
      <el-form :model="form" label-position="right" style="padding:5px 50px 5px 10px;">
        <el-form-item :label-width="formLabelWidth" label="ID">
          <el-input v-model="form.id" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="姓名">
          <el-input v-model="form.name" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="所属">
          <el-input v-model="form.their" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="手机号">
          <el-input v-model="form.phone" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="用户角色">
          <el-input v-model="form.userType" auto-complete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormState==='create'?createUser():updateUser()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {parseTime} from '@/utils/index'

  export default {
    data() {
      return {
        dialogFormVisible: false,
        searchDate:'',
        form: {
          name: '',
          phone: '',
          userType: '',
          their: '',
          id: '',
        },
        dialogFormState:'',
        formLabelWidth: '120px',
        tableData: [
          {
            id: '1',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京',
            state:'正常'
          },
          {
            id: '2',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '3',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '4',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '5',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '6',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '7',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '8',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '9',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '10',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '11',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '12',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }, {
            id: '13',
            name: '小虎',
            phone: '18331449200',
            userType: '代理商',
            balance: '10000',
            their: '南京'
          }],
        tableDataList:null,
        pageNum:null,
      }
    },
    created() {
      this.pageNum = this.tableData.length;
      this.changePage(1);
    },
    methods: {
      addUser(){
        this.form={};
        this.dialogFormState = 'create';
        this.dialogFormVisible = true;
      },
      compile(row,index){
        this.dialogFormVisible = true;
        this.form = row;
      },
      deleteUser(index,list){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          list.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      updateUser(){
        console.log(this.form);
        this.dialogFormVisible = false;
      },
      createUser(){
        this.tableData.unshift(this.form);
        this.dialogFormVisible = false;
      },
      changePage(page){
        this.tableDataList = this.tableData.slice((page-1)*3,page*3)
      }
    },
  }
</script>

<style rel="stylesheet/scss" scoped lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
  .proxyManage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5vh auto 0;
    background-color: #f5f7fa;
    padding: 10px;
    .proxyManage_title {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #909399;
      h4 {
        margin: auto 10px;
      }
      span {
        font-size: 24px;
      }
    }
  }
</style>
