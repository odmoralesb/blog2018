import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export const TitleContainer = styled.div`

`;

export const BodyContainer = styled.div`

`;

export const StyledTextField = styled(TextField)`
  &&
    {
      input { font-size: 2rem }
    }
`;

export const SaveButton = styled(Button)`

`;

// ----------

export const TagTable = styled(Table)`

`;

export const TagTableBody = styled(TableBody)`

`;


export const TagTableCell = styled(TableCell)`

`;


export const TagTableHead = styled(TableHead)`
    &&
    {
      th { color: blue; font-weight: bold; font-size: 15px;}
    }

`;


export const TagTableRow = styled(TableRow)`

`;


export const TagPaper = styled(Paper)`

`;

