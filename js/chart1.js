   var ctx = document.getElementById('myChart');
   var myChart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
           datasets: [{
               label: '# Data Tertinggi',
               data: [500, 200, 300, 450, 250, 100, 250, 350, 150, 389, 239, 410],
               backgroundColor: [
                   'red',
                   'yellow',
                   'blue',
                   'green',
                   'darkred',
                   'deeppink',
                   'glod',
                   'darkorchid',
                   'greenyellow',
                   'lime',
                   'mediumseagreen',
                   'navy'
               ],
               borderColor: [
                   'red',
                   'yellow',
                   'blue',
                   'green',
                   'darkred',
                   'deeppink',
                   'glod',
                   'darkorchid',
                   'greenyellow',
                   'lime',
                   'mediumseagreen',
                   'navy'
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero: true
                   }
               }]
           }
       }
   });