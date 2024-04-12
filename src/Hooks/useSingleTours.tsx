"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSingleTours = (id) => {

    const [detailTours, setDetailTours] = useState();

    useEffect(() => {
        getSingleTours();
    },[id])

  const getSingleTours = () => {
    GlobalApi.getSingleTours(id).then(resp => {
        setDetailTours(resp.data.data[0]);
    });
  }

  return detailTours;
}

export default useSingleTours