import React, {useState} from "react";

interface states{
    name: string,
    capital: string
}

interface Country{
    country: string,
    states: states[]
}

const CountrySelector = () => {
    const countryStateCityData: Country[]  = [
        {
            country: "India",
            states: [
                { name: "Karnataka", capital: "Bangalore" },
                { name: "Maharstara", capital: "Mumbai" }
            ]
        },

        {
            country: "USA",
            states: [
                { name: "Califirnoa", capital: "LA" },
                { name: "Vasueloine", capital: "Alop" }
            ]
        }
    ]

    const [selectCountry, setSelectedCountry] = useState<string>("")
    const [selectedState, setSelectedState] = useState<string>("")
    const [capitleCity, setCapitleCity] = useState<string>("")

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setSelectedCountry(e.target.value)
        setSelectedState("")
        setCapitleCity("")

    }

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const state = e.target.value
        setSelectedState(state)

        const countryData = countryStateCityData.find((item)=> item.country === selectCountry)

        const statesData = countryData && countryData.states.find((item)=> item.name === state )

        setCapitleCity( statesData ? statesData.capital : "")

    }

    console.log(capitleCity, "capitleCity")
    return(
        <div>
            <h2>Country Selector</h2>
            <div>

        
            <label>Select country</label>
            <select value={selectCountry} onChange={(e)=>handleCountryChange(e)}>
                <option value="">Select country</option>
                {
                    countryStateCityData.map((item)=>(
                        <option key={item.country}>
                            {item.country}
                        </option>
                    ))
                }
            </select>

            <label>Select state</label>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="">Select state</option>
                {
                    selectCountry && countryStateCityData.filter((item)=>item.country ===selectCountry)?.[0]?.states.map((item)=>(
                        <option key={item.name}>
                            {item.name}
                        </option>
                    ))
                }
            </select>

            <input value={capitleCity} disabled={!selectedState}/>
            </div>
        </div>
    )
}

export default CountrySelector