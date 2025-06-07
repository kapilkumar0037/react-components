import { useState } from "react";
import { Input } from "../controls/Input"

export const UsernameInput = ()=> {
    const [value, setValue] = useState('');
    function onUsernameChange(event: any) {
        setValue(event.target.value);
        console.log('Username changed:', event.target.value);
    }
    return (
          <Input label='Username' type='text' value={value} onChange={onUsernameChange}/>
    )
}