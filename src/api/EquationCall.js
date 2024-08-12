export async function callEquationApi(equation) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}calculation/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        equation: [...equation.equation],
      }),
    });
    return response.json();
  } catch (error) {
    return error;
  }
}
