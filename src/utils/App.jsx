import { useState } from "react";

// import "./App.css";
import Kopi from "./Kopi";
function App() {
  const [textInput, setTextInput] = useState('');
  const [stocked, setStocked] = useState(false);

  const drinks = ['arabica', 'torabica', 'kopi', 'jus', 'milk'];
  const foods = [
    { name: 'bakso', category: 'Food', stocked: true, price: 'Rp. 15.000' },
    { name: 'mie pangsid', category: 'Food', stocked: false, price: 'Rp. 15.000' },
    { name: 'gado gado', category: 'Food', stocked: true, price: 'Rp. 15.000' },
    { name: 'teh', category: 'Drink', stocked: true, price: 'Rp. 15.000' },
    { name: 'kopi', category: 'Drink', stocked: false, price: 'Rp. 15.000' },
    { name: 'susu', category: 'Drink', stocked: true, price: 'Rp. 15.000' },
  ]


  let kopi = [];
  let lastCategory = null;



  foods.map(food => {
    if (food.name.includes(textInput)) {
      if (!food.stocked && stocked) {
        return
      }
      console.log('j');
      kopi.push(food);
    }
  })

  console.log(kopi);


  return (
    <div>
      <input type="text" id="inputan" name="inputan" onChange={(e) => setTextInput(e.target.value)} />
      <input type="checkbox" id="checkbox" name="checkbox" onChange={(e) => setStocked(!stocked)} />

      <table>
        <tbody>
          {
            kopi.map((kop, key) =>
              <tr key={key}>
                <td className="px-4">{kop.name}</td>
                <td className="px-4">{`${kop.stocked}`}</td>
                <td className="px-4">{kop.price}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>

  );
}

export default App;
