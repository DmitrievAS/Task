import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const RenderGrid = (dataId) => {
    const columns = [
        {field: 'id', headerName: '№', width: 70, defaultVisible: false},
        {field: 'category', headerName: 'Категория', width: 250},
        {field: 'product', headerName: 'Товар', minWidth: 400},
        {field: 'price_1', headerName: 'Цена 1', width: 70, type: "number"},
        {field: 'price_2', headerName: 'Цена 2', width: 70, type: "number"},
        {field: 'price_3', headerName: 'Цена 3', width: 70, type: "number"},
        {field: 'price_4', headerName: 'Цена 4', width: 70, type: "number"},
        {field: 'price_5', headerName: 'Цена 5', width: 70, type: "number"},
        {field: 'price_6', headerName: 'Цена 6', width: 70, type: "number"},
        {field: 'price_7', headerName: 'Цена 7', width: 70, type: "number"},
        {field: 'price_8', headerName: 'Цена 8', width: 70, type: "number"}
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
        />

    );
};

export default RenderGrid;