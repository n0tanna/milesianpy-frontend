export async function callEquationApi(equation) {
  try {
    const url = `http://127.0.0.1:8000/calculation/${equation.equation}`;
    const data = "";

    const response = await fetch(url)
    return response.json();
    
  } catch (error) {
    return error;
  }
}
