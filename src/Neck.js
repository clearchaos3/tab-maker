import Measure from './Measure'

export default function Neck() {
    const multiple = 96
    return (
        <div className='Neck'>
            <Measure measure={multiple * 0} />
            <Measure measure={multiple * 1} />
            <Measure measure={multiple * 2} />
            <Measure measure={multiple * 3} />
            <Measure measure={multiple * 4} />
            <Measure measure={multiple * 5} />
            <Measure measure={multiple * 6} />
            <Measure measure={multiple * 7} />
            <Measure measure={multiple * 8} />
        </div>
    )
};