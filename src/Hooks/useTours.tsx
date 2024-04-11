"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useTours = () => {

    const [toursList, setToursList] = useState([]);

    useEffect(() => {
        getTours();
    },[])

  const getTours = () => {
    GlobalApi.getTours().then(resp => {
        setToursList(resp.data.data)
    });
  }

  return toursList;

}

export default useTours;
