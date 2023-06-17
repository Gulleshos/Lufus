

import { useState, useCallback } from 'react';
import { useAppContext } from '../context/appContext';


export const useFilters = () => {

    const {  } = useAppContext();



    const setPage = useCallback((page) => {
        setFilterFields({
            ...filter,
            page
        })
    }, [filter])

    const setFilter = useCallback((filterFields) => {
        setFilterFields({
            ...filter,
            ...filterFields,
            year: +filterFields.year,
            primaryReleaseYear: +filterFields.primaryReleaseYear
        })
    }, [filter])

    return {
        filter,
        setPage,
        setFilter
    }
}






