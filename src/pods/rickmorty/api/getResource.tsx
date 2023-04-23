export const getResource = async (): Promise<any> => {
    return(
        fetch(`https://rickandmortyapi.com/api/character`)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Error fetching");
                }
              })
    )
}
