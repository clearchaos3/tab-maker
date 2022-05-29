export default function PowerChordButton({ powerChord, setPowerChord }) {

    function togglePowerChord() {
        setPowerChord(powerChord === 0 ? 1 : 0);
    }

    let emoji = powerChord === 1 ? '✅' : '🚫';
    return (
        <button className="PowerChord" onClick={() => togglePowerChord()}>Power Chords {emoji} </button >
    );
};