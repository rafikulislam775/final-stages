import Title from "../../pages/Title";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import img from "../../assets/contact.jpg";

const Contact = () => {
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

    const isValid = await trigger();

    if (!isValid) {
      Swal.fire({
        title: "おっと！",
        text: "すべての必須フィールドを正しく入力してください。",
        icon: "error",
      });
      return;
    }

    const formData = getValues();
    if (Object.values(formData).some((value) => !value)) {
      Swal.fire({
        title: "おっと！",
        text: "すべての必須フィールドを入力してください。",
        icon: "error",
      });
      return;
    }

    if (formData.from_email !== formData.confirm_email) {
      Swal.fire({
        title: "おっと！",
        text: "メールアドレスと確認用メールアドレスが一致しません。",
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
            title: "成功！",
            text: "メッセージが正常に送信されました。",
            icon: "success",
          });
          reset();
        },
        (error) => {
          Swal.fire({
            title: "おっと！",
            text: "何かがうまくいかなかったようです。後でもう一度お試しください。",
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
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
        <div className="flex-1  ">
          <form
            target="_blank"
            ref={form}
            onSubmit={sendEmail}
            className="max-w-md mx-auto"
          >
            {/* Name */}
            <div className="relative border  z-0 w-full mb-5 group">
              <input
                {...register("from_name", {
                  required: "未入力です",
                  maxLength: {
                    value: 100,
                    message: "最大100文字までです。",
                  },
                })}
                type="text"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-gray-600  border-b-2  appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            <div className="relative border  z-0 w-full mb-5 group">
              <input
                {...register("company_name", {
                  required: "未入力です",
                  maxLength: {
                    value: 100,
                    message: "最大100文字までです。",
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
            <div className="relative border  z-0 w-full mb-5 group">
              <input
                {...register("from_email", {
                  required: "未入力です",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "無効なメールアドレスです。",
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
            <div className="relative border  z-0 w-full mb-5 group">
              <input
                {...register("confirm_email", {
                  required: "未入力です",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "無効なメールアドレスです。",
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
            <div className="relative border  z-0 w-full mb-5 group">
              <input
                {...register("phone_number", {
                  required: "未入力です",
                })}
                type="tel"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                電話番号 <span className="text-red-500">*</span>
              </label>
              {errors.phone_number && (
                <p className="text-red mt-1">{errors.phone_number.message}</p>
              )}
            </div>

            <div className="relative border  z-0 w-full mb-5 group">
              <select
                {...register("new_and_old", {
                  required: "オプションを選択してください。",
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                <option value="">選択</option>
                <option value="新規サイト作成">新規サイト作成</option>
                <option value="サイトリニューアル">サイトリニューアル</option>
              </select>
              {errors.new_and_old && (
                <p className="text-red mt-1">{errors.new_and_old.message}</p>
              )}
            </div>

            {/* URL (optional based on select option) */}
            {getValues("new_and_old") === "新規サイト作成" ? null : (
              <>
                <div className="relative border  z-0 w-full mb-5 group">
                  <input
                    {...register("url", {
                      maxLength: {
                        value: 255,
                        message: "最大255文字までです。",
                      },
                    })}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                    placeholder=""
                    defaultValue={"https://www.yourcompany.com/"}
                  />
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
                    ※よろしければ、現行サイトURLをご入力ください。
                  </label>
                </div>
                {errors.url && (
                  <p className="text-red mt-1">{errors.url.message}</p>
                )}
              </>
            )}

            {/* Message */}
            <div className="relative border  z-0 w-full mb-5 group">
              <textarea
                {...register("message", {
                  required: "このフィールドは必須です。",
                  maxLength: {
                    value: 2000,
                    message: "最大2000文字までです。",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="message"
                placeholder=""
                rows="4"
                cols="50"
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              {errors.message && (
                <p className="text-red mt-1">{errors.message.message}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button type="submit" className=" btn btn-wide btn-info ">
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
