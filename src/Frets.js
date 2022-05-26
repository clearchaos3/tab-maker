import Fret from './Fret'

//Frets is a list of 6 Frets, since there are 6 strings
const Frets = (i) => {
    return (
        <div className='Frets'>
            <Fret id={i.i} />
            <Fret id={i.i + 1} />
            <Fret id={i.i + 2} />
            <Fret id={i.i + 3} />
            <Fret id={i.i + 4} />
            <Fret id={i.i + 5} />
        </div>
    )
}

export default Frets;