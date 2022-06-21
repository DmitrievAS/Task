import React, {useState} from 'react';
import '../App.css';
import 'react-tabs/style/react-tabs.css';
import {useSelector} from "react-redux";
import {Box, Typography, Tabs, Tab} from "@mui/material";
import RenderGrid from "./renderGrid";


// {
//     field: 'age',
//         headerName: 'Age',
//     type: 'number',
//     width: 90,
// },

const RenderTab = () => {

    // const columns = [
    //     {field: 'id', headerName: '№', width: 70, defaultVisible: false},
    //     {field: 'category', headerName: 'Категория', width: 250},
    //     {field: 'product', headerName: 'Товар', minWidth: 400},
    //     {field: 'price_1', headerName: 'Цена 1', width: 70, type: "number"},
    //     {field: 'price_2', headerName: 'Цена 2', width: 70, type: "number"},
    //     {field: 'price_3', headerName: 'Цена 3', width: 70, type: "number"},
    //     {field: 'price_4', headerName: 'Цена 4', width: 70, type: "number"},
    //     {field: 'price_5', headerName: 'Цена 5', width: 70, type: "number"},
    //     {field: 'price_6', headerName: 'Цена 6', width: 70, type: "number"},
    //     {field: 'price_7', headerName: 'Цена 7', width: 70, type: "number"},
    //     {field: 'price_8', headerName: 'Цена 8', width: 70, type: "number"},
    //     // {
    //     //     field: 'age',
    //     //     headerName: 'Age',
    //     //     type: 'number',
    //     //     width: 90,
    //     // },
    //     // {
    //     //     field: 'fullName',
    //     //     headerName: 'Full name',
    //     //     description: 'This column has a value getter and is not sortable.',
    //     //     sortable: false,
    //     //     width: 160,
    //     //     valueGetter: (params) =>
    //     //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //     // },
    // ];
    //
    // const rows = [
    //     {
    //         id: 1,
    //         "product": "Уголок перфорированный оцинк.ПУ ( 25*25 ) 3 м",
    //         "product_id": 1,
    //         "category": "Профиля для гипсокартона",
    //         "price_1": 52.50,
    //         "price_2": 52.50,
    //         "price_3": 68.31,
    //         "price_4": 69,
    //         "price_5": 0,
    //         "price_6": 0,
    //         "price_7": 0,
    //         "price_8": 0
    //     },
    //     {
    //         id: 2,
    //         "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
    //         "product_id": 2,
    //         "category": "Профиля для гипсокартона",
    //         "price_1": 52.50,
    //         "price_2": 52.50,
    //         "price_3": 68.31,
    //         "price_4": 69,
    //         "price_5": 0,
    //         "price_6": 0,
    //         "price_7": 0,
    //         "price_8": 0
    //     },
    //     {
    //         id: 3,
    //         "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
    //         "product_id": 3,
    //         "category": "Профиля для гипсокартона",
    //         "category_id": 1,
    //         "price_1": 52.50,
    //         "price_2": 52.50,
    //         "price_3": 68.31,
    //         "price_4": 69,
    //         "price_5": 0,
    //         "price_6": 0,
    //         "price_7": 0,
    //         "price_8": 0
    //     },
    //     {
    //         id: 4,
    //         "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
    //         "product_id": 3,
    //         "category": "Профиля для гипсокартона",
    //         "category_id": 1,
    //         "price_1": 52.50,
    //         "price_2": 52.50,
    //         "price_3": 68.31,
    //         "price_4": 69,
    //         "price_5": 0,
    //         "price_6": 0,
    //         "price_7": 0,
    //         "price_8": 0
    //     },
    //     {
    //         id: 5,
    //         "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
    //         "product_id": 4,
    //         "category": "Труба профильная",
    //         "category_id": 2,
    //         "price_1": 52.50,
    //         "price_2": 52.50,
    //         "price_3": 68.31,
    //         "price_4": 69,
    //         "price_5": 0,
    //         "price_6": 0,
    //         "price_7": 0,
    //         "price_8": 0
    //     },
    //     {
    //         id: 6,
    //         "product": "Труба профильная стальная 40х20х2,0мм хлыст 6м",
    //         "product_id": 1,
    //         "category": "Профиля для гипсокартона",
    //         "category_id": 1,
    //         "price_1": 52.50,
    //         "price_2": 52.50,
    //         "price_3": 68.31,
    //         "price_4": 69,
    //         "price_5": 0,
    //         "price_6": 0,
    //         "price_7": 0,
    //         "price_8": 0
    //     },
    // ]

    const initialCity = [{id: 1, name: "Салават"}, {id: 2, name: "Ишимбай"}, {id: 3, name: "Стерлитамак"},
        {id: 4, name: "Уфа"}]
    const initialMonitoring = [
        {
            "city": 1,
            "data": [
                {
                    "category": "Профиля для гипсокартона",
                    "category_id": 1,
                    "products": [
                        {
                            "product": "Уголок перфорированный оцинк.ПУ ( 25*25 ) 3 м",
                            "product_id": 1,
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
                            "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
                            "product_id": 2,
                            "price_1": 52.50,
                            "price_2": 52.50,
                            "price_3": 68.31,
                            "price_4": 69,
                            "price_5": 0,
                            "price_6": 0,
                            "price_7": 0,
                            "price_8": 0
                        }
                    ]
                },
                {
                    "category": "Труба профильная",
                    "category_id": 2,
                    "products": [
                        {
                            "product": "Труба профильная стальная 40х20х2,0мм хлыст 6м",
                            "product_id": 1,
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
                            "product": "Труба профильная стальная 20х20х1.5мм хлыст 6м",
                            "product_id": 2,
                            "price_1": 52.50,
                            "price_2": 52.50,
                            "price_3": 68.31,
                            "price_4": 69,
                            "price_5": 0,
                            "price_6": 0,
                            "price_7": 0,
                            "price_8": 0
                        }
                    ]
                }
            ]
        },
        {
            "city": 2,
            "data": [
                {
                    "category": "Профиля для гипсокартона",
                    "category_id": 1,
                    "products": [
                        {
                            "product": "Уголок перфорированный оцинк.ПУ ( 25*25 ) 3 м",
                            "product_id": 1,
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
                            "product": "Профиль направляющий ПН ( 28*27 ) 3м 0,45 мм (20)",
                            "product_id": 2,
                            "price_1": 52.50,
                            "price_2": 52.50,
                            "price_3": 68.31,
                            "price_4": 69,
                            "price_5": 0,
                            "price_6": 0,
                            "price_7": 0,
                            "price_8": 0
                        }
                    ]
                },
                {
                    "category": "Труба профильная",
                    "category_id": 2,
                    "products": [
                        {
                            "product": "Труба профильная стальная 40х20х2,0мм хлыст 6м",
                            "product_id": 1,
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
                            "product": "Труба профильная стальная 20х20х1.5мм хлыст 6м",
                            "product_id": 2,
                            "price_1": 52.50,
                            "price_2": 52.50,
                            "price_3": 68.31,
                            "price_4": 69,
                            "price_5": 0,
                            "price_6": 0,
                            "price_7": 0,
                            "price_8": 0
                        }
                    ]
                }
            ]
        }
    ]
    const [value, setValue] = useState(0);

    // const city = useSelector(({gists}) => gists.gists);

    function TabPanel(props) {
        const {children, value, index, ...other} = props;


        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{p: 2, fontWeight: 'medium'}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabPanelRender = (cityName) => {
        console.log("tabPanelRender:", cityName)
        return <div>{cityName}</div>
        // <div key={`div${data.city}`}>{data.data.category}</div>
    }

    return (
        <div className={"container"}>
            <h3 className={"monitoring-title-center"}>Мониторинг цен по городам</h3>
            <div className={"monitoring-data"}>Дата: </div>

            <Box sx={{borderBottom: 2, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="monitoring">
                    {initialCity.map((city) => <Tab label={`${city.name}`} value={city.id}/>)}
                </Tabs>
            </Box>

            {initialCity.map((data) => <TabPanel
                value={value}
                index={data.id}
            >
                <div style={{height: 800, width: '100%'}}>
                    <RenderGrid dataId={data.id} monitoring={initialMonitoring}/>
                </div>
            </TabPanel>)}


        </div>
    );
}

export default RenderTab;