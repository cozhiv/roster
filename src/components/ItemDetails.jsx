import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card } from 'antd';

export const ItemDetails = () => {
  const location = useLocation();
  const id = location.state.id;
  const name = location.state.name;

  return (
    <Card
      title="Item Content"
      bordered={true}
      style={{
        width: 300,
      }}
    >
      <p>Content</p>
      <p>ID: {id}</p>
      <p>item name:{name}</p>
      <Link to='/'>Go Home</Link>
      
    </Card>

  );
};
