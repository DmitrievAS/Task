import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const RenderGrid = (dataId, monitoring) => {
    const columns = [
        {field: 'id', headerName: '№', width: 70, defaultVisible: false},
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

    const rows = [
        {
            id: 1,
            "product": "Уголок перфорированный оцинк.ПУ ( 25*25 ) 3 м",
            "product_id": 1,
            "category": "Профиля для гипсокартона",
            "price_1": 52.50,
            "price_2": 52.50,
            "price_3": 68.31,
            "price_4": 69,
            "price_5": 0,
            "price_6": 0,
            "price_7": 0,
            "price_8": 0
        },
        {
            id: 2,
            "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
            "product_id": 2,
            "category": "Профиля для гипсокартона",
            "price_1": 52.50,
            "price_2": 52.50,
            "price_3": 68.31,
            "price_4": 69,
            "price_5": 0,
            "price_6": 0,
            "price_7": 0,
            "price_8": 0
        },
        {
            id: 3,
            "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
            "product_id": 3,
            "category": "Профиля для гипсокартона",
            "category_id": 1,
            "price_1": 52.50,
            "price_2": 52.50,
            "price_3": 68.31,
            "price_4": 69,
            "price_5": 0,
            "price_6": 0,
            "price_7": 0,
            "price_8": 0
        },
        {
            id: 4,
            "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
            "product_id": 3,
            "category": "Профиля для гипсокартона",
            "category_id": 1,
            "price_1": 52.50,
            "price_2": 52.50,
            "price_3": 68.31,
            "price_4": 69,
            "price_5": 0,
            "price_6": 0,
            "price_7": 0,
            "price_8": 0
        },
        {
            id: 5,
            "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
            "product_id": 4,
            "category": "Труба профильная",
            "category_id": 2,
            "price_1": 52.50,
            "price_2": 52.50,
            "price_3": 68.31,
            "price_4": 69,
            "price_5": 0,
            "price_6": 0,
            "price_7": 0,
            "price_8": 0
        },
        {
            id: 6,
            "product": "Труба профильная стальная 40х20х2,0мм хлыст 6м",
            "product_id": 1,
            "category": "Профиля для гипсокартона",
            "category_id": 1,
            "price_1": 52.50,
            "price_2": 52.50,
            "price_3": 68.31,
            "price_4": 69,
            "price_5": 0,
            "price_6": 0,
            "price_7": 0,
            "price_8": 0
        },
    ]



    console.log(dataId);
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[10, 20, 50]}
            checkboxSelection
            autoHeight
            headerHeight={75}
        />

    );
};

export default RenderGrid;