import React, { useEffect, useState } from 'react'

export default function () {
    const [provinces, setProvinces] = useState([]);
    const [kabupaten, setKabupaten] = useState(null);
    const [kecamatan, setKecamatan] = useState(null);
    const [kelurahan, setKelurahan] = useState(null);
    return (
        <form className='w-3/4 md:w-1/2 mx-auto mt-32'>
            <Provincies setKabupaten={setKabupaten} provinces={provinces} setProvinces={setProvinces} />
            <Regencies setKecamatan={setKecamatan} kabupaten={kabupaten} setKabupaten={setKabupaten} />
            <Districts setKelurahan={setKelurahan} kecamatan={kecamatan} />
            <Villages kelurahan={kelurahan} />
        </form>
    )
}
function Provincies({ setKabupaten, provinces, setProvinces }) {
    useEffect(() => {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
            .then(response => response.json())
            .then(provinces => setProvinces(provinces));
    }, [])
    function handleChangeProvinsi(id) {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`)
            .then(response => response.json())
            .then(json => setKabupaten(json))
            .catch(error => console.log(error))
    }
    return (
        <>
            <label htmlFor="provinsi-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provicies</label>
            <select name="pets" id="provinsi-select" onChange={(e) => handleChangeProvinsi(e.target.value)} className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                    provinces.map((p, key) =>
                        <option key={key} value={p.id}>{p.name}</option>
                    )
                }
            </select>
        </>
    )
}
function Regencies({ setKecamatan, kabupaten }) {
    function handleChangeKabupaten(id) {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`)
            .then(response => response.json())
            .then(json => setKecamatan(json))
            .catch(error => console.log(error))
    }
    return (
        <>
            <label htmlFor="regencies-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Regencies</label>
            {
                kabupaten === null ?
                    <>
                        <select id="regencies-select" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </select>
                    </>
                    :
                    <>
                        <select name="pets" id="regencies-select" onChange={(e) => handleChangeKabupaten(e.target.value)} className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                kabupaten.map((p, key) =>
                                    <option key={key} value={p.id}>{p.name}</option>
                                )
                            }
                        </select>
                    </>
            }
        </>
    )
}
function Districts({ setKelurahan, kecamatan }) {
    function handleChangeKecamatan(id) {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`)
            .then(response => response.json())
            .then(json => setKelurahan(json))
            .catch(error => console.log(error))
    }
    return (
        <>
            <label htmlFor="districts-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Districts</label>
            {
                kecamatan === null ?
                    <>

                        <select name="pets" id="districts-select" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </select>
                    </>
                    :
                    <>
                        <select name="pets" id="districts-select" onChange={(e) => handleChangeKecamatan(e.target.value)} className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                kecamatan.map((p, key) =>
                                    <option key={key} value={p.id}>{p.name}</option>
                                )
                            }
                        </select>
                    </>
            }
        </>
    )
}
function Villages({ kelurahan }) {
    function handleChangeKelurahan(id) {
        alert(`anda memilih ${id}`)
    }
    return (
        <>
            <label htmlFor="villages-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Villages</label>
            {
                kelurahan === null ?
                    <>
                        <select name="pets" id="villages-select" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </select>
                    </>
                    :
                    <>
                        <select name="pets" id="villages-select" onChange={(e) => handleChangeKelurahan(e.target.value)} className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                kelurahan.map((p, key) =>
                                    <option key={key} value={p.name}>{p.name}</option>
                                )
                            }
                        </select>
                    </>
            }
        </>
    )
}