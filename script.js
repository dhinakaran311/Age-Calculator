function clearFields() {
  document.getElementById("dob").value = "";
  document.getElementById("todayDate").value = "";
  document.getElementById("ageResult").innerText = "Years: 00 | Months: 00 | Days: 00";
  document.getElementById("nextBirthday").innerText = "Months: 00 | Days: 00";
  document.getElementById("extraInfo").innerText = "";
}

function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date(document.getElementById("todayDate").value || new Date());

  if (isNaN(dob.getTime())) {
    alert("Please enter a valid date of birth.");
    return;
  }

  let ageYear = today.getFullYear() - dob.getFullYear();
  let ageMonth = today.getMonth() - dob.getMonth();
  let ageDay = today.getDate() - dob.getDate();

  if (ageDay < 0) {
    ageMonth--;
    ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  document.getElementById("ageResult").innerText = `Years: ${ageYear} | Months: ${ageMonth} | Days: ${ageDay}`;

  // Next Birthday
  let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  let diffTime = nextBirthday - today;
  let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let monthsLeft = Math.floor(diffDays / 30);
  let daysLeft = diffDays % 30;

  document.getElementById("nextBirthday").innerText = `Months: ${monthsLeft} | Days: ${daysLeft}`;

  // Extras
  let totalDays = Math.floor((today - dob) / (1000 * 60 * 60 * 24));
  let totalWeeks = Math.floor(totalDays / 7);
  let totalMonths = ageYear * 12 + ageMonth;
  let totalHours = totalDays * 24;
  let totalMinutes = totalHours * 60;
  let totalSeconds = totalMinutes * 60;

  document.getElementById("extraInfo").innerHTML = `
    Total Years: ${ageYear}<br>
    Total Months: ${totalMonths}<br>
    Total Weeks: ${totalWeeks}<br>
    Total Days: ${totalDays}<br>
    Total Hours: ${totalHours}<br>
    Total Minutes: ${totalMinutes}<br>
    Total Seconds: ${totalSeconds}
  `;
}
