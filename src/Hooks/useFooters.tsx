"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useFooters = () => {

    const [footerList, setCountriesList] = useState([]);

    useEffect(() => {
        getCountries();
    },[])

  const getCountries = () => {
    GlobalApi.getCountries().then(resp => {
        setCountriesList(resp.data.data)
    });
  }

  return countriesList;

}

export default useCountries;
