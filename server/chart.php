<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" integrity="sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div class="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800 w-full ">
         <div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">

                  <div class="col-xl-4 col-lg-5">
                           <div class="card shadow mb-4">
                                    <!-- Card Header - Dropdown -->
                                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                             <h6 class="m-0 font-weight-bold text-primary">Trading</h6>
                                             <div class="dropdown no-arrow">
                                                      <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                               <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                      </a>
                                                      <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                                               <div class="dropdown-header">Dropdown Header:</div>
                                                               <a class="dropdown-item" href="#">Action</a>
                                                               <a class="dropdown-item" href="#">Another action</a>
                                                               <div class="dropdown-divider"></div>
                                                               <a class="dropdown-item" href="#">Something else here</a>
                                                      </div>
                                             </div>
                                    </div>
                                    <!-- Card Body -->
                                    <div class="card-body">
                                             <div class="chart-pie pt-4 pb-2">
                                                      <canvas id="myPieChart"></canvas>
                                             </div>
                                             <div class="mt-4 text-center small">
                                                      <span class="mr-2">
                                                               <i class="fas fa-circle text-primary"></i> Loss
                                                      </span>
                                                      <span class="mr-2">
                                                               <i class="fas fa-circle text-success"></i> Won
                                                      </span>
                                                      <span class="mr-2">
                                                               <i class="fas fa-circle text-info"></i> Pending
                                                      </span>
                                             </div>
                                    </div>
                           </div>
                  </div>
         </div>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js" integrity="sha512-WW8/jxkELe2CAiE4LvQfwm1rajOS8PHasCCx+knHG0gBHt8EXxS6T6tJRTGuDQVnluuAvMxWF4j8SNFDKceLFg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
         <script>
                  // ApexCharts options and config
                  window.addEventListener("load", function() {
                           const getChartOptions = () => {
                                    return {
                                             series: ["30", "40", "1"],
                                             colors: ["#1C64F2", "#16BDCA", "#9061F9"],
                                             chart: {
                                                      height: 420,
                                                      width: "100%",
                                                      type: "pie",
                                             },
                                             stroke: {
                                                      colors: ["white"],
                                                      lineCap: "",
                                             },
                                             plotOptions: {
                                                      pie: {
                                                               labels: {
                                                                        show: true,
                                                               },
                                                               size: "100%",
                                                               dataLabels: {
                                                                        offset: -25
                                                               }
                                                      },
                                             },
                                             labels: ["Approve", "Declined", "Pending"],
                                             dataLabels: {
                                                      enabled: true,
                                                      style: {
                                                               fontFamily: "Inter, sans-serif",
                                                      },
                                             },
                                             legend: {
                                                      position: "bottom",
                                                      fontFamily: "Inter, sans-serif",
                                             },
                                             yaxis: {
                                                      labels: {
                                                               formatter: function(value) {
                                                                        return value + "%"
                                                               },
                                                      },
                                             },
                                             xaxis: {
                                                      labels: {
                                                               formatter: function(value) {
                                                                        return value + "%"
                                                               },
                                                      },
                                                      axisTicks: {
                                                               show: false,
                                                      },
                                                      axisBorder: {
                                                               show: false,
                                                      },
                                             },
                                    }
                           }

                           if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
                                    const chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
                                    chart.render();
                           }
                  });
         </script>
</div>