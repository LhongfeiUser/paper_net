<template>
  <div class="app-container">
    <div class="statistics">
      <div class="statistics_top">
        <span class="el-icon-tickets"/>
        今日实时统计
      </div>
      <ul class="statistics_item">
        <li>
          <h4>订单数</h4>
          <h5>1</h5>
        </li>
        <li>
          <h4>论文篇数</h4>
          <h5>12</h5>
        </li>
        <li>
          <h4>销售额</h4>
          <h5>￥0</h5>
        </li>
        <li>
          <h4>收入</h4>
          <h5>￥0</h5>
        </li>
      </ul>
    </div>
    <div class="every_statistics">每日统计</div>
    <el-table
      :data="list"
      border
      style="width:100%">
      <el-table-column
        prop="date"
        label="日期"
        width=""/>
      <el-table-column
        prop="name"
        label="订单数"
        width=""/>
      <el-table-column
        prop="id"
        label="论文篇数"
        width=""/>
      <el-table-column
        prop="city"
        label="销售额"
        width=""/>
      <el-table-column
        prop="zip"
        label="收入"
        width=""/>
    </el-table>
    <el-pagination
      :total="100"
      :page-size="10"
      background
      layout="prev, pager, next"/>
  </div>
</template>

<script>
import { getList } from '@/api/table'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      num: 100,
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then((res)=>{
        this.list = res.items;
        this.listLoading = false
      })
    },
  }
}
</script>
<style>
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
  .statistics{
    border:1px solid #ebeef5;
    margin-bottom:20px;
    color:#606266;
  }
  .statistics_top{
    background:#f5f7fa;
    border-bottom:1px solid #ebeef5;
    height:30px;
    line-height:30px;
    padding-left:20px;
  }
  .statistics_item{
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
  .statistics_item li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right:1px solid #ebeef5;
    width:20vw;
  }
  .statistics_item li:nth-last-child(1){
    border-right:none;
  }

  /*每日统计*/
  .every_statistics{
    background-color:#f5f7fa; /*#f9f6f1 */
    height:50px;
    line-height:50px;
    padding-left:10px;
    color:#909399;
  }
  /*表格头部background*/

  .el-table th, .el-table tr{
    background: #f5f7fa;
  }
  .el-table__header-wrapper .el-table th, .el-table tr {
    background-color:#fff;
  }
</style>
