import Measure from './Measure'

export default function Neck({ powerChord }) {
    const multiple = 96;
    return (
        <div className='Neck'>
            <Measure measure={multiple * 0} powerChord={powerChord} />
            <Measure measure={multiple * 1} powerChord={powerChord} />
            <Measure measure={multiple * 2} powerChord={powerChord} />
            <Measure measure={multiple * 3} powerChord={powerChord} />
            <Measure measure={multiple * 4} powerChord={powerChord} />
            <Measure measure={multiple * 5} powerChord={powerChord} />
            <Measure measure={multiple * 6} powerChord={powerChord} />
            <Measure measure={multiple * 7} powerChord={powerChord} />
        </div>
    )
};