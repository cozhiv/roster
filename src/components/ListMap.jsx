import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List, Space, Button, Tooltip} from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



export const ListMap = ({ list, handleRemove }) => {
  return (
    <>
      <Space
        direction="vertical"
        style={{
          marginBottom: '20px',
          width: '100%',
        }}
        size="middle"
      >
        <List
          pagination={{  
            position: 'bottom',
            align: 'center',
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          itemLayout="vertical"
          size="large"
          dataSource={list}
          footer={
            <div>
              <b>ant design</b>for Dev Team BG
            </div>
          }
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                key={item.id}
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                title={<Link to={'item/'} state={item}>{item.name}</Link>}
                description={`Use local storage to save and retrieve notes,
                ensuring that user data is persistent on browser reload.
                Avatar type #`+index}
              /> 
              <Tooltip title="remove">
                <Button type="primary" shape="circle" icon={<PoweroffOutlined />} onClick={handleRemove(item.id)} />
              </Tooltip>
            </List.Item>
          )}
        />
      </Space>
    </>
  );
};


ListMap.propTypes = {
  list: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
};