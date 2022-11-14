<template>
  <div class="container mx-auto">
    <p>dashboard</p>
    <div class="shadow-lg rounded-lg overflow-hidden">
        <div class="py-3 px-5 bg-gray-50">Line chart</div>
        <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

export default {
    name: "dashboard",
    data() {
        return {

        }
    },
    mounted() {
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    }
}
</script>

<style>

</style>