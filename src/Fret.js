import { useRef } from "react";
//a Fret is a single input field, one note on one string
const Fret = (id) => {

    const inputEl = useRef(null);

    function handleFocus() {
        inputEl.current.select();
        console.log('inputEl: ', inputEl)
    }

    const regEx = /[a-wyzA-WYZ]/g

    function handleChange() {
        let value = inputEl.current.value
        value = value.replace(regEx, '')
        value = value.substring(value.length, value.length - 2)
        console.log(value)
    }

    return (
        <div className="Fret">
            <form>
                <input
                    type="text"
                    ref={inputEl}
                    className="singleNote"
                    id={id.id}
                    onFocus={handleFocus}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Fret;