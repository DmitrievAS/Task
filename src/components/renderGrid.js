import React, {useState} from 'react';
import {DataGrid, ruRU} from '@mui/x-data-grid';




const RenderGrid = (selectedCity) => {

    const [monitoringData, setMonitoringData] = useState(selectedCity.monitoring);
    const [selectedCityId, setSelectedCityId] = useState(selectedCity.selectedCity);


    const columns = [
        //{field: 'id', headerName: '№', width: 70},
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

    function isEmpty(obj) {
        // этот кусок работает некорректно, т.к. объект приходящий в файле имеет такую же длину. Сейчас работает
        // стандартное решение от DataGrid - массив пустой - пишет НЕТ данных.
        return Object.keys(obj).length === 1;
    }

    let rows = [];
    let prepareArray = function (selectedCityData) {
        if (isEmpty(selectedCityData)) {
            return rows = [{
                //id: 1,
                "product": "Нет данных",
                "product_id": 1,
                "price_1": 0,
                "price_2": 0,
                "price_3": 0,
                "price_4": 0,
                "price_5": 0,
                "price_6": 0,
                "price_7": 0,
                "price_8": 0
            }];
        } else {
            const arrWithCat = selectedCityData.data.map((item) => ({
                ...item,
                products: item.products.map(product => ({
                    ...product,
                    category: item.category,
                    category_id: item.category_id
                }))
            }))
            console.log(arrWithCat);

            const arrCat = arrWithCat.map((item) => item.products);
            rows = [].concat.apply([], arrCat);
            console.log("Массив с добавленной категорией", rows);
            return rows;
        }
    }
    prepareArray(selectedCityData);

    return (

        <DataGrid
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
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
}

export default RenderGrid;