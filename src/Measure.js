import Frets from './Frets'
import Strings from './Strings';

//a Measure is comprised of 8 Frets
export default function Measure(measure) {
    const base = 6;
    return (
        <div className='Measure'>
            <Strings />
            <Frets i={measure.measure} />
            <Frets i={measure.measure + base} />
            <Frets i={measure.measure + base * 2} />
            <Frets i={measure.measure + base * 3} />
            <Frets i={measure.measure + base * 4} />
            <Frets i={measure.measure + base * 5} />
            <Frets i={measure.measure + base * 6} />
            <Frets i={measure.measure + base * 7} />
            <Frets i={measure.measure + base * 8} />
            <Frets i={measure.measure + base * 9} />
            <Frets i={measure.measure + base * 10} />
            <Frets i={measure.measure + base * 11} />
            <Frets i={measure.measure + base * 12} />
            <Frets i={measure.measure + base * 13} />
            <Frets i={measure.measure + base * 14} />
            <Frets i={measure.measure + base * 15} />
        </div>
    )
};