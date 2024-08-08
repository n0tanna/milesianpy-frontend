export async function callEquationApi(equation) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/calculation/${equation.equation}`);
    const data = await response.json();
    console.log(data)
    return data
  } catch (error) {
   return error
  }
}
