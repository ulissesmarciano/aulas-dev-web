let usuario = {
    nome: 'Ulisses',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluído')
    }
}

usuario.excluir() 