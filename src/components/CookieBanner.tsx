import { useEffect, useState } from "preact/hooks";
import TriffectaButton from "./TriffectaButton";

export default function CookieBanner({ baseUrl = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("cookies_accepted="));

    if (cookiesAccepted) {
      loadAnalytics();
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = `cookies_accepted=true; max-age=${60 * 60 * 24 * 30}; path=/`;
    setVisible(false);
    loadAnalytics();
  };

  const loadAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag(...args) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", "G-C1LG8PF9LR");
  };

  if (!visible) return null;

  return (
    <div
      class="text-accent-dark fixed bottom-0 left-0 z-50 flex w-full flex-row items-center justify-between space-y-0 px-4 py-3 shadow-md"
      style={{ backgroundColor: "rgba(38, 50, 56, 0.85)" }}
    >
      <div class="container mx-auto flex items-center justify-between px-4 sm:px-20">
        <p class="mr-2">
          This website uses cookies to ensure you get the best experience. See
          our{" "}
          <a href={`${baseUrl}privacy`} class="underline">
            Privacy
          </a>{" "}
          and{" "}
          <a href={`${baseUrl}cookies`} class="underline">
            Cookie
          </a>{" "}
          Policies for more.
        </p>
        <TriffectaButton variant="secondary" onClick={acceptCookies}>
          Accept
        </TriffectaButton>
      </div>
    </div>
  );
}
