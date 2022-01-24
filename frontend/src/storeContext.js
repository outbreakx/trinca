import React, {createContext, useState, useContext, useEffect} from 'react';

export const StoreContext = createContext();

const StoreProvider = (props) => {
	useEffect( () => {
        function onSave()
        {
			
		}
		
		window.addEventListener('beforeunload', onSave);

		return () => window.removeEventListener('beforeunload', onSave);
	}, []);
	
	const storeData = {
		
	};

	return <StoreContext.Provider value={storeData} {...props}/>
}


const useStoreContext = () => {
	return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};