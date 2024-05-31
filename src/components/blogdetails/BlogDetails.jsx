import React from 'react'
import { redirect, useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {
  let {id} = useParams();
  let redir = useNavigate();
  return (
    <div>
      <h2> Blog Details for Blog No.{id} </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, veritatis! Perspiciatis excepturi aspernatur eum error voluptatum quaerat nam numquam ipsa illum praesentium, harum possimus iste culpa ratione porro doloribus sed?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, veritatis! Perspiciatis excepturi aspernatur eum error voluptatum quaerat nam numquam ipsa illum praesentium, harum possimus iste culpa ratione porro doloribus sed?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, veritatis! Perspiciatis excepturi aspernatur eum error voluptatum quaerat nam numquam ipsa illum praesentium, harum possimus iste culpa ratione porro doloribus sed?</p>
      <div className="btns">
        <button onClick={()=> redir('/blog')}>Back</button>
      </div>
    </div>
  )
}

export default BlogDetails