import React, {createContext, useState} from 'react'

export const useViewMoreContext = createContext();

function useViewMoreProvider (props) {
    const [viewMore, setViewMore] = useState();

    return (
        <useViewMoreProvider.Provider value={[viewMore, setViewMore]}>
            {props.children}
        </useViewMoreProvider.Provider>
    )
}


export default useViewMoreProvider;
