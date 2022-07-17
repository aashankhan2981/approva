import * as React from 'react';

import MUIPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationType={
    dispatch:any
    start:number
    count:number
    pageSize:number
}
export const Pagination:React.FC<PaginationType> = ({ dispatch, start, count, pageSize })=> {

    let pageCount = Math.floor(count/pageSize) || 0
    if (count % pageSize > 0) pageCount++;
    const [page, setPage] = React.useState(1);
    React.useEffect(() => {
        if (start === 0)
            setPage(1);
    }, [start])
    const handleChange = (event, value) => {
        dispatch({ type: "PAGINATE", payload: { start: (value - 1) * pageSize } })
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <MUIPagination count={pageCount} page={page} onChange={handleChange} />
        </Stack>
    );
}