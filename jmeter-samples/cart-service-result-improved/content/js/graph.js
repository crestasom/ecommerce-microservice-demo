/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 210.0, "minX": 0.0, "maxY": 3129.0, "series": [{"data": [[0.0, 210.0], [0.1, 210.0], [0.2, 210.0], [0.3, 210.0], [0.4, 210.0], [0.5, 243.0], [0.6, 243.0], [0.7, 243.0], [0.8, 243.0], [0.9, 243.0], [1.0, 246.0], [1.1, 246.0], [1.2, 246.0], [1.3, 246.0], [1.4, 246.0], [1.5, 277.0], [1.6, 277.0], [1.7, 277.0], [1.8, 277.0], [1.9, 277.0], [2.0, 284.0], [2.1, 284.0], [2.2, 284.0], [2.3, 284.0], [2.4, 284.0], [2.5, 307.0], [2.6, 307.0], [2.7, 307.0], [2.8, 307.0], [2.9, 307.0], [3.0, 308.0], [3.1, 308.0], [3.2, 308.0], [3.3, 308.0], [3.4, 308.0], [3.5, 311.0], [3.6, 311.0], [3.7, 311.0], [3.8, 311.0], [3.9, 311.0], [4.0, 312.0], [4.1, 312.0], [4.2, 312.0], [4.3, 312.0], [4.4, 312.0], [4.5, 317.0], [4.6, 317.0], [4.7, 317.0], [4.8, 317.0], [4.9, 317.0], [5.0, 322.0], [5.1, 322.0], [5.2, 322.0], [5.3, 322.0], [5.4, 322.0], [5.5, 352.0], [5.6, 352.0], [5.7, 352.0], [5.8, 352.0], [5.9, 352.0], [6.0, 378.0], [6.1, 378.0], [6.2, 378.0], [6.3, 378.0], [6.4, 378.0], [6.5, 398.0], [6.6, 398.0], [6.7, 398.0], [6.8, 398.0], [6.9, 398.0], [7.0, 416.0], [7.1, 416.0], [7.2, 416.0], [7.3, 416.0], [7.4, 416.0], [7.5, 462.0], [7.6, 462.0], [7.7, 462.0], [7.8, 462.0], [7.9, 462.0], [8.0, 473.0], [8.1, 473.0], [8.2, 473.0], [8.3, 473.0], [8.4, 473.0], [8.5, 496.0], [8.6, 496.0], [8.7, 496.0], [8.8, 496.0], [8.9, 496.0], [9.0, 500.0], [9.1, 500.0], [9.2, 500.0], [9.3, 500.0], [9.4, 500.0], [9.5, 504.0], [9.6, 504.0], [9.7, 504.0], [9.8, 504.0], [9.9, 504.0], [10.0, 517.0], [10.1, 517.0], [10.2, 517.0], [10.3, 517.0], [10.4, 517.0], [10.5, 537.0], [10.6, 537.0], [10.7, 537.0], [10.8, 537.0], [10.9, 537.0], [11.0, 565.0], [11.1, 565.0], [11.2, 565.0], [11.3, 565.0], [11.4, 565.0], [11.5, 579.0], [11.6, 579.0], [11.7, 579.0], [11.8, 579.0], [11.9, 579.0], [12.0, 579.0], [12.1, 579.0], [12.2, 579.0], [12.3, 579.0], [12.4, 579.0], [12.5, 603.0], [12.6, 603.0], [12.7, 603.0], [12.8, 603.0], [12.9, 603.0], [13.0, 623.0], [13.1, 623.0], [13.2, 623.0], [13.3, 623.0], [13.4, 623.0], [13.5, 649.0], [13.6, 649.0], [13.7, 649.0], [13.8, 649.0], [13.9, 649.0], [14.0, 670.0], [14.1, 670.0], [14.2, 670.0], [14.3, 670.0], [14.4, 670.0], [14.5, 672.0], [14.6, 672.0], [14.7, 672.0], [14.8, 672.0], [14.9, 672.0], [15.0, 673.0], [15.1, 673.0], [15.2, 673.0], [15.3, 673.0], [15.4, 673.0], [15.5, 675.0], [15.6, 675.0], [15.7, 675.0], [15.8, 675.0], [15.9, 675.0], [16.0, 678.0], [16.1, 678.0], [16.2, 678.0], [16.3, 678.0], [16.4, 678.0], [16.5, 684.0], [16.6, 684.0], [16.7, 684.0], [16.8, 684.0], [16.9, 684.0], [17.0, 687.0], [17.1, 687.0], [17.2, 687.0], [17.3, 687.0], [17.4, 687.0], [17.5, 689.0], [17.6, 689.0], [17.7, 689.0], [17.8, 689.0], [17.9, 689.0], [18.0, 689.0], [18.1, 689.0], [18.2, 689.0], [18.3, 689.0], [18.4, 689.0], [18.5, 705.0], [18.6, 705.0], [18.7, 705.0], [18.8, 705.0], [18.9, 705.0], [19.0, 721.0], [19.1, 721.0], [19.2, 721.0], [19.3, 721.0], [19.4, 721.0], [19.5, 726.0], [19.6, 726.0], [19.7, 726.0], [19.8, 726.0], [19.9, 726.0], [20.0, 738.0], [20.1, 738.0], [20.2, 738.0], [20.3, 738.0], [20.4, 738.0], [20.5, 762.0], [20.6, 762.0], [20.7, 762.0], [20.8, 762.0], [20.9, 762.0], [21.0, 775.0], [21.1, 775.0], [21.2, 775.0], [21.3, 775.0], [21.4, 775.0], [21.5, 817.0], [21.6, 817.0], [21.7, 817.0], [21.8, 817.0], [21.9, 817.0], [22.0, 829.0], [22.1, 829.0], [22.2, 829.0], [22.3, 829.0], [22.4, 829.0], [22.5, 839.0], [22.6, 839.0], [22.7, 839.0], [22.8, 839.0], [22.9, 839.0], [23.0, 849.0], [23.1, 849.0], [23.2, 849.0], [23.3, 849.0], [23.4, 849.0], [23.5, 878.0], [23.6, 878.0], [23.7, 878.0], [23.8, 878.0], [23.9, 878.0], [24.0, 888.0], [24.1, 888.0], [24.2, 888.0], [24.3, 888.0], [24.4, 888.0], [24.5, 898.0], [24.6, 898.0], [24.7, 898.0], [24.8, 898.0], [24.9, 898.0], [25.0, 911.0], [25.1, 911.0], [25.2, 911.0], [25.3, 911.0], [25.4, 911.0], [25.5, 916.0], [25.6, 916.0], [25.7, 916.0], [25.8, 916.0], [25.9, 916.0], [26.0, 935.0], [26.1, 935.0], [26.2, 935.0], [26.3, 935.0], [26.4, 935.0], [26.5, 944.0], [26.6, 944.0], [26.7, 944.0], [26.8, 944.0], [26.9, 944.0], [27.0, 967.0], [27.1, 967.0], [27.2, 967.0], [27.3, 967.0], [27.4, 967.0], [27.5, 1033.0], [27.6, 1033.0], [27.7, 1033.0], [27.8, 1033.0], [27.9, 1033.0], [28.0, 1230.0], [28.1, 1230.0], [28.2, 1230.0], [28.3, 1230.0], [28.4, 1230.0], [28.5, 1292.0], [28.6, 1292.0], [28.7, 1292.0], [28.8, 1292.0], [28.9, 1292.0], [29.0, 1318.0], [29.1, 1318.0], [29.2, 1318.0], [29.3, 1318.0], [29.4, 1318.0], [29.5, 1322.0], [29.6, 1322.0], [29.7, 1322.0], [29.8, 1322.0], [29.9, 1322.0], [30.0, 1333.0], [30.1, 1333.0], [30.2, 1333.0], [30.3, 1333.0], [30.4, 1333.0], [30.5, 1363.0], [30.6, 1363.0], [30.7, 1363.0], [30.8, 1363.0], [30.9, 1363.0], [31.0, 1367.0], [31.1, 1367.0], [31.2, 1367.0], [31.3, 1367.0], [31.4, 1367.0], [31.5, 1377.0], [31.6, 1377.0], [31.7, 1377.0], [31.8, 1377.0], [31.9, 1377.0], [32.0, 1398.0], [32.1, 1398.0], [32.2, 1398.0], [32.3, 1398.0], [32.4, 1398.0], [32.5, 1413.0], [32.6, 1413.0], [32.7, 1413.0], [32.8, 1413.0], [32.9, 1413.0], [33.0, 1418.0], [33.1, 1418.0], [33.2, 1418.0], [33.3, 1418.0], [33.4, 1418.0], [33.5, 1428.0], [33.6, 1428.0], [33.7, 1428.0], [33.8, 1428.0], [33.9, 1428.0], [34.0, 1431.0], [34.1, 1431.0], [34.2, 1431.0], [34.3, 1431.0], [34.4, 1431.0], [34.5, 1435.0], [34.6, 1435.0], [34.7, 1435.0], [34.8, 1435.0], [34.9, 1435.0], [35.0, 1514.0], [35.1, 1514.0], [35.2, 1514.0], [35.3, 1514.0], [35.4, 1514.0], [35.5, 1520.0], [35.6, 1520.0], [35.7, 1520.0], [35.8, 1520.0], [35.9, 1520.0], [36.0, 1529.0], [36.1, 1529.0], [36.2, 1529.0], [36.3, 1529.0], [36.4, 1529.0], [36.5, 1531.0], [36.6, 1531.0], [36.7, 1531.0], [36.8, 1531.0], [36.9, 1531.0], [37.0, 1536.0], [37.1, 1536.0], [37.2, 1536.0], [37.3, 1536.0], [37.4, 1536.0], [37.5, 1541.0], [37.6, 1541.0], [37.7, 1541.0], [37.8, 1541.0], [37.9, 1541.0], [38.0, 1602.0], [38.1, 1602.0], [38.2, 1602.0], [38.3, 1602.0], [38.4, 1602.0], [38.5, 1604.0], [38.6, 1604.0], [38.7, 1604.0], [38.8, 1604.0], [38.9, 1604.0], [39.0, 1618.0], [39.1, 1618.0], [39.2, 1618.0], [39.3, 1618.0], [39.4, 1618.0], [39.5, 1624.0], [39.6, 1624.0], [39.7, 1624.0], [39.8, 1624.0], [39.9, 1624.0], [40.0, 1633.0], [40.1, 1633.0], [40.2, 1633.0], [40.3, 1633.0], [40.4, 1633.0], [40.5, 1637.0], [40.6, 1637.0], [40.7, 1637.0], [40.8, 1637.0], [40.9, 1637.0], [41.0, 1641.0], [41.1, 1641.0], [41.2, 1641.0], [41.3, 1641.0], [41.4, 1641.0], [41.5, 1644.0], [41.6, 1644.0], [41.7, 1644.0], [41.8, 1644.0], [41.9, 1644.0], [42.0, 1645.0], [42.1, 1645.0], [42.2, 1645.0], [42.3, 1645.0], [42.4, 1645.0], [42.5, 1656.0], [42.6, 1656.0], [42.7, 1656.0], [42.8, 1656.0], [42.9, 1656.0], [43.0, 1664.0], [43.1, 1664.0], [43.2, 1664.0], [43.3, 1664.0], [43.4, 1664.0], [43.5, 1668.0], [43.6, 1668.0], [43.7, 1668.0], [43.8, 1668.0], [43.9, 1668.0], [44.0, 1688.0], [44.1, 1688.0], [44.2, 1688.0], [44.3, 1688.0], [44.4, 1688.0], [44.5, 1690.0], [44.6, 1690.0], [44.7, 1690.0], [44.8, 1690.0], [44.9, 1690.0], [45.0, 1691.0], [45.1, 1691.0], [45.2, 1691.0], [45.3, 1691.0], [45.4, 1691.0], [45.5, 1691.0], [45.6, 1691.0], [45.7, 1691.0], [45.8, 1691.0], [45.9, 1691.0], [46.0, 1693.0], [46.1, 1693.0], [46.2, 1693.0], [46.3, 1693.0], [46.4, 1693.0], [46.5, 1698.0], [46.6, 1698.0], [46.7, 1698.0], [46.8, 1698.0], [46.9, 1698.0], [47.0, 1699.0], [47.1, 1699.0], [47.2, 1699.0], [47.3, 1699.0], [47.4, 1699.0], [47.5, 1707.0], [47.6, 1707.0], [47.7, 1707.0], [47.8, 1707.0], [47.9, 1707.0], [48.0, 1713.0], [48.1, 1713.0], [48.2, 1713.0], [48.3, 1713.0], [48.4, 1713.0], [48.5, 1723.0], [48.6, 1723.0], [48.7, 1723.0], [48.8, 1723.0], [48.9, 1723.0], [49.0, 1749.0], [49.1, 1749.0], [49.2, 1749.0], [49.3, 1749.0], [49.4, 1749.0], [49.5, 1774.0], [49.6, 1774.0], [49.7, 1774.0], [49.8, 1774.0], [49.9, 1774.0], [50.0, 1789.0], [50.1, 1789.0], [50.2, 1789.0], [50.3, 1789.0], [50.4, 1789.0], [50.5, 1792.0], [50.6, 1792.0], [50.7, 1792.0], [50.8, 1792.0], [50.9, 1792.0], [51.0, 1806.0], [51.1, 1806.0], [51.2, 1806.0], [51.3, 1806.0], [51.4, 1806.0], [51.5, 1814.0], [51.6, 1814.0], [51.7, 1814.0], [51.8, 1814.0], [51.9, 1814.0], [52.0, 1822.0], [52.1, 1822.0], [52.2, 1822.0], [52.3, 1822.0], [52.4, 1822.0], [52.5, 1823.0], [52.6, 1823.0], [52.7, 1823.0], [52.8, 1823.0], [52.9, 1823.0], [53.0, 1830.0], [53.1, 1830.0], [53.2, 1830.0], [53.3, 1830.0], [53.4, 1830.0], [53.5, 1850.0], [53.6, 1850.0], [53.7, 1850.0], [53.8, 1850.0], [53.9, 1850.0], [54.0, 1854.0], [54.1, 1854.0], [54.2, 1854.0], [54.3, 1854.0], [54.4, 1854.0], [54.5, 1857.0], [54.6, 1857.0], [54.7, 1857.0], [54.8, 1857.0], [54.9, 1857.0], [55.0, 1871.0], [55.1, 1871.0], [55.2, 1871.0], [55.3, 1871.0], [55.4, 1871.0], [55.5, 1896.0], [55.6, 1896.0], [55.7, 1896.0], [55.8, 1896.0], [55.9, 1896.0], [56.0, 1902.0], [56.1, 1902.0], [56.2, 1902.0], [56.3, 1902.0], [56.4, 1902.0], [56.5, 1907.0], [56.6, 1907.0], [56.7, 1907.0], [56.8, 1907.0], [56.9, 1907.0], [57.0, 1913.0], [57.1, 1913.0], [57.2, 1913.0], [57.3, 1913.0], [57.4, 1913.0], [57.5, 1918.0], [57.6, 1918.0], [57.7, 1918.0], [57.8, 1918.0], [57.9, 1918.0], [58.0, 1933.0], [58.1, 1933.0], [58.2, 1933.0], [58.3, 1933.0], [58.4, 1933.0], [58.5, 1959.0], [58.6, 1959.0], [58.7, 1959.0], [58.8, 1959.0], [58.9, 1959.0], [59.0, 1961.0], [59.1, 1961.0], [59.2, 1961.0], [59.3, 1961.0], [59.4, 1961.0], [59.5, 1963.0], [59.6, 1963.0], [59.7, 1963.0], [59.8, 1963.0], [59.9, 1963.0], [60.0, 1965.0], [60.1, 1965.0], [60.2, 1965.0], [60.3, 1965.0], [60.4, 1965.0], [60.5, 1966.0], [60.6, 1966.0], [60.7, 1966.0], [60.8, 1966.0], [60.9, 1966.0], [61.0, 1966.0], [61.1, 1966.0], [61.2, 1966.0], [61.3, 1966.0], [61.4, 1966.0], [61.5, 1968.0], [61.6, 1968.0], [61.7, 1968.0], [61.8, 1968.0], [61.9, 1968.0], [62.0, 1968.0], [62.1, 1968.0], [62.2, 1968.0], [62.3, 1968.0], [62.4, 1968.0], [62.5, 1970.0], [62.6, 1970.0], [62.7, 1970.0], [62.8, 1970.0], [62.9, 1970.0], [63.0, 1978.0], [63.1, 1978.0], [63.2, 1978.0], [63.3, 1978.0], [63.4, 1978.0], [63.5, 1984.0], [63.6, 1984.0], [63.7, 1984.0], [63.8, 1984.0], [63.9, 1984.0], [64.0, 1985.0], [64.1, 1985.0], [64.2, 1985.0], [64.3, 1985.0], [64.4, 1985.0], [64.5, 1987.0], [64.6, 1987.0], [64.7, 1987.0], [64.8, 1987.0], [64.9, 1987.0], [65.0, 1989.0], [65.1, 1989.0], [65.2, 1989.0], [65.3, 1989.0], [65.4, 1989.0], [65.5, 1992.0], [65.6, 1992.0], [65.7, 1992.0], [65.8, 1992.0], [65.9, 1992.0], [66.0, 2002.0], [66.1, 2002.0], [66.2, 2002.0], [66.3, 2002.0], [66.4, 2002.0], [66.5, 2013.0], [66.6, 2013.0], [66.7, 2013.0], [66.8, 2013.0], [66.9, 2013.0], [67.0, 2029.0], [67.1, 2029.0], [67.2, 2029.0], [67.3, 2029.0], [67.4, 2029.0], [67.5, 2032.0], [67.6, 2032.0], [67.7, 2032.0], [67.8, 2032.0], [67.9, 2032.0], [68.0, 2033.0], [68.1, 2033.0], [68.2, 2033.0], [68.3, 2033.0], [68.4, 2033.0], [68.5, 2039.0], [68.6, 2039.0], [68.7, 2039.0], [68.8, 2039.0], [68.9, 2039.0], [69.0, 2041.0], [69.1, 2041.0], [69.2, 2041.0], [69.3, 2041.0], [69.4, 2041.0], [69.5, 2042.0], [69.6, 2042.0], [69.7, 2042.0], [69.8, 2042.0], [69.9, 2042.0], [70.0, 2050.0], [70.1, 2050.0], [70.2, 2050.0], [70.3, 2050.0], [70.4, 2050.0], [70.5, 2061.0], [70.6, 2061.0], [70.7, 2061.0], [70.8, 2061.0], [70.9, 2061.0], [71.0, 2061.0], [71.1, 2061.0], [71.2, 2061.0], [71.3, 2061.0], [71.4, 2061.0], [71.5, 2067.0], [71.6, 2067.0], [71.7, 2067.0], [71.8, 2067.0], [71.9, 2067.0], [72.0, 2072.0], [72.1, 2072.0], [72.2, 2072.0], [72.3, 2072.0], [72.4, 2072.0], [72.5, 2077.0], [72.6, 2077.0], [72.7, 2077.0], [72.8, 2077.0], [72.9, 2077.0], [73.0, 2081.0], [73.1, 2081.0], [73.2, 2081.0], [73.3, 2081.0], [73.4, 2081.0], [73.5, 2084.0], [73.6, 2084.0], [73.7, 2084.0], [73.8, 2084.0], [73.9, 2084.0], [74.0, 2085.0], [74.1, 2085.0], [74.2, 2085.0], [74.3, 2085.0], [74.4, 2085.0], [74.5, 2091.0], [74.6, 2091.0], [74.7, 2091.0], [74.8, 2091.0], [74.9, 2091.0], [75.0, 2095.0], [75.1, 2095.0], [75.2, 2095.0], [75.3, 2095.0], [75.4, 2095.0], [75.5, 2097.0], [75.6, 2097.0], [75.7, 2097.0], [75.8, 2097.0], [75.9, 2097.0], [76.0, 2104.0], [76.1, 2104.0], [76.2, 2104.0], [76.3, 2104.0], [76.4, 2104.0], [76.5, 2105.0], [76.6, 2105.0], [76.7, 2105.0], [76.8, 2105.0], [76.9, 2105.0], [77.0, 2108.0], [77.1, 2108.0], [77.2, 2108.0], [77.3, 2108.0], [77.4, 2108.0], [77.5, 2111.0], [77.6, 2111.0], [77.7, 2111.0], [77.8, 2111.0], [77.9, 2111.0], [78.0, 2115.0], [78.1, 2115.0], [78.2, 2115.0], [78.3, 2115.0], [78.4, 2115.0], [78.5, 2123.0], [78.6, 2123.0], [78.7, 2123.0], [78.8, 2123.0], [78.9, 2123.0], [79.0, 2129.0], [79.1, 2129.0], [79.2, 2129.0], [79.3, 2129.0], [79.4, 2129.0], [79.5, 2142.0], [79.6, 2142.0], [79.7, 2142.0], [79.8, 2142.0], [79.9, 2142.0], [80.0, 2146.0], [80.1, 2146.0], [80.2, 2146.0], [80.3, 2146.0], [80.4, 2146.0], [80.5, 2146.0], [80.6, 2146.0], [80.7, 2146.0], [80.8, 2146.0], [80.9, 2146.0], [81.0, 2165.0], [81.1, 2165.0], [81.2, 2165.0], [81.3, 2165.0], [81.4, 2165.0], [81.5, 2176.0], [81.6, 2176.0], [81.7, 2176.0], [81.8, 2176.0], [81.9, 2176.0], [82.0, 2179.0], [82.1, 2179.0], [82.2, 2179.0], [82.3, 2179.0], [82.4, 2179.0], [82.5, 2181.0], [82.6, 2181.0], [82.7, 2181.0], [82.8, 2181.0], [82.9, 2181.0], [83.0, 2182.0], [83.1, 2182.0], [83.2, 2182.0], [83.3, 2182.0], [83.4, 2182.0], [83.5, 2183.0], [83.6, 2183.0], [83.7, 2183.0], [83.8, 2183.0], [83.9, 2183.0], [84.0, 2184.0], [84.1, 2184.0], [84.2, 2184.0], [84.3, 2184.0], [84.4, 2184.0], [84.5, 2186.0], [84.6, 2186.0], [84.7, 2186.0], [84.8, 2186.0], [84.9, 2186.0], [85.0, 2204.0], [85.1, 2204.0], [85.2, 2204.0], [85.3, 2204.0], [85.4, 2204.0], [85.5, 2207.0], [85.6, 2207.0], [85.7, 2207.0], [85.8, 2207.0], [85.9, 2207.0], [86.0, 2213.0], [86.1, 2213.0], [86.2, 2213.0], [86.3, 2213.0], [86.4, 2213.0], [86.5, 2221.0], [86.6, 2221.0], [86.7, 2221.0], [86.8, 2221.0], [86.9, 2221.0], [87.0, 2222.0], [87.1, 2222.0], [87.2, 2222.0], [87.3, 2222.0], [87.4, 2222.0], [87.5, 2227.0], [87.6, 2227.0], [87.7, 2227.0], [87.8, 2227.0], [87.9, 2227.0], [88.0, 2238.0], [88.1, 2238.0], [88.2, 2238.0], [88.3, 2238.0], [88.4, 2238.0], [88.5, 2242.0], [88.6, 2242.0], [88.7, 2242.0], [88.8, 2242.0], [88.9, 2242.0], [89.0, 2243.0], [89.1, 2243.0], [89.2, 2243.0], [89.3, 2243.0], [89.4, 2243.0], [89.5, 2247.0], [89.6, 2247.0], [89.7, 2247.0], [89.8, 2247.0], [89.9, 2247.0], [90.0, 2253.0], [90.1, 2253.0], [90.2, 2253.0], [90.3, 2253.0], [90.4, 2253.0], [90.5, 2268.0], [90.6, 2268.0], [90.7, 2268.0], [90.8, 2268.0], [90.9, 2268.0], [91.0, 2301.0], [91.1, 2301.0], [91.2, 2301.0], [91.3, 2301.0], [91.4, 2301.0], [91.5, 2317.0], [91.6, 2317.0], [91.7, 2317.0], [91.8, 2317.0], [91.9, 2317.0], [92.0, 2332.0], [92.1, 2332.0], [92.2, 2332.0], [92.3, 2332.0], [92.4, 2332.0], [92.5, 2335.0], [92.6, 2335.0], [92.7, 2335.0], [92.8, 2335.0], [92.9, 2335.0], [93.0, 2342.0], [93.1, 2342.0], [93.2, 2342.0], [93.3, 2342.0], [93.4, 2342.0], [93.5, 2394.0], [93.6, 2394.0], [93.7, 2394.0], [93.8, 2394.0], [93.9, 2394.0], [94.0, 2400.0], [94.1, 2400.0], [94.2, 2400.0], [94.3, 2400.0], [94.4, 2400.0], [94.5, 2450.0], [94.6, 2450.0], [94.7, 2450.0], [94.8, 2450.0], [94.9, 2450.0], [95.0, 2493.0], [95.1, 2493.0], [95.2, 2493.0], [95.3, 2493.0], [95.4, 2493.0], [95.5, 2534.0], [95.6, 2534.0], [95.7, 2534.0], [95.8, 2534.0], [95.9, 2534.0], [96.0, 2579.0], [96.1, 2579.0], [96.2, 2579.0], [96.3, 2579.0], [96.4, 2579.0], [96.5, 2604.0], [96.6, 2604.0], [96.7, 2604.0], [96.8, 2604.0], [96.9, 2604.0], [97.0, 2701.0], [97.1, 2701.0], [97.2, 2701.0], [97.3, 2701.0], [97.4, 2701.0], [97.5, 2723.0], [97.6, 2723.0], [97.7, 2723.0], [97.8, 2723.0], [97.9, 2723.0], [98.0, 2757.0], [98.1, 2757.0], [98.2, 2757.0], [98.3, 2757.0], [98.4, 2757.0], [98.5, 2784.0], [98.6, 2784.0], [98.7, 2784.0], [98.8, 2784.0], [98.9, 2784.0], [99.0, 2904.0], [99.1, 2904.0], [99.2, 2904.0], [99.3, 2904.0], [99.4, 2904.0], [99.5, 3129.0], [99.6, 3129.0], [99.7, 3129.0], [99.8, 3129.0], [99.9, 3129.0]], "isOverall": false, "label": "Get Cart by User id", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 20.0, "series": [{"data": [[600.0, 12.0], [700.0, 6.0], [800.0, 7.0], [900.0, 5.0], [1000.0, 1.0], [1200.0, 2.0], [1300.0, 7.0], [1400.0, 5.0], [1500.0, 6.0], [1600.0, 19.0], [1700.0, 7.0], [1800.0, 10.0], [1900.0, 20.0], [2000.0, 20.0], [2100.0, 18.0], [2200.0, 12.0], [2300.0, 6.0], [2400.0, 3.0], [2500.0, 2.0], [2600.0, 1.0], [2700.0, 4.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 5.0], [300.0, 9.0], [400.0, 4.0], [500.0, 7.0]], "isOverall": false, "label": "Get Cart by User id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 3,000ms"], [1, "Requests having \nresponse time > 3,000ms and <= 6,000ms"], [2, "Requests having \nresponse time > 6,000ms"], [3, "Requests in error"]], "maxY": 199.0, "series": [{"data": [[0.0, 199.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 3,000ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 3,000ms and <= 6,000ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 6,000ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 75.15500000000006, "minX": 1.76429514E12, "maxY": 75.15500000000006, "series": [{"data": [[1.76429514E12, 75.15500000000006]], "isOverall": false, "label": "Cart Service", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76429514E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 260.0, "minX": 1.0, "maxY": 2904.0, "series": [{"data": [[2.0, 2146.0], [3.0, 2165.0], [4.0, 2207.0], [5.0, 2394.0], [6.0, 2221.0], [8.0, 2323.5], [9.0, 2146.0], [11.0, 2188.5], [12.0, 2061.0], [14.0, 2130.5], [15.0, 2238.0], [18.0, 2167.3333333333335], [19.0, 2123.0], [20.0, 2142.0], [22.0, 1934.0], [23.0, 1959.0], [25.0, 2137.0], [26.0, 2091.0], [28.0, 2493.0], [29.0, 2242.0], [30.0, 2227.0], [31.0, 2222.0], [33.0, 2181.0], [32.0, 2033.0], [35.0, 2104.0], [34.0, 2067.0], [37.0, 1933.0], [36.0, 2182.0], [39.0, 1088.0], [38.0, 1963.0], [41.0, 955.0], [40.0, 1871.0], [42.0, 260.0], [43.0, 1555.3333333333333], [45.0, 674.0], [44.0, 2301.0], [47.0, 670.25], [46.0, 918.0], [48.0, 1586.5], [49.0, 1225.5], [51.0, 2904.0], [50.0, 2183.0], [53.0, 2032.0], [52.0, 2701.0], [54.0, 507.0], [55.0, 2327.0], [57.0, 473.0], [56.0, 2184.0], [59.0, 1918.0], [58.0, 1896.0], [60.0, 603.0], [61.0, 2024.5], [63.0, 2099.5], [66.0, 1191.6666666666667], [65.0, 1023.6666666666667], [67.0, 2039.0], [64.0, 1814.0], [70.0, 1320.0], [71.0, 1823.0], [69.0, 1902.0], [68.0, 2493.0], [73.0, 1658.5], [75.0, 2204.0], [74.0, 2097.0], [72.0, 1830.0], [79.0, 1913.0], [78.0, 1850.0], [77.0, 1668.0], [76.0, 2784.0], [82.0, 1108.3333333333333], [83.0, 817.0], [81.0, 1823.5], [85.0, 775.0], [87.0, 2723.0], [86.0, 1947.0], [84.0, 1747.0], [91.0, 1651.0], [89.0, 2332.0], [88.0, 1624.0], [93.0, 1470.0], [92.0, 1082.0], [95.0, 1172.6666666666667], [94.0, 2534.0], [98.0, 1896.0], [97.0, 1774.0], [96.0, 1992.0], [103.0, 1531.0], [102.0, 1602.0], [101.0, 1840.0], [100.0, 1641.0], [105.0, 911.5], [106.0, 1337.5], [107.0, 1966.0], [104.0, 1656.0], [109.0, 849.0], [108.0, 2072.0], [112.0, 1570.25], [114.0, 1377.0], [115.0, 1880.6666666666667], [119.0, 1854.0], [118.0, 2115.0], [117.0, 1792.0], [116.0, 1723.0], [122.0, 1162.0], [121.0, 1144.6666666666667], [123.0, 1645.0], [120.0, 2084.0], [127.0, 1340.0], [126.0, 1637.0], [125.0, 1428.0], [124.0, 1699.0], [130.0, 1158.0], [129.0, 1095.0], [132.0, 1000.0], [131.0, 1647.5], [134.0, 603.5], [135.0, 762.0], [133.0, 1431.0], [128.0, 829.0], [138.0, 929.5], [141.0, 1497.25], [142.0, 1514.0], [139.0, 911.0], [137.0, 1413.0], [136.0, 1318.0], [1.0, 2450.0]], "isOverall": false, "label": "Get Cart by User id", "isController": false}, {"data": [[75.15500000000006, 1581.6149999999993]], "isOverall": false, "label": "Get Cart by User id-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 142.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 470.0, "minX": 1.76429514E12, "maxY": 31546.666666666668, "series": [{"data": [[1.76429514E12, 31546.666666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76429514E12, 470.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76429514E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1581.6149999999993, "minX": 1.76429514E12, "maxY": 1581.6149999999993, "series": [{"data": [[1.76429514E12, 1581.6149999999993]], "isOverall": false, "label": "Get Cart by User id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76429514E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1573.9699999999998, "minX": 1.76429514E12, "maxY": 1573.9699999999998, "series": [{"data": [[1.76429514E12, 1573.9699999999998]], "isOverall": false, "label": "Get Cart by User id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76429514E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 9.15000000000001, "minX": 1.76429514E12, "maxY": 9.15000000000001, "series": [{"data": [[1.76429514E12, 9.15000000000001]], "isOverall": false, "label": "Get Cart by User id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76429514E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 210.0, "minX": 1.76429514E12, "maxY": 3129.0, "series": [{"data": [[1.76429514E12, 3129.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76429514E12, 2252.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76429514E12, 2902.800000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76429514E12, 2490.8499999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76429514E12, 210.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76429514E12, 1781.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76429514E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 398.0, "minX": 12.0, "maxY": 2214.0, "series": [{"data": [[34.0, 893.0], [76.0, 2064.0], [12.0, 2214.0], [51.0, 1691.0], [27.0, 398.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 387.0, "minX": 12.0, "maxY": 2214.0, "series": [{"data": [[34.0, 872.5], [76.0, 2056.5], [12.0, 2214.0], [51.0, 1672.0], [27.0, 387.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76429514E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76429514E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76429514E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76429514E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76429514E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76429514E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76429514E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76429514E12, 3.3333333333333335]], "isOverall": false, "label": "Get Cart by User id-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76429514E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.76429514E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.76429514E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76429514E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

