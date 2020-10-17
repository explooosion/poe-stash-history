import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';

const Main = styled.main`
  table {
    font-size: 14px;

    td:nth-child(1),
    th:nth-child(1),
    td:nth-child(4),
    th:nth-child(4) {
      width: 120px;
      text-align: center;
    }
  }
`;

function List(props) {
  const { data } = props;
  const [selectAction, setSelectAction] = useState('added');

  const statusFilter = (
    <Dropdown
      value={selectAction}
      options={['added', 'removed']}
      onChange={(e) => setSelectAction(e.value)}
      itemTemplate={(option) => <span className={`customer-badge status-${option}`}>{option}</span>}
      placeholder="Select a Status"
      className="p-column-filter"
      showClear
    />
  );

  const actionBodyTemplate = (rowData) => {
    const color = rowData.action === 'added' ? 'p-tag-info' : 'p-tag-danger';
    return <span className={`p-tag p-tag-rounded ${color}`}>{rowData.action}</span>;
  }

  return (
    <Main>
      <DataTable value={data} paginator rows={10} loading={data.length === 0} header="Stash List" className="p-datatable-sm">
        <Column field="league" header="league"></Column>
        <Column field="characterName" header="characterName"></Column>
        <Column field="item" header="item"></Column>
        <Column header="action" body={actionBodyTemplate} filter filterElement={statusFilter}></Column>
        <Column field="time" header="time"></Column>
      </DataTable>
    </Main>
  )
}

List.propTypes = {
  data: PropTypes.array,
}

List.defaultProps = {
  data: [],
}

export default List;
