import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountryDetails({ countriesList }) {
  const [country, setCountry] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    const selectedCountry = countriesList.find((country) => {
      return country.alpha3Code === alpha3Code;
    });

    setCountry(selectedCountry);
  }, [alpha3Code]);

  function getCountryFromAlpha3Code(alpha3Code) {
    const country = countriesList.find((country) => {
      return country.alpha3Code === alpha3Code;
    });
    return country.name.common;
  }

  if (country) {
    return (
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt="flag"
        />
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>{country.area}</td>
              <td>
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((alpha3Code) => {
                    return (
                      <li>
                        <Link to={`/${alpha3Code}`}>
                          {getCountryFromAlpha3Code(alpha3Code)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
