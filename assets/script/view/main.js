const main = () => {

    const getAllCases = async () => {
        try {
            const cases = await DataSource.getAllCases();
            renderCases(cases);
        } catch (error) {
            alert(error.message);
        }

    };

    const getAllCountries = async () => {
        try {
            const countries = await DataSource.getAllCountries();
            renderCountries(countries);
        } catch (error) {
            alert(error.message)
        }

    };

    const renderCases = (cases) => {
        $("#caseConfirmSpinner").hide();
        $("#caseConfirmCount").append(numeral(cases.cases).format("0,0")).show();

        $("#caseAliveSpinner").hide();
        $("#caseAliveCount").append(numeral(cases.recovered).format("0,0")).show();

        $("#caseDeathSpinner").hide();
        $("#caseDeathCount").append(numeral(cases.deaths).format("0,0")).show();
    };

    const renderCountries = (countries) => {
        $("#countriesSpinner").hide();
        countries.forEach(country => {
            console.log(country);
            const template = `
                <div class="countries-item card">
                    <span class="countries-item__title">${country.country}</span>
                    <span class="countries-item__info">
                        Di ${country.country} dilaporkan terdapat <span class="statistic">${numeral(country.todayCases).format('0,0')}</span> kasus baru, <span class="statistic">${numeral(country.todayDeaths).format('0,0')}</span> korban yang baru saja meninggal pada hari ini, sehingga total kasus yang terkonfirmasi saat ini sebanyak <span class="statistic">${numeral(country.cases).format('0,0')}</span>. Total korban yang berhasil sembuh sejauh ini sebanyak <span class="statistic">${numeral(country.recovered).format('0,0')}</span>, namun terdapat <span class="statistic">${numeral(country.critical).format('0,0')}</span> korban yang dinyatakan masih kritis. Tingkat kematian kasus COVID-19 di <span class="statistic">${country.country}</span> sebesar <span class="statistic">${numeral(country.deaths/country.cases).format('0.0%')}</span> dengan total korban yang sudah meninggal sebanyak <span class="statistic">${numeral(country.deaths).format('0,0')}</span>.
                    </span>
                </div>
            `;
            $("#countriesContainer").append(template);
        })
    };


    // run
    getAllCases();
    getAllCountries()
};