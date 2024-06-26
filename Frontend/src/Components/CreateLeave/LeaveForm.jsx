import React from 'react'
import "./LeaveForm.css"
import { useForm } from 'react-hook-form';

const LeaveForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className='full-width-xl section-container'>

        
    <form onSubmit={handleSubmit(onSubmit)} className='leave-form'>
    <h1 className='take-head'>Take a <span>Leave</span></h1>
      <div className='form-input'>
        <label>Reason:</label>
        <input type="text" name="reason" placeholder='Enter the reason' {...register("reason",{ required: true })} />
      </div>

      <div className='form-input'>
        <label>Start Date:</label>
        <input type="date" name="startDate" placeholder='Enter the reason' {...register("start-date",{ required: true })} />
      </div>

      <div className='form-input'>
        <label>End Date:</label>
        <input type="date" name="endDate" placeholder='Enter the end date'{...register("end-date",{ required: true })} />
      </div>

      <div className='form-input'>
        <label>Type:</label>
        <select name="time" {...register("time",{ required: true })}>
          <option value="half-day">Half-Day</option>
          <option value="full-day">Full-Day</option>
        </select>
      </div>

      <div className='form-input'>
        <label>Type:</label>
        <select name="type" {...register("type",{ required: true })}>
          <option value="out of office">Out of Office</option>
          <option value="work from home">Work from Home</option>
        </select>
      </div>



      <button type="submit">Submit</button>
    </form>
    </section>
  );
}

export default LeaveForm
