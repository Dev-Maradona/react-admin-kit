export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'companies', headerName: 'Companies', width: 130 },
    { field: 'owner', headerName: 'Owner', width: 130 },
    {
        field: 'budgets',
        headerName: 'Budgets',
        width: 160,
    },
    {
        field: 'progress',
        headerName: 'Progress',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
];

export const rows = [
    { id: 1, owner: 'Snow', companies: 'Jon', budgets: '$1200', progress: 'Done' },
    { id: 2, owner: 'Lannister', companies: 'Cersei', budgets: '$300', progress: 'Done' },
    { id: 3, owner: 'Lannister', companies: 'Jaime', budgets: '$655', progress: 'Failed' },
    { id: 4, owner: 'Stark', companies: 'Arya', budgets: '$45000', progress: 'Done' },
    { id: 5, owner: 'Targaryen', companies: 'Daenerys', budgets: '$1000', progress: 'Pinding' },
    { id: 6, owner: 'Melisandre', companies: null, budgets: '$150', progress: 'Pinding' },
    { id: 7, owner: 'Clifford', companies: 'Ferrara', budgets: '$140', progress: 'Done' },
    { id: 8, owner: 'Frances', companies: 'Rossini', budgets: '$1654', progress: 'Done' },
    { id: 9, owner: 'Roxie', companies: 'Harvey', budgets: '$1500', progress: 'Failed' },
];