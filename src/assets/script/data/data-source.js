class DataSource {
    static get BASE_URL() {
        return "https://coronavirus-19-api.herokuapp.com/"
    }

    static async getAllCases() {
        try {
            const response = await fetch(this.BASE_URL + "all");
            if(response.status === 200) {
                const responseJson = await response.json();
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject({
                    message: "Ups! Something wrong with your request!",
                    errorCode: response.status
                })
            }
        } catch (e) {
            return Promise.reject({
                message: "Ups! Check your internet connection!",
                errorCode: 0
            })
        }
    }

    static async getAllCountries() {
        try {
            const response = await fetch(this.BASE_URL + "countries");
            if(response.status === 200) {
                const responseJson = await response.json();
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject({
                    message: "Ups! Something wrong with your request!",
                    errorCode: response.status
                })
            }
        } catch (e) {
            return Promise.reject({
                message: "Ups! Check your internet connection",
                errorCode: 0
            })
        }
    }
}

export default DataSource;