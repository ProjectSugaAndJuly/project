import "./ManagerChoosTop.css"
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'שם המתכון', width: 130 },
    { field: 'lastName', headerName: 'שם המשתמש', width: 130 },
    {
        field: 'like',
        headerName: 'num of like',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''}${'-'} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'אילנה אסרף', firstName: 'פופקורן', like: 35 },
    { id: 2, lastName: 'חיים בן לולו', firstName: 'מוס', like: 42 },
    { id: 3, lastName: 'אבישי אשל', firstName: 'רולדה', like: 45 },
    { id: 4, lastName: 'חיים ישראל', firstName: 'עוגת שמרים', like: 16 },
    { id: 5, lastName: 'יעל השפית', firstName: 'פתיתים', like: null },
    { id: 6, lastName: 'שוגבר דעי', firstName:'סלט ירקות' ,like: 150 },
    { id: 7, lastName: 'יפה בן פורת', firstName: 'פירה', like: 44 },
    { id: 8, lastName: 'דודו שוקרון', firstName: 'פריקסה', like: 36 },
    { id: 9, lastName: 'שלום יוסף', firstName: 'טוסט איטלקי', like: 65 },

    { id: 10, lastName: 'אילנה אסרף', firstName: 'פופקורן', like: 35 },
    { id: 11, lastName: 'חיים בן לולו', firstName: 'מוס', like: 42 },
    { id: 12, lastName: 'אבישי אשל', firstName: 'רולדה', like: 45 },
    { id: 13, lastName: 'חיים ישראל', firstName: 'עוגת שמרים', like: 16 },
    { id: 14, lastName: 'יעל השפית', firstName: 'פתיתים', like: null },
    { id: 15, lastName: 'שוגבר דעי', firstName:'סלט ירקות' ,like: 150 },
    { id: 16, lastName: 'יפה בן פורת', firstName: 'פירה', like: 44 },
    { id: 17, lastName: 'דודו שוקרון', firstName: 'פריקסה', like: 36 },
    { id: 18, lastName: 'שלום יוסף', firstName: 'טוסט איטלקי', like: 65 },
];

export default function ManagerChoosTop() {
    return (
        <>
            <h1>Manager Choos Top</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="standard-basic" label="חיפוש" variant="standard" />
            </Box>
            <div style={{ height: 800, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={14}
                    rowsPerPageOptions={[14]}
                    checkboxSelection
                />
            </div>
        </>
    )

}