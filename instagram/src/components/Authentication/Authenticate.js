import React from 'react';

const authenticate = App => Login =>
    class extends React.Component {
        render() {
            if (localStorage.getItem('username')) {
                return <App {...this.props} />;
            }
            return <Login {...this.props} />
        }
    };

export default authenticate;