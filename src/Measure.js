import Frets from './Frets'

//a Measure is comprised of 8 Frets
const Measure = (measure) => {
    return (
        <div className='Measure'>
            <Frets i={measure.measure} />
            <Frets i={measure.measure + 6} />
            <Frets i={measure.measure + 12} />
            <Frets i={measure.measure + 18} />
            <Frets i={measure.measure + 24} />
            <Frets i={measure.measure + 30} />
            <Frets i={measure.measure + 36} />
            <Frets i={measure.measure + 42} />
        </div>
    )
}

export default Measure;