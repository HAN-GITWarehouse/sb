import { PageContainer } from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table';


const tabList=[
    {
       id:1, 
       name:"xiaomiang",
       age:20,
       score:0,
       timer:new Date()       
    },
    {
       id:2, 
       name:"xiaomiang100",
       age:18,
       score:0,
       timer:new Date()       
    },
    {
       id:3, 
       name:"xiaomiang9",
       age:40,
       score:0,
       timer:new Date()       
    },
    {
       id:4, 
       name:"xiaomiang4",
       age:25,
       score:0,
       timer:new Date()       
    },
 
]
const Test = () => {
    const columns = [
            {
            title: '历史答题时间',
            dataIndex: 1,
            render: v =>`${v}`,
        
            },
            {
            title: '答对题数',
            dataIndex: 2,
            render: v =>`${v}`
            },
            {
            title: '考试得分',
            dataIndex: 3,
            render: v =>`${v}`
            },
            {
            title: '正确率',
            dataIndex: 4,
            render: v =>`${v}%`
            },
        ];
    const items = [{
            type: 'Input',
            label: 'ID查询',
            required: false,
            placeholder: '请输入id',
            parameter: 'id',
            }, {
            type: 'Select',
            label: '科目查询',
            required: false,
            placeholder: '请选择',
            parameter: 'subject',
            options: []
            }
        ];
  return (
    <PageContainer>
        <ProTable
        rowKey="id"
        search={true}
        columns={columns}
        request={() => {
        return Promise.resolve({
          data:tabList,
          success: true,
        });
      }}/>
</PageContainer>
  );
};

export default Test;
