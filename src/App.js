import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import TableContainer from './TableContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { SelectColumnFilter } from './filters';

const ALERTMANAGER_URL = 'http://localhost:9093'
const DEFAULT_QUERY = '/api/v1/silences';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(ALERTMANAGER_URL + DEFAULT_QUERY);
      const body = await response.json();
      const data = body.data;
      console.log(data);
      setData(data);
    };
    doFetch();
  }, []);

  const renderRowSubComponent = (row) => {
    const {
      name: { first, last },
      location: { city, street, postcode },
      picture,
      cell,
    } = row.original;
    return (
      <Card style={{ width: '18rem', margin: '0 auto' }}>
        <CardImg top src={picture.large} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            <strong>{`${first} ${last}`} </strong>
          </CardTitle>
          <CardText>
            <strong>Phone</strong>: {cell} <br />
            <strong>Address:</strong>{' '}
            {`${street.name} ${street.number} - ${postcode} - ${city}`}
          </CardText>
        </CardBody>
      </Card>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: 'State',
        accessor: 'status.state',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Author',
        accessor: 'createdBy',
      },
      {
        Header: 'Instance',
        accessor: 'matchers[0].value',
      },
      {
        Header: 'Comment',
        accessor: 'comment',
      },
      {
        Header: 'Ends',
        accessor: 'endsAt',
      },
    ],
    []
  );

  return (
    <Container style={{ marginTop: 10, marginLeft: 30 }}>
      <TableContainer
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Container>
  );
};

export default App;
