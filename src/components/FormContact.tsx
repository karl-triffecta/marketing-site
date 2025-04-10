import { useState, useRef } from "preact/hooks";
import { z } from "zod";
import TriffectaButton from "./TriffectaButton";
import IconTick from "./icon/IconTick";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  businessEmail: z.string().email("A valid business email is required"),
  companyName: z.string().min(1, "Company name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  message: z.string().optional(),
  notificationOptIn: z.boolean(),
});

export default function FormContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
    jobTitle: "",
    message: "",
    notificationOptIn: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const refs = {
    firstName: useRef<HTMLInputElement>(null),
    lastName: useRef<HTMLInputElement>(null),
    businessEmail: useRef<HTMLInputElement>(null),
    companyName: useRef<HTMLInputElement>(null),
    jobTitle: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    setErrors({});
    setSuccess("");

    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path.length) {
          const field = err.path[0] as string;
          fieldErrors[field] = err.message;
        }
      });

      setErrors(fieldErrors);

      // Scroll/focus to first error
      const firstInvalidField = result.error.errors[0]
        ?.path[0] as keyof typeof refs;
      refs[firstInvalidField]?.current?.focus();
      refs[firstInvalidField]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://marketing.triffecta.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          notificationOptIn: formData.notificationOptIn ? 1 : 0,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Form submission failed");

      setSuccess("Thanks for getting in touch! We'll respond shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        businessEmail: "",
        companyName: "",
        jobTitle: "",
        message: "",
        notificationOptIn: false,
      });
    } catch (err) {
      setErrors({ general: "There was a problem. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-xl border-1 py-2 pl-4 ${
      errors[field] ? "border-error" : "border-[#CCCCCC]"
    } focus:border-primary focus:outline-none`;

  return (
    <div class="w-full rounded-2xl bg-white p-10">
      {success ? (
        <div class="text-success bg-success-light mb-4 rounded-lg p-4 font-bold">
          {success}
        </div>
      ) : (
        <form onSubmit={handleSubmit} class="flex flex-col space-y-8">
          <h3 class="text-center text-3xl font-bold">Send us a message</h3>

          <fieldset
            class={`flex flex-col space-y-6 ${loading ? "pointer-events-none opacity-50" : ""}`}
            disabled={loading}
          >
            <div class="flex flex-col gap-4 md:flex-row">
              <div class="w-full">
                <input
                  ref={refs.firstName}
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onInput={handleChange}
                  class={inputClass("firstName")}
                />
                {errors.firstName && (
                  <p class="text-error mt-1.5 ml-4.5 text-sm font-bold">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div class="w-full">
                <input
                  ref={refs.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onInput={handleChange}
                  class={inputClass("lastName")}
                />
                {errors.lastName && (
                  <p class="text-error mt-1.5 ml-4.5 text-sm font-bold">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                ref={refs.businessEmail}
                name="businessEmail"
                placeholder="Business Email"
                value={formData.businessEmail}
                onInput={handleChange}
                class={inputClass("businessEmail")}
              />
              {errors.businessEmail && (
                <p class="text-error mt-1.5 ml-4.5 text-sm font-bold">
                  {errors.businessEmail}
                </p>
              )}
            </div>

            <div>
              <input
                ref={refs.companyName}
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onInput={handleChange}
                class={inputClass("companyName")}
              />
              {errors.companyName && (
                <p class="text-error mt-1.5 ml-4.5 text-sm font-bold">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div>
              <input
                ref={refs.jobTitle}
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onInput={handleChange}
                class={inputClass("jobTitle")}
              />
              {errors.jobTitle && (
                <p class="text-error mt-1.5 ml-4.5 text-sm font-bold">
                  {errors.jobTitle}
                </p>
              )}
            </div>

            <div>
              <textarea
                ref={refs.message}
                name="message"
                placeholder="Your message (optional)"
                value={formData.message}
                onInput={handleChange}
                rows={5}
                class="w-full resize-none rounded-xl border border-[#CCCCCC] py-2 pl-4 focus:border-[#009485] focus:outline-none"
              />
            </div>

            <p class="text-sm">
              Triffecta is committed to protecting and respecting your privacy,
              and we’ll only use your personal information to administer your
              account and to provide the products and services you requested
              from us. From time to time, we would like to contact you about our
              products and services, as well as other content that may be of
              interest to you. If you consent to us contacting you for this
              purpose, please tick below to say how you would like us to contact
              you:
            </p>

            <label class="flex cursor-pointer items-center space-x-3 text-sm select-none">
              <div class="relative">
                <input
                  type="checkbox"
                  name="notificationOptIn"
                  checked={formData.notificationOptIn}
                  onChange={handleChange}
                  class="peer absolute h-5 w-5 cursor-pointer opacity-0"
                />
                <div class="peer-checked:border-primary peer-checked:bg-primary flex h-5 w-5 items-center justify-center rounded border border-gray-400 transition">
                  <IconTick strokeColor={"#FFFFFF"} />
                </div>
              </div>
              <span>
                I agree to receive emails from Triffecta about helpful content
                and services.
              </span>
            </label>

            {/*
            <label class="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                name="notificationOptIn"
                checked={formData.notificationOptIn}
                onChange={handleChange}
              />
              <span>
                I agree to receive emails from Triffecta about helpful content
                and services.
              </span>
            </label>
            */}
            <p class="text-sm">
              You can unsubscribe from these communications at any time. For
              more information on how to unsubscribe, our privacy practices, and
              how we are committed to protecting and respecting your privacy,
              please review our{" "}
              <a
                href="/privacy"
                class="text-primary-dark underline"
                target="_blank"
              >
                privacy policy
              </a>
              .
            </p>

            <p class="text-sm">
              By clicking submit below, you consent to allow Triffecta to store
              and process the personal information submitted above to provide
              you the content requested.
            </p>

            <div className="flex justify-end">
              <TriffectaButton
                type="submit"
                disabled={loading}
                className="px-10 py-2"
              >
                {loading ? "Submitting..." : "Send"}
              </TriffectaButton>
            </div>

            {errors.general && (
              <p class="text-error text-sm font-bold">{errors.general}</p>
            )}
          </fieldset>
        </form>
      )}
    </div>
  );
}
