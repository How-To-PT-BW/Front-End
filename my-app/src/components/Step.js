// import React from 'react';
// import { useForm } from 'react-hook-form';

// const Step = () => {
//     const { register, handleSubmit, error } = useForm()

//     const submit = (data) => {
//         console.log(data)
//     }
   
//     return (
//         <div>
//             <form onSubmit={handleSubmit(submit)}>
//                 <label>title</label>
//                 <input type='text' placeholder='title' name='title' ref={register}></input>
//                 <label>problem</label>
//                 <input type='text' placeholder='problem' name='problem' ref={register}></input>
//                 <label>solution</label>
//                 <input type='text' placeholder='solution' name='solution' ref={register}></input>
//                 <button type='submit'>next step</button>
//                 <button>save draft</button>
//             </form>
            
//         </div>
//     );
// }

// export default Step;

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utilities/axiosWithAuth';


const Step = (props) => {
    // console.log(props)
    
    const { register, handleSubmit, setValue, errors } = useForm()
    const id = Number(props.match.params.id) 
    const submit = (data) => {
        data.step_number = id - 1
        data.how_to_id = props.howtoid
        console.log(data)
        axiosWithAuth()
            .post('how-to/instructions',data)
            .then(Response => {
                console.log(Response)
                props.history.push(`/Step/${id + 1}`)
            })
            .catch(error => {
                console.log(error)
            })

        setValue('step_title','')
        setValue('description','')
        
        
        
    }
    
     const renderPreviousStep = () => {
        if (id > 1) {
            return <Link to={`/Step/${id - 1}`}><button>previous step</button></Link>
        }
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>title</label>
                <input type='text' name='step_title' ref={register({required: true})}></input>
                {errors.step_title && <p>TITLE REQUIRED</p>}
                <label>description</label>
                <input type='text' name='description' ref={register({required: true})}></input>
                {errors.description && <p>DESCRIPTION REQUIRED</p>}
                <input type='submit' value='next step'></input>
                {renderPreviousStep()}
                <button>save draft</button>
                <button type='button' onClick={() => props.history.push(`/how-to/${props.howtoid}`)}>publish</button>
                <h1>step {id}</h1>
            </form>
            
        </div>
    );
}

export default Step;

