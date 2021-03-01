import React, { useState, useEffect } from 'react';

export function CountryList({ country }) {

    const [languageCode, setLanguageCode] = useState([])
    const [firstLanguage, secondLanguage] = languageCode

    const renderGoogle = useEffect( () => {

        if ( ! languageCode ) return console.log(`languageCode ${languageCode}, 1.${firstLanguage}, 2.${secondLanguage}`)

        if ( firstLanguage  && secondLanguage && firstLanguage !== secondLanguage) {
            return <input
                visibility='hidden'
                type='button'
                key={`${firstLanguage}-${secondLanguage}`}
                onClick={window.open(uri, "_blank")}
            />
           }        
    }
    ,[ languageCode ] )
   
    const uri = `https://translate.google.com/?sl=${firstLanguage}&tl=${secondLanguage}&op=translate`


    return (
        <>
        <ul className="country">
            <li className="country__name">
                <p>{country.name}</p>
            </li>
            <li className="country__emoji">
                <span>{country.emoji}</span>
            </li>
                {country.capital &&
                    <li className="country__captial">
                    <span>{`Hauptstadt:  ${country.capital}`}</span>
                </li>
                } 
            <li className="country__languageButton">
                <div>                    
                    <span>Sprache auswählen: <h6>Wählen Sie zwei Sprachen aus einer Länderkarte</h6></span>
                    <i className="icon-chevron-down"></i>
                </div>
            </li>
            <li className="country__languages">
                {country.languages.slice(0, 4).map(language => (
                    <span
                        type='submit'
                        value={languageCode}
                        key={`${language.code}-${language.name}`}
                        onClick={(e) => {
                            setLanguageCode([language.code,...languageCode]);
                            }}
                        >
                        {language.name}                  
                    </span>
                ))}
            </li>
        </ul>
          { languageCode && <div style={{ visibility: 'hidden', width:'0px'}}>{renderGoogle}</div> }
    </>
    );
}
