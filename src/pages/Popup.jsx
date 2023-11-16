import React from 'react';
import '../styling/Modal.css';
import { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';
import AWS from "aws-sdk";
import Thank from './Thank';

var dynamodb = new AWS.DynamoDB();

const Modal = (props) => {
  const { open, close, email, setEmail } = props;
  const [isShown, setIsShown] = useState(false);
  const [isSucceed, setisSucceed] = useState(false);
  const [ThankOpen, setThankOpen] = useState(false);
  const [name, setName] = useState("");

  const getStringValue = (value) => {
    if (typeof value == "number") {
      return "" + value + "";
    }
    return value;
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (values) => {
    // alert(JSON.stringify(values));
    // email: getStringValue(values.email);
    var date = Date()

    var params = {
                Item: {
                  Email: {
                    S: "" + values.email + "",
                  },
                  Name: {
                    S: "" + values.name + "",
                  },
                  Institution: {
                    S: "" + values.institution + "",
                  },
                  Position: {
                    S: "" + values.position + "",
                  },
                  registerDate: {
                    S: "" + date + "",
                  },
                },
                ReturnConsumedCapacity: "TOTAL",
                TableName: "UpdateEmails",
    };

    dynamodb.putItem(params, function (err, data) {
                if (err) console.log("error", err, err.stack);
                // an error occurred
                else {
                    console.log("successful", data); // successful response
                    setisSucceed(true);
                }
    });
    setIsShown(true);

    openThank(values.name, values.email);
  };

  const openThank = (name, email) => {
    setName(name);
    setEmail(email)
    setThankOpen(true);
  };
  const closeThank = () => {
    setThankOpen(false);
  };
  
  return (
    <>
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main>{
            
          <div className="pdf-demo-2 screen">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pdf-demo">
            <div className="frame-3390">
              <div className="frame-630">
                <div className="frame-621" />
                <div className="witt-gen-biotechnologies">
                  <span className="span0">WittGen</span><span className="span1-1">Biotechnologies</span>
                </div>
              </div>
              <div className="frame-3460">
                <h1 className="hello-you-caught-us-before-were-ready">Hello! <br />You caught us before<br />we’re ready</h1>
                <p className="we-are-working-hard">
                We are working hard to put the finishing touches.<br/><br/>
                Things are going well and it should be ready to help your cancer diagnosis or research very soon utilizing 
                patient's tumor scRNA-seq data.<br/><br/>
                If you’d like us to send you our demo and a reminder when we’re ready, 
                just put your contact info on the right.
                <br/><br/>Thank you!
                </p>
              </div>
            </div>
            <div className="frame-3463">
              <div className="frame-3464">
                <div className="welcome-register-your-email">Please register your e-mail.</div>
                <div className="frame-3461">
                  <div className="frame-3454">
                    <div className="frame">
                      <div className="email">
                        <span className="inter-normal-mine-shaft-16px">Email </span><span className="span1">*</span>
                        {errors.email && <span className="span1"> Invalid email</span>}
                      </div>
                      <div className="frame-345">
                      <input defaultValue={email} type="text" className="input inter-normal-slate-gray-16px" style={{border: 'none', outline: 'none', width: '340px', fontSize: '18px'}}
                      {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                      />
                      </div>
                    </div>
                    <div className="frame">
                      <div className="name">
                        <span className="inter-normal-mine-shaft-16px">Name </span><span className="span1">*</span><span className="inter-normal-mine-shaft-16px" />
                        {errors.name && <span class="span1"> Name is required field</span>}
                      </div>
                      <div className="frame-345"><input type="text" className="input inter-normal-slate-gray-16px" style={{border: 'none', outline: 'none', width: '340px', fontSize: '18px'}}
                        {...register("name", { required: true})}
                        />
                      </div>
                    </div>
                    <div className="frame">
                      <div className="tion inter-normal-mine-shaft-16px">Institution</div>
                      <div className="frame-345"><input type ="text" className="input inter-normal-slate-gray-16px" style={{border: 'none', outline: 'none', width: '340px', fontSize: '18px'}}
                      {...register("institution", { required: false})}
                      />
                      </div>
                    </div>
                    <div className="frame">
                      <div className="tion inter-normal-mine-shaft-16px">Position</div>
                      <div className="frame-345"><input type="text" class="input inter-normal-slate-gray-16px" style={{border: 'none', outline: 'none', width: '340px', fontSize: '18px'}}
                      {...register("position", { required: false})}
                      />
                      </div>
                    </div>
                  </div>
                  <button className="sign-up" type="submit" onmouseover><div className="registration">Registration</div></button>
                </div>
              </div>
              <button className="close" onClick={close} />
            </div>
          </div>
        </form>
        </div>

        }</main>
        </section>
      ) : null}
    </div>
    <Thank open={ThankOpen} close={closeThank} name={name}></Thank>
    </>
  );
};

export default Modal;
