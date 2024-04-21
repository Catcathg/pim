import React, { useState } from 'react';
import "./LoginForm.css";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:5173/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Success :", result);
        } catch (error) {
            console.error("Error :", error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const userData = { username, password };
            await postJSON(userData);

            window.location.href = '/Home';

            console.log('Authentification réussie !');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-form-container">
            <h2>Connexion</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}
