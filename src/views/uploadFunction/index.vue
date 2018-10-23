<template>
  <el-upload
    :limit="5"
    :on-exceed="handleExceed"
    :file-list="fileList"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :headers="jjj"
    class="upload-demo"
    accept=".jpg,.doc,.png"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple>
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">文件不超过500kb</div>
  </el-upload>
</template>

<script>
    export default {
      data() {
        return {
          jjj:{
            ContentType:"application/x-www-form-urlencoded"
          },
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

<style scoped>

</style>
