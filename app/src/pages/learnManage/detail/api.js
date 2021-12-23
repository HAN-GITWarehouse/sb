import request from '../../../request'

export const getTableData = params => {
  return request('user-data', {
    method: 'get',
    params: {
      userId:params.id,
      ...params
    }
  })
}


export const getAnalysisData = params => {
  return request('dashboard', {
    method: 'get',
    params: {
      ...params
    }
  })
}




