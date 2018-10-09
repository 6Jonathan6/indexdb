const getProducts = (function() {
  const URL = "https://api-test.gestionix.com/api/v3";
  const ACCESS_TOKEN = loginResponse.access_token;
  const COMPANY = "92";
  const ApiGestionix = axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Company: COMPANY
    }
  });
  return {
    API: ApiGestionix
  };
})();
