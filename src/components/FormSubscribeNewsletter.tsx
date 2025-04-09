import { useState } from "preact/hooks";
import TriffectaButton from "./TriffectaButton";

export default function FormSubscribeNewsletter() {
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
      setError("You must agree to the privacy policy.");
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
        <div class="mb-4 rounded-lg bg-green-100 p-4 text-green-700">
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
            <h3 class="text-xl font-bold">Subscribe to our Newsletter</h3>

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
                class="mb-2 w-full rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
                disabled={loading}
              />

              <label class="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={isOptedIn}
                  onChange={() => setIsOptedIn(!isOptedIn)}
                  disabled={loading}
                />
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

            <TriffectaButton
              type="submit"
              disabled={loading || !isOptedIn || !validateEmail(email)}
            >
              {loading ? "Submitting..." : "Subscribe"}
            </TriffectaButton>

            {error && <p class="text-sm text-red-600">{error}</p>}
          </fieldset>
        </form>
      )}
    </div>
  );
}
