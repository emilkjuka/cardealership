import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useCarSearch(query, pageNumber) {
    useEffect(()=>{
        axios({
            method: 'GET',
            url
        })
    }
    ,[query, pageNumber])

    return null
}
