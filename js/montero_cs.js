var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    options: {
        // title: {
        //     display: true,
        //     text: 'Frequency Of Travel',
        //     fontFamily: 'Montserrat',
        //     fontSize: 12
        // },
        legend: {
            display: true,
            position: 'right'
        },
        animation:{
            duration: 800,
            easing: 'easeInOutQuint'
        },
        plugins: {
            deferred: {
            xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
            yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
            delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
        }
    },  
        cutoutPercentage: 80,
        responsive: true, maintainAspectRatio: false
    },
    data: {
        labels: ["Once in 6 months", "Once in a year", "Once in 3 months", "Once in 2 months", "Once in 2 years", "Monthly", "Infrequently"],
        datasets: [{
            label: 'Frequency of travel',
            data: [35.5, 29, 12.9, 8.6, 7.5, 4.3, 2.2],
            backgroundColor: [
                'rgba(0, 60, 73, 1)',
                'rgba(0, 85, 104, 1)',
                'rgba(0, 124, 137, 1)',
                'rgba(16, 173, 189, 1)',
                'rgba(49, 215, 233, 1)',
                'rgba(35, 198, 215, 1)',
                'rgba(147, 243, 253, 1)'
            ],
            borderColor: [
                'rgba(0, 60, 73, 1)',
                'rgba(0, 85, 104, 1)',
                'rgba(0, 124, 137, 1)',
                'rgba(16, 173, 189, 1)',
                'rgba(49, 215, 233, 1)',
                'rgba(35, 198, 215, 1)',
                'rgba(147, 243, 253, 1)'
            ],
            borderWidth: 1
        }]
    }
});


var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    options: {
        // title: {
        //     display: true,
        //     text: 'Travel Planning',
        //     fontFamily: 'Montserrat',
        //     fontSize: 12
        // },
        legend: {
            display: true,
            position: 'right'
        },
        animation:{
            duration: 800,
            easing: 'easeInOutQuint'
        },
        plugins: {
            deferred: {
            xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
            yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
            delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
        }
    },
        cutoutPercentage: 80, responsive: true, maintainAspectRatio: false
    },
    data: {
        labels: ["On their own", "Travel agency", "Friends & Family", "All of the above"],
        datasets: [{
            label: 'Travel Planning',
            data: [75.3, 17.2, 5.3, 2.2],
            backgroundColor: [
                'rgba(0, 60, 73, 1)',
                'rgba(0, 85, 104, 1)',
                'rgba(0, 124, 137, 1)',
                'rgba(16, 173, 189, 1)'
            ],
            borderColor: [
                'rgba(0, 60, 73, 1)',
                'rgba(0, 85, 104, 1)',
                'rgba(0, 124, 137, 1)',
                'rgba(16, 173, 189, 1)'
            ],
            borderWidth: 1
        }]
    }
});

