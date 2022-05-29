import Frets from './Frets'
import Strings from './Strings';

//a Measure is comprised of 8 Frets
const Measure = (measure, { powerChord }) => {
    const base = 6;
    return (
        <div className='Measure'>
            <Strings />
            <Frets i={measure.measure} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 2} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 3} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 4} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 5} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 6} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 7} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 8} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 9} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 10} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 11} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 12} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 13} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 14} powerChord={measure.powerChord} />
            <Frets i={measure.measure + base * 15} powerChord={measure.powerChord} />
        </div>
    )
};

export default Measure;