import React, { useState } from 'react';
export default function () {
    // const [sortir, setSortir] = useState([]);
    const datas = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "DragonFruits" },
        { category: "Fruits", price: "$2", stocked: false, name: "PassionFruits" },
        { category: "Vegetable", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetable", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetable", price: "$1", stocked: true, name: "Peas" },
    ]

    return (
        <>
            <h1>Hello World</h1>
            <ContainerComponents products={datas} />
        </>
    )
}

function ContainerComponents({ products }) {
    const [inputan, setInputan] = useState('');
    const [stocked, setStocked] = useState(false);
    return (
        <>
            <Inputan setStocked={setStocked} stocked={stocked} setInputan={setInputan} />
            <TabelBarang products={products} stocked={stocked} inputan={inputan} />
        </>
    )
}

// tabel barang
function TabelBarang({ products, inputan, stocked }) {

    return (
        <table className="border-2 border-lime-400">
            <thead>
                <tr>
                    <th className="border-2 border-lime-400">Name</th>
                    <th className="border-2 border-lime-400">Prices</th>
                </tr>
            </thead>
            <TabelBody products={products} stocked={stocked} inputan={inputan} />
        </table>
    )
}

function TabelBody({ products, stocked, inputan }) {

    let lastCategory = null;
    let rows = [];


    products.map((product) => {
        if (!product.name.toLowerCase().includes(inputan.toLowerCase())) {
            return
        }

        if (!product.stocked && stocked) {
            return
        }

        if (product.category !== lastCategory) {
            rows.push(<HeaderCategory products={product} key={product.category} />)
        }

        rows.push(<Rows products={product} key={product.name} />)

        lastCategory = product.category;
    })

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

// header category
function HeaderCategory({ products }) {
    return (
        <tr>
            <th colSpan={2} className="border-2 border-lime-400 px-8">{products.category}</th>
        </tr>
    )
}

// Rows
function Rows({ products }) {
    return (
        <>

            {
                products.stocked === false ?
                    (
                        <tr>
                            <td className="text-red-600 border-2  border-lime-400 px-8">{products.name}</td>
                            <td className="text-red-600 border-2 border-lime-400 px-8">{products.price}</td>
                        </tr>
                    ) :
                    (<tr>
                        <td className="border-2 border-lime-400 px-8">{products.name}</td>
                        <td className="border-2 border-lime-400 px-8">{products.price}</td>
                    </tr>)
            }
        </>
    )
}

// Sortiran barang
function Inputan({ setInputan, setStocked, stocked }) {

    return (
        <>
            <form className="w-64 flex flex-col">
                <input type="text" id="inputan" name="inputan" onChange={(e) => setInputan(e.target.value)} />
                <input type="checkbox" id="checkBox" name="checkBox" onChange={() => setStocked(!stocked)} />
            </form>
        </>
    )
}