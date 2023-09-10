const displayTime = document.querySelector('#displayTime');
const displayDate = document.querySelector('#displayDate');
update();
setInterval(update, 1000);


function update(){
    let date = new Date();
    displayTime.innerHTML = formatTime(date);
    displayDate.innerHTML = formatDate(date);

    function formatTime(date){
        let hrs = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        let amOrPm = hrs >= 12 ? 'PM' : 'AM';
        hrs = (hrs % 12) || 12;

        hrs = formatZero(hrs);
        mins = formatZero(mins);
        secs = formatZero(secs);

        function formatZero(unit){
            return unit < 10 ? '0' + unit : unit;
        }
        
        return `${hrs}:${mins}:${secs} ${amOrPm}`;
    }

    function formatDate(date){
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];
        const month = monthNames[date.getMonth()];
        const days = date.getDate();

        year = date.getFullYear();        
        return `${days} ${month} ${year}`
    }
}