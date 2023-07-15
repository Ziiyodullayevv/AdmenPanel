import { Table } from "antd";

const Tables = ({ dataSource, columns }) => {
  return (
    <>
      <div className="table-card">
        <Table
          dataSource={dataSource}
          rowKey={(data) => data.id}
          columns={columns}
        />
      </div>
    </>
  );
};

export default Tables;
