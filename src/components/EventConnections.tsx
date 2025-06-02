import { useEffect, useState, useRef } from "preact/hooks";
import { z } from "zod";
import TriffectaButton from "./TriffectaButton";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  businessEmail: z.string().email("A valid business email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  notificationOptIn: z.boolean(),
});

export default function EventConnections() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    businessEmail: "",
    phoneNumber: "",
    notificationOptIn: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const refs = {
    firstName: useRef<HTMLInputElement>(null),
    lastName: useRef<HTMLInputElement>(null),
    jobTitle: useRef<HTMLInputElement>(null),
    businessEmail: useRef<HTMLInputElement>(null),
    phoneInputRef: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    if (!refs.phoneInputRef.current) return;

    const initPhone = async () => {
      const iti = intlTelInput(refs.phoneInputRef.current!, {
        initialCountry: "gb",
        loadUtils: () => import("intl-tel-input/utils"),
        nationalMode: false,
      });

      const updateNumber = () => {
        const phoneNumber = iti.getNumber();
        setFormData((prev) => ({ ...prev, phoneNumber }));
        setErrors((prev) => ({ ...prev, phoneNumber: "" }));
      };

      refs.phoneInputRef.current!.addEventListener("input", updateNumber);
      refs.phoneInputRef.current!.addEventListener(
        "countrychange",
        updateNumber,
      );

      return () => iti.destroy();
    };

    initPhone();
  }, []);

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
      const res = await fetch("https://marketing.triffecta.com/event-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          notificationOptIn: formData.notificationOptIn ? 1 : 0,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Form submission failed");

      setSuccess("Thanks! We'll be in touch shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        businessEmail: "",
        phoneNumber: "",
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                ref={refs.jobTitle}
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                class={inputClass("jobTitle")}
              />
              {errors.jobTitle && (
                <p class="text-error mt-1.5 ml-4.5 text-sm font-bold">
                  {errors.jobTitle}
                </p>
              )}
            </div>

            <div>
              <input
                ref={refs.businessEmail}
                name="businessEmail"
                placeholder="Business Email"
                value={formData.businessEmail}
                onChange={handleChange}
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
                ref={refs.phoneInputRef}
                id="phone"
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                class={`w-full rounded-xl border-1 py-2 pl-4 ${
                  errors.phoneNumber ? "border-error" : "border-[#CCCCCC]"
                } focus:border-primary focus:outline-none`}
              />
              {errors.phoneNumber && (
                <p class="text-error mt-1.5 ml-4.5 text-sm font-bold">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <p class="text-sm">
              Triffecta is committed to protecting and respecting your privacy,
              by clicking submit below, you consent to allow Triffecta to store
              and process the personal information submitted above to provide
              you the content requested.
            </p>

            <div className="flex justify-center lg:justify-end">
              <TriffectaButton
                type="submit"
                disabled={loading}
                className="px-10 py-2"
              >
                {loading ? "Submitting..." : "Schedule a Meeting"}
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
