import { useState } from "react";

function Calculo() {
    const [value, setValue] = useState('');
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    function isEmpty() {
        return n1.length === 0 || n2.length === 0;
    }

    function somar() {
        if (!isEmpty()) {
            setValue(n1 + n2);
        } else {
            setValue('Insira um valor nos inputs.');
        }
    }

    function subtrair() {
        if (!isEmpty()) {
            setValue(n1 - n2);
        } else {
            setValue('Insira um valor nos inputs.');
        }
    }
    
    function multiplicar() {
        if (!isEmpty()) {
            setValue(n1 * n2);
        } else {
            setValue('Insira um valor nos inputs.');
        }
    }
    
    function dividir() {
        if (!isEmpty()) {
            if (n2 === 0) {
                setValue("Divisão por zero não permitido.");
            } else {
                setValue(n1 / n2);
            }
        } else {
            setValue('Insira um valor nos inputs.');
        }
    }

    return (
        <div className="challenge">
            <label>Primeiro número</label>
            <input id="n1" type="number" onChange={(e) => setN1(Number(e.target.value))} />
            <label>Segundo número</label>
            <input id="n2" type="number" onChange={(e) => setN2(Number(e.target.value))}/>
            <button onClick={somar}>Somar</button>
            <button onClick={subtrair}>Subtrair</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={dividir}>Dividir</button>

            <p>Resultado: {value}</p>
        </div>
    );
}

export { Calculo };
