import React, { FormEvent, useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
    name:string;
    age: number;
}

export const HookForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>();

    //console.log(register('name'));
    //console.log(formState.errors)

    const onSubmit = (data: FieldValues) =>
    {
        console.log(data);
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Name in Form2</label>
            <input {...register('name',{required:true, minLength:3})}
             id="name" type="text" 
            className="form-control" />
            {errors.name?.type === 'required' && 
             <p className='text-danger'>Name field is required.</p>}
            {errors.name?.type === 'minLength' && 
             <p className='text-danger'>Name must be atleast 3 chars.</p>}
        </div>
        <div className="mb-3"><label htmlFor="" className="form-label">Age</label>
        <input {...register('age')}
        id="age" type="number" className="form-control" /></div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}
