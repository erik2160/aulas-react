import { useState } from "react";

function ClickButton() {
    function handleClick() {
        alert('O botão foi clicado.');
    }

    return (
        <button id="botao" onClick={handleClick}>Clique aqui</button>
    );
}

function InputField() {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
            <p>Você digitou: {value}</p>
        </div>
    );
}

function KeyDownComponent() {
    function handleKeyDown(event) {
        console.log(`A tecla pressionada foi: ${event.key}`);
    }

    return <input type="text" onKeyDown={handleKeyDown}/>;
}

function FocusBlurComponent() {
    function handleFocus() {
        console.log('O input está em foco');
    }

    function handleBlur() {
        console.log('O input não está em foco');
    }

    return <input type="text" onFocus={handleFocus} onBlur={handleBlur} />;
} 

function HoverComponent() {
    function handleMouseEnter() {
        console.log('O mouse entrou na div.');
    }

    function handleMouseLeave() {
        console.log('O mouse saiu da div.');
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover over this text.
        </div>
    )
}

export { ClickButton, InputField, KeyDownComponent, FocusBlurComponent };