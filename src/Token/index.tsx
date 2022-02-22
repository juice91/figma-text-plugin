
import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from "formik";
import { Box } from '@chakra-ui/react'

export default function PoEditor() {
    const [poToken, setPoToken] = useState<string>([]);
    useEffect(()=>{
    },[])
    return <React.Fragment>
        <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Box
        </Box>
        <div className="input">
            <input type="input" className="input__field" placeholder="Placeholder2"/>
        </div>
        <button className='button button--primary'>Save</button>
    </React.Fragment>
}
