
import React, { useEffect, useState } from 'react'

export default function PoEditor() {
    const [poToken, setPoToken] = useState<string>([])
    useEffect(()=>{
    },[])
    return <React.Fragment>
        <input placeholder='Token' />
        <button>Save</button>
    </React.Fragment>
}
