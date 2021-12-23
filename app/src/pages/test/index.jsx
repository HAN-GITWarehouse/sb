// import { PageContainer } from '@ant-design/pro-layout'
// import ProTable from '@ant-design/pro-table';


// const tabList=[
//     {
//        id:1, 
//        name:"xiaomiang",
//        age:20,
//        score:0,
//        timer:new Date()       
//     },
//     {
//        id:2, 
//        name:"xiaomiang100",
//        age:18,
//        score:0,
//        timer:new Date()       
//     },
//     {
//        id:3, 
//        name:"xiaomiang9",
//        age:40,
//        score:0,
//        timer:new Date()       
//     },
//     {
//        id:4, 
//        name:"xiaomiang4",
//        age:25,
//        score:0,
//        timer:new Date()       
//     },
 
// ]
// const Test = () => {
//     const columns = [
//             {
//             title: '历史答题时间',
//             dataIndex: 1,
//             render: v =>`${v}`,
        
//             },
//             {
//             title: '答对题数',
//             dataIndex: 2,
//             render: v =>`${v}`
//             },
//             {
//             title: '考试得分',
//             dataIndex: 3,
//             render: v =>`${v}`
//             },
//             {
//             title: '正确率',
//             dataIndex: 4,
//             render: v =>`${v}%`
//             },
//         ];
//     const items = [{
//             type: 'Input',
//             label: 'ID查询',
//             required: false,
//             placeholder: '请输入id',
//             parameter: 'id',
//             }, {
//             type: 'Select',
//             label: '科目查询',
//             required: false,
//             placeholder: '请选择',
//             parameter: 'subject',
//             options: []
//             }
//         ];
//   return (
//     <PageContainer>
//         <ProTable
//         rowKey="id"
//         search={true}
//         columns={columns}
//         request={() => {
//         return Promise.resolve({
//           data:tabList,
//           success: true,
//         });
//       }}/>
// </PageContainer>
//   );
// };

// export default Test;
import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { TableDropdown } from '@ant-design/pro-table'
import { Tag, Input, Breadcrumb } from 'antd'
import { useState, useRef } from 'react'
import { getTableData } from './api'
import { history } from 'umi'
import { Link } from 'umi'

const data = [{
    key: '1',
    name: '张三',
    age: 22,
    address: '浙江省温州市',
}, {
    key: '2',
    name: '李四',
    age: 42,
    address: '湖南省湘潭市',
}, {
    key: '3',
    name: '王五',
    age: 12,
    address: '四川省成都市',
}, {
    key: '4',
    name: '赵六',
    age: 25,
    address: '河南省郑州市',
}, {
    key: '5',
    name: '宋二',
    age: 74,
    address: '海南省海口市',
}, {
    key: '6',
    name: '韩八',
    age: 19,
    address: '台湾省台北市',
}, {
    key: '7',
    name: '孙七',
    age: 55,
    address: '福建省福州市',
}, {
    key: '8',
    name: '金九',
    age: 81,
    address: '山西省运城市',
}];

const Statistics = props => {
   const {sortedInfo,setSortedInfo}=useState(null)
   
    handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filter)
        setSortedInfo(sorter)
    };

    setAgeSort = () => {
      setSortedInfo({
         sortedInfo: {
            order: 'descend',
            columnKey: 'age',
         },
      })
    };
 const columns = [{
            title: '名字',
            dataIndex: 'name',
            key: 'name',
            filters: [
                { text: '孙', value: '孙' },
                { text: '赵', value: '赵' },
            ],
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        }, {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
            filters: [ //筛选条件
                { text: '浙江省', value: '浙江省' },
                { text: '市', value: '市' },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => {
                console.log(value,"value"); //浙江省 value
                console.log(record,"record");//{key: "2", name: "李四", age: 42, address: "湖南省湘潭市"} 遍历数据 
                return record.address.includes(value);//所有的数据中 包含value(浙江省)的筛选出来
            },
            //sorter: (a, b) => a.address.length - b.address.length,
            sorter: (a,b)=>(a.address).localeCompare(b.address), 
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }];
    render(
         <ProTable
            columns={columns}
            actionRef={actionRef}
            request={() => {
               return Promise.resolve({
               data:data,
               success: true,
            });
            }}
            params={params}
            rowKey="id"
            onChange={this.handleChange}
            pagination={{ pageSize: 10, pageSizeOptions: [5, 10, 15, 20] }}
            />

    )
}

export default Statistics

import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { TableDropdown } from '@ant-design/pro-table'
import { Tag, Input, Breadcrumb } from 'antd'
import { useState, useRef } from 'react'
import { getTableData } from './api'
import { history } from 'umi'
import { Link } from 'umi'

const data = [{
    key: '1',
    name: '张三',
    age: 22,
    address: '浙江省温州市',
}, {
    key: '2',
    name: '李四',
    age: 42,
    address: '湖南省湘潭市',
}, {
    key: '3',
    name: '王五',
    age: 12,
    address: '四川省成都市',
}, {
    key: '4',
    name: '赵六',
    age: 25,
    address: '河南省郑州市',
}, {
    key: '5',
    name: '宋二',
    age: 74,
    address: '海南省海口市',
}, {
    key: '6',
    name: '韩八',
    age: 19,
    address: '台湾省台北市',
}, {
    key: '7',
    name: '孙七',
    age: 55,
    address: '福建省福州市',
}, {
    key: '8',
    name: '金九',
    age: 81,
    address: '山西省运城市',
}];

const Statistics = props => {
   const {sortedInfo,setSortedInfo}=useState(null)
   
    handleChange = (sorter) => {
        setSortedInfo(sorter)
    };

    setAgeSort = () => {
      setSortedInfo({
         sortedInfo: {
            order: 'descend',
            columnKey: 'age',
         },
      })
    };
 const columns = [{
            title: '名字',
            dataIndex: 'name',
            key: 'name',
            filters: [
                { text: '孙', value: '孙' },
                { text: '赵', value: '赵' },
            ],
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        }, {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
            filters: [ //筛选条件
                { text: '浙江省', value: '浙江省' },
                { text: '市', value: '市' },
            ],
            //sorter: (a, b) => a.address.length - b.address.length,
            sorter: (a,b)=>(a.address).localeCompare(b.address), 
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }];
    render(
         <ProTable
            columns={columns}
            actionRef={actionRef}
            request={() => {
               return Promise.resolve({
               data:data,
               success: true,
            });
            }}
            params={params}
            rowKey="id"
            pagination={{ pageSize: 10, pageSizeOptions: [5, 10, 15, 20] }}
            />

    )
}

export default Statistics