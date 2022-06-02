import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGists} from "../store/middleware";
import {CircularProgress} from "@mui/material";
import {selectGists, selectGistsError, selectGistsLoading} from "../store/gists/selectors";


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


    // //удалил и решил прописать заново
    // const x = gists[0]; // в этом случае gists уже пустой [] и соответственно x - undefined
    // for ( let i = 1; i <2; ++i) {
    //     for (let id of x[i].city) {
    //         console.log(id);
    //     }
    // }
    const renderGist = useCallback((gist) => (
        <li key={gist.id}>{gist.id || "No description"}</li>
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
    const cityArr = {gists};
    console.log(cityArr);
    // const cityName = cityArr.gists[0];

    // for (let i=1; i<2; ++i) {
    //     for ( let name in cityName.city) {
    //         console.log(name);
    //     }
    // }
    // console.log(typeof cityName, cityName["city"]);

    return (
        <div>
            {gists.map((index)=>(
                <div key={index}>{index.name}  1 </div>
            ))}
        </div>
        // )

    // <ul>{gists.gists[0]?.map(renderGist)} </ul> - этот вариант
    )
}


export default Gists;