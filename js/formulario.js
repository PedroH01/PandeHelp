function validacao(){ 

    let nome_completo = document.getElementById("i_nome");
    let telefone = document.getElementById("i_tel");
    let data = document.getElementById("i_data");

    let sty_1 = "2px solid red";
    let sty_2 = "1px solid gray";

    input_style(nome_completo, sty_1, sty_2);
    input_style(telefone, sty_1, sty_2);
    input_style(data, sty_1, sty_2);
}

function input_style(input, style_1, style_2){

    if(!input.checkValidity()){
        input.style.border = style_1;
        return input.style.border;
    }

    if(input.checkValidity()){
        input.style.border = style_2;
        return input.style.border;
    }
}