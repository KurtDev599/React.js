import React from "react";
import { Table } from 'reactstrap'

const R054_ReactstrapTable = () => {
  return (
    <Table>
      <thead>
      <tr>
        <th>number</th>
        <th>Book Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope={'row'}>1</th>
        <td>React 100</td>
        <td>₩10000</td>
      </tr>
      <tr>
        <th scope={'row'}>1</th>
        <td>React 200</td>
        <td>₩20000</td>
      </tr>
      </tbody>
    </Table>
  )
}

export default R054_ReactstrapTable
