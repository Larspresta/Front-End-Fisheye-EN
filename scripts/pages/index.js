async function getPhotographers() {
    try {
      const response = await fetch('./data/photographers.json');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const fetchedData  = await response.json();
  
      console.log('Fetched photographers data', fetchedData);
  
      return {
        photographers: fetchedData.photographers
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

 function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Retreive photographer data
    const { photographers } = await getPhotographers();
    displayData(photographers);
};
    
init();

