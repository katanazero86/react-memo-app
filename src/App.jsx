import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './test.scss';
import classes from './test.module.scss';
import {useAtom} from 'jotai';
import {countAtom} from './store/atoms';

export default function App() {
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useAtom(countAtom);

    return (
        <div>
            ddd
        </div>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo"/>
        //         <p>Hello Vite + React!</p>
        //         <p>
        //             <button type="button" onClick={() => setCount((count) => count + 1)}>
        //                 count is: {count}
        //             </button>
        //         </p>
        //         <p>
        //             Edit <code>App.jsx</code> and save to test HMR updates.
        //         </p>
        //         <p>
        //             <a
        //                 className="App-link"
        //                 href="https://reactjs.org"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 Learn React
        //             </a>
        //             {' | '}
        //             <a
        //                 className="App-link"
        //                 href="https://vitejs.dev/guide/features.html"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 Vite Docs
        //             </a>
        //         </p>
        //     </header>
        //     <p>
        //         <button type="button" onClick={() => setCount2((count) => count + 1)}>
        //             count is: {count2}
        //         </button>
        //     </p>
        //     <div className="test">
        //         <p>
        //             SCSS TEST
        //         </p>
        //     </div>
        //
        //     <div className={classes.test}>
        //         <p>
        //             SCSS TEST2
        //         </p>
        //     </div>
        // </div>
    )
}
