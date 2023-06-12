import React from 'react';

function Page404() {
    return (
        <div className="page404-container">
            <div>
                <h1 className="page404-title">404</h1>
                <p className="page404-content">Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <p className="page404-link"><a href="/">Retourner sur la page d'accueil</a></p>
        </div>
    );
}

export default Page404;
