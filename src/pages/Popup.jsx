import React from "react";
import "../styling/Modal.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AWS from "aws-sdk";

var dynamodb = new AWS.DynamoDB();

const Modal = (props) => {
  const { open, close, header } = props;
  const [isShown, setIsShown] = useState(false);
  const [isSucceed, setisSucceed] = useState(false);

  const getStringValue = (value) => {
    if (typeof value == "number") {
      return "" + value + "";
    }
    return value;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    // alert(JSON.stringify(values));
    // email: getStringValue(values.email);
    var date = Date();

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
  };

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {
              <div class="request-demo screen">
                <div class="modal-group-460">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="modal-overlap-group">
                      <div class="modal-frame-203">
                        <h1 class="modal-hello-you-caught-us">
                          <span class="modal-span0">
                            Hello! You caught us before we’re ready.
                            <br />
                          </span>
                          <span class="modal-span1">
                            <br />
                          </span>
                          <span class="inter-light-blue-dianne-15px">
                            We are working hard to put the finishing touches.
                            <br />
                            Things are going well and it should be ready to help
                            your cancer research <br />
                            or diagnosis utilizing patient&#39;s tumor scRNA-seq
                            data very soon.
                            <br />
                            If you’d like us to send you our demo and a reminder
                            when we’re ready,
                            <br />
                            just put your contact info in below:
                          </span>
                        </h1>
                        <div class="modal-frame-202">
                          <div class="modal-frame">
                            <p class="modal-enter-your-email-here inter-light-blue-dianne-15px">
                              Enter your email here *
                            </p>
                            <input
                              type="text"
                              class="modal-input-bg"
                              {...register("email", {
                                required: true,
                                pattern:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              })}
                            />
                            {errors.email && (
                              <span class="modal-span-1">Invalid email</span>
                            )}
                          </div>
                          <div class="modal-frame">
                            <p class="inter-light-blue-dianne-15px">Name *</p>
                            <input
                              type="text"
                              class="modal-input-bg"
                              {...register("name", { required: true })}
                            />
                            {errors.name && (
                              <span class="modal-span-1">
                                Name is required field
                              </span>
                            )}
                          </div>
                          <div class="modal-frame">
                            <div class="modal-tion inter-light-blue-dianne-15px">
                              Institution
                            </div>
                            <input
                              type="text"
                              class="modal-input-bg"
                              {...register("institution", { required: false })}
                            />
                          </div>
                          <div class="modal-frame">
                            <div class="modal-tion inter-light-blue-dianne-15px">
                              Position
                            </div>
                            <input
                              type="text"
                              class="modal-input-bg"
                              {...register("position", { required: false })}
                            />
                          </div>
                          <div class="modal-thanks">
                            {isShown && isSucceed && (
                              <div>
                                <span>
                                  Thank you! We will contact you as soon as we
                                  have updates.
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <button type="submit">
                        <div class="modal-sign-up">
                          <div class="modal-sign-up-text">Sign up</div>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            }
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
