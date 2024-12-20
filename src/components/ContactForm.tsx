import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // console.log("service id", process.env.REACT_APP_SERVICE_ID)
  // console.log("template id", process.env.REACT_APP_TEMPLATE_ID)
  // console.log("public id", process.env.REACT_APP_PUBLIC_KEY)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message: string, type: any) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data: any) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="ContactForm bg-darkBlue my-10">
      <div className="container mx-auto px-4 relative">
        {/* Alert Section */}
        {alertInfo.display && (
          <div
            className={`alert absolute right-4 lg:w-1/4 p-2 rounded-md ${
              alertInfo.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
            style={{ marginTop: "20px" }} // Extra margin (optional)
          >
            {alertInfo.message}
            <button
              type="button"
              className="btn-close ml-4 font-bold text-white"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            >
              X
            </button>
          </div>
        )}

        {/* Form Section */}
        <div className="row flex flex-col items-center">
          <p
            id="methodology"
            className="text-center text-white font-semibold mb-8 pt-8 text-4xl font-play"
          >
            Contact Form
          </p>
          <div className="text-center mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 p-4 sm:p-2">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-5"
              >
                {/* Row 1 of Form: Name */}
                <div className="row formRow flex mb-4">
                  {/* Name Input */}
                  <div className="w-full">
                    <input
                      type="text"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput block w-full p-3 border rounded-md"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="errorMessage text-red-500 text-sm">
                        {typeof errors.name.message === "string" &&
                          errors.name.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2 of Form: Email */}
                <div className="row formRow mb-4">
                  <div className="w-full">
                    <input
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput block w-full p-3 border rounded-md"
                      placeholder="Email address"
                    />
                    {errors.email && (
                      <span className="errorMessage text-red-500 text-sm">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3 of Form: Message */}
                <div className="row formRow mb-4">
                  <div className="w-full">
                    <textarea
                      rows={3}
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput block w-full p-3 border rounded-md"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage text-red-500 text-sm">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="submit-btn btn bg-neonPink text-white font-semibold py-2 px-8 mb-2 rounded-lg hover:bg-lightBlue"
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
