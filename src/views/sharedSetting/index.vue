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
        align="center"
        width="100"/>
      <el-table-column
        prop="name"
        label="官网售价"
        align="center"
        width="100"/>
      <el-table-column
        prop="province"
        label="总利润"
        align="center"
        width="100"/>
      <el-table-column
        prop="city"
        label="下级分成"
        align="center"
        width="100"/>
      <el-table-column
        prop="address"
        label="我的利润"
        align="center"
        width="200"/>
      <el-table-column
        prop="zip"
        label="下级利润"
        align="center"
        width="200"/>
      <el-table-column
        prop="zip"
        label="状态"
        align="center"
        width="200"/>
      <el-table-column
        prop="zip"
        label="备注 "
        align="center"
        width="100"/>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="150">
        <template slot-scope="scope">
          <el-button class="el-button--primary" size="small" @click="dialogFormVisible = true"><i class="el-icon-edit" style="padding-right:5px;"></i>编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="1000"
      background
      layout="prev, pager, next"/>
    <el-dialog :visible.sync="dialogFormVisible" title="增加代理">
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
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        input: '',
        tableData: [
          {
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
          }, {
            date: '2016-05-02',
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
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }],
        formLabelWidth: '120px',
        form: {
          name: '',
          phone: '',
          userType: '',
          their: '',
          id: '',
        },
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }

  .proataManage_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f7fa;
    padding-left: 1vw;
    color: #606266;
    span {
      font-size: 20px;
    }
    h4 {
      margin-left: 1vw;
    }
  }
</style>
