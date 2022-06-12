import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGists} from "../store/middleware";
import {CircularProgress} from "@mui/material";
import {selectGists, selectGistsError, selectGistsLoading} from "../store/gists/selectors";
import RenderTab from "../components/renderTab";

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    }


    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback((gists) => (
        <li key={gists.city.id}>{gists.city.name }</li>
    ), []);

    if (loading) {
        return <CircularProgress/>;
    }

    if (error) {
        return (
            <>
                <h3 className="userProfile">Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    }


    // if (gists.length > 0) {
    //     const cityArr = {gists};
    //     const cityName = cityArr.gists[0];
    //
    //     function cons(cityName) {
    //         cityName.forEach((value, key) => (console.log("key:", {key}, "value:", {value})))
    //     }
    //
    //     return (
    //
    //         // <>
    //         //  <renderTab base={cityName}/>
    //         // </>
    //     )
    //
    // }

    // const cityArr = {gists};
    // // console.log(typeof cityArr, "cityArr:", cityArr);
    // const cityName = cityArr.gists[0];
    //
    // // for (let i=1; i<2; ++i) {
    // //     for ( let name in cityName.city) {
    // //         console.log(name);
    // //     }
    // // }
    // console.log(typeof cityName, "cityName:", cityName);
    //Object.entries(obj).forEach(
    //     ([key, value]) => console.log(key, value)
    // );
    // const cityName2 = {
    //     city: [{id: 1, name: "Салават"}, {id: 2, name: "Ишимбай"}]
    // }

    // function cons(cityName) {
    //     cityName.forEach((value, key) => (console.log("key:", {key}, "value:", {value})))
    // }
    //
    // setTimeout(cons(cityName), 2000);

    // const cityRender = (obj) {
    //     obj.forEach((value, key) => (<div key={key}> {value} </div>)
    //     )}

    return (
        // gists.length > 0 ?
        //         <div>
        //             <ul>{gists?.map(renderGist)} </ul>
        //         </div>
        //         :
        //         <div>Данные отсутствуют</div>

        <RenderTab/>
    );
}


export default Gists;