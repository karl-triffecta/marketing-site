import { useState } from "preact/hooks";
import TriffectaButton from "./TriffectaButton";
import IconTick from "./icon/IconTick";

export default function FormSubscribeNewsletter() {
  const headings = [
    {
      title: "The Future’s Brewing-You In?",
      button: "We’re not just sharing updates-we’re starting a movement.",
    },
    {
      title: "Early Access, Zero Spam, Maximum Impact",
      button: "Your inbox deserves better. This is it.",
    },
    { title: "You’ll Want to Say You Were Here First", button: "Trust us." },
  ];

  const [heading, setHeading] = useState(
    headings[Math.floor(Math.random() * headings.length)],
  );
  const [email, setEmail] = useState("");
  const [isOptedIn, setIsOptedIn] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  // @ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!isOptedIn) {
      setError("You must agree to the privacy policy to subscribe.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://marketing.triffecta.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, notificationOptIn: 1 }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Signup failed");

      setSuccess("Thank you for subscribing!");
      setEmail("");
      setIsOptedIn(false);
      event.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError("There was a problem. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="rounded-2xl bg-white lg:w-md">
      {success ? (
        <div class="bg-success-light text-success mb-4 rounded-lg p-4 font-bold">
          {success}
        </div>
      ) : (
        <form
          class="flex flex-col space-y-8 sm:flex-row lg:flex-col"
          onSubmit={handleSubmit}
        >
          <fieldset
            class={`flex flex-col space-y-6 sm:flex-row lg:flex-col ${
              loading ? "pointer-events-none opacity-50" : ""
            }`}
            disabled={loading}
          >
            <h3 class="text-xl font-bold">{heading.title}</h3>

            <div>
              <input
                autocomplete="on"
                id="email"
                placeholder="Email"
                name="email"
                required
                type="email"
                value={email}
                onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                class="focus:border-primary mb-2 w-full rounded-xl border-1 border-[#CCCCCC] py-2 pl-4 focus:outline-none"
                disabled={loading}
              />

              <label class="flex cursor-pointer items-center space-x-3 text-sm select-none">
                <div class="relative">
                  <input
                    name="notificationOptIn"
                    class="peer absolute h-5 w-5 cursor-pointer opacity-0"
                    type="checkbox"
                    checked={isOptedIn}
                    onChange={() => setIsOptedIn(!isOptedIn)}
                    disabled={loading}
                  />
                  <div class="peer-checked:border-primary peer-checked:bg-primary flex h-5 w-5 items-center justify-center rounded border border-gray-400 transition">
                    <IconTick strokeColor={"#FFFFFF"} />
                  </div>
                </div>
                <span>
                  I agree to the{" "}
                  <a
                    href="/privacy"
                    class="text-primary-dark underline"
                    target="_blank"
                  >
                    privacy policy
                  </a>{" "}
                  and to receive occasional email updates.
                </span>
              </label>
            </div>

            {error && <p class="text-error text-sm font-bold">{error}</p>}

            <TriffectaButton type="submit" disabled={loading}>
              {loading ? "Submitting..." : heading.button}
            </TriffectaButton>
          </fieldset>
        </form>
      )}
    </div>
  );
}
