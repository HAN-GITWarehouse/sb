import request from '../../../request'

export const getRank = params => {
  return request('learn/statistics', {
    method: 'get',
    params: {
      page: params.current,
      size: params.pageSize,
      ...params
    }
  })
}

// export const getChartsData = params => {
//   console.log(params)
//   return request('data-analysis/chapter', {
//     method: 'get',
//     params
//   })
// }
