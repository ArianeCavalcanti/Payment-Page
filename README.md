# Página de Pagamento

## Contexto

Neste projeto, você precisará usar seus conhecimentos em Javascript para implementar o comportamento de uma página de pagamento para um site de compras.
Será possível pagar com Pix ou cartão de crédito, e a página deverá se comportar adequadamente, mostrando os campos necessários e calculando o valor corretamente,
já que há descontos ou juros aplicados em cada caso.



## Requisitos

Baseando-se nos wireframes, a página HTML deverá ter os seguintes comportamentos:

1. **Informar dados**: Caso o campo valor esteja em branco, deverá ser emitido um alerta ou ser mostrada na página uma mensagem informando que o campo deve ser preenchido.
2. **Pix selecionado**: Exibe-se um painel com as informações necessárias para Pix e mostra o total aplicando 10% de desconto sobre o valor informado.
3. **Cartão de Crédito selecionado**: Exibe-se o formulário solicitando dados do cartão com os seguintes comportamentos:
   - Ao digitar no campo Número, a bandeira do cartão será definida pela inicial da numeração. Se iniciar com “1234”, será mostrado um ícone e, se iniciar com “4321”, será mostrado outro ícone à frente do campo.
   - Ao digitar um valor que não inicie com “1234” nem com “4321”, deverá ser mostrada a mensagem “Número de cartão inválido”.
   - Ao abrir o painel, deve-se calcular e mostrar os valores de parcelamento, considerando:
     - 1 a 3 parcelas são sem juros.
     - 4 parcelas implicam 5% de juros sobre o valor informado inicialmente.
     - 5 parcelas implicam em 10% de juros sobre o valor informado inicialmente.
   - Ao selecionar uma opção no campo Parcelas, o valor Total abaixo do painel deve ser atualizado.
4. **Botão Pagar**: Deve-se mostrar apenas uma mensagem de sucesso.
5. Em nenhuma condição, ambos os painéis (Pix e Cartão de crédito) podem aparecer ao mesmo tempo.

## Fonte

Figura – Wireframe página de pagamento
Fonte: Senac EAD (2023)
