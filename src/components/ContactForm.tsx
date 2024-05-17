import type { FC } from "react";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

import Button from "./Button";
import Toast from "./Toast";
import { getLangFromUrl, useTranslations } from "../i18n/utils";

interface Inputs {
  name: string;
  email: string;
  message: string;
}

interface Props {}

const MyComponent: FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [lang, setLang] = useState<"en" | "es">("en");
  const [showToast, setShowToast] = useState<boolean>(false);

  const t = useTranslations(lang);

  const schema = Yup.object().shape({
    name: Yup.string().required(t("miscellaneous.required")),
    email: Yup.string()
      .email(t("miscellaneous.shouldBeEmail"))
      .required(t("miscellaneous.required")),
    message: Yup.string().required(t("miscellaneous.required")),
  });

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs | any>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: Inputs) => {
    if (loading) return;
    setLoading(true);
    const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
    const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
    const userId = import.meta.env.PUBLIC_USER_ID;

    console.log(serviceId, templateId, userId);

    console.log(data);

    let payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setShowToast(true);
        reset();
        clearErrors();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.location) console.log(window.location.toString());
    const urlLang = getLangFromUrl(new URL(window.location.toString()));
    setLang(urlLang);
  }, [window]);

  return (
    <>
      {showToast && (
        <Toast
          message={t("miscellaneous.thanksForContact")}
          delayInSeconds={3}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        className="max-w-lg w-full flex flex-col space-y-8 md:max-w-xl lg:max-w-2xl lg:space-y-12"
      >
        <div className="relative">
          <label
            htmlFor="name"
            className="block mb-2 text-lg font-semibold text-white lg:text-2xl lg:font-normal"
          >
            {t("form.name")}
          </label>
          <input
            type="text"
            id="name"
            className="bg-green-50 border border-green-500 text-green-900 placeholder-green-400 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 lg:text-xl"
            placeholder="Jane Doe"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="absolute text-red-200 font-bold mt-1 lg:text-lg">
              {errors.name.message + ""}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold text-white lg:text-2xl lg:font-normal"
          >
            {t("form.email")}
          </label>
          <input
            type="email"
            id="email"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-green-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 lg:text-lg"
            placeholder="example@mail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="absolute text-red-200 font-bold mt-1 lg:text-lg">
              {errors.email.message + ""}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-semibold text-white lg:text-2xl lg:font-normal"
          >
            {t("form.idea")}
          </label>
          <textarea
            id="message"
            className="bg-red-50 h-32 border border-red-500 text-red-900 placeholder-green-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 lg:text-lg"
            placeholder="Leave a message..."
            {...register("message", { required: true })}
          ></textarea>
          <p
            id="message-error-required"
            className="hidden mt-2 text-sm text-white"
          >
            <span className="font-medium">{t("miscellaneous.required")}</span>
          </p>
        </div>
        <div className="flex flex-row w-full justify-center">
          <Button className="md:mt-2" loading={loading}>{t("title.contact")}</Button>
        </div>
      </form>
    </>
  );
};

export default MyComponent;
