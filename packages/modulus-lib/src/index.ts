
interface ModulusNumber {
  value: number;
  mod: number;
}

const modulus = (input: ModulusNumber):number => {
  console.log(`calculating ${input.value} % ${input.mod}`)
  return (input.value % input.mod);
  // return 1000000000000
}

export default modulus
export { 
  ModulusNumber,
  modulus
}