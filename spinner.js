import React from 'react'
import loading from './Animation - 1716276571982.gif'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner