function makeArray<T>(item: T): T[]{ // QUANDO EU DECIDO PASSAR VÁRIOS TIPOS EM UMA FUNJÇÃO EU UTILIZO O GENERICS <>
    return [item]
}

const numbers = makeArray(10)