import React from 'react'
import PropTypes from 'prop-types'
import {
  Table, TableBody, TableCell, TableFooter, TableHeader, TableRow,
  Text,
} from 'grommet';

const styles = {
  text:{
    fontSize: '12px',
    lineHeight: '15px',
  }
};

const TextWraper = ({children}) =>
  <Text style={styles.text}>{children}</Text>

const GameTable = ({data, columns, hasHeader}) => {
  return (
    <Table>
      {
        hasHeader &&
          (
            <TableHeader>
      <TableRow>
        {columns.map(c => (
          <TableCell key={c.property} scope='col' border='bottom' size="medium" style={{padding:'2px'}}>
            <TextWraper>{c.label}</TextWraper>
          </TableCell>
        ))}
      </TableRow>
    </TableHeader>
          )
      }
    <TableBody>
      {data.map(datum => (
        <TableRow key={datum.id}>
          {columns.map(c => (
            <TableCell key={c.property} scope={c.dataScope} align={c.align} style={{padding:'2px'}}>
              <TextWraper>
                {c.format ? c.format(datum) : datum[c.property]}
              </TextWraper>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
};

GameTable.defaultProps = {
  hasHeader: true
};

GameTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  hasHeader: PropTypes.bool,
};

export default GameTable;