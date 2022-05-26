import Measure from './Measure'

const Neck = () => {
    const multiple = 48
    return (
        <div className='Neck'>
            <table>
                <tr>
                    <td><Measure measure={multiple * 0} /></td>
                    <td><Measure measure={multiple * 1} /></td>
                    <td><Measure measure={multiple * 2} /></td>
                </tr>
                <tr>
                    <td><Measure measure={multiple * 3} /></td>
                    <td><Measure measure={multiple * 4} /></td>
                    <td><Measure measure={multiple * 5} /></td>
                </tr>
                <tr>
                    <td><Measure measure={multiple * 6} /></td>
                    <td><Measure measure={multiple * 7} /></td>
                    <td><Measure measure={multiple * 8} /></td>
                </tr>
            </table>
        </div>
    )
}

export default Neck;