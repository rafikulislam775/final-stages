import Title from "../../pages/Title";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useRef } from "react";
const Contact = () => {
  // service_ub4epbo
  const form = useRef();
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const sendEmail = async (e) => {
    e.preventDefault();

    // Trigger form validation
    const isValid = await trigger();

    if (!isValid) {
      // Show validation errors to the user
      Swal.fire({
        title: "Oops!",
        text: "Please fill in all the required fields correctly.",
        icon: "error",
      });
      return;
    }

    // Check for empty fields
    const formData = getValues();
    if (Object.values(formData).some((value) => !value)) {
      // Show alert for empty fields
      Swal.fire({
        title: "Oops!",
        text: "Please fill in all the required fields.",
        icon: "error",
      });
      return;
    }

    // Check if email and email confirmation match
    if (formData.from_email !== formData.confirm_email) {
      Swal.fire({
        title: "Oops!",
        text: "Email and confirmation email do not match.",
        icon: "error",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_ub4epbo",
        "template_0qd047z",
        form.current,
        "F6g1NyRMjX11L5IoD"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
          });
          reset(); // Clear the form after successful submission if needed
        },
        (error) => {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="text-center my-10">
        <Title>Contact Us</Title>
      </div>
      <div>
        <div> todo </div>
        <div className="">
          <form
            target="_blank"
            ref={form}
            onSubmit={sendEmail}
            className="max-w-md mx-auto"
          >
            {/* Name */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("from_name", {
                  required: "未入力です",
                  maxLength: {
                    value: 100,
                    message: "Max length is 100 characters.",
                  },
                })}
                type="text"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-gray-600  border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                お名前 <span className="text-red-500">*</span>
              </label>
              {errors.from_name && (
                <p className="text-red mt-1">{errors.from_name.message}</p>
              )}
            </div>
            {/* Company Name */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("company_name", {
                  required: "未入力です",
                  maxLength: {
                    value: 100,
                    message: "Max length is 100 characters.",
                  },
                })}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                会社名 <span className="text-red-500">*</span>
              </label>
              {errors.company_name && (
                <p className="text-red mt-1">{errors.company_name.message}</p>
              )}
            </div>
            {/* Email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("from_email", {
                  required: "未入力です",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address.",
                  },
                })}
                type="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              {errors.from_email && (
                <p className="text-red mt-1">{errors.from_email.message}</p>
              )}
            </div>
            {/* Confirm Email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("confirm_email", {
                  required: "未入力です",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address.",
                  },
                })}
                type="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                メールアドレス（確認）<span className="text-red-500">*</span>
              </label>
              {errors.confirm_email && (
                <p className="text-red mt-1">{errors.confirm_email.message}</p>
              )}
            </div>
            {/* phone number */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("phone_number", {
                  required: "未入力です",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Invalid phone number.",
                  },
                })}
                type="tel"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                電話番号
              </label>
              {errors.phone_number && (
                <p className="text-red mt-1">{errors.phone_number.message}</p>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <select
                {...register("new_and_old", {
                  required: "Please select an option.",
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                <option value="">選択</option>
                <option value="new">新規サイト作成</option>
                <option value="old">サイトリニューアル</option>
              </select>
              {errors.new_and_old && (
                <p className="text-red mt-1">{errors.new_and_old.message}</p>
              )}
            </div>

            {/* URL (optional based on select option) */}
            {getValues("new_and_old") === "new" ? null : (
              <>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    {...register("url", {
                      maxLength: {
                        value: 255,
                        message: "Max length is 255 characters.",
                      },
                    })}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                    placeholder=""
                  />
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                    ※現行サイトURLをご入力ください。
                  </label>
                </div>
              </>
            )}

            {errors.url && (
              <p className="text-red mt-1">{errors.url.message}</p>
            )}

            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
