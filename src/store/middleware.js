import {API_URL_PUBLIC} from "../constants/endpoints";
import {getGistsFailure, getGistsRequest, getGistsSuccess} from "./gists/actions";

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch (API_URL_PUBLIC);


        if (!res.ok) {
            throw new Error(`Запрос неудачный со статусом ${res.status} `);
        }
        const result = await res.json();
        console.log(result);
        dispatch (getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message))
    }
}



