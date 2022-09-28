import React from 'react';

export default class Home extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <>
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-4481078020462017"
                    data-ad-slot="5215784884"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
                <div>
                    <h1>Escolha uma matéria para iniciar!</h1>
                </div>
            </>
        );
    }
}