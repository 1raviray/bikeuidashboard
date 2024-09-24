const ctx = document.getElementById('okCanvas2');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jun','Jul','Aug','Sep','Oct','Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'This year',
      data: [250, 140, 196, 175, 242, 183,201, 189, 163, 210, 184, 222],
      borderColor: '#FFC107',
      backgroundColor: '#FFC10720',
      fill:true,
      tension: 0.4
    },
    {
      label: 'Same period last year',
      data: [201, 189, 163, 210, 184, 222,250, 140, 196, 175, 242, 206],
      borderColor: '#00000020',
      backgroundColor: '#00000020',
      // border:'dotted',
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: {
        // beginAtZero: true,
        ticks: {
          maxTicksLimit: 4
        }
      }
    }
  }
});
const as = document.getElementById('okCanvas21');

new Chart(as, {
  type: 'line',
  data: {
    labels: ['Jun','Jul','Aug','Sep','Oct','Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'This year',
      data: [200, 250, 190, 220, 236, 183,201, 189, 163, 210, 184, 222],
      borderColor: 'rgb(47, 60, 200)',
      backgroundColor: 'rgb(47, 60, 200,0.2)',
      fill:true,
      tension: 0.4
    },
    {
      label: 'Same period last year',
      data: [201, 189, 163, 210, 184, 222,250, 140, 196, 175, 242, 206],
      borderColor: '#00000020',
      backgroundColor: '#00000020',
      // border:'dotted',
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: {
        // beginAtZero: true,
        ticks: {
          maxTicksLimit: 4
        }
      }
    }
  }
});






const e = document.getElementById('myChart1');

new Chart(e, {
  type: 'doughnut',
  data: {
    // labels: ['Hired', 'Cancel', 'Pending'],
    datasets: [{
      data: [54, 20, 26],
      fill: true,
      backgroundColor: [
        '#006AFF',
        '#FF2727',
        '#52C93F'
      ],
      hoverOffset: 4,
      borderWidth: 1
    }]
  }
});

