function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtAno');
    var resultado = document.querySelector('div#resultado');
    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsexo = document.getElementsByName('radSexo');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(fsexo[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','bebeHomem.png');
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','JovemHomem.png');
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','AdultoHomem.png');
            }else{
                //Idoso
                img.setAttribute('src','IdosoHomem.png');
            }
        }else if(fsexo[1].checked){
            genero = "Mulher";
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','bebeMulher.png');
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','JovemMulher.png');
            }else if(idade < 50){
                //Adulta
                img.setAttribute('src','AdultaMulher.png');
            }else{
                //Idosa
                img.setAttribute('src','IdosaMulher.png');
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = 'Detectamos '+genero+' com '+idade+ ' anos';
        resultado.appendChild(img);
    }
}