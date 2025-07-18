function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.getWeatherdata(`${position.coords.latitude},${position.coords.longitude}`)
            }
        )
    }
}

export default getCurrentLocation;
