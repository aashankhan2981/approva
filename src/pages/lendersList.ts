import React, { useEffect, useState } from 'react'

const lendersList = () => {

    const [ lendersList, setLendersList ] = useState([]);

    const fetchLendersList = async() => {
        const response = await fetch(
            "http://13.127.207.101:8010/api/v1/admin/getBank", {
                method: 'GET'
            }
        )
        .then((res) => res.json())
        .then((res) => {
            setLendersList(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
        fetchLendersList();
    }, [])

  return 'hi';
}

export default lendersList
