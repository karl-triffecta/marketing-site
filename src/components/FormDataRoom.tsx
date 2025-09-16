import IconExternalLink from "./icon/IconExternalLink";
import { useState } from "preact/hooks";
import IconCross from "./icon/IconCross.tsx";
import IconMagnify from "./icon/IconMagnify.tsx";

export default function FormDataRoom() {
  const folders = [
    {
      title: "Resources",
      cards: [
        {
          title: "Pitch Deck",
          href: "https://drive.google.com/file/d/1B8X7IFl9pRg9OyZIFa7XaYrlcFIHWk0b/view?usp=share_link",
        },
        {
          title: "Our Team",
          href: "https://drive.google.com/file/d/1Dbjkzm7GB-lFFSu5CdOq9hnF2fB4sc6-/view?usp=drive_link",
        },
        {
          title: "Business Docs",
          href: "https://drive.google.com/drive/folders/1kkIm8BQaqtf4_4rw5prLJiemz5sM4btS?usp=drive_link",
        },
      ],
    },
    {
      title: "Proposition",
      cards: [
        {
          title: "Competitive Landscape",
          href: "https://drive.google.com/file/d/1AcYAzLtGPAPM-CFEsxwWSQ7CGuKX6BYL/view?usp=drive_link",
        },
        {
          title: "Market Opportunity",
          href: "https://drive.google.com/file/d/1pWhHk5IYyrBCHVdVsRphe7h3Fd4jcUQH/view?usp=drive_link",
        },
        {
          title: "Product Roadmap",
          href: "https://drive.google.com/file/d/1TqMfkgC52YpaK9PgiMcXKelQAqeawT6Z/view?usp=share_link",
        },
      ],
    },
    {
      title: "Product Overview",
      cards: [
        {
          title: "Product Video",
          href: "https://drive.google.com/file/d/1D9i1Al1Cf6F4s0OHnZbPT_eq44SQO2_L/view?usp=share_link",
        },
        {
          title: "Tech Docs",
          href: "https://drive.google.com/drive/folders/1aM_Mi9Dyh00ApO8MmzVfmdsIlegP38Sk?usp=drive_link",
        },
      ],
    },
    {
      title: "Due Diligence",
      cards: [
        {
          title: "Banking Docs",
          href: "https://drive.google.com/drive/folders/1YrljXhg3vIR5_6jrCpA8bI0mw2icVKj9?usp=drive_link",
        },
        {
          title: "Cap Table",
          href: "https://drive.google.com/file/d/11AE7vzUxuRs3ArrDJ34QtezDEj4_gXcU/view?usp=drive_link",
        },
        {
          title: "Customer Contracts",
          href: "https://drive.google.com/drive/folders/1FYkmklwkfi7aFC__dE_eHU-LhehBLCNz?usp=drive_link",
        },
        {
          title: "Insurance Docs",
          href: "https://drive.google.com/drive/folders/1B6tslXOVkwTHziorAF5v_dXbDVeplX1c?usp=drive_link",
        },
        {
          title: "SEIS / EIS Advanced Assurance",
          href: "https://drive.google.com/drive/folders/1sWnWImtyi9w8Lk6JnCsmgNReNibHkApG?usp=drive_link",
        },
      ],
    },
    {
      title: "Financials",
      cards: [
        {
          title: "Financials Overview",
          href: "https://drive.google.com/file/d/1Z6sMt3fPtgnHOwmPpRgwQRGTeSx-yoGU/view?usp=share_link",
        },
        {
          title: "Financial Forecast",
          href: "https://docs.google.com/spreadsheets/d/1WoOmlU7HJL7SoXz4oHNNJTTb5YmEBvbVsGoQx2O3Big/view?usp=drive_link",
        },
        {
          title: "Software Development Transactions",
          href: "https://drive.google.com/file/d/1ZkTVVvDMwfHpJZ1QcKp91NXUqc8JIHK0/view?usp=share_link",
        },
        {
          title: "Depreciation Schedule",
          href: "https://drive.google.com/file/d/12-NXvuHOfdrRb_3z6KMinOKNMhLV1Zej/view?usp=drive_link",
        },
      ],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    setSearchQuery(target?.value.toLowerCase() ?? "");
  };

  const filteredFolders = folders.map((folder) => ({
    ...folder,
    cards: folder.cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery),
    ),
  }));

  return (
    <>
      <section class="mx-auto pt-6">
        <div class="relative container">
          <div class="lg:grid lg:grid-cols-2 lg:px-6">
            <div class="w-full"></div>

            <div class="w-full">
              <div class="relative w-full">
                <input
                  type="text"
                  placeholder="Filter cards..."
                  class="focus:border-primary w-full rounded-xl border-1 border-[#CCCCCC] py-2 pr-10 pl-4 focus:outline-none"
                  value={searchQuery}
                  onInput={handleSearch}
                />
                <button
                  type="button"
                  class={`absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-700 focus:outline-none ${searchQuery.length > 0 ? "cursor-pointer" : ""}`}
                  tabIndex={-1}
                  onClick={() => searchQuery && setSearchQuery("")}
                  aria-label={searchQuery ? "Clear search" : "Search help"}
                >
                  {searchQuery ? (
                    <IconCross size={"20px"} strokeColor={"#000000"} />
                  ) : (
                    <IconMagnify size={"20px"} strokeColor={"#000000"} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="mt-8 mb-8 lg:mt-0">
        {filteredFolders.map((folder) => (
          <section class="mx-auto py-1">
            <div class="relative container">
              <div class="lg:p-6">
                <h2
                  class={`mt-4 text-2xl font-bold ${!folder.cards.length ? "text-gray-400" : ""}`}
                >
                  {folder.title}
                </h2>
                <div class="relative grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 pt-4 pb-1">
                  {folder.cards.map((card) => (
                    <a
                      href={card.href}
                      target="_blank"
                      class="group flex flex-col rounded-2xl bg-white shadow-[0_4px_12px_rgba(25,25,25,0.03),0_1px_2px_rgba(25,25,25,0.02),0_0_0_1px_rgba(42,28,0,0.07)] transition hover:shadow-lg"
                    >
                      <div class="flex items-center px-3 py-2.5">
                        <span class="group-hover:text-primary-dark flex-grow text-[15px] font-medium text-gray-800">
                          {card.title}
                        </span>
                        <div class="group-hover:stroke-primary-dark stroke-gray-800">
                          <IconExternalLink size="20px" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
