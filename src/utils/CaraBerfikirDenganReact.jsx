import React, { useEffect, useRef, useState } from 'react';
export default function () {
    const datas = [
        { category: "Fruits", price: 5000, stocked: true, name: "Apple" },
        { category: "Fruits", price: 5000, stocked: true, name: "DragonFruits" },
        { category: "Fruits", price: 10000, stocked: false, name: "PassionFruits" },
        { category: "Vegetable", price: 10000, stocked: true, name: "Spinach" },
        { category: "Vegetable", price: 20000, stocked: false, name: "Pumpkin" },
        { category: "Vegetable", price: 5000, stocked: true, name: "Peas" },
    ]

    return (
        <div>
            <ContainerComponents products={datas} />
        </div>
    )
}

function CheckOut({ count, orders }) {
    // const [jml, setJml] = useState(0);
    // useEffect(() => {
    //     setJml(0)
    // }, [count])

    console.log(count)
    console.log(orders)
    return (
        <div className='mt-4'>
            {/* {
                orders.map(order => {
                    <h2 className=''>{`Hasil ${order.name} | ${order.price}`}</h2>

                })
            } */}
        </div>
    )
}

function ContainerComponents({ products }) {
    const [inputan, setInputan] = useState('');
    const [stocked, setStocked] = useState(false);
    const [count, setCount] = useState(0)
    let orders = useRef(0)
    console.log(orders);

    return (
        <>
            <Inputan setStocked={setStocked} stocked={stocked} setInputan={setInputan} />
            <TabelBarang products={products} orders={orders} setCount={setCount} count={count} stocked={stocked} inputan={inputan} />
            <CheckOut products={products} orders={orders} count={count} />
        </>
    )
}

// tabel barang
function TabelBarang({ products, orders, setCount, count, inputan, stocked }) {

    return (
        <table className="border-2 border-lime-400">
            <thead>
                <tr>
                    <th className="border-2 border-lime-400">Name</th>
                    <th className="border-2 border-lime-400">Prices</th>
                    <th colSpan="2" className="border-2 border-lime-400">Actions</th>
                </tr>
            </thead>
            <TabelBody products={products} orders={orders} setCount={setCount} count={count} stocked={stocked} inputan={inputan} />
        </table>
    )
}

function TabelBody({ products, orders, stocked, setCount, count, inputan }) {

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


        rows.push(<Rows products={product} orders={orders} setCount={setCount} count={count} key={product.name} />)

        lastCategory = product.category;
    })

    if (rows.length === 0) {
        rows.push(<Kosong key={1} />)
    }

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

// header category
function Kosong() {
    return (
        <tr key={1}>
            <td colSpan="4" className="border-2 border-lime-400 px-8">Not Results</td>
        </tr>
    )
}
function HeaderCategory({ products }) {
    return (
        <tr>
            <th colSpan={2} className="border-2 border-lime-400 px-8">{products.category}</th>
        </tr>
    )
}

// Rows
function Rows({ products, orders, setCount, count }) {

    class CreateObject {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    function increment(name, price) {
        orders.push({ name: name, price: price });
        // orders.current.push(new CreateObject(name, price));
        // orders.current + 1;
    }

    function decrement() {
        sessionStorage.removeItem("name")
        sessionStorage.removeItem("price")
    }

    // console.log(sessionStorage.getItem("name"), sessionStorage.getItem("price"));
    return (
        <>

            {
                products.stocked === false ?
                    (
                        <tr>
                            <td className="text-red-600 border-2  border-lime-400 px-8">{products.name}</td>
                            <td className="text-red-600 border-2 border-lime-400 px-8">{products.price}</td>
                            <td onClick={() => alert(products.name + " is not avalibility")} className="text-red-600 border-2 border-lime-400 px-8 hover:cursor-pointer">+</td>
                            <td onClick={() => alert(products.name + " is not avalibility")} className="text-red-600 border-2 border-lime-400 px-8 hover:cursor-pointer">-</td>
                        </tr>
                    ) :
                    (<tr ref={orders}>
                        <td className="border-2 border-lime-400 px-8">{products.name}</td>
                        <td className="border-2 border-lime-400 px-8">{products.price}</td>
                        <td onClick={() => increment(products.name, products.price)} className="border-2 border-lime-400 px-8 hover:cursor-pointer">+</td>
                        <td onClick={decrement} className="border-2 border-lime-400 px-8 hover:cursor-pointer">-</td>
                    </tr >
                    )
            }
        </>
    )
}

// Sortiran barang
function Inputan({ setInputan, setStocked, target, stocked }) {
    const activeInput = useRef(null);
    useEffect(() => {
        activeInput.current.focus();
    }, [])

    // function kopoi() {
    //     activeInput.current.focus();
    // }
    return (
        <div className='mb-4'>
            <form className="w-64 flex flex-col">
                <input type="text" id="inputan" ref={activeInput} active="true" onChange={(e) => setInputan(e.target.value)} />
                <input type="checkbox" id="checkBox" name="checkBox" onChange={() => setStocked(!stocked)} />
            </form>
        </div>
    )
}