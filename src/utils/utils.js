const calculateWorkTime = (start, end) => {
  const startDate = new Date(start);
  let endDate = end === "Present" ? new Date() : new Date(end);
  
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    console.error("Invalid date format", { start, end });
    return;
  }
  
  if (startDate > endDate) {
    console.error("Start date cannot be after end date", { start, end });
    return;
  }
  
  const diff = endDate.getTime() - startDate.getTime(); //calculates difference in milliseconds
  
  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / day);
  
  let totalMonths;
  if (end === "Present" && endDate.getDate() <= 15) {
    totalMonths = Math.floor(days / 30.44); //average days in a month (365.25/12)
  } else {
    totalMonths = Math.floor(days / 30.44) + 1; //count partial months
  }
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years > 0) {
    const yearText = years === 1 ? "year" : "years";
    if (months > 0) {
      const monthText = months === 1 ? "month" : "months";
      return `${years} ${yearText}, ${months} ${monthText}`;
    } else {
      return `${years} ${yearText}`;
    }
  } else {
    const monthText = totalMonths === 1 ? "month" : "months";
    return end === "Present" ? 
      `${totalMonths} ${monthText} & counting` : 
      `${totalMonths} ${monthText}`;
  }
};

export default calculateWorkTime;