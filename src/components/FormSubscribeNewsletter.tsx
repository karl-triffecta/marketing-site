import { useState } from "preact/hooks";
import TriffectaButton from "./TriffectaButton";
import IconTick from "./icon/IconTick";

export default function FormSubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const [isOptedIn, setIsOptedIn] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value: string) => {
    return value
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

  if (success) {
    return (
      <div class="rounded-design-md bg-success-light text-success p-4 font-bold">
        {success}
      </div>
    );
  }

  return (
    <form class="w-full" onSubmit={handleSubmit}>
      <fieldset
        class={loading ? "pointer-events-none opacity-50" : ""}
        disabled={loading}
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label class="sr-only" for="newsletter-email">
            Your work email
          </label>
          <input
            autocomplete="email"
            id="newsletter-email"
            placeholder="Your work email"
            name="email"
            required
            type="email"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            class="rounded-design-md border-ink-300 bg-surface text-ink-900 placeholder:text-ink-400 focus-visible:outline-focus-ring w-full flex-1 border px-[17px] py-[14px] text-sm focus:border-teal-600 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            disabled={loading}
          />

          <TriffectaButton
            type="submit"
            variant="dark"
            disabled={loading}
            className="!rounded-design-md !px-6 !py-3 text-sm font-semibold"
          >
            {loading ? "Submitting..." : "Trust us."}
          </TriffectaButton>
        </div>

        <label class="text-ink-500 mt-3 flex cursor-pointer items-start gap-2 text-xs leading-4 select-none">
          <span class="relative mt-0.5 shrink-0">
            <input
              name="notificationOptIn"
              class="peer absolute h-4 w-4 cursor-pointer opacity-0"
              type="checkbox"
              checked={isOptedIn}
              onChange={() => setIsOptedIn(!isOptedIn)}
              disabled={loading}
            />
            <span class="border-ink-300 bg-surface peer-checked:border-action-dark peer-checked:bg-action-dark peer-focus-visible:outline-focus-ring flex h-4 w-4 items-center justify-center rounded border transition peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">
              <IconTick strokeColor="#FFFFFF" />
            </span>
          </span>
          <span>
            I agree to the{" "}
            <a
              href="/privacy"
              class="hover:text-ink-700 focus-visible:outline-focus-ring underline transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>{" "}
            and to receive occasional email updates.
          </span>
        </label>

        {error && <p class="text-error mt-2 text-sm font-bold">{error}</p>}
      </fieldset>
    </form>
  );
}
