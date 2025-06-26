<script>
export default {
    data() {
        return {
            today: {
                date: "Thu, Jun 26",
                summary: "Some sun, then turning cloudy with rain this afternoon",
                high: "33°",
                low: "25°",
                tonightSummary: "Heavy evening rain; cloudy"
            },
            currentWeather: {
                cloud: "Mostly sunny",
                todayTmp: "32°",
                temperature: {
                    realFeel: "38°",
                    realFeelShade: "35°",
                },
                windDirection: {
                    wind: "N 7 km/s",
                    windGusts: "N 20 km/s",
                    airQuality: "Good"
                }

            }
        }
    }
}
</script>
<template>
    <div class="w-full max-w-2xl px-4 ">
        <a href="#" class="flex flex-col gap-2 p-4 bg-white rounded-lg shadow">
            <div class="flex justify-between items-center">
                <h2>Today's Weather</h2>
                <p class="">{{ today.date }}</p>
            </div>
            <div>
                <div>
                    <p>{{ today.summary }}<b> Hi: {{ today.high }} </b></p>
                </div>
                <div>
                    <p>{{ today.tonightSummary }}<b>Lo: {{ today.low }}</b></p>
                </div>
            </div>
        </a>
        <a href="#" class="flex flex-col gap-2 p-4 bg-white rounded-lg shadow mt-4">
            <div>
                <div>
                    <h2></h2>
                    <p></p>
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <h2>{{ currentWeather.todayTmp }}</h2>
                        <p>RealFeel {{ currentWeather.temperature.realFeel }}</p>
                        <div>
                            <p>{{ currentWeather.cloud }}</p>
                            <p>More DETAILS ></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>RealFeel Shade</span>
                            <span>{{ currentWeather.temperature.realFeelShade }}</span>
                        </div>
                        <div>
                            <span>Wind</span>
                            <span>{{ currentWeather.windDirection.wind }}</span>
                        </div>
                        <div>
                            <span>Wind Gusts</span>
                            <span>{{ currentWeather.windDirection.windGusts }}</span>
                        </div>
                        <div>
                            <span>Air Quality</span>
                            <span>{{ currentWeather.windDirection.airQuality }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
