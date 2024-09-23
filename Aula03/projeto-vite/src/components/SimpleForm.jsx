import { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setName('');
        alert(`Nome: ${name}`);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input id="input" type="text" value={name} onChange={handleInputChange} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    );
}

export { SimpleForm };