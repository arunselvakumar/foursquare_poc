import ApiClient from "./client";

const fetchPlaces = () => {
  return ApiClient.get<any>("/places/search", {
    params: {
      categories: "13032,13033,13034,13035",
      fields: "fsq_id,name,photos,location,rating",
      limit: "50",
      ll: "41.8781,-87.6298",
    },
  });
};

fetchPlaces().then((response) => {
  console.log("fetchPlaces()", response.data.results);
});
