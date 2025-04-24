import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

function isWeekend(date) {

    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}


  let today = dayjs();


for (let i = 0; i <= 10; i++) {
    let deliveryDate = today.subtract(i, 'days');
    let deliveryString = deliveryDate.format('dddd, MMMM D');
    console.log(`${deliveryString} - Weekend? ${isWeekend(deliveryDate)}`);
}