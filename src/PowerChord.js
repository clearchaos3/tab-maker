import { useState } from "react";


const PowerChord = () => {
    const [powerChord, setPowerChord] = useState(0);
    function togglePowerChord() {
        setPowerChord(powerChord === 0 ? 1 : 0);
    }

    let emoji = powerChord === 1 ? '✅' : '🚫';
    return (
        <button className="PowerChord" onClick={() => togglePowerChord()}>Power Chords {emoji} </button >
    );
}

export default PowerChord;