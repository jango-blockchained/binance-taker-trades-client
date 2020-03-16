<template>
  <div>
    <nav class="bg-white dark-mode:bg-darktertiary px-8 pt-2 shadow-md mb-1">
      <div class="-mb-px flex justify-center">
        <a
          class="no-underline text-gray-700 dark-mode:text-gray-300 border-teal-dark uppercase tracking-wide font-bold text-sm py-3 mr-8"
          href="https://ftx.com/#a=1689414"
          target="_blank"
        >
          FTX EXCHANGE - Trade altcoin contracts using leverage with high
          liquidity.
        </a>
      </div>
    </nav>
    <div class="container -mb-px flex justify-center flex-wrap m-auto">

      <div class="flex justify-start w-full my-6">
      <div class="w-full mb-2 px-2 flex justify-between">
          <div>
            <h2 class="font-bold text-xl text-gray-700 dark-mode:text-gray-300">Binance Live Taker Trader Info</h2>
            <h4 class="text-sm text-gray-600 dark-mode:text-gray-400">Displays average taker (market buy &amp; sell) activity for the past 15 minutes.</h4>
            
            <!-- <div class="favorites__toggle flex mt-4 items-center">
              <span @click="favoritesToggle()" :class="{'bg-gray-500 justify-end active': isActive}" class="favorites__toggle-button border rounded-full border-grey flex items-center cursor-pointer w-12 justify-start">
                <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white dark-mode:bg-darktertiary shadow">
                </span>
              </span>
              <span class="mx-2 text-gray-400 text-xs font-semibold">Filter Favorites</span>
            </div> -->
          </div>
         
      </div>
    </div>

      <sorted-table
        :values="values"
        sort="symbol"
        dir="asc"
        class="min-w-full leading-normal mb-6"
      >
        <thead>
          <tr
            class="bg-gray-100 text-gray-600 dark-mode:bg-darktertiary dark-mode:text-gray-400 text-xs font-semibold uppercase tracking-wider"
          >
            <th
              scope="col"
              class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left"
            >
              <sort-link name="symbol">Symbol</sort-link>
            </th>
            <th
              scope="col"
              class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left"
            >
              <sort-link name="netVolume">Taker Volume</sort-link>
            </th>
            <th
              scope="col"
              class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left"
            >
              <sort-link name="percentNet">Net Takes %</sort-link>
            </th>
            <th
              scope="col"
              class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left"
            >
              <sort-link name="netBuyVsSell">Net Takes</sort-link>
            </th>
            <th
              scope="col"
              class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left"
            >
              <sort-link name="netLow">Net Sm. Takes</sort-link>
            </th>
            <th
              scope="col"
              class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left"
            >
              <sort-link name="netMid">Net Md. Takes</sort-link>
            </th>
            <th
              scope="col"
              class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left"
            >
              <sort-link name="netHigh">Net Lg. Takes</sort-link>
            </th>
            <!-- <th scope="col" class="px-3 py-2 lg:px-5 lg:py-5 border-b-2 border-gray-200 dark-mode:border-darktertiary text-left">
                </th> -->
          </tr>
        </thead>
        <tbody slot="body" slot-scope="sort" :class="{ favorites: isActive }">
          <tr
            v-for="value in sort.values"
            :key="value.pairName"
            class="bg-white text-gray-700 dark-mode:bg-darksecondary dark-mode:text-gray-300"
          >
            <td
              class="font-semibold leading-tight px-2 py-2 lg:px-5 lg:py-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm" title="taker volume"
            >
              <span>
                <a
                  :href="
                    'https://www.binance.com/indexSpa.html#/trade/index?symbol=' +
                      value.symbol
                  "
                  target="_blank"
                >
                  {{ value.symbol | slashIt }}
                </a>
              </span>
            </td>
            <td
              class="font-semibold leading-tight px-2 py-2 lg:px-5 lg:py-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm"
            >
              <span>
                {{ value.netVolume | NumFormat | dollahSign }}
              </span>
            </td>
             <td
              class="font-semibold leading-tight px-2 py-2 lg:px-5 lg:py-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm"
              :class="posOrNegText(value.percentNet)" title="net takes %"
            >
              <span class="relative inline-block px-3 py-1">
                <span
                  aria-hidden
                  :class="posOrNegBackground(value.percentNet)"
                  class="absolute inset-0 opacity-50 rounded-full"
                ></span>
                <span class="relative">
                  {{ value.percentNet | NumFormat }}%
                </span>
              </span>
            </td>
            <td
              class="font-semibold leading-tight px-2 py-2 lg:px-5 lg:py-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm"
              :class="posOrNegText(value.netBuyVsSell)" title="net takes"
            >
              <span class="relative inline-block px-3 py-1">
                <span
                  aria-hidden
                  :class="posOrNegBackground(value.netBuyVsSell)"
                  class="absolute inset-0 opacity-50 rounded-full"
                ></span>
                <span class="relative">
                  {{ value.netBuyVsSell | NumFormat | dollahSign }}
                </span>
              </span>
            </td>
            <td
              class="font-semibold leading-tight px-2 py-2 lg:px-5 lg:py-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm"
              :class="posOrNegText(value.netLow)" title="net small takes"
            >
              <span class="relative inline-block px-3 py-1">
                <span
                  aria-hidden
                  :class="posOrNegBackground(value.netLow)"
                  class="absolute inset-0 opacity-50 rounded-full"
                ></span>
                <span class="relative">
                  {{ value.netLow | NumFormat | dollahSign }}
                </span>
              </span>
            </td>
            <td
              class="font-semibold leading-tight px-2 py-2 lg:px-5 lg:py-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm"
              :class="posOrNegText(value.netMid)" title="net medium takes"
            >
              <span class="relative inline-block px-3 py-1">
                <span
                  aria-hidden
                  :class="posOrNegBackground(value.netMid)"
                  class="absolute inset-0 opacity-50 rounded-full"
                ></span>
                <span class="relative">
                  {{ value.netMid | NumFormat | dollahSign }}
                </span>
              </span>
            </td>
            <td
              class="font-semibold leading-tight px-2 py-2 lg:px-5 lg:py-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm"
              :class="posOrNegText(value.netHigh)" title="net large takes"
            >
              <span class="relative inline-block px-3 py-1">
                <span
                  aria-hidden
                  :class="posOrNegBackground(value.netHigh)"
                  class="absolute inset-0 opacity-50 rounded-full"
                ></span>
                <span class="relative">
                  {{ value.netHigh | NumFormat | dollahSign }}
                </span>
              </span>
            </td>
            <!-- <td class="font-semibold leading-tight px-2 pl-0 pr-5 border-b border-gray-200 dark-mode:border-darktertiary text-xs lg:text-sm text-left">
                  <img style="width:35px" class="m-auto mr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD20lEQVRoge1Zz2scZRh+nm/D5pKdb5ydTbwUNc1CY9oakRb6L3gSBVFUUA9GxIN4ikprqyIEBaEHJQFR8FAteBNB755CPbT1FFg89KDrzu7MbCHtJvO9HlJL0+zuzDedyUH2Oc5+7/M87/t+v2YWmGCCCUpDEMdngjg+U6bGVJnkxsg5AALg6TJ1SsE/YfhUJ4xMJ4ykE0Wny9JRpRELLwAgAMDgbFk6LIO03es9qaiu7OMnTvtabxatVUoHlFLncbA4H5ShVXgH2r3esqL6fQi3CORUw3WvFKlXeAcUeQ7DC0MC7xetV2gHgqC/JBVzFaMLI8oky57nXS1Ks9AOSEU+TOFkoiqFroXCOhD0+49LYq4hvShGmcqy581cK0K3uA4k5mxGPiUqea8o2UI60On3F5GY68heEKOMesLzatcfVNs6gb/6/dmqSNMkaIJoAmgCcgrAo5ZUfwLcBLAFwZaqYGtAbj1cq7VtSIYmEIbhQzvAvALmBZgn1LwRWSJxHIC2NGqLWxC0QP4BoCUwLQKtBGjNuW5rbAKdMP4UkBUAXskm86ILcN13nbvnyb4529O1CyB+O3xfmbG53a99fO+DA1NIRKpBFP0A8JnD85UOAj/H2nnuMfLWvc8P7BokB3Wtnwf44+HZS4Hgp652nr3fPDBmFxKRShDG34B4pVx34yHAZV87L5PcGfb7yH2bZFJ3nddAfFuauxQQuORr56VR5oGUg4dkUnec1wF8Wbi7FAjka2+v8rvjxqWenCSlrp23IbhYnL0UTXDD1/oNkiZtbKajn6TUXecdIb54cHup+MrTtTezmAcsLnMkpaH1uxB8kt9bigbkc9/Vb5GU7DE5EITRJQFeyBM7xsj3dVe/aBuX6zotYOEfxASs5InL+T4gx/PFFc9pncCWyDSAhTxiKWje4baCdQI6DBdRzjfVKScMj9kGWSeglCph+uTntl8DwiXrmIxgDm77BCilJZCH2zoBEWRsM28IZEUgKwBvZOQ+YevH6iBrt9szqjodp8QFgHy23dcXjxzh9p4xqXai6FWCHwGYGxMrsjPQjUajn9WTVQfU9PQSRpu/CXBNmeSo77pr/5kH9l6SGq67YQa3FwBZBRCN4CCr1UUrTzaDKRw2fQYEN5KpyoLvOque540yh9nZ2Zu+665VFY8CXANk+/4xNEM1RsIqAbN/ke1A8N0U5FjddVbmZmb+zsrjOE7gu84qdqvNO9f023c1VImbRCeMft373yu+3I6iZlG8vV7vkSCM1zthtNsJo1+K4j2AIIzXu93uybL4u93uySCM18vin2CC/yP+BT3fQy+h9xp6AAAAAElFTkSuQmCC">
                </td> -->
          </tr>
        </tbody>
      </sorted-table>

      <!-- <div v-html="values" class="mb-4 text-gray-700" /> -->
    </div>
  </div>
</template>

<script>
const axios = require("axios");
// let url = "http://localhost:5000/api/pairs";
let url = "https://arcane-ravine-11965.herokuapp.com/api/pairs";

export default {
  components: {},
  created() {
    this.loadData();
    setInterval(() => this.loadData(), 15000);
  },
  computed: {
    values: function() {
      let obj = this.info;

      var array = [];
      for (var key in obj) {
        array.push(obj[key]);
      }

      array.forEach(obj => {
        obj.totalTrades = +obj.totalTrades;
        obj.averageTradeSize = +obj.averageTradeSize;
        obj.marketBuyVolume = +obj.marketBuyVolume;
        obj.marketSellVolume = +obj.marketSellVolume;
        obj.netVolume = +obj.netVolume;
        obj.percentNet = +obj.percentNet;
        obj.lowMarketBuys = +obj.lowMarketBuys;
        obj.lowMarketSells = +obj.lowMarketSells;
        obj.netLow = +obj.netLow;
        obj.midMarketBuys = +obj.midMarketBuys;
        obj.midMarketSells = +obj.midMarketSells;
        obj.netMid = +obj.netMid;
        obj.highMarketBuys = +obj.highMarketBuys;
        obj.highMarketSells = +obj.highMarketSells;
        obj.netHigh = +obj.netHigh;
        obj.netLowPercent = +obj.netLowPercent;
        obj.netMidPercent = +obj.netMidPercent;
        obj.netHighPercent = +obj.netHighPercent;
        obj.netBuyVsSell = +obj.netBuyVsSell;
      });

      return array;
    },
    
  },
  filters: {
    slashIt(value) {
      return value.replace("USDT", " / USDT");
    },
    NumFormat(value) {
      if (!value) return parseInt(0);
      var intPart = Number(value).toFixed(0);
      var intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      return intPartFormat;
    },
    dollahSign(value) {
      if (value === 'err') return parseInt(0);
      if (Math.sign(parseInt(value)) < 0) {
        return value.replace("-", "-$");
      } else if (Math.sign(parseInt(value)) >= 0) {
        return "$" + value;
      } else {
        return value;
      }
    }
  },
  methods: {
    loadData() {
      axios
        .get(url)
        .then(response => {
          this.info = response.data;
          this.data = response.data;
          console.log(this.info);
          this.updated_at = new Date().toTimeString();
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    posOrNegBackground(val) {
      if (parseInt(val) == false) {
        return "bg-gray-200 dark-mode:bg-darktertiary";
      } else if (parseInt(val) >= 0) {
        return "bg-tvtealprimary dark-mode:bg-tvtealprimary";
      } else if (parseInt(val) < 0) {
        return "bg-tvredprimary dark-mode:bg-tvredprimary";
      } else {
        return "bg-gray-200 dark-mode:bg-gray-900";
      }
    },
    posOrNegText(val) {
      if (parseInt(val) == false) {
        return "text-gray-900 dark-mode:text-gray-600";
      } else if (parseInt(val) >= 0) {
        return "text-green-900 dark-mode:text-green-200";
      } else if (parseInt(val) < 0) {
        return "text-red-900 dark-mode:text-red-200";
      } else {
        return "text-gray-900 dark-mode:text-gray-200";
      }
    }
  },
  data() {
    return {
      shitCoins: [],
      newData: [],
      info: [],
      data: [],
      selectedValue: null,
      favoritesActive: false,
      isActive: false,
      loading: true,
      updated_at: new Date().toTimeString()

    };
  }
};
</script>

<style>
  span {
    transition: all .3s linear;
    -webkit-transition: all .3s linear;
    -moz-transition: all .2s linear;
    -o-transition: all .2s linear;
}
</style>

