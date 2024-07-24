import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Space } from 'antd';


export const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <Space direction="vertical" size="middle">
      <Space.Compact
        style={{
          width: '100%',
        }}
      >
        <Input value={name} onChange={onChange} defaultValue="Combine input and button" />
        <Button type="primary" onClick={onAdd}>Add</Button>
      </Space.Compact>
    </Space>
  </div>
);

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};