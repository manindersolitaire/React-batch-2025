import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails =  useLoaderData() 
  return (
    <div className='jobdetails'>
      <p><b>Job Title : </b>{jobDetails.title}</p>
      <p><b>Salary : </b>{jobDetails.salary}</p>
      <p><b>Location : </b>{jobDetails.location}</p>
      <p><b>Company Name : </b>{jobDetails.company}</p>
      <p><b>Company Name : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aut maiores perspiciatis earum deleniti facere aspernatur. Sint, sequi vitae consequuntur ab, quam nemo tempore neque cum hic earum accusamus necessitatibus!</p>
      <button>Apply Now</button>


    </div>
  )
}

export default JobDetails



export const jobDetailsLoader = async({params})=>{
    const {id} = params
    const res = await fetch(`http://localhost:5000/jobs/${id}`)
    if(!res.ok){
        throw Error('Could not found job details')
    }
    return res.json()
}