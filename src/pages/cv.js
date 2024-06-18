import React from 'react';

const CV = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            margin: 0,
            padding: 0,
            overflow: 'hidden'
        }}>
            <iframe
                src="/static/JackCRobertson-CV.pdf"
                style={{
                    height: '100%',
                    width: '100%',
                    border: 'none'
                }}
            />
        </div>
    );
};

export default CV;
