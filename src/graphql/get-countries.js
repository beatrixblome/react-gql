import gql from 'graphql-tag'

 export const GET_COUNTRIES = gql` 
   query countries($filter: CountryFilterInput) {
     countries(filter : $filter) {
         name
         native
         capital
         emoji
         languages{
           code
           name
         }
       }
   }

`

export const GET_LANGUAGES = gql` 
query languages($filter: LanguageFilterInput) {
  languages(filter: $filter) {
        code
        name
      }
}
`

// conntries can only filter code
// languages can only filter code
