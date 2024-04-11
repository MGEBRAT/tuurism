"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useAbouts = () => {

    const [aboutsList, setAboutsList] = useState([]);

    useEffect(() => {
        getAbouts();
    },[])

  const getAbouts = () => {
    GlobalApi.getAbouts().then(resp => {
        setAboutsList(resp.data.data)
    });
  }

  return aboutsList;

}

export default useAbouts;
