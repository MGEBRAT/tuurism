"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useFooters = () => {

    const [footerList, setFootersList] = useState([]);

    useEffect(() => {
        getFooters();
    },[])

  const getFooters = () => {
    GlobalApi.getFooters().then(resp => {
        setFootersList(resp.data.data)
    });
  }

  return footerList;

}

export default useFooters;
