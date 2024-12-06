const calcularValorPedido = require('./calcular-valor-pedido')

it('não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {

    ///AAA - 3 passos de criação de um teste


    //ARRANG Arrumar
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    }

    //ACT - ação
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT - asserção - qual o resultado esperado.
    expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando valor dos produtos form menor que 500', () => {

    //ARRANGE
    const meuPedido = {
        itens: [
            { nome: 'Sanduiche', valor: 50 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    //ACT

    const resultado = calcularValorPedido(meuPedido)

    //ASSERT
    expect(resultado).toBe(150)
    
})

it('deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Poção de vida', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
    
})


// CASO OS ESTADOS DE ENTREGA SEJAM RS OU RS, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA.

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const meuPedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Poção de vida', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedidoComEstadoRS)

    expect(resultado).toBe(620)
})


// CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA.

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {
    const meuPedidoComEstadoRS = {
        estado: 'SC',
        itens: [
            { nome: 'Poção de vida', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedidoComEstadoRS)

    expect(resultado).toBe(620)
})


// CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA.

it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {
    const meuPedidoComEstadoRS = {
        estado: 'SP',
        itens: [
            { nome: 'Poção de vida', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedidoComEstadoRS)

    expect(resultado).toBe(600)
})