import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {
  const data = [
    { name: 'Nguyễn Văn A', age: 25 },
    { name: 'Trần Thị B', age: 30 },
  ];

  return (
    <div>
      <h1>Hệ Thống Thiết Kế HD</h1>
      <Form />
      <Button label='Nhấn Tôi' onClick={() => alert('Button clicked!')} />
      <Table data={data} />
    </div>
  );
};

export default App;
