import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { ProFormText, LoginForm } from '@ant-design/pro-form';
import { useIntl, history, FormattedMessage, SelectLang, useModel } from 'umi';
import Footer from '@/components/Footer';
import {LoginUser} from './api' 

import styles from './index.less';


const Login = () => {
  const [userLoginState, setUserLoginState] = useState({});
  const [type, setType] = useState('account');
  const intl = useIntl();

  const handleSubmit = async (values) => { 
    const res=await LoginUser(values);
    console.log("react ant pro login page resonse",res);
    if(res.code===40001){
       history.replace('/user/login');
    }
    if(res.data.token){
      localStorage.setItem("backend-token",res.data.token)
    }
    if(res.code===0){
      history.replace('/analysis/meter');
    }
  };

  const { status, type: loginType } = userLoginState;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          {status === 'error' && loginType === 'account' && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误(admin/ant.design)',
              })}
            />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'CISDepartment',
                  defaultMessage: '用户名: CISDepartment',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: '#buf&w8GkBztM9M6',
                  defaultMessage: '密码:#buf&w8GkBztM9M6',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
