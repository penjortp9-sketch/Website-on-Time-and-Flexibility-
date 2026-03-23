// Animate bar fills when page loads
window.addEventListener('load', function () {

  // Get all bar fill elements
  var bars = document.querySelectorAll('.bar-fill');

  bars.forEach(function (bar) {
    // Read the target width from the data-width attribute
    var targetWidth = bar.getAttribute('data-width') + '%';

    // Start from 0
    bar.style.width = '0%';

    // After a short delay, animate to the real width
    setTimeout(function () {
      bar.style.width = targetWidth;
    }, 300);
  });

});

// ── SURVEY DATA ──
var surveyData = [
  [1,"Female","Office","Yes","Yes","Planning and Scheduling","I manage my flexibility by planning my tasks in advance, prioritising important work and adjusting my schedule when needed to meet deadlines."],
  [2,"Female","Remote","Yes","Yes","Planning and Scheduling","I prepare daily journal and divide my block time of what to do."],
  [3,"Female","Remote","Yes","Yes","Block Time","Yes, I follow my block time that I prepare at morning schedule."],
  [4,"Female","Remote","Yes","Yes","Planning and Scheduling","Even though I have flexibility, I will follow my daily plan and work according to it."],
  [5,"Female","Remote","Yes","Yes","Planning and Scheduling","I will assign certain hours for work and make a schedule, and strictly follow it."],
  [6,"Female","Remote","Yes","Yes","Planning and Scheduling","By making a work schedule."],
  [7,"Female","Remote","Yes","Yes","Planning and Scheduling","I reorganize my schedule based on my deadlines while trying my best to stick with prepared plannings."],
  [8,"Female","Remote","Yes","Yes","Block Time","By allocating specific time for certain task, manage time efficiently."],
  [9,"Male","Office","Yes","Yes","Goal and Task Focus","I can do extra work and unfinished task."],
  [10,"Female","Office","Yes","Yes","Planning and Scheduling","Make plan, and following the schedule accordingly."],
  [11,"Male","Office","Yes","Yes","Planning and Scheduling","I would prioritize important tasks first, create a simple daily plan, and work during my most productive hours."],
  [12,"Male","Office","Yes","Yes","Mixed","I think the work will be delayed if I have was given the flexibility."],
  [13,"Male","Office","Yes","Yes","Deep Work","Dedicating specific deep work hours to focus on complex tasks without interruptions."],
  [14,"Male","Office","No","Yes","Routine and Discipline","I adhere to the timing schedule of the company and adjust myself to fit into the organizational culture."],
  [15,"Female","Remote","No","Yes","Block Time","Dividing the time which work to do."],
  [16,"Male","Office","No","Yes","Planning and Scheduling","I manage my tasks by planning carefully and prioritizing responsibilities within the set schedule."],
  [17,"Female","Office","No","Yes","Personal and Wellness Focus","I would have little rest and spent my time with family."],
  [18,"Female","Office","No","Yes","Learning and Development Focus","I would like to explore new things."],
  [19,"Male","Office","Yes","Yes","Prioritization","The flexibility will be managed by the deadline of the task."],
  [20,"Male","Office","No","Yes","Planning and Scheduling","I manage my work by planning daily tasks in advance and prioritizing urgent operations."],
  [21,"Female","Office","Yes","Yes","Prioritization","I work when there is more work and the most important one first or whose deadline is near."],
  [22,"Female","Office","Yes","Yes","Routine and Discipline","Come to the office on time and work more seriously while doing my job."],
  [23,"Female","Office","Yes","Yes","Planning and Scheduling","Set a correct timetable and work accordingly."],
  [24,"Male","Office","Yes","Yes","Prioritization","I manage my work by prioritizing important tasks first and planning my schedule in advance."],
  [25,"Male","Office","Yes","Yes","Goal and Task Focus","Focus on outcomes."],
  [26,"Male","Office","Yes","Yes","Planning and Scheduling","I set clear priorities and plan my time properly to complete important tasks on time."],
  [27,"Male","Office","Yes","Yes","Planning and Scheduling","I plan tasks in advance and set clear priorities for each day to meet deadlines."],
  [28,"Male","Office","Yes","Yes","Planning and Scheduling","Planning tasks in advance with clear priorities and making sure all deadlines are met on time."],
  [29,"Male","Office","Yes","No","Goal and Task Focus","I would first complete assigned tasks properly and on time, then use extra time to learn more."],
  [30,"Male","Office","Yes","Yes","Goal and Task Focus","Setting strict but flexible working hours and focusing on achieving goals rather than just tracking hours."],
  [31,"Female","Office","Yes","Yes","Personal and Wellness Focus","Its to relax myself."],
  [32,"Female","Office","Yes","Yes","Mixed","I have done better in everything."],
  [33,"Female","Office","No","Yes","Planning and Scheduling","I would plan my schedules accordingly and in advance so that I don't feel pressured at the last minute."],
  [34,"Female","Office","Yes","Yes","Flexible Adjustment","I would prioritise important work on my productive day and keep time for meetings to avoid overtime."],
  [35,"Male","Office","Yes","Yes","Planning and Scheduling","I manage flexibility by planning daily tasks based on priority and completing urgent work first."],
  [36,"Female","Office","Yes","Yes","Planning and Scheduling","Planning tasks in advance, setting priorities, and maintaining a clear schedule to meet deadlines."],
  [37,"Male","Office","Yes","Yes","Goal and Task Focus","If I have flexibility in time, I would complete the work on scheduled time."],
  [38,"Male","Office","Yes","Yes","Prioritization","Prioritizing works."],
  [39,"Male","Office","No","Yes","Goal and Task Focus","If I had flexibility I will start my work with a proper time management."],
  [40,"Female","Office","Yes","Yes","Mixed","With time flexibility we can work properly without any worry and work will become efficient."],
  [41,"Female","Office","Yes","Yes","Prioritization","I manage it by prioritizing important tasks first and ensuring all assigned work is completed on time."],
  [42,"Male","Office","Yes","Yes","Flexible Adjustment","I would go with the flow."],
  [43,"Male","Office","Yes","Yes","Mixed","I would work morning shift as my classes are evening and also work during night shift."],
  [44,"Male","Office","Yes","Yes","Planning and Scheduling","Setting clear goals, prioritizing tasks, creating a simple schedule, and avoiding procrastination."],
  [45,"Male","Hybrid","Yes","Yes","Flexible Adjustment","I will work remotely when appropriate and come to office when required, extending hours later in the day."],
  [46,"Male","Office","Yes","Yes","Learning and Development Focus","I would explore new things to get new knowledge and contribute to my company."],
  [47,"Male","Office","Yes","Yes","Personal and Wellness Focus","I would do workout to keep physical health and provide family time."],
  [48,"Male","Office","No","Yes","Learning and Development Focus","I would give knowledge to my students based on my career and other curriculum."],
  [49,"Male","Office","Yes","Yes","Planning and Scheduling","I use free periods to prepare lessons, check students work, and plan activities."]
];

// ── RENDER TABLE ──
function renderTable(data) {
  var tbody = document.getElementById('tableBody');
  var count = document.getElementById('rowCount');
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML = '<tr class="no-results"><td colspan="7">No participants match the selected filters.</td></tr>';
    count.textContent = '0';
    return;
  }

  count.textContent = data.length;

  data.forEach(function(row) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + row[0] + '</td>' +
      '<td>' + row[1] + '</td>' +
      '<td><span class="badge-loc">' + row[2] + '</span></td>' +
      '<td><span class="' + (row[3] === 'Yes' ? 'badge-yes' : 'badge-no') + '">' + row[3] + '</span></td>' +
      '<td><span class="' + (row[4] === 'Yes' ? 'badge-yes' : 'badge-no') + '">' + row[4] + '</span></td>' +
      '<td><span class="badge-mth">' + row[5] + '</span></td>' +
      '<td class="response-text">' + row[6] + '</td>';
    tbody.appendChild(tr);
  });
}

// ── FILTER ──
function filterTable() {
  var gender   = document.getElementById('filterGender').value;
  var location = document.getElementById('filterLocation').value;
  var flex     = document.getElementById('filterFlex').value;
  var method   = document.getElementById('filterMethod').value;

  var filtered = surveyData.filter(function(row) {
    return (!gender   || row[1] === gender) &&
           (!location || row[2].trim() === location) &&
           (!flex     || row[3] === flex) &&
           (!method   || row[5].trim() === method);
  });

  renderTable(filtered);
}

// ── RESET ──
function resetFilters() {
  document.getElementById('filterGender').value   = '';
  document.getElementById('filterLocation').value = '';
  document.getElementById('filterFlex').value     = '';
  document.getElementById('filterMethod').value   = '';
  renderTable(surveyData);
}

// ── BAR ANIMATION (keep existing) ──
window.addEventListener('load', function () {
  // Render table on load
  renderTable(surveyData);

  // Animate bars
  var bars = document.querySelectorAll('.bar-fill');
  bars.forEach(function(bar) {
    var targetWidth = bar.getAttribute('data-width') + '%';
    bar.style.width = '0%';
    setTimeout(function() {
      bar.style.width = targetWidth;
    }, 300);
  });
});
// ── TOGGLE EXPLORER OPEN / CLOSE ──
function toggleExplorer() {
  var content = document.getElementById('explorerContent');
  var arrow   = document.getElementById('explorerArrow');

  if (content.style.display === 'none') {
    content.style.display = 'block';
    arrow.textContent = '▲ Close';
  } else {
    content.style.display = 'none';
    arrow.textContent = '▼ Open';
  }
}
// ── TOGGLE KEY FINDINGS ──
function toggleKeyFindings() {
  var panel  = document.getElementById('keyFindingsPanel');
  var btnTxt = document.getElementById('kfBtnText');

  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    btnTxt.textContent  = '✕ Close Key Findings Report';
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    panel.style.display = 'none';
    btnTxt.textContent  = '📄 View Key Findings Report';
    document.getElementById('technicalCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}