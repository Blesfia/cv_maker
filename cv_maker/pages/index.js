import "./styles.scss"
import React from 'react';
import Link from 'next/link';

class HelloUA extends React.Component {
    static async getInitialProps({ req }) {
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
      return { userAgent };
    }
  
    render() {
      return (
        <div>
        <div>Hello World {this.props.userAgent}</div>
        <div>
            Click{' '}
            <Link href="/about">
                <a>here</a>
            </Link>{' '}
            to read more
        </div></div>
      );
    }
  }

export default HelloUA;