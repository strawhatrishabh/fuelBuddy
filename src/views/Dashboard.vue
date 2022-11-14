<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
    <div class="md:w-6/12 lg:w-5/12 mb-12 md:mb-0">
      <div class="shadow-lg rounded-lg overflow-hidden">
          <canvas id="myChart1"></canvas>
      </div>
    </div>
    <div class="md:w-6/12 lg:w-5/12 mb-12 md:mb-0">
      <div class="shadow-lg rounded-lg overflow-hidden">
          <canvas id="myChart2"></canvas>
      </div>
    </div>
    <div class="md:w-6/12 lg:w-5/12 mb-12 md:mb-0">
      <div class="shadow-lg rounded-lg overflow-hidden">
          <canvas id="myChart3"></canvas>
      </div>
    </div>
    <div class="md:w-6/12 lg:w-5/12 mb-12 md:mb-0">
      <div class="shadow-lg rounded-lg overflow-hidden">
          <canvas id="myChart4"></canvas>
      </div>
    </div>
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
        const myChart1 = new Chart(
            document.getElementById('myChart1'),
            config
        );
        const myChart2 = new Chart(
            document.getElementById('myChart2'),
            config
        );
        const myChart3 = new Chart(
            document.getElementById('myChart3'),
            config
        );
        const myChart4 = new Chart(
            document.getElementById('myChart4'),
            config
        );
    }
}
</script>

<style>

</style>