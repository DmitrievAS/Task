import React, {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';

const RenderGrid = (selectedCity) => {


    const [monitoringData, setMonitoringData] = useState(selectedCity.monitoring);
    const [selectedCityId, setSelectedCityId] = useState(selectedCity.selectedCity);

    const columns = [
        {field: 'id', headerName: '№', width: 70},
        {field: 'category', headerName: 'Категория', width: 250},
        {field: 'product', headerName: 'Товар', minWidth: 400},
        {field: 'price_1', headerName: 'Стройландия_Иш', minWidth: 140, type: "number"},
        {field: 'price_2', headerName: 'Хозмастер', minWidth: 140, type: "number"},
        {field: 'price_3', headerName: 'Проремонт', minWidth: 140, type: "number"},
        {field: 'price_4', headerName: 'ЮУКС', minWidth: 140, type: "number"},
        {field: 'price_5', headerName: 'Самоделкин', minWidth: 140, type: "number"},
        {field: 'price_6', headerName: 'Строймаркет', minWidth: 140, type: "number"},
        {field: 'price_7', headerName: 'БСК Термотрейд', minWidth: 140, type: "number"},
        {field: 'price_8', headerName: 'Цена 8', minWidth: 140, type: "number"}
    ]

    const selectedCityData = monitoringData.find(item => item.city === selectedCityId);
    console.log(selectedCityData);

    const arrWithCat = selectedCityData.data.map((item) => ({...item, products: item.products.map(product => ({...product, category: item.category, category_id: item.category_id}))}))
    console.log(arrWithCat);

    const arrCat= arrWithCat.map((item) => item.products);
     const rows = [].concat.apply([], arrCat);
     console.log("Массив с добавленной категорией", rows);

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[25, 50, 100]}
            //checkboxSelection - даёт возможность выделения строк
            autoHeight
            headerHeight={75}
            getRowId={(row) => row.id}
            pagination
            pageSize={25}
        />
    );
};

export default RenderGrid;