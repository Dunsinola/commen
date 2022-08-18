import React, { useState } from "react";
import swal from 'sweetalert';
import Axios from'axios'
import "../App.css"

import {
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";




const Contact = () => {
    const url='https://dunsinola.herokuapp.com/'
    const [data, setData] = useState({
        fullname: "",
        email: "",
        msg: ""
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }

          
        });
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        
        // message can be saved to db or email can be sent from here!
        Axios.post(url,{
          text:data.fullname,
          email:data.email,
          message:data.msg
        }).then(res=>{
          console.log(data.fullname)
          console.log(res.data)
          
        })
        
        swal("Sent!", "Message Sent Successfully!", "well get back to you")
      
        
    }

  return (
    <>
      <div className=" contact " >
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
                <div className="col-12">
                  <button className="btn btn-outline-primary mt-3" type="submit">
                     send
                  </button>
                </div>
              </div>
            </form>
            <div className='container-fluid text-center mt-5'>
            <ul className="container-fluid d-flex ">
      
      <li className="nav-link">
        <a
          href="https://www.linkedin.com/in/dunsin-olaleye-a4a9311b7/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="nav-link">
        <a
          href="https://www.instagram.com/dunsinola/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>
      <li className="nav-link">
        <a
          href="mailto:dunsinolaleye@yahoo.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
