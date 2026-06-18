const week = document.getElementById("weekID");

week.addEventListener("change", function(){
    const arr0 = week.value.split('-W');
    const year = Number(arr0[0]);          
    const weekNum = Number(arr0[1]);
    const jan4 = new Date(year, 0, 4);
    const dayOfWeek = jan4.getDay();
    const mondayOffSet = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    const monday = new Date(jan4);
    monday.setDate(jan4.getDate() - mondayOffSet + (weekNum - 1) * 7);
    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);
    const options1 = { month: 'long', day: 'numeric'};
    const options2 = {day: 'numeric', year: 'numeric' };
    const dateRange = monday.toLocaleDateString('en-US',options1) + ' - ' + saturday.toLocaleDateString('en-US',options2);
    console.log("Date is " + dateRange);
        const paragraph = document.getElementById('weekRange');
        paragraph.innerText = dateRange;
}
);

