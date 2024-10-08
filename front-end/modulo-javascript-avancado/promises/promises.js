//PROMISE ALL
//Quando uma das promises da erro o promise all retorna somente o erro e mesmo que as outras promises estejam funcionando, somente o erro retorna.
//Quando o tempo no setTimeout é o mesmo o código vai obedecer a ordem das linhas
//Quando tenho duas promises com erro a primeira que carregar retorna o erro no console.


const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "John"},
                {id: 2, name: "Jane"},
            ]);
        }, 2000);
    });
};

const loadRepositores = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                // {id: 1, name: "Repo 1"},
                // {id: 2, name: "Repo 2"},
                //SIMULANDO O ERRO 
                reject(new Error("Erro ao carregar os repositorios"))
            ]);
        }, 3000);
    });
}

const loadEvents = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve([
            //     {id: 1, name: "Event 1"},
            //     {id: 2, name: "Event 2"},
            // ]);

            reject(new Error("Erro ao carregar os eventos"))

        }, 2000);
    });
}

const loadAll = async () => {
    try {
        const result = await Promise.allSettled([
            loadUsers(),
            loadRepositores(),
            loadEvents(),
        ])

        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}

loadAll();