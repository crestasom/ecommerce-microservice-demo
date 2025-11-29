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
        data: {"result": {"minY": 461.0, "minX": 0.0, "maxY": 11729.0, "series": [{"data": [[0.0, 461.0], [0.1, 461.0], [0.2, 461.0], [0.3, 461.0], [0.4, 463.0], [0.5, 463.0], [0.6, 463.0], [0.7, 624.0], [0.8, 624.0], [0.9, 624.0], [1.0, 638.0], [1.1, 638.0], [1.2, 638.0], [1.3, 638.0], [1.4, 876.0], [1.5, 876.0], [1.6, 876.0], [1.7, 945.0], [1.8, 945.0], [1.9, 945.0], [2.0, 948.0], [2.1, 948.0], [2.2, 948.0], [2.3, 948.0], [2.4, 955.0], [2.5, 955.0], [2.6, 955.0], [2.7, 957.0], [2.8, 957.0], [2.9, 957.0], [3.0, 958.0], [3.1, 958.0], [3.2, 958.0], [3.3, 958.0], [3.4, 958.0], [3.5, 958.0], [3.6, 958.0], [3.7, 978.0], [3.8, 978.0], [3.9, 978.0], [4.0, 981.0], [4.1, 981.0], [4.2, 981.0], [4.3, 981.0], [4.4, 982.0], [4.5, 982.0], [4.6, 982.0], [4.7, 1036.0], [4.8, 1036.0], [4.9, 1036.0], [5.0, 1062.0], [5.1, 1062.0], [5.2, 1062.0], [5.3, 1062.0], [5.4, 1599.0], [5.5, 1599.0], [5.6, 1599.0], [5.7, 1640.0], [5.8, 1640.0], [5.9, 1640.0], [6.0, 1654.0], [6.1, 1654.0], [6.2, 1654.0], [6.3, 1654.0], [6.4, 1660.0], [6.5, 1660.0], [6.6, 1660.0], [6.7, 1668.0], [6.8, 1668.0], [6.9, 1668.0], [7.0, 1673.0], [7.1, 1673.0], [7.2, 1673.0], [7.3, 1673.0], [7.4, 1675.0], [7.5, 1675.0], [7.6, 1675.0], [7.7, 1705.0], [7.8, 1705.0], [7.9, 1705.0], [8.0, 1722.0], [8.1, 1722.0], [8.2, 1722.0], [8.3, 1722.0], [8.4, 1729.0], [8.5, 1729.0], [8.6, 1729.0], [8.7, 2057.0], [8.8, 2057.0], [8.9, 2057.0], [9.0, 2079.0], [9.1, 2079.0], [9.2, 2079.0], [9.3, 2079.0], [9.4, 2081.0], [9.5, 2081.0], [9.6, 2081.0], [9.7, 2087.0], [9.8, 2087.0], [9.9, 2087.0], [10.0, 2089.0], [10.1, 2089.0], [10.2, 2089.0], [10.3, 2089.0], [10.4, 2094.0], [10.5, 2094.0], [10.6, 2094.0], [10.7, 2106.0], [10.8, 2106.0], [10.9, 2106.0], [11.0, 2106.0], [11.1, 2112.0], [11.2, 2112.0], [11.3, 2112.0], [11.4, 2113.0], [11.5, 2113.0], [11.6, 2113.0], [11.7, 2139.0], [11.8, 2139.0], [11.9, 2139.0], [12.0, 2139.0], [12.1, 2831.0], [12.2, 2831.0], [12.3, 2831.0], [12.4, 2838.0], [12.5, 2838.0], [12.6, 2838.0], [12.7, 2849.0], [12.8, 2849.0], [12.9, 2849.0], [13.0, 2849.0], [13.1, 2884.0], [13.2, 2884.0], [13.3, 2884.0], [13.4, 2893.0], [13.5, 2893.0], [13.6, 2893.0], [13.7, 2894.0], [13.8, 2894.0], [13.9, 2894.0], [14.0, 2894.0], [14.1, 2898.0], [14.2, 2898.0], [14.3, 2898.0], [14.4, 2922.0], [14.5, 2922.0], [14.6, 2922.0], [14.7, 2955.0], [14.8, 2955.0], [14.9, 2955.0], [15.0, 2955.0], [15.1, 2996.0], [15.2, 2996.0], [15.3, 2996.0], [15.4, 3274.0], [15.5, 3274.0], [15.6, 3274.0], [15.7, 3277.0], [15.8, 3277.0], [15.9, 3277.0], [16.0, 3277.0], [16.1, 3284.0], [16.2, 3284.0], [16.3, 3284.0], [16.4, 3295.0], [16.5, 3295.0], [16.6, 3295.0], [16.7, 3299.0], [16.8, 3299.0], [16.9, 3299.0], [17.0, 3299.0], [17.1, 3304.0], [17.2, 3304.0], [17.3, 3304.0], [17.4, 3321.0], [17.5, 3321.0], [17.6, 3321.0], [17.7, 3328.0], [17.8, 3328.0], [17.9, 3328.0], [18.0, 3328.0], [18.1, 3342.0], [18.2, 3342.0], [18.3, 3342.0], [18.4, 3360.0], [18.5, 3360.0], [18.6, 3360.0], [18.7, 3540.0], [18.8, 3540.0], [18.9, 3540.0], [19.0, 3554.0], [19.1, 3554.0], [19.2, 3554.0], [19.3, 3554.0], [19.4, 3561.0], [19.5, 3561.0], [19.6, 3561.0], [19.7, 3577.0], [19.8, 3577.0], [19.9, 3577.0], [20.0, 3585.0], [20.1, 3585.0], [20.2, 3585.0], [20.3, 3585.0], [20.4, 3592.0], [20.5, 3592.0], [20.6, 3592.0], [20.7, 3606.0], [20.8, 3606.0], [20.9, 3606.0], [21.0, 3615.0], [21.1, 3615.0], [21.2, 3615.0], [21.3, 3615.0], [21.4, 3797.0], [21.5, 3797.0], [21.6, 3797.0], [21.7, 3797.0], [21.8, 3797.0], [21.9, 3797.0], [22.0, 3820.0], [22.1, 3820.0], [22.2, 3820.0], [22.3, 3820.0], [22.4, 3820.0], [22.5, 3820.0], [22.6, 3820.0], [22.7, 3851.0], [22.8, 3851.0], [22.9, 3851.0], [23.0, 3857.0], [23.1, 3857.0], [23.2, 3857.0], [23.3, 3857.0], [23.4, 3859.0], [23.5, 3859.0], [23.6, 3859.0], [23.7, 3873.0], [23.8, 3873.0], [23.9, 3873.0], [24.0, 4040.0], [24.1, 4040.0], [24.2, 4040.0], [24.3, 4040.0], [24.4, 4061.0], [24.5, 4061.0], [24.6, 4061.0], [24.7, 4063.0], [24.8, 4063.0], [24.9, 4063.0], [25.0, 4064.0], [25.1, 4064.0], [25.2, 4064.0], [25.3, 4064.0], [25.4, 4065.0], [25.5, 4065.0], [25.6, 4065.0], [25.7, 4077.0], [25.8, 4077.0], [25.9, 4077.0], [26.0, 4098.0], [26.1, 4098.0], [26.2, 4098.0], [26.3, 4098.0], [26.4, 4102.0], [26.5, 4102.0], [26.6, 4102.0], [26.7, 4111.0], [26.8, 4111.0], [26.9, 4111.0], [27.0, 4254.0], [27.1, 4254.0], [27.2, 4254.0], [27.3, 4254.0], [27.4, 4276.0], [27.5, 4276.0], [27.6, 4276.0], [27.7, 4282.0], [27.8, 4282.0], [27.9, 4282.0], [28.0, 4286.0], [28.1, 4286.0], [28.2, 4286.0], [28.3, 4286.0], [28.4, 4299.0], [28.5, 4299.0], [28.6, 4299.0], [28.7, 4304.0], [28.8, 4304.0], [28.9, 4304.0], [29.0, 4341.0], [29.1, 4341.0], [29.2, 4341.0], [29.3, 4341.0], [29.4, 4346.0], [29.5, 4346.0], [29.6, 4346.0], [29.7, 4364.0], [29.8, 4364.0], [29.9, 4364.0], [30.0, 4543.0], [30.1, 4543.0], [30.2, 4543.0], [30.3, 4543.0], [30.4, 4550.0], [30.5, 4550.0], [30.6, 4550.0], [30.7, 4557.0], [30.8, 4557.0], [30.9, 4557.0], [31.0, 4566.0], [31.1, 4566.0], [31.2, 4566.0], [31.3, 4566.0], [31.4, 4585.0], [31.5, 4585.0], [31.6, 4585.0], [31.7, 4587.0], [31.8, 4587.0], [31.9, 4587.0], [32.0, 4592.0], [32.1, 4592.0], [32.2, 4592.0], [32.3, 4592.0], [32.4, 4606.0], [32.5, 4606.0], [32.6, 4606.0], [32.7, 4609.0], [32.8, 4609.0], [32.9, 4609.0], [33.0, 4614.0], [33.1, 4614.0], [33.2, 4614.0], [33.3, 4614.0], [33.4, 4780.0], [33.5, 4780.0], [33.6, 4780.0], [33.7, 4800.0], [33.8, 4800.0], [33.9, 4800.0], [34.0, 4819.0], [34.1, 4819.0], [34.2, 4819.0], [34.3, 4819.0], [34.4, 4823.0], [34.5, 4823.0], [34.6, 4823.0], [34.7, 4839.0], [34.8, 4839.0], [34.9, 4839.0], [35.0, 4847.0], [35.1, 4847.0], [35.2, 4847.0], [35.3, 4847.0], [35.4, 4853.0], [35.5, 4853.0], [35.6, 4853.0], [35.7, 4863.0], [35.8, 4863.0], [35.9, 4863.0], [36.0, 4870.0], [36.1, 4870.0], [36.2, 4870.0], [36.3, 4870.0], [36.4, 4885.0], [36.5, 4885.0], [36.6, 4885.0], [36.7, 5028.0], [36.8, 5028.0], [36.9, 5028.0], [37.0, 5030.0], [37.1, 5030.0], [37.2, 5030.0], [37.3, 5030.0], [37.4, 5042.0], [37.5, 5042.0], [37.6, 5042.0], [37.7, 5054.0], [37.8, 5054.0], [37.9, 5054.0], [38.0, 5054.0], [38.1, 5054.0], [38.2, 5054.0], [38.3, 5054.0], [38.4, 5061.0], [38.5, 5061.0], [38.6, 5061.0], [38.7, 5072.0], [38.8, 5072.0], [38.9, 5072.0], [39.0, 5077.0], [39.1, 5077.0], [39.2, 5077.0], [39.3, 5077.0], [39.4, 5083.0], [39.5, 5083.0], [39.6, 5083.0], [39.7, 5091.0], [39.8, 5091.0], [39.9, 5091.0], [40.0, 5091.0], [40.1, 5232.0], [40.2, 5232.0], [40.3, 5232.0], [40.4, 5237.0], [40.5, 5237.0], [40.6, 5237.0], [40.7, 5255.0], [40.8, 5255.0], [40.9, 5255.0], [41.0, 5255.0], [41.1, 5257.0], [41.2, 5257.0], [41.3, 5257.0], [41.4, 5265.0], [41.5, 5265.0], [41.6, 5265.0], [41.7, 5268.0], [41.8, 5268.0], [41.9, 5268.0], [42.0, 5268.0], [42.1, 5272.0], [42.2, 5272.0], [42.3, 5272.0], [42.4, 5276.0], [42.5, 5276.0], [42.6, 5276.0], [42.7, 5281.0], [42.8, 5281.0], [42.9, 5281.0], [43.0, 5281.0], [43.1, 5293.0], [43.2, 5293.0], [43.3, 5293.0], [43.4, 5458.0], [43.5, 5458.0], [43.6, 5458.0], [43.7, 5469.0], [43.8, 5469.0], [43.9, 5469.0], [44.0, 5469.0], [44.1, 5470.0], [44.2, 5470.0], [44.3, 5470.0], [44.4, 5495.0], [44.5, 5495.0], [44.6, 5495.0], [44.7, 5500.0], [44.8, 5500.0], [44.9, 5500.0], [45.0, 5500.0], [45.1, 5503.0], [45.2, 5503.0], [45.3, 5503.0], [45.4, 5515.0], [45.5, 5515.0], [45.6, 5515.0], [45.7, 5521.0], [45.8, 5521.0], [45.9, 5521.0], [46.0, 5521.0], [46.1, 5540.0], [46.2, 5540.0], [46.3, 5540.0], [46.4, 5558.0], [46.5, 5558.0], [46.6, 5558.0], [46.7, 5709.0], [46.8, 5709.0], [46.9, 5709.0], [47.0, 5709.0], [47.1, 5717.0], [47.2, 5717.0], [47.3, 5717.0], [47.4, 5746.0], [47.5, 5746.0], [47.6, 5746.0], [47.7, 5772.0], [47.8, 5772.0], [47.9, 5772.0], [48.0, 5772.0], [48.1, 5775.0], [48.2, 5775.0], [48.3, 5775.0], [48.4, 5782.0], [48.5, 5782.0], [48.6, 5782.0], [48.7, 5789.0], [48.8, 5789.0], [48.9, 5789.0], [49.0, 5789.0], [49.1, 5811.0], [49.2, 5811.0], [49.3, 5811.0], [49.4, 5813.0], [49.5, 5813.0], [49.6, 5813.0], [49.7, 5820.0], [49.8, 5820.0], [49.9, 5820.0], [50.0, 5820.0], [50.1, 5931.0], [50.2, 5931.0], [50.3, 5931.0], [50.4, 5934.0], [50.5, 5934.0], [50.6, 5934.0], [50.7, 5935.0], [50.8, 5935.0], [50.9, 5935.0], [51.0, 5935.0], [51.1, 5936.0], [51.2, 5936.0], [51.3, 5936.0], [51.4, 5952.0], [51.5, 5952.0], [51.6, 5952.0], [51.7, 5962.0], [51.8, 5962.0], [51.9, 5962.0], [52.0, 5962.0], [52.1, 5979.0], [52.2, 5979.0], [52.3, 5979.0], [52.4, 5982.0], [52.5, 5982.0], [52.6, 5982.0], [52.7, 5989.0], [52.8, 5989.0], [52.9, 5989.0], [53.0, 5989.0], [53.1, 5994.0], [53.2, 5994.0], [53.3, 5994.0], [53.4, 6128.0], [53.5, 6128.0], [53.6, 6128.0], [53.7, 6128.0], [53.8, 6128.0], [53.9, 6128.0], [54.0, 6128.0], [54.1, 6139.0], [54.2, 6139.0], [54.3, 6139.0], [54.4, 6141.0], [54.5, 6141.0], [54.6, 6141.0], [54.7, 6145.0], [54.8, 6145.0], [54.9, 6145.0], [55.0, 6145.0], [55.1, 6161.0], [55.2, 6161.0], [55.3, 6161.0], [55.4, 6163.0], [55.5, 6163.0], [55.6, 6163.0], [55.7, 6174.0], [55.8, 6174.0], [55.9, 6174.0], [56.0, 6174.0], [56.1, 6176.0], [56.2, 6176.0], [56.3, 6176.0], [56.4, 6178.0], [56.5, 6178.0], [56.6, 6178.0], [56.7, 6363.0], [56.8, 6363.0], [56.9, 6363.0], [57.0, 6363.0], [57.1, 6382.0], [57.2, 6382.0], [57.3, 6382.0], [57.4, 6390.0], [57.5, 6390.0], [57.6, 6390.0], [57.7, 6395.0], [57.8, 6395.0], [57.9, 6395.0], [58.0, 6395.0], [58.1, 6422.0], [58.2, 6422.0], [58.3, 6422.0], [58.4, 6433.0], [58.5, 6433.0], [58.6, 6433.0], [58.7, 6434.0], [58.8, 6434.0], [58.9, 6434.0], [59.0, 6434.0], [59.1, 6444.0], [59.2, 6444.0], [59.3, 6444.0], [59.4, 6447.0], [59.5, 6447.0], [59.6, 6447.0], [59.7, 6450.0], [59.8, 6450.0], [59.9, 6450.0], [60.0, 6450.0], [60.1, 6559.0], [60.2, 6559.0], [60.3, 6559.0], [60.4, 6586.0], [60.5, 6586.0], [60.6, 6586.0], [60.7, 6596.0], [60.8, 6596.0], [60.9, 6596.0], [61.0, 6596.0], [61.1, 6606.0], [61.2, 6606.0], [61.3, 6606.0], [61.4, 6608.0], [61.5, 6608.0], [61.6, 6608.0], [61.7, 6608.0], [61.8, 6608.0], [61.9, 6608.0], [62.0, 6608.0], [62.1, 6613.0], [62.2, 6613.0], [62.3, 6613.0], [62.4, 6617.0], [62.5, 6617.0], [62.6, 6617.0], [62.7, 6618.0], [62.8, 6618.0], [62.9, 6618.0], [63.0, 6618.0], [63.1, 6625.0], [63.2, 6625.0], [63.3, 6625.0], [63.4, 6756.0], [63.5, 6756.0], [63.6, 6756.0], [63.7, 6763.0], [63.8, 6763.0], [63.9, 6763.0], [64.0, 6763.0], [64.1, 6766.0], [64.2, 6766.0], [64.3, 6766.0], [64.4, 6780.0], [64.5, 6780.0], [64.6, 6780.0], [64.7, 6781.0], [64.8, 6781.0], [64.9, 6781.0], [65.0, 6781.0], [65.1, 6788.0], [65.2, 6788.0], [65.3, 6788.0], [65.4, 6800.0], [65.5, 6800.0], [65.6, 6800.0], [65.7, 6801.0], [65.8, 6801.0], [65.9, 6801.0], [66.0, 6801.0], [66.1, 6802.0], [66.2, 6802.0], [66.3, 6802.0], [66.4, 6803.0], [66.5, 6803.0], [66.6, 6803.0], [66.7, 6930.0], [66.8, 6930.0], [66.9, 6930.0], [67.0, 6930.0], [67.1, 6957.0], [67.2, 6957.0], [67.3, 6957.0], [67.4, 6960.0], [67.5, 6960.0], [67.6, 6960.0], [67.7, 6976.0], [67.8, 6976.0], [67.9, 6976.0], [68.0, 6976.0], [68.1, 6977.0], [68.2, 6977.0], [68.3, 6977.0], [68.4, 6984.0], [68.5, 6984.0], [68.6, 6984.0], [68.7, 6984.0], [68.8, 6984.0], [68.9, 6984.0], [69.0, 6984.0], [69.1, 6989.0], [69.2, 6989.0], [69.3, 6989.0], [69.4, 6994.0], [69.5, 6994.0], [69.6, 6994.0], [69.7, 7008.0], [69.8, 7008.0], [69.9, 7008.0], [70.0, 7008.0], [70.1, 7131.0], [70.2, 7131.0], [70.3, 7131.0], [70.4, 7141.0], [70.5, 7141.0], [70.6, 7141.0], [70.7, 7144.0], [70.8, 7144.0], [70.9, 7144.0], [71.0, 7144.0], [71.1, 7150.0], [71.2, 7150.0], [71.3, 7150.0], [71.4, 7157.0], [71.5, 7157.0], [71.6, 7157.0], [71.7, 7160.0], [71.8, 7160.0], [71.9, 7160.0], [72.0, 7160.0], [72.1, 7164.0], [72.2, 7164.0], [72.3, 7164.0], [72.4, 7174.0], [72.5, 7174.0], [72.6, 7174.0], [72.7, 7175.0], [72.8, 7175.0], [72.9, 7175.0], [73.0, 7175.0], [73.1, 7221.0], [73.2, 7221.0], [73.3, 7221.0], [73.4, 7311.0], [73.5, 7311.0], [73.6, 7311.0], [73.7, 7314.0], [73.8, 7314.0], [73.9, 7314.0], [74.0, 7314.0], [74.1, 7338.0], [74.2, 7338.0], [74.3, 7338.0], [74.4, 7341.0], [74.5, 7341.0], [74.6, 7341.0], [74.7, 7344.0], [74.8, 7344.0], [74.9, 7344.0], [75.0, 7344.0], [75.1, 7349.0], [75.2, 7349.0], [75.3, 7349.0], [75.4, 7354.0], [75.5, 7354.0], [75.6, 7354.0], [75.7, 7356.0], [75.8, 7356.0], [75.9, 7356.0], [76.0, 7362.0], [76.1, 7362.0], [76.2, 7362.0], [76.3, 7362.0], [76.4, 7378.0], [76.5, 7378.0], [76.6, 7378.0], [76.7, 7504.0], [76.8, 7504.0], [76.9, 7504.0], [77.0, 7516.0], [77.1, 7516.0], [77.2, 7516.0], [77.3, 7516.0], [77.4, 7537.0], [77.5, 7537.0], [77.6, 7537.0], [77.7, 7539.0], [77.8, 7539.0], [77.9, 7539.0], [78.0, 7546.0], [78.1, 7546.0], [78.2, 7546.0], [78.3, 7546.0], [78.4, 7554.0], [78.5, 7554.0], [78.6, 7554.0], [78.7, 7564.0], [78.8, 7564.0], [78.9, 7564.0], [79.0, 7570.0], [79.1, 7570.0], [79.2, 7570.0], [79.3, 7570.0], [79.4, 7577.0], [79.5, 7577.0], [79.6, 7577.0], [79.7, 7706.0], [79.8, 7706.0], [79.9, 7706.0], [80.0, 7706.0], [80.1, 7706.0], [80.2, 7706.0], [80.3, 7706.0], [80.4, 7733.0], [80.5, 7733.0], [80.6, 7733.0], [80.7, 7741.0], [80.8, 7741.0], [80.9, 7741.0], [81.0, 7743.0], [81.1, 7743.0], [81.2, 7743.0], [81.3, 7743.0], [81.4, 7750.0], [81.5, 7750.0], [81.6, 7750.0], [81.7, 7753.0], [81.8, 7753.0], [81.9, 7753.0], [82.0, 7758.0], [82.1, 7758.0], [82.2, 7758.0], [82.3, 7758.0], [82.4, 7761.0], [82.5, 7761.0], [82.6, 7761.0], [82.7, 7889.0], [82.8, 7889.0], [82.9, 7889.0], [83.0, 7891.0], [83.1, 7891.0], [83.2, 7891.0], [83.3, 7891.0], [83.4, 7940.0], [83.5, 7940.0], [83.6, 7940.0], [83.7, 7943.0], [83.8, 7943.0], [83.9, 7943.0], [84.0, 7953.0], [84.1, 7953.0], [84.2, 7953.0], [84.3, 7953.0], [84.4, 7959.0], [84.5, 7959.0], [84.6, 7959.0], [84.7, 7970.0], [84.8, 7970.0], [84.9, 7970.0], [85.0, 7971.0], [85.1, 7971.0], [85.2, 7971.0], [85.3, 7971.0], [85.4, 8093.0], [85.5, 8093.0], [85.6, 8093.0], [85.7, 8095.0], [85.8, 8095.0], [85.9, 8095.0], [86.0, 8096.0], [86.1, 8096.0], [86.2, 8096.0], [86.3, 8096.0], [86.4, 8130.0], [86.5, 8130.0], [86.6, 8130.0], [86.7, 8140.0], [86.8, 8140.0], [86.9, 8140.0], [87.0, 8171.0], [87.1, 8171.0], [87.2, 8171.0], [87.3, 8171.0], [87.4, 8206.0], [87.5, 8206.0], [87.6, 8206.0], [87.7, 8210.0], [87.8, 8210.0], [87.9, 8210.0], [88.0, 8218.0], [88.1, 8218.0], [88.2, 8218.0], [88.3, 8218.0], [88.4, 8414.0], [88.5, 8414.0], [88.6, 8414.0], [88.7, 8423.0], [88.8, 8423.0], [88.9, 8423.0], [89.0, 8512.0], [89.1, 8512.0], [89.2, 8512.0], [89.3, 8512.0], [89.4, 8538.0], [89.5, 8538.0], [89.6, 8538.0], [89.7, 8584.0], [89.8, 8584.0], [89.9, 8584.0], [90.0, 8611.0], [90.1, 8611.0], [90.2, 8611.0], [90.3, 8611.0], [90.4, 8630.0], [90.5, 8630.0], [90.6, 8630.0], [90.7, 8634.0], [90.8, 8634.0], [90.9, 8634.0], [91.0, 8657.0], [91.1, 8657.0], [91.2, 8657.0], [91.3, 8657.0], [91.4, 8777.0], [91.5, 8777.0], [91.6, 8777.0], [91.7, 8784.0], [91.8, 8784.0], [91.9, 8784.0], [92.0, 8785.0], [92.1, 8785.0], [92.2, 8785.0], [92.3, 8785.0], [92.4, 8809.0], [92.5, 8809.0], [92.6, 8809.0], [92.7, 8827.0], [92.8, 8827.0], [92.9, 8827.0], [93.0, 8831.0], [93.1, 8831.0], [93.2, 8831.0], [93.3, 8831.0], [93.4, 8831.0], [93.5, 8831.0], [93.6, 8831.0], [93.7, 8832.0], [93.8, 8832.0], [93.9, 8832.0], [94.0, 8834.0], [94.1, 8834.0], [94.2, 8834.0], [94.3, 8834.0], [94.4, 8838.0], [94.5, 8838.0], [94.6, 8838.0], [94.7, 8939.0], [94.8, 8939.0], [94.9, 8939.0], [95.0, 8940.0], [95.1, 8940.0], [95.2, 8940.0], [95.3, 8940.0], [95.4, 8954.0], [95.5, 8954.0], [95.6, 8954.0], [95.7, 8954.0], [95.8, 8954.0], [95.9, 8954.0], [96.0, 8958.0], [96.1, 8958.0], [96.2, 8958.0], [96.3, 8958.0], [96.4, 8963.0], [96.5, 8963.0], [96.6, 8963.0], [96.7, 8970.0], [96.8, 8970.0], [96.9, 8970.0], [97.0, 8975.0], [97.1, 8975.0], [97.2, 8975.0], [97.3, 8975.0], [97.4, 8984.0], [97.5, 8984.0], [97.6, 8984.0], [97.7, 8995.0], [97.8, 8995.0], [97.9, 8995.0], [98.0, 10663.0], [98.1, 10663.0], [98.2, 10663.0], [98.3, 10663.0], [98.4, 10876.0], [98.5, 10876.0], [98.6, 10876.0], [98.7, 11115.0], [98.8, 11115.0], [98.9, 11115.0], [99.0, 11133.0], [99.1, 11133.0], [99.2, 11133.0], [99.3, 11133.0], [99.4, 11391.0], [99.5, 11391.0], [99.6, 11391.0], [99.7, 11729.0], [99.8, 11729.0], [99.9, 11729.0]], "isOverall": false, "label": "Get Cart Items", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 10.0, "series": [{"data": [[600.0, 2.0], [800.0, 1.0], [900.0, 9.0], [1000.0, 2.0], [1500.0, 1.0], [1600.0, 6.0], [1700.0, 3.0], [2000.0, 6.0], [2100.0, 4.0], [2800.0, 7.0], [2900.0, 3.0], [3200.0, 5.0], [3300.0, 5.0], [3500.0, 6.0], [3600.0, 2.0], [3700.0, 2.0], [3800.0, 6.0], [4000.0, 7.0], [4100.0, 2.0], [4200.0, 5.0], [4300.0, 4.0], [4500.0, 7.0], [4600.0, 3.0], [4700.0, 1.0], [4800.0, 9.0], [5000.0, 10.0], [5200.0, 10.0], [5400.0, 4.0], [5500.0, 6.0], [5700.0, 7.0], [5800.0, 3.0], [5900.0, 10.0], [6100.0, 10.0], [6300.0, 4.0], [6400.0, 6.0], [6500.0, 3.0], [6600.0, 7.0], [6700.0, 6.0], [6800.0, 4.0], [6900.0, 9.0], [7000.0, 1.0], [7100.0, 9.0], [7200.0, 1.0], [7300.0, 10.0], [7500.0, 9.0], [7700.0, 9.0], [7800.0, 2.0], [7900.0, 6.0], [8000.0, 3.0], [8100.0, 3.0], [8200.0, 3.0], [8400.0, 2.0], [8500.0, 3.0], [8600.0, 4.0], [8700.0, 3.0], [8800.0, 7.0], [8900.0, 10.0], [10600.0, 1.0], [10800.0, 1.0], [11100.0, 2.0], [11300.0, 1.0], [11700.0, 1.0], [400.0, 2.0]], "isOverall": false, "label": "Get Cart Items", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 284.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 14.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 284.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 125.0, "minX": 1.76408148E12, "maxY": 125.0, "series": [{"data": [[1.76408148E12, 125.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76408148E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1062.0, "minX": 1.0, "maxY": 11729.0, "series": [{"data": [[2.0, 8939.0], [3.0, 8954.0], [4.0, 8975.0], [5.0, 8984.0], [6.0, 8963.0], [7.0, 8995.0], [8.0, 8970.0], [9.0, 8958.0], [10.0, 8940.0], [11.0, 8827.0], [12.0, 8832.0], [13.0, 8831.0], [14.0, 8838.0], [15.0, 8809.0], [16.0, 8834.0], [17.0, 8831.0], [18.0, 8785.0], [19.0, 8784.0], [20.0, 8777.0], [21.0, 8630.0], [22.0, 8657.0], [23.0, 8634.0], [24.0, 8611.0], [25.0, 8584.0], [26.0, 8538.0], [27.0, 11729.0], [28.0, 8512.0], [29.0, 8414.0], [30.0, 8423.0], [31.0, 8218.0], [33.0, 8210.0], [32.0, 8206.0], [35.0, 11391.0], [34.0, 8171.0], [37.0, 8130.0], [36.0, 8140.0], [39.0, 8093.0], [38.0, 8096.0], [41.0, 7970.0], [40.0, 8095.0], [43.0, 7953.0], [42.0, 7971.0], [45.0, 7959.0], [44.0, 7943.0], [47.0, 7889.0], [46.0, 7940.0], [49.0, 7891.0], [48.0, 11133.0], [51.0, 7753.0], [50.0, 11115.0], [53.0, 7758.0], [52.0, 7750.0], [55.0, 7761.0], [54.0, 7741.0], [57.0, 7733.0], [56.0, 7743.0], [59.0, 7706.0], [58.0, 10876.0], [61.0, 7570.0], [60.0, 7706.0], [63.0, 4271.0], [62.0, 7537.0], [67.0, 2604.75], [65.0, 2621.25], [64.0, 4295.0], [66.0, 10663.0], [68.0, 3147.3333333333335], [71.0, 7341.0], [70.0, 7504.0], [69.0, 7516.0], [74.0, 7354.0], [73.0, 7356.0], [72.0, 7349.0], [79.0, 7311.0], [78.0, 7338.0], [77.0, 7344.0], [76.0, 7370.0], [83.0, 7221.0], [82.0, 7164.0], [81.0, 7157.0], [80.0, 7314.0], [87.0, 7175.0], [86.0, 7174.0], [85.0, 7160.0], [84.0, 7150.0], [91.0, 6976.0], [90.0, 7144.0], [89.0, 7131.0], [88.0, 7141.0], [95.0, 7008.0], [94.0, 6994.0], [93.0, 6977.0], [92.0, 6984.0], [99.0, 4341.0], [98.0, 3446.666666666667], [97.0, 3433.0], [96.0, 6989.0], [100.0, 3421.0], [101.0, 2938.25], [103.0, 6780.0], [102.0, 6801.0], [107.0, 6788.0], [106.0, 6800.0], [105.0, 6802.0], [104.0, 6803.0], [111.0, 6608.0], [110.0, 6766.0], [109.0, 6756.0], [108.0, 6763.0], [115.0, 6613.0], [114.0, 6617.0], [113.0, 6606.0], [112.0, 6625.0], [119.0, 6596.0], [118.0, 6608.0], [117.0, 6586.0], [116.0, 6618.0], [123.0, 3182.5], [122.0, 4268.0], [121.0, 6433.0], [120.0, 6559.0], [125.0, 2955.4], [124.0, 3559.0], [127.0, 6395.0], [126.0, 6434.0], [135.0, 6145.0], [134.0, 6174.0], [133.0, 6169.5], [131.0, 6163.0], [130.0, 6363.0], [129.0, 6382.0], [128.0, 6390.0], [143.0, 5989.0], [142.0, 5979.0], [141.0, 5994.0], [140.0, 6128.0], [139.0, 6139.0], [138.0, 6128.0], [137.0, 6141.0], [136.0, 6176.0], [151.0, 5813.0], [150.0, 5934.0], [149.0, 5935.0], [148.0, 5931.0], [147.0, 5936.0], [146.0, 5962.0], [145.0, 5952.0], [144.0, 5982.0], [159.0, 5709.0], [158.0, 5746.0], [157.0, 5775.0], [156.0, 5772.0], [155.0, 5782.0], [154.0, 5811.0], [153.0, 5820.0], [152.0, 5789.0], [167.0, 5500.0], [166.0, 5503.0], [165.0, 5495.0], [164.0, 5521.0], [163.0, 5558.0], [162.0, 5515.0], [161.0, 5540.0], [160.0, 5717.0], [168.0, 3712.6666666666665], [169.0, 4154.0], [171.0, 4081.0], [172.0, 3495.0], [173.0, 3531.25], [175.0, 5272.0], [174.0, 5293.0], [170.0, 5469.0], [183.0, 5083.0], [182.0, 5072.0], [181.0, 5077.0], [180.0, 5237.0], [179.0, 5257.0], [178.0, 5232.0], [177.0, 5265.0], [176.0, 5255.0], [191.0, 4870.0], [190.0, 5042.0], [189.0, 5028.0], [188.0, 5030.0], [187.0, 5054.0], [186.0, 5061.0], [185.0, 5054.0], [184.0, 5091.0], [194.0, 3677.25], [195.0, 3608.8], [197.0, 4071.0], [196.0, 3842.6666666666665], [199.0, 4823.0], [198.0, 4819.0], [193.0, 4885.0], [192.0, 4863.0], [207.0, 4543.0], [206.0, 4587.0], [205.0, 4566.0], [204.0, 4606.0], [203.0, 4592.0], [202.0, 4614.0], [201.0, 4609.0], [200.0, 4780.0], [213.0, 2383.5], [212.0, 3735.6], [211.0, 2995.0], [210.0, 4067.0], [209.0, 4055.5], [215.0, 4286.0], [214.0, 4346.0], [208.0, 4585.0], [223.0, 4111.0], [222.0, 4098.0], [221.0, 4077.0], [220.0, 4276.0], [219.0, 4299.0], [218.0, 4254.0], [217.0, 4282.0], [216.0, 1062.0], [227.0, 3340.3333333333335], [226.0, 2828.3333333333335], [225.0, 2336.5], [228.0, 3939.3333333333335], [230.0, 4063.0], [229.0, 4061.0], [224.0, 4065.0], [1.0, 8954.0]], "isOverall": false, "label": "Get Cart Items", "isController": false}, {"data": [[125.0, 5628.576666666665]], "isOverall": false, "label": "Get Cart Items-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 230.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 625.0, "minX": 1.76408148E12, "maxY": 47005.0, "series": [{"data": [[1.76408148E12, 47005.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76408148E12, 625.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76408148E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5628.576666666665, "minX": 1.76408148E12, "maxY": 5628.576666666665, "series": [{"data": [[1.76408148E12, 5628.576666666665]], "isOverall": false, "label": "Get Cart Items", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76408148E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5627.550000000003, "minX": 1.76408148E12, "maxY": 5627.550000000003, "series": [{"data": [[1.76408148E12, 5627.550000000003]], "isOverall": false, "label": "Get Cart Items", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76408148E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.273333333333337, "minX": 1.76408148E12, "maxY": 4.273333333333337, "series": [{"data": [[1.76408148E12, 4.273333333333337]], "isOverall": false, "label": "Get Cart Items", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76408148E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 461.0, "minX": 1.76408148E12, "maxY": 11729.0, "series": [{"data": [[1.76408148E12, 11729.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76408148E12, 8608.300000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76408148E12, 11132.82]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76408148E12, 8939.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76408148E12, 461.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76408148E12, 5875.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76408148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1933.5, "minX": 10.0, "maxY": 8954.0, "series": [{"data": [[10.0, 1933.5], [20.0, 3335.0], [23.0, 4581.0], [24.0, 5416.0], [26.0, 7948.0], [28.0, 6287.5], [14.0, 8954.0], [30.0, 7346.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1933.0, "minX": 10.0, "maxY": 8954.0, "series": [{"data": [[10.0, 1933.0], [20.0, 3335.0], [23.0, 4581.0], [24.0, 5415.5], [26.0, 7947.5], [28.0, 6287.0], [14.0, 8954.0], [30.0, 7346.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.76408148E12, "maxY": 5.0, "series": [{"data": [[1.76408148E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76408148E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.76408148E12, "maxY": 5.0, "series": [{"data": [[1.76408148E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76408148E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.76408148E12, "maxY": 5.0, "series": [{"data": [[1.76408148E12, 5.0]], "isOverall": false, "label": "Get Cart Items-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76408148E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.76408148E12, "maxY": 5.0, "series": [{"data": [[1.76408148E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76408148E12, "title": "Total Transactions Per Second"}},
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

