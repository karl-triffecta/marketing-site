import { useEffect, useState } from "preact/hooks";
import TriffectaButton from "./TriffectaButton";
interface ConsentSettings {
  analytics_storage?: "granted" | "denied";
  ad_storage?: "granted" | "denied";
  ad_user_data?: "granted" | "denied";
  ad_personalization?: "granted" | "denied";
}

export default function CookieBanner({ baseUrl = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("cookies_accepted="));

    if (cookiesAccepted) {
      updateConsent(true);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie =
      "cookies_accepted=true; max-age=2592000; path=/; Secure; SameSite=Strict";
    setVisible(false);
    updateConsent(true);
  };

  const updateConsent = (granted: boolean) => {
    // @ts-ignore
    if (typeof window.gtag === "function") {
      const consentUpdate: ConsentSettings = granted
        ? {
            analytics_storage: "granted",
            ad_storage: "granted", // Grant all as simple "Accept All"
            ad_user_data: "granted",
            ad_personalization: "granted",
          }
        : {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
          };
      // @ts-ignore
      window.gtag("consent", "update", consentUpdate);
    }
  };

  if (!visible) return null;

  return (
    <div class="border-ink-200 bg-surface/95 shadow-elevated fixed bottom-0 left-0 z-50 w-full border-t backdrop-blur-[6px]">
      <div class="container-content flex flex-col items-start justify-between gap-4 py-3 sm:flex-row sm:items-center">
        <p class="text-ink-600 text-sm leading-5">
          This website uses cookies to ensure you get the best experience. See
          our{" "}
          <a
            href={`${baseUrl}privacy`}
            class="text-ink-900 decoration-ink-300 hover:decoration-ink-700 focus-visible:outline-focus-ring font-medium underline underline-offset-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Privacy
          </a>{" "}
          and{" "}
          <a
            href={`${baseUrl}cookies`}
            class="text-ink-900 decoration-ink-300 hover:decoration-ink-700 focus-visible:outline-focus-ring font-medium underline underline-offset-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Cookie
          </a>{" "}
          Policies for more.
        </p>
        <TriffectaButton
          variant="dark"
          onClick={acceptCookies}
          className="shrink-0 !px-4 !py-2"
        >
          Accept
        </TriffectaButton>
      </div>
    </div>
  );
}
