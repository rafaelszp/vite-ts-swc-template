interface ModulusNumber {
    value: number;
    mod: number;
}
declare const modulus: (input: ModulusNumber) => number;
export default modulus;
export { ModulusNumber, modulus };
