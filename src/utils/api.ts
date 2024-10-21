export function mountOptions(method: string, urlParams: string, params: any) {
  const options = {
    method: method,
    url: `${process.env.URL_RAPID_API}/${urlParams}`,
    params: params,
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
    },
    timeout: 10000 
  };

  return options;
}
