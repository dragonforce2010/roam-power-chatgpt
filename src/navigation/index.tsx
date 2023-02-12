import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { Divider } from '@chatui/core';
import "./index.css"

const { Sider } = Layout
const topicItems: MenuProps['items'] = [
  {
    label: '游戏话题',
    key: 'game',
    icon: <MailOutlined />,
  },
  {
    label: '研发话题',
    key: 'development',
    icon: <AppstoreOutlined />,
  },
  {
    label: '新闻政治',
    key: 'politics',
    icon: <SettingOutlined />,
  },
  {
    label: '写作创作',
    key: 'writing',
    icon: <AppstoreOutlined />,
  },
  {
    label: '随意畅聊',
    key: 'randomTopic',
    icon: <AppstoreOutlined />,
  },
];

const sysSettingItems: MenuProps['items'] = [
  {
    label: '深色主题',
    key: 'darkMode',
    icon: <MailOutlined />,
  },
  {
    label: '登出系统',
    key: 'logout',
    icon: <AppstoreOutlined />,
  },
  {
    label: '清除话题',
    key: 'ClearConversaction',
    icon: <SettingOutlined />,
  },
  {
    label: '飞书讨论群',
    key: 'feishuGroup',
    icon: <AppstoreOutlined />,
  },
  {
    label: '更新和Q&A',
    key: 'update',
    icon: <AppstoreOutlined />,
  },
];

const NavigationPanel: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const [collapsed, setCollapsed] = useState(true)
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Sider className='navigationContainer' collapsible collapsed={collapsed} onCollapse={setCollapsed}>
    <Menu className="section1" onClick={onClick} selectedKeys={[current]} mode="vertical" items={topicItems} />
    <Divider className='divider'></Divider>
    {/* <div className="section2">second half</div> */}
    <Menu className="section2" onClick={onClick} selectedKeys={[current]} mode="vertical" items={sysSettingItems} />
  </Sider>
};

export default NavigationPanel;