import React, { useState, useMemo } from 'react';

export function CountryList({ country }) {

    const [languageCode, setLanguageCode] = useState('')
    const [firstLanguage, secondLanguage] = languageCode
    
    // const renderGoogle = useMemo( () => {

    //     if (!languageCode) return [];
    //     if ( ! searchLanguage ) return data.countries;
    //     return languageCode.filter( language => 
    //         language.reduce( (p,language) => p || language.name.toLocaleLowerCase().match(lowerCaseSearch), false)
    //     )
    //     }
    //     , [languageCode, secondLanguage])
    // arr.slice(Math.max(arr.length - 2, 1))

    const renderGoogle = () => {
        if (languageCode !== " " && firstLanguage !== secondLanguage) {
            return <input
                visibility='hidden'
                type='button'
                key={`${firstLanguage}-${secondLanguage}`}
                onClick={window.open(uri, "_blank")}
            />
           }        
        }
   

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
                        <span>Sprache auswählen</span>
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
                                            setLanguageCode(language.code,...languageCode);
                                            console.log(...languageCode)
                                          }}
                                          
                                    >  {language.name}                  
                                    </span>
                ))}
                </li>

            </ul>
            <div style={{ visibility: 'hidden', width:'0px'}}>{renderGoogle()}</div> 
            </>
    );
}
