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
    <el-table
      :data="tableData3"
      style="width:100%">
      <el-table-column label="每日统计">
        <el-table-column
          prop="date"
          label="日期"
          width="200"/>
        <el-table-column
          prop="name"
          label="订单数"
          width="250"/>
        <el-table-column
          prop="province"
          label="论文篇数"
          width="250"/>
        <el-table-column
          prop="city"
          label="销售额"
          width="250"/>
        <el-table-column
          prop="zip"
          label="收入"
          width="250"/>
      </el-table-column>

    </el-table>
    <el-pagination
      :total="num"
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
      tableData3: [{
        date: '2016-05-03',
        name: '1',
        province: '2',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '1',
        province: '2',
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
        name: '1',
        province: '2',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '1',
        province: '2',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '1',
        province: '2',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
<style>
  ul,li{
    list-style:none;
  }
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
</style>
