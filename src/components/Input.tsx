import {ChangeEvent, ChangeEventHandler} from "react";

export default function Input({value, onEdited}: {value: string, onEdited: (event: ChangeEvent<HTMLInputElement>) => void}){
    return (
        <input className={"Input"} value={value} onChange={onEdited} />
    );
}