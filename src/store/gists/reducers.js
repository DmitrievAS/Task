import {GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS} from "./actions";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
}

const initialState = {
    gists: [{
        "city": [
            {
                "id": 1,
                "name": "Ишимбай"
            },
            {
                "id": 2,
                "name": "Салават"
            }
        ],
        "monitoring": [
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
                        "category_id": 1,
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
    }],
    request: STATUSES.IDLE,
    error: null,
    loading: false
}

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                gists: [],
                error: null,
                loading: true
            }
        case GET_GISTS_SUCCESS:
            console.log("GET_GISTS_SUCCESS", action);
            return {
                ...state,
                gists: action.payload,
                request: STATUSES.SUCCESS,
                error: null,
                loading: false
            }
        case GET_GISTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                gists: [],
                request: STATUSES.FAILURE,
                loading: false
            }

        default:
            return state;
    }
}

export default gistsReducer;
