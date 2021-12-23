import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { TableDropdown } from '@ant-design/pro-table'
import { getTableData } from './api'
import { Row, Col, Breadcrumb,Tabs} from 'antd'

const { TabPane } = Tabs;
import { useState,useEffect} from 'react'
import { Link } from 'umi'
import Login from '@/pages/user/Login';

const Detail = ({ location }) => {
  const [times, handleTime] = useState(0)
  const columns = [
    {
      title: '历史答题时间',
      dataIndex: 'start_time',
       render: v =>`${v}`,
   
    },
    {
      title: '答对题数',
      dataIndex: 'total_answer',
      render: v =>`${v}`
    },
    {
      title: '考试得分',
      dataIndex: 'final_assessment',
      render: v =>`${v}`
    },
    {
      title: '正确率',
      dataIndex: 'correct_rate',
      render: v =>`${v}%`
    },
  ];
  // const userId=location.query
  // async function personalData () {  
  //   const res=await getTableData({userId:'39cbdfda-2a5f-4cae-a8e8-83487bd54e81'})
  //   console.log("111111111111111111111111111",userId);
  //   console.log("react this pages datis-----",res)
  //   //     handleAnalysisData(res.data.up)
  //   //     handleChartData(res.data.down)
  //   //     handleRankData(res.data.right)
  // }

  
  // useEffect(() => {
  //   const res = personalData ()
  // }, [])

  return (
    <PageContainer
      header={{
        title: '', breadcrumbRender: ({ breadcrumb }, originBreadcrumb) => {
          return (
            <Breadcrumb>
              {breadcrumb.routes.map((item, index) => {
                return (
                  <Breadcrumb.Item key={item.path}>
                    <Link key={item.path}
                          to={index === 0 ? '/learnManage/statistics' : item.path}>{item.breadcrumbName}</Link>
                  </Breadcrumb.Item>
                )
              })}
            </Breadcrumb>
          )
        }
      }}>
        <Tabs defaultActiveKey="1">
         {/* <TabPane tab="课后测试" key="1">
                  <ProTable
                      rowKey="start_time"
                      params={location.query}
                      search={false}
                      pagination={{ pageSize: 10, pageSizeOptions: [5, 10, 15, 20] }}
                      headerTitle={`课后测试：累计${times}次`}
                      columns={columns}
                      request={async params => {
                      const res = await getTableData(params)
                      console.log("response data user detail ",res.data)
                      const SelfCheck=[]
                      SelfCheck.push(res.data[0])
                      handleTime(res.data[0].total_answer)
                      return {
                          data: SelfCheck,
                          success: true,
                      }
                    }}/>
          </TabPane> */}
          <TabPane tab="终极测试" key="2">
                  <ProTable
                      rowKey="start_time"
                      params={location.query}
                      search={false}
                      pagination={{ pageSize: 10, pageSizeOptions: [5, 10, 15, 20] }}
                      headerTitle={`终极测试：累计${times}次`}
                      columns={columns}
                      request={async params => {
                      const res = await getTableData(params)
                      console.log("FINAL TEST RESPONSE 123",res.data)
                      handleTime(res.data.length)
                      return {
                          data: res.data,
                          success: true,
                      }
                    }}/>
          </TabPane>
        </Tabs>

         {/* <ProTable
              rowKey="start_time"
              params={location.query}
              search={false}
              pagination={{ pageSize: 10, pageSizeOptions: [5, 10, 15, 20] }}
              headerTitle={`单独渲染：累计${times}次`}
              columns={columns}
              request={async params => {
              const res = await getTableData(params)
              if(res.data.data===[]){
                    return
              }
              return {
                  data: res.data.data,
                  success: true,
              }
            }}/> */}
    </PageContainer>
  )
}

export default Detail
