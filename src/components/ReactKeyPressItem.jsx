import React, { useEffect, useState } from 'react';

const ReactKeyPressItem = ({ item, firstKey, secondKey, callback }) => {
    const listener = new window.keypress.Listener();
    const [isBlue, setIsBlue] = useState(true);
    const [bg, setBg] = useState('blue');
    const combo = `${firstKey} ${secondKey}`;

    useEffect(() => {
        listener.simple_combo(combo, toggleColor);
        return () => {
            listener.unregister_combo(combo);
        }
    }, [isBlue]);

    const toggleColor = () => {
        callback();
        if(isBlue) {
            setBg('yellow');
        } else {
            setBg('blue');
        }
        setIsBlue(!isBlue);
    }

    return (
        item.active && <div onClick={toggleColor} style={{background: `${bg}`, color: isBlue ? 'black' : 'grey'}} key={item.id}>{item.name}</div>
    )
}

export default ReactKeyPressItem;