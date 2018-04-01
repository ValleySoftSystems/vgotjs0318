
function sleepin (weekday, vacation) {
  if (!weekday || vacation)
    return true;
  else
    return false;
}


console.log(sleepin (true, true));