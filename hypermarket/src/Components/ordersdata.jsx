
  
import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import SaveIcon from '@material-ui/icons/Save';
import home from './home';
import CustomizedMenus from './dropdown';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';


function createData(OrderID,OrderStatus,Restaurants,Customer,DeliveryMode,OrderTime,ScheduleTime,PaymentMethod,Address,Amount, Rating,OrderPreparationTime ) {
  return {OrderID,OrderStatus,Restaurants,Customer,DeliveryMode,OrderTime,ScheduleTime,PaymentMethod,Address,Amount, Rating,OrderPreparationTime };
}

const rows = [
  createData(1753576,'Pending','Dera_Restaurant','Taimur','on_A_way,_9am','_9_15am','CredirCard','DhaLahore',1000,'_4stars','thirtymins'),
  
];




function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'OrderID', numeric: false, disablePadding: true, label: 'OrderID' },
  { id: 'OrderStatus', numeric: true, disablePadding: false, label: 'Order Status' },
  { id: 'Restaurants', numeric: true, disablePadding: false, label: 'Restaurants' },
  { id: 'Customer', numeric: true, disablePadding: false, label: 'Customer' },
  { id: 'DeliveryMode', numeric: true, disablePadding: false, label: 'Delivery Mode' },
  { id: 'OrderTime', numeric: true, disablePadding: false, label: 'OrderTime' },
  { id: 'ScheduleTime', numeric: true, disablePadding: false, label: 'ScheduleTime' },
  { id: 'PaymentMethod  ', numeric: true, disablePadding: false, label: 'Payment Method  ' },
  { id: 'Address', numeric: true, disablePadding: false, label: 'Address' },
  { id: 'Amount', numeric: true, disablePadding: false, label: 'Amount' },
  { id: ' Rating', numeric: true, disablePadding: false, label: '	Rating' },
  { id: 'OrderPreparationTime', numeric: true, disablePadding: false, label: 'Order Preparation Time' },
  
];

function EnhancedTableHead(props) {
  const { classes,  order, orderBy,  onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
   
 
    <TableHead>
      <TableRow>
       
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
    margin:'20px'
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          <div  class="search-container fancy-form  m-0 col-12  col-md-5">
            <span  style={{position:"relative"}}>
         <CustomizedMenus/>
          <p style={{float:'right',flexDirection:'row'}}>    <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon/> }
      ></Button>
        <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      ></Button></p>
            </span>
          </div> 
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DraftsIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  
  

  

  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
        <div>
            <h3 style={{margin:'20px'}}>Orders</h3>
        
        </div>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar  />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
            
              
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  
                  

                  return (
                    <TableRow
                     hover 
                      
                    >
                    
                      
                      <TableCell align="right">{row.OrderID}</TableCell>
                      <TableCell align="right">{row.OrderStatus}</TableCell>
                      <TableCell align="right">{row.Restaurants}</TableCell>
                      <TableCell align="right">{row.Customer}</TableCell>
                      <TableCell align="right">{row.DeliveryMode}</TableCell>
                      <TableCell align="right">{row.OrderTime}</TableCell>
                      <TableCell align="right">{row.ScheduleTimes}</TableCell>
                      <TableCell align="right">{row.PaymentMethod }</TableCell>
                      <TableCell align="right">{row.Address}</TableCell>
                      <TableCell align="right">{row.Amount}</TableCell>
                      <TableCell align="right">{row.Rating}</TableCell>
                      <TableCell align="right">{row.OrderPreparationTime}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <h5>Showing 1-1 of 1 entries</h5>
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}



