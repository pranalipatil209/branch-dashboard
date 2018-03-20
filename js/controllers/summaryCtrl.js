angular.module("branch-dashboard")
    .controller("summaryCtrl", function($scope, $http, $state, authService, $timeout) {

        Highcharts.chart('chart2', {
            chart: {
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                'Average count: <b>{point.y}%</b><br/>'
            },
            plotOptions : {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{
                minPointSize: 10,
                innerSize: '78%',
                zMin: 0,
                name: 'countries',
                data: [{
                    name: 'Clicks',
                    color: '#46d4cd',
                    colorIndex: '#46d4cd',
                    y: 70
                }, {
                    name: 'Sign Ups',
                    color: '#f65f50',
                    colorIndex: '#f65f50',
                    y: 30
                }]
            }]
        });

    });