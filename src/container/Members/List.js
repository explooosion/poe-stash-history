import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

const Main = styled.div`
  table {
    font-size: 14px;

    td:nth-child(1),
    th:nth-child(1) {
      width: 50px;
      text-align: center;
    }

    td:nth-child(2),
    th:nth-child(2) {
      width: 100px;
      text-align: center;
    }

    td:nth-child(3),
    th:nth-child(3) {
      width: 150px;
      text-align: center;
    }

    td:nth-child(4),
    th:nth-child(4) {
      width: 120px;
      text-align: center;
    }

    td:nth-child(5),
    th:nth-child(5) {
      width: 120px;
      text-align: center;
    }

    td:last-child,
    th:last-child {
      width: 180px;
      text-align: center;
    }
  }
`;

function List(props) {
  const { data } = props;

  const isPublics = [
    { label: 'PUBLIC', value: true },
    { label: 'PRIVATE', value: false },
  ];
  const [isPublic, setIsPublic] = useState('');

  const memberTypes = ['Leader', 'Officer', 'Member'];
  const [memberType, setMemberType] = useState('');

  const [accountName, setAccountName] = useState('');

  const tbEl = useRef(null);

  const publicFilter = (
    <Dropdown
      value={isPublic}
      options={isPublics}
      onChange={({ value }) =>
        tbEl.current.filter(value, 'public', 'equals') || setIsPublic(value)
      }
      className="p-column-filter"
      placeholder="All"
      showClear
    />
  );

  const memberTypeFilter = (
    <Dropdown
      value={memberType}
      options={memberTypes}
      onChange={({ value }) =>
        tbEl.current.filter(value, 'memberType', 'equals') ||
        setMemberType(value)
      }
      className="p-column-filter"
      placeholder="All"
      showClear
    />
  );

  const accountNameFilter = (
    <InputText
      style={{ width: '100%' }}
      value={accountName}
      onChange={(e) =>
        tbEl.current.filter(e.target.value, 'accountName', 'contains') ||
        setAccountName(e.target.value)
      }
    />
  );

  const idBodyTemplate = (rowData, column) => column.rowIndex + 1;

  const publicBodyTemplate = (rowData) => {
    const color = rowData.public ? 'p-tag-info' : 'p-tag-danger';
    const { label } = rowData.public ? isPublics[0] : isPublics[1];
    return <span className={`p-tag ${color}`}>{label}</span>;
  };

  const charactersLenBodyTemplate = (rowData) =>
    rowData?.characters?.length ?? '-';

  return (
    <Main>
      <DataTable
        ref={tbEl}
        value={data}
        paginator
        rows={10}
        loading={data.length === 0}
        header="Member List"
        className="p-datatable-sm"
      >
        <Column field="#" header="#" body={idBodyTemplate}></Column>
        <Column
          field="public"
          header="Public"
          body={publicBodyTemplate}
          filter
          filterElement={publicFilter}
        ></Column>
        <Column
          field="memberType"
          header="Member Type"
          filter
          filterElement={memberTypeFilter}
        ></Column>
        <Column
          field="accountName"
          header="Account Name"
          filter
          filterElement={accountNameFilter}
        ></Column>
        <Column field="challenge" header="Challenge"></Column>
        <Column
          field="charactersLen"
          header="Total Characters"
          body={charactersLenBodyTemplate}
        ></Column>
      </DataTable>
    </Main>
  );
}

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};

export default List;
