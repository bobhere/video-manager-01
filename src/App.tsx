import React, { useState } from 'react';
import { Layout, Menu, Spin } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
  CommentOutlined,
  TeamOutlined,
  SettingOutlined,
  ClockCircleOutlined,
  FolderOutlined
} from '@ant-design/icons';
import './App.css';
import Dashboard from './pages/Dashboard';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('dashboard');

  const renderContent = () => {
    switch (selectedKey) {
      case 'dashboard':
        return <Dashboard />;
      default:
        return <div>开发中...</div>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo">视频号管理</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          onSelect={({key}) => setSelectedKey(key)}
        >
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            仪表盘
          </Menu.Item>
          <Menu.Item key="accounts" icon={<UserOutlined />}>
            账号管理
          </Menu.Item>
          <Menu.Item key="content" icon={<VideoCameraOutlined />}>
            内容管理
          </Menu.Item>
          <Menu.Item key="analytics" icon={<BarChartOutlined />}>
            数据分析
          </Menu.Item>
          <Menu.Item key="comments" icon={<CommentOutlined />}>
            评论管理
          </Menu.Item>
          <Menu.Item key="fans" icon={<TeamOutlined />}>
            粉丝管理
          </Menu.Item>
          <Menu.Item key="schedule" icon={<ClockCircleOutlined />}>
            定时发布
          </Menu.Item>
          <Menu.Item key="material" icon={<FolderOutlined />}>
            素材库
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            系统设置
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;