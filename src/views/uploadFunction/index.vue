<template>
  <div class="app-container">
    <div class="_upload">
      <el-upload
        :limit="5"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :headers="{ContentType:'multipart/form-data;boundary'}"
        class="upload-demo"
        accept=".jpg,.doc,.png"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <el-button type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">文件不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          fileList: [
            {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
            {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        };
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        }
      }
    }
</script>

<style lang="scss">
  ._upload{
    section.app-main{
      width: 60vw!important;
      border: 1px solid #ebeef5!important;
      margin: 7vh auto 1vh!important;
      padding-top:7vh!important;
    }
    .el-upload{
      display: block;
    }
    .el-upload__tip{
      text-align: center;
      font-size:20px;
      margin-top:10vh;
    }
    .el-upload-list__item:first-child{
      margin-top:5vh;
    }
    .el-upload-list__item{
      font-size:20px;
      margin:2vh auto;
    }
  }
</style>
