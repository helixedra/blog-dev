export function formatDate(input: any) {
  let dateObj: Date;

  if (input instanceof Date) {
    dateObj = input;
  } else if (typeof input === "number" || typeof input === "string") {
    dateObj = new Date(input);
  } else {
    return {
      formattedDate: "Invalid date",
      shortDate: "Invalid date",
      time: "Invalid date",
      timeAgo: "Invalid date",
    };
  }

  if (isNaN(dateObj.getTime())) {
    return {
      formattedDate: "Invalid date",
      shortDate: "Invalid date",
      time: "Invalid date",
      timeAgo: "Invalid date",
    };
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateObj);

  const shortDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(dateObj);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateObj);

  const now = Date.now();
  const delta = now - dateObj.getTime();

  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;
  const ONE_WEEK = 7 * ONE_DAY;

  let timeAgo: string;
  if (delta < ONE_MINUTE) {
    timeAgo = "Just now";
  } else if (delta < ONE_HOUR) {
    const minutes = Math.floor(delta / ONE_MINUTE);
    timeAgo = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (delta < ONE_DAY) {
    const hours = Math.floor(delta / ONE_HOUR);
    timeAgo = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (delta < ONE_WEEK) {
    const days = Math.floor(delta / ONE_DAY);
    timeAgo = `${days} day${days > 1 ? "s" : ""} ago`;
  } else {
    timeAgo = formattedDate;
  }

  return {
    formattedDate,
    shortDate,
    time,
    timeAgo,
  };
}
