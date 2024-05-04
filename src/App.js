import React, { useCallback, useState } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

function App() {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const onChangText = e => setText(e.target.value);
    const onClickOpen = () => setOpen(!open);
    const onClickClose = useCallback(() => setOpen(false), []);

    return (
        <div className="App">
            <input value={text} onChange={onChangText} />
            <br />
            <br />
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
        </div>
    );
}

export default App;
