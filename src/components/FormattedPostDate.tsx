import { h } from "preact";

type Props = {
  date: string;
};

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default function FormattedPostDate({ date }: Props) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();

  const ordinal = getOrdinalSuffix(day);

  return (
    <time dateTime={date}>
      {day}
      {ordinal} {month} {year}
    </time>
  );
}
