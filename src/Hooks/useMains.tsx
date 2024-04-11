"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useMains = () => {

    const [mainsList, setMainsList] = useState([]);

    useEffect(() => {
        getMains();
    },[])

  const getMains = () => {
    GlobalApi.getMains().then(resp => {
        setMainsList(resp.data.data)
    });
  }

  return mainsList;

}

export default useMains;
