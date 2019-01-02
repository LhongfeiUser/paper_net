import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
export function getInCome(params) {
  return request({
    url: '/proxyStatement',
    method: 'get',
    params
  })
}
export function getOrderList(params) {
  return request({
    url: '/orderDetail',
    method: 'get',
    params
  })
}
