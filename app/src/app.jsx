import { PageLoading } from '@ant-design/pro-layout'
import { history, Link } from 'umi'
import RightContent from '@/components/RightContent'
import Footer from '@/components/Footer'
import { BookOutlined, LinkOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { LoginUser } from './api'

const isDev = process.env.NODE_ENV === 'development'
const loginPath = '/user/login'
import Logo from './assets/img/logo.png'

/** 获取用户信息比较慢的时候会展示一个 loading */

export const initialStateConfig = {
  loading: <PageLoading/>,
}

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

// export async function LoginInterception(){
//     const Btoken = localStorage.getItem('backend-token')
//     const data=await LoginUser()
// }


export async function getInitialState () {
    const Btoken = localStorage.getItem('backend-token')
    if(!Btoken){
       history.push(loginPath);
    }
  
  // const fetchUserInfo = async () => {
  //   try {
  //     const msg = await queryCurrentUser();
  //     return msg.data;
  //   } catch (error) {
  //     history.push(loginPath);
  //   }
  //
  //   return undefined;
  // }; // 如果是登录页面，不执行
  //
  // if (history.location.pathname !== loginPath) {
  //   const currentUser = await fetchUserInfo();
  //   return {
  //     fetchUserInfo,
  //     currentUser,
  //     settings: {},
  //   };
  // }
  //
  // return {
  //   fetchUserInfo,
  //   settings: {},
  // };
} // ProLayout 支持的api https://procomponents.ant.design/components/layout

export const layout = ({ initialState }) => {
  // console.log(RightContent)
  return {
    rightContentRender: () => <RightContent/>,
    // rightContentRender: () => (
    //     <Dropdown overlay={
    //       <Menu>
    //         <Menu.Item>
    //           <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //             1st menu item
    //           </a>
    //         </Menu.Item>
    //         <Menu.Item>
    //           <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //             2nd menu item
    //           </a>
    //         </Menu.Item>
    //         <Menu.Item>
    //           <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //             3rd menu item
    //           </a>
    //         </Menu.Item>
    //       </Menu>} placement="bottomLeft">
    //       <Avatar shape="square" size="small" icon={<UserOutlined/>}/>
    //     </Dropdown>
    // ),
    disableContentMargin: true,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    // itemRender: (a,b,c,d)=>{
    //   console.log(a,b,c,d)
    //   return <Breadcrumb.Item href={b}>123</Breadcrumb.Item>
    // },
    footerRender: () => <Footer/>,
    onPageChange: () => {
      // const { location } = history; // 如果没有登录，重定向到 login
      //
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  }
}
