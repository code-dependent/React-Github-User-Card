import React from 'react';

const UsernameForm =(props)=>{


    return(
        <form onSubmit={props.submitHandle}>
            <label>Find a user:&nbsp;
            <input
                name='formValue'
                placeholder='Enter a gitHub user'
                value={props.formValue}
                onChange={props.changeHandle}
                type='text'
                />
                </label>
        </form>
    )
}

export default UsernameForm;