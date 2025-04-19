export function formatDate(date: Date) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  const shortDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  const ONE_MINUTE = 60000;
  const ONE_HOUR = 3600000;
  const ONE_DAY = 86400000;
  const ONE_WEEK = 604800000;

  const delta = Date.now() - date.getTime();

  let timeAgo: string;
  if (delta < ONE_MINUTE) {
    timeAgo = "Just now";
  } else if (delta < ONE_HOUR) {
    timeAgo = `${Math.floor(delta / ONE_MINUTE)} minutes ago`;
  } else if (delta < ONE_DAY) {
    timeAgo = `${Math.floor(delta / ONE_HOUR)} hours ago`;
  } else if (delta < ONE_WEEK) {
    timeAgo = `${Math.floor(delta / ONE_DAY)} days ago`;
  } else {
    timeAgo = formattedDate;
  }

  return { dateTime: formattedDate, date: shortDate, time, timeAgo };
}