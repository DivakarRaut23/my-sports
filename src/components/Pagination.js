import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Pagination} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    props.handlePagination(value)
    
  };

  return (
    <div className={classes.root}>
      <Pagination count={props.count} page={page} onChange={handleChange} />
    </div>
  );
}
