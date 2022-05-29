import { useRef } from "react";
//a Fret is a single input field (one note on one string)
export default function Fret(id, { powerChord }) {

    const inputEl = useRef(null);

    function handleFocus() {
        inputEl.current.select();
    }

    // const regEx = /[a-wyzA-WYZ]/g

    // function handleChange() {
    //     let value = inputEl.current.value
    //     value = value.replace(regEx, '')
    //     value = value.substring(value.length, value.length - 2)
    // }

    function handleChange({ powerChord }) {
        console.log("powerChord: ", id.powerChord)
    }


    return (
        <div className="Fret">
            <form id={id.id + "fretForm"}>
                <input
                    type="text"
                    ref={inputEl}
                    className='singleNote'
                    id={id.id}
                    onFocus={handleFocus}
                    onChange={handleChange(id.powerChord)}
                    placeholder="-"
                    autoComplete="off"
                />
            </form>
        </div >
    )
};