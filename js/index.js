if ($('#mapCtn').length != 0) {
    $.getJSON('js/yunnan.json', function (geojson) {
        // var URLs = {};
        // for (var f in geojson.features) {
        //     URLs[geojson.features[f].properties.name] = '#111'
        //     // console.log(f)
        // }
        $('#map').highcharts('Map', {
            title: {
                text: null
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                map: {
                    series: {
                        states: {
                            hover: {
                                color: "red"
                            }
                        }
                    }
                }
            },
            series: [{
                data: [
                    {
                        id: 5308,
                        value: 1
                    },
                    {
                        id: 5325,
                        value: 1
                    },
                    {
                        id: 5326,
                        value: 1
                    },
                    {
                        id: 5303,
                        value: 1
                    },
                    {
                        id: 5323,
                        value: 1
                    },
                    {
                        id: 5329,
                        value: 1
                    },
                    {
                        id: 5309,
                        value: 1
                    },
                    {
                        id: 5334,
                        value: 1
                    },
                    {
                        id: 5306,
                        value: 1
                    },
                    {
                        id: 5301,
                        value: 1
                    },
                    {
                        id: 5307,
                        value: 1
                    },
                    {
                        id: 5328,
                        value: 1
                    },
                    {
                        id: 5305,
                        value: 1
                    },
                    {
                        id: 5304,
                        value: 1
                    },
                    {
                        id: 5333,
                        value: 1
                    },
                    {
                        id: 5331,
                        value: 1
                    }
                ],
                joinBy: ['id'],
                // nullColor: '#3a729b',//地图块背景色
                backgroundColor: 'null',
                nullInteraction: true,
                mapData: geojson,
                events: {
                    click: function (e) {
                        // window.open(this.series.userOptions.URLs[this.point.properties.name])
                        // console.log(e)
                    }
                },
                point: {
                    events: {
                        click: function (e) {
                            // window.open(this.series.userOptions.URLs[this.point.properties.name])
                            // console.log(this.series.userOptions.URLs[this.point.id])
                        }
                    }
                },
                color: "#6bd996",
                states: {
                    hover: {
                        // color: "#fff",
                        borderColor: "#fff",
                        brightness: 0.1,
                        borderWidth: 2
                    }
                },
                // borderWidth: 2,
                // borderColor: '#fff',
                URLs: {
                    /*
                    id与map.json相对应
                    */
                    "5308": {
                        "name": "普洱市",
                        "href": "#普洱市"
                    },
                    "5325": {
                        "name": "红河哈尼族彝族自治州",
                        "href": "#红河哈尼族彝族自治州"
                    },
                    "5326": {
                        "name": "文山壮族苗族自治州",
                        "href": "#文山壮族苗族自治州"
                    },
                    "5303": {
                        "name": "曲靖市",
                        "href": "#曲靖市"
                    },
                    "5323": {
                        "name": "楚雄彝族自治州",
                        "href": "#楚雄彝族自治州"
                    },
                    "5329": {
                        "name": "大理白族自治州",
                        "href": "#大理白族自治州"
                    },
                    "5309": {
                        "name": "临沧市",
                        "href": "#临沧市"
                    },
                    "5334": {
                        "name": "迪庆藏族自治州",
                        "href": "#迪庆藏族自治州"
                    },
                    "5306": {
                        "name": "昭通市",
                        "href": "#昭通市"
                    },
                    "5301": {
                        "name": "昆明市",
                        "href": "#昆明市"
                    },
                    "5307": {
                        "name": "丽江市",
                        "href": "#丽江市"
                    },
                    "5328": {
                        "name": "西双版纳傣族自治州",
                        "href": "#西双版纳傣族自治州"
                    },
                    "5305": {
                        "name": "保山市",
                        "href": "#保山市"
                    },
                    "5304": {
                        "name": "玉溪市",
                        "href": "#玉溪市"
                    },
                    "5333": {
                        "name": "怒江傈僳族自治州",
                        "href": "#怒江傈僳族自治州"
                    },
                    "5331": {
                        "name": "德宏傣族景颇族自治州",
                        "href": "#德宏傣族景颇族自治州"
                    }
                },
                dataLabels: {
                    enabled: true,
                    color: '#fff',
                    style: {
                        'color': '#fff',
                        'fontSize': '13px'
                    },
                    // format: '{point.properties.name}'
                    formatter: function () {
                        // console.log()
                        return "<a class='locLink' href='" + this.series.userOptions.URLs[this.point.properties.id].href /*this.point.properties.name*/ + "'>" + this.point.properties.name + "</a>"
                    },
                    useHTML: true
                    // crop: false,
                    // allowOverlap:true
                },
                cursor: "pointer"
            }],
            tooltip: {
                enabled:false
            }
        }, function () {
            var hongheMap = $('#map').highcharts();
            var URLarr = $('#map').highcharts().pointer.options.series[0].URLs;
            // for (var x in $('#map').highcharts().pointer.options.series[0].URLs) {
            //     URLarr.push($('#map').highcharts().pointer.options.series[0].URLs[x])
            // }
            $("#map").on("click", "[class*=highcharts-name-]", function () {
                location.href = URLarr[this.point.id].href;
                // .series.userOptions.URLs[this.point.properties.id].href
                // console.dir(URLarr[this.point.id].href)
            })
            // $("#map").on("hover", "[class*=highcharts-name-]", function () {
            //     $(this)[0].point.color = "#e16845";
            // })
        });

    });
}