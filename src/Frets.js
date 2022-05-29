import Fret from './Fret'

//Frets is a list of 6 Frets, since there are 6 strings
export default function Frets(i, { powerChord }) {
    return (
        <div className='Frets'>
            <Fret id={i.i} powerChord={i.powerChord} />
            <Fret id={i.i + 1} powerChord={i.powerChord} />
            <Fret id={i.i + 2} powerChord={i.powerChord} />
            <Fret id={i.i + 3} powerChord={i.powerChord} />
            <Fret id={i.i + 4} powerChord={i.powerChord} />
            <Fret id={i.i + 5} powerChord={i.powerChord} />
        </div>
    )
};