function entrar(){
    let area = document.getElementById('area');
    let x = prompt("Por favor, digite o número do seu pedido");
    switch(x){
          case "0":
            area.innerHTML = "Seu pedido foi um agua gelada.<br>Deseja pedir outra coisa?</br><br>0-Agua gelada</br><br>1-Coca cola</br><br>2-Hamburguer</br><br>3-Cachorro Quente</br>"
            break
          case "1":
            area. innerHTML = "Seu pedido foi coca-cola.<br>Deseja pedir outra coisa?</br><br>0-Agua gelada</br><br>1-Coca cola</br><br>2-Hamburguer</br><br>3-Cachorro Quente</br>"
            break
          case "2":
            area.innerHTML = "Seu pedido foi Hamburguer<br>Deseja pedir outra coisa?</br><br>0-Agua gelada</br><br>1-Coca cola</br><br>2-Hamburguer</br><br>3-Cachorro Quente</br>"
            break
          case "3":
            area.innerHTML = " Seu pedido foi cachorro quente<br>Deseja pedir outra coisa?</br><br>0-Agua gelada</br><br>1-Coca cola</br><br>2-Hamburguer</br><br>3-Cachorro Quente</br>"
            break
          default:
            area.innerHTML = "Não foi possivel registrar seu pedido,tente novamente!</br><br>0-Agua gelada</br><br>1-Coca cola</br><br>2-Hamburguer</br><br>3-Cachorro Quente</br>"
            break             
         }
    
}

