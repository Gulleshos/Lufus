import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const useHome = () => {
    
    const {data, isLoading} = useFetch('homepageinfo');
    
    
    return (

        <>
        </>
    )
}