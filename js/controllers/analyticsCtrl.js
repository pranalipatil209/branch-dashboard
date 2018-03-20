angular.module("branch-dashboard")
    .controller("analyticsCtrl", function($scope, $http, $state, authService, $timeout) {
        $scope.dummy = ['ALL NETWORKS', 'FACEBOOK', 'TWITTER', 'INSTAGRAM'];
        $scope.dummy.selected = "ALL NETWORKS";
        $scope.period = 'month';
        $scope.filter = {
          "channel" : $scope.dummy.selected,
          "duration" : $scope.period
        };
        $scope.selectedChannel = function(selected) {
            console.log('selected channl ',selected);
            $scope.dummy.selected = selected;
            $scope.filterChart(selected, $scope.period);
        };
        $scope.showChart = function(span) {
            $scope.period = span;
            $scope.filterChart($scope.dummy.selected, span);
        };
        var perShapeGradient = {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        };
        $scope.filterChart = function(network, span) {
            console.log('data we got --> network - ',network,' span - ',span);
            Highcharts.chart('chart1', {
            chart: {
                type: 'column',
                marginBottom: 50
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Hits'
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: '200',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'center',
                x: -30,
                verticalAlign: 'bottom',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>'
            },
            plotOptions: {
                column: {
                    grouping: false,
                    // stacking: 'normal',
                    // shadow: true,
                    dataLabels: {
                        enabled: true,
                        color: '#424242',
                        crop: false,
                        overflow: 'none'
                    }
                }
            },
            colors: [{
                linearGradient: perShapeGradient,
                stops: [
                    [0, "#f0f1f1"],
                    [1, "#f0f1f1"]
                ]
            }, {
                linearGradient: perShapeGradient,
                stops: [
                    [0, '#f9da68'],
                    [1, '#ee6084']
                ]
            }],
            series: [{
                name: 'Clicks',
                data: [3, 4, 4, 6, 5,11,8,5,3,7,10,4],
                stack: 0,
                color: {
                    linearGradient: perShapeGradient,
                    stops: [
                        [0, "#f0f1f1"],
                        [1, "#f0f1f1"]
                    ]
                }
            }, {
                name: 'Sign Ups',
                data: [2, 2, 3, 2, 1,4,7,1,3,6,8,3],
                stack: 0,
                color: {
                    linearGradient: perShapeGradient,
                    stops: [
                        [0, '#f9da68'],
                        [1, '#ee6084']
                    ]
                }
            }]
        });
        };
        $scope.filterChart($scope.dummy.selected,$scope.period);
    });