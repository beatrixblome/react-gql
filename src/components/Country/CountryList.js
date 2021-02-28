import React, { useState } from 'react';

export function CountryList({ country }) {

    const [languageCode, setLanguageCode] = useState('')
    const [firstLanguage, secondLanguage] = languageCode
    
    const renderGoogle = () => {
        if (firstLanguage && secondLanguage && firstLanguage !== secondLanguage) {
            return <input
                visibility='hidden'
                type='button'
                key={`${firstLanguage}-${secondLanguage}`}
                onClick={window.open(uri, "_blank")}
            />
           }        
        }
   

    const uri = `https://translate.google.com/?sl=${firstLanguage}&tl=&${secondLanguage}&op=translate`


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
            <li className="country__languages">
                    {country.languages.slice(0, 3).map(language => (
                                        <span
                                        type='submit'
                                        value={languageCode}
                                        key={`${language.code}-${language.name}`}
                                        onClick={(e) => {
                                            setLanguageCode(language.code,...languageCode);
                                            console.log(language.code)
                                          }}
                                    >  {language.name}                  
                                    </span>
                ))}
                </li>
                <li className="country__languageButton">
                {country.languages.slice(0, 1).map(language => (
                    <button>                    
                        <span>Sprache auswählen</span>
                    <i className="icon-chevron-right"></i>
                    </button>
                ))}
            </li>
            </ul>
            <div style={{ visibility: 'hidden', width:'0px'}}>{renderGoogle()}</div> 
            </>
    );
}
