<template>
  <div class="app-container">
    <div v-show="isCompile">
      <div class="article_title">
        <span class="el-icon-document"/>
        文章列表
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%;">
        <el-table-column
          fixed
          prop="id"
          label="ID"
          align="center"
          width="100"/>
        <el-table-column
          prop="title"
          label="标题"
          align="center"
          width=""/>
        <el-table-column
          prop="type"
          label="类别"
          align="center"
          width=""/>
        <el-table-column
          prop="name"
          label="作者"
          align="center"
          width=""/>
        <el-table-column
          prop="date"
          label="发布时间"
          align="center"
          width=""/>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="200">
          <template slot-scope="scope">
            <el-button class="el-button--danger" size="small" @click="handleClick(scope.$index,tableData)"><i class="el-icon-delete" style="padding-right:5px;"></i>删除
            </el-button>
            <el-button class="el-button--primary" size="small" @click="compile(scope.row)"><i class=" el-icon-edit" style="padding-right:5px;"></i>编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :total="100"
        :page-size="3"
        background
        layout="prev, pager, next"
        @current-change="changePage"/>
    </div>
    <div v-show="!isCompile" class="_compile">
      <div class="title_compile">
        <h4>您好 : <strong>lhf1667</strong></h4>
        <div class="btn_compile">
          <el-button class="el-button--danger" size="" @click="success()">取消</el-button>
          <el-button class="el-button--primary" size="" @click="success()">保存</el-button>
        </div>
      </div>
      <div class="content_compile">
        <el-form :inline="true" :label-position="labelPosition" :model="formLabelAlign" label-width="80px" >
          <el-form-item label="ID">
            <el-input v-model="formLabelAlign.id"/>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="formLabelAlign.title"/>
          </el-form-item>
          <el-form-item label="类别">
            <el-input v-model="formLabelAlign.type"/>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="formLabelAlign.name"/>
          </el-form-item>
          <el-form-item label="发布时间">
            <el-input v-model="formLabelAlign.date"/>
          </el-form-item>
        </el-form>
        <div id="editorElem"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import E from 'wangeditor'

  export default {
    data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          date: '',
          type: '',
          title:'',
          id:''
        },
        meg: null,
        isCompile: true,
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          },{
            date: '2016-05-03',
            name: '王小虎',
            title: '喝茶与养生',
            id: '3',
            type: '知网',
          }],
        editorContent: '',
      }
    },
    mounted() {
      let editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      };
      editor.create()
    },
    methods: {
      //设置表头背景
      /*getRowClass({ row, column, rowIndex, columnIndex }) {
        if (rowIndex == 0) {
          return 'background:#f5f5f5'
        } else {
          return ''
        }
      },*/
      changePage(page){
      },
      handleClick(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.splice(index, 1);
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
      compile(row) {
        this.isCompile = !this.isCompile;
        this.formLabelAlign = row;
      },
      success() {
        this.isCompile = !this.isCompile;
        console.log(this.meg);
        this.meg = '';
      }
    },
  }
</script>

<style rel="stylesheet/scss" scoped lang="scss">
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
  .el-form--inline .el-form-item{
    margin-right:80px;
    margin-bottom:40px;
  }
  .app-container{
    .article_title {
      width: 100%;
      padding: 20px 10px;
      color: #909399;
      background-color: #f5f7fa;
      font-size:18px;
      span{
        font-size:20px;
      }
    }
    ._compile{
      .title_compile{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background:rgba(66,185,131,.1);
        padding:5px 50px;
        h4{
          color: #909399;
          strong{
          }
        }
      }
      .content_compile{
        background-color: #f5f7fa;
        border-radius:5px;
        padding:30px 50px;
      }
    }
  }
</style>
