var _0x2bb310=_0x577c;(function(_0x3a28e2,_0x53a8b6){var _0x478f77=_0x577c,_0x25a84e=_0x3a28e2();while(!![]){try{var _0xe34cae=-parseInt(_0x478f77(0xd8))/0x1*(parseInt(_0x478f77(0x114))/0x2)+parseInt(_0x478f77(0xde))/0x3+parseInt(_0x478f77(0xf2))/0x4+-parseInt(_0x478f77(0xc8))/0x5+parseInt(_0x478f77(0xca))/0x6+parseInt(_0x478f77(0xee))/0x7+-parseInt(_0x478f77(0x124))/0x8;if(_0xe34cae===_0x53a8b6)break;else _0x25a84e['push'](_0x25a84e['shift']());}catch(_0xd8ae83){_0x25a84e['push'](_0x25a84e['shift']());}}}(_0x1138,0xf2f9b));import{Cartas}from'../BancoDeDados.js';console['log'](_0x2bb310(0xe6));let agencia='';var minhasCartas=[],comparsas=[],infelizes=[],passados=[],id=0x0,id_atual=0x0,vidas=0x3;function sortear_agencia(){var _0x588d72=_0x2bb310,_0x4e6f17=Math[_0x588d72(0xe8)](Math[_0x588d72(0xbe)]()*0x3);_0x4e6f17+=0x1;_0x4e6f17==0x1&&(agencia=_0x588d72(0x127));_0x4e6f17==0x2&&(agencia=_0x588d72(0xea));_0x4e6f17==0x3&&(agencia=_0x588d72(0xd7));if(agencia===_0x588d72(0xea))minhasCartas['push'](Cartas[numeroAleatorio(0x0,0x7)]),minhasCartas['push'](Cartas[numeroAleatorio(0x8,0xf)]);else{if(agencia===_0x588d72(0x127))minhasCartas[_0x588d72(0xef)](Cartas[numeroAleatorio(0x10,0x17)]),minhasCartas['push'](Cartas[numeroAleatorio(0x8,0xf)]);else agencia===_0x588d72(0xd7)?(minhasCartas[_0x588d72(0xef)](Cartas[numeroAleatorio(0x0,0x7)]),minhasCartas[_0x588d72(0xef)](Cartas[numeroAleatorio(0x10,0x17)])):console[_0x588d72(0x11b)](_0x588d72(0x11a));}}function MostraAgencia(){var _0x2af05f=_0x2bb310;sortear_agencia();var _0x5a3fc2=_0x2af05f(0x10a)+agencia+_0x2af05f(0x101)+agencia+_0x2af05f(0x110),_0x8f1eaf=document['getElementById'](_0x2af05f(0xc4));_0x8f1eaf[_0x2af05f(0xcc)]=_0x5a3fc2;}function TextoAgencia(_0x21f031){var _0xdd3e33=_0x2bb310;if(_0x21f031==_0xdd3e33(0x127))var _0xfd5bad='\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20'+_0x21f031+'\x20container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h1>Sobre\x20a\x20'+_0x21f031+_0xdd3e33(0xe9);else{if(_0x21f031=='Lovra')var _0xfd5bad=_0xdd3e33(0x125)+_0x21f031+_0xdd3e33(0xd0)+_0x21f031+_0xdd3e33(0x128);else{if(_0x21f031==_0xdd3e33(0xd7))var _0xfd5bad=_0xdd3e33(0x125)+_0x21f031+_0xdd3e33(0xd0)+_0x21f031+_0xdd3e33(0xc6);else var _0xfd5bad=_0xdd3e33(0xd3);}}var _0x2fd82b=document[_0xdd3e33(0xc9)]('cardContainer');_0x2fd82b[_0xdd3e33(0xcc)]=_0xfd5bad;const _0x17a852=document[_0xdd3e33(0xec)](_0xdd3e33(0xe4));MaquinaDeEscrever(_0x17a852),playTypingSound(),getCartas(_0x21f031);var _0x427347=document[_0xdd3e33(0xec)]('#proximo2');_0x427347['addEventListener'](_0xdd3e33(0x113),exibirCartas);}MostraAgencia();var buttonProximo=document['querySelector']('#proximo');function _0x577c(_0x5d0f31,_0x5f4066){var _0x113830=_0x1138();return _0x577c=function(_0x577c3f,_0x1278dc){_0x577c3f=_0x577c3f-0xba;var _0x3b3f23=_0x113830[_0x577c3f];return _0x3b3f23;},_0x577c(_0x5d0f31,_0x5f4066);}buttonProximo[_0x2bb310(0x109)]('click',function(){TextoAgencia(agencia);});function MaquinaDeEscrever(_0x3ad985){var _0x1e6e0e=_0x2bb310;const _0x452482=_0x3ad985['innerHTML'][_0x1e6e0e(0x119)]('');_0x3ad985[_0x1e6e0e(0xcc)]='\x20',_0x452482[_0x1e6e0e(0xf9)](function(_0x4cde4f,_0x4784cc){setTimeout(function(){var _0x85b3c6=_0x577c;_0x3ad985[_0x85b3c6(0xcc)]+=_0x4cde4f,_0x4784cc===_0x452482['length']-0x1&&stopTypingSound();},0x28*_0x4784cc);});}var typingSoundInterval;function playTypingSound(){var _0x2ce3b7=_0x2bb310,_0x12bee6=document['getElementById'](_0x2ce3b7(0xf6));_0x12bee6[_0x2ce3b7(0x123)](),typingSoundInterval=setTimeout(function(){var _0x316ab3=_0x2ce3b7;_0x12bee6[_0x316ab3(0x100)]();},0x1e8480);}function stopTypingSound(){var _0x3776c9=_0x2bb310,_0x38c968=document[_0x3776c9(0xc9)]('typing-sound');_0x38c968['pause'](),clearTimeout(typingSoundInterval);}function _0x1138(){var _0x40d11b=['.cards_infelizes','.resultado_infelizes','NKVD','122777BwVBWd','classList','atividade_suspeita','pais','img','add','1847946xLzcsV','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','/8</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x27texto\x27>','gabarito','Acertou','contador_de_vidas','.titulo-principal','style','Database\x20Imported','respostaElement\x20erro','floor','</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22textoSobre\x20titulo-principal\x22\x20id=\x22typing-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Bem-vindo,\x20agente.\x20Você\x20agora\x20serve\x20ao\x20poderoso\x20Reich\x20Alemão.\x20Nossa\x0a\x20\x20\x20\x20\x20\x20\x20\x20missão\x20é\x20eliminar\x20todos\x20os\x20inimigos\x20do\x20estado\x20e\x20garantir\x20a\x20supremacia\x20da\x20raça\x0a\x20\x20\x20\x20\x20\x20\x20\x20ariana.\x20Como\x20parte\x20da\x20Gestapo,\x20seu\x20principal\x20objetivo\x20é\x20identificar\x0a\x20\x20\x20\x20\x20\x20\x20\x20corretamente\x20cada\x20suspeito.\x20Determine\x20se\x20eles\x20são\x20infelizes\x20(traidores)\x20que\x0a\x20\x20\x20\x20\x20\x20\x20\x20ameaçam\x20nosso\x20regime,\x20comparsas\x20que\x20nos\x20apoiam\x20ou\x20se\x20são\x20infiltrados\x20que\x0a\x20\x20\x20\x20\x20\x20\x20\x20não\x20pertencem\x20a\x20nossa\x20agência\x20para\x20você\x20passar\x20adiante.\x20Sua\x20lealdade\x20e\x20precisão\x0a\x20\x20\x20\x20\x20\x20\x20\x20são\x20cruciais.\x20Confio\x20em\x20sua\x20capacidade\x20de\x20proteger\x20nosso\x20estado.\x20Avante,\x20pela\x0a\x20\x20\x20\x20\x20\x20\x20\x20glória\x20do\x20Reich!\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22proximo2\x22\x20class=\x22buttonVoltar\x20proximo\x22>PRÓXIMO</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','Lovra','Acabaram\x20suas\x20vidas!','querySelector','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22resultado_comparsas\x20card_resultado\x22></div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22resultado_infelizes\x20card_resultado\x22></div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22resultado_passados\x20card_resultado\x22></div>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','6690075PWkvbE','push','.passar','.resultado_comparsas','5518264mUWPCz','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container_cards\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22parte\x22\x20id=\x22parte1\x22><img\x20id=\x22card_img\x22\x20src=\x22','setAttribute','image-container','typing-sound','.comparsa','resultado_img','forEach','TESTE-03','textContent','overlay','TESTE-02','.resultado_passados','myModal','pause','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Você\x20foi\x20designado\x20a\x20agência\x20:</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22centralizar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22logo\x22\x20src=\x22../imgs/','hidden','Click\x20para\x20ver\x20resposta','btn_gabarito','div','.cards_passados','filter','className','addEventListener','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20','&times;','nome','trim','src','Agência\x20do\x20','.png\x22\x20alt=\x22Imagem\x20do\x20Card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22proximo\x22\x20class=\x22buttonVoltar\x20proximo\x22>PRÓXIMO</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','modal','.cards_comparsas','click','24PAJyam','\x22\x20alt=\x22Imagem\x20do\x20Card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x27texto\x27>','none','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.infeliz','split','Agência\x20não\x20reconhecida','log','cards_selecionados','btn_avancar','display','some','respostaElement','length','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','play','9724296EhvsSY','\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20','agencia','Gestapo','</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22textoSobre\x20titulo-principal\x22\x20id=\x22typing-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Saudações,\x20agente.\x20Você\x20foi\x20escolhido\x20para\x20defender\x20o\x20futuro\x20da\x20Itália.\x0a\x20\x20\x20\x20\x20\x20\x20\x20Nosso\x20dever\x20é\x20silenciar\x20qualquer\x20forma\x20de\x20dissidência\x20e\x20garantir\x20a\x20unidade\x20e\x20a\x0a\x20\x20\x20\x20\x20\x20\x20\x20força\x20do\x20nosso\x20estado.\x20Como\x20parte\x20da\x20L’Ovra,\x20sua\x20missão\x20principal\x20é\x20identificar\x0a\x20\x20\x20\x20\x20\x20\x20\x20corretamente\x20os\x20suspeitos.\x20Avalie\x20se\x20eles\x20são\x20infelizes\x20(traidores)\x20que\x20ameaçam\x0a\x20\x20\x20\x20\x20\x20\x20\x20nossa\x20pátria,\x20comparsas\x20fiéis\x20ou\x20se\x20são\x20infiltrados\x20que\x20não\x20pertencem\x20a\x20nossa\x0a\x20\x20\x20\x20\x20\x20\x20\x20agência\x20para\x20você\x20passar\x20adiante.\x20Sua\x20observação\x20e\x20determinação\x20serão\x20testadas.\x0a\x20\x20\x20\x20\x20\x20\x20\x20Prove\x20sua\x20lealdade\x20e\x20faça\x20o\x20que\x20é\x20necessário\x20pelo\x20Duce\x20e\x20pelo\x20estado!\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22proximo2\x22\x20class=\x22buttonVoltar\x20proximo\x22>PRÓXIMO</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22parte\x22\x20id=\x22parte3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22botao_escolha\x20comparsa\x22>COMPARSA</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22botao_escolha\x20infeliz\x22>INFELIZ</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22botao_escolha\x20passar\x22>INFILTRADO</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22parte4\x20cards_comparsas\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22parte4\x20cards_infelizes\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22parte4\x20cards_passados\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','body','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Click\x20para\x20ver\x20o\x20gabarito','random','\x22\x20alt=\x22Imagem\x20do\x20Card\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22parte\x22\x20id=\x22parte2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22display\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22contador_de_vidas\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22contador_de_cartas\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22texto_cont\x22>Carta:\x20','respostaElement\x20acerto','createElement','button','Errou','cardContainer','onclick','</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22textoSobre\x20titulo-principal\x22\x20id=\x22typing-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22Camarada,\x20bem-vindo\x20à\x20NKVD.\x20Você\x20agora\x20é\x20um\x20guardião\x20da\x0a\x20\x20\x20\x20\x20\x20\x20\x20revolução\x20proletária.\x20Nosso\x20objetivo\x20é\x20construir\x20uma\x20sociedade\x20justa\x20e\x0a\x20\x20\x20\x20\x20\x20\x20\x20igualitária,\x20livre\x20de\x20inimigos\x20internos\x20que\x20procuram\x20destruir\x20nossos\x20ideais\x0a\x20\x20\x20\x20\x20\x20\x20\x20comunistas.\x20Sua\x20tarefa\x20principal\x20é\x20identificar\x20corretamente\x20os\x20suspeitos.\x0a\x20\x20\x20\x20\x20\x20\x20\x20Determine\x20se\x20eles\x20são\x20infelizes\x20(traidores)\x20conspirando\x20contra\x20o\x20estado,\x0a\x20\x20\x20\x20\x20\x20\x20\x20comparsas\x20leais\x20ou\x20se\x20são\x20infiltrados\x20que\x20não\x20pertencem\x20a\x20nossa\x20agência\x20para\x0a\x20\x20\x20\x20\x20\x20\x20\x20você\x20passar\x20adiante.\x20Use\x20sua\x20habilidade\x20e\x20perspicácia\x20para\x20assegurar\x20a\x20justiça\x0a\x20\x20\x20\x20\x20\x20\x20\x20revolucionária.\x20Pela\x20glória\x20da\x20União\x20Soviética!\x22\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22proximo2\x22\x20class=\x22buttonVoltar\x20proximo\x22>PRÓXIMO</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','appendChild','5224990bGhSkb','getElementById','10666878tFClov','frase','innerHTML','id_unico','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22pais_img\x22\x20src=\x22','alt','\x20container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h1>Sobre\x20a\x20','target','\x20=\x20','Error','resposta'];_0x1138=function(){return _0x40d11b;};return _0x1138();}function getCartas(_0x257a5a){var _0x402a1a=_0x2bb310,_0x2c7f5=[];for(var _0x56311d=0x0;_0x56311d<Cartas[_0x402a1a(0x121)];_0x56311d++){var _0x1f3564=Cartas[_0x56311d];if(_0x1f3564[_0x402a1a(0x126)]===_0x257a5a){if(minhasCartas[_0x402a1a(0x121)]<0x8)minhasCartas[_0x402a1a(0xef)](_0x1f3564);else break;}else _0x2c7f5[_0x402a1a(0xef)](_0x1f3564);}embaralharCartas(minhasCartas);}function numeroAleatorio(_0xa57f1f,_0xda6be7){var _0x13fdfd=_0x2bb310;return Math['floor'](Math[_0x13fdfd(0xbe)]()*(_0xda6be7-_0xa57f1f+0x1))+_0xa57f1f;}function embaralharCartas(_0x196d1f){var _0x2e20a8=_0x2bb310;for(let _0x3a2a1f=_0x196d1f[_0x2e20a8(0x121)]-0x1;_0x3a2a1f>0x0;_0x3a2a1f--){const _0x1459ff=Math[_0x2e20a8(0xe8)](Math[_0x2e20a8(0xbe)]()*(_0x3a2a1f+0x1));[_0x196d1f[_0x3a2a1f],_0x196d1f[_0x1459ff]]=[_0x196d1f[_0x1459ff],_0x196d1f[_0x3a2a1f]];}return _0x196d1f;}function exibirCartas(){stopTypingSound(),_0x366d0c(id);function _0x366d0c(_0x36be22){var _0x3ceae8=_0x577c;(_0x36be22>=minhasCartas[_0x3ceae8(0x121)]||_0x36be22<0x0)&&(_0x366d0c(0x7),_0x5b780c());console['log'](comparsas);var _0x2f06f2=_0x3ceae8(0xf3)+minhasCartas[_0x36be22][_0x3ceae8(0xdc)]+_0x3ceae8(0xbf)+(id_atual+0x1)+_0x3ceae8(0xe0)+minhasCartas[_0x36be22][_0x3ceae8(0xcb)]+_0x3ceae8(0xce)+minhasCartas[_0x36be22][_0x3ceae8(0xdb)]+_0x3ceae8(0x115)+minhasCartas[_0x36be22][_0x3ceae8(0xda)]+_0x3ceae8(0xba),_0x5569b5=document[_0x3ceae8(0xc9)](_0x3ceae8(0xc4));_0x5569b5[_0x3ceae8(0xcc)]=_0x2f06f2;var _0x58da8b='';if(vidas===0x3)_0x58da8b=_0x3ceae8(0x122);else{if(vidas===0x2)_0x58da8b=_0x3ceae8(0xdf);else vidas===0x1?_0x58da8b=_0x3ceae8(0xbc):_0x58da8b='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';}document[_0x3ceae8(0xc9)](_0x3ceae8(0xe3))['innerHTML']=_0x58da8b;var _0xe15c58=document['querySelector'](_0x3ceae8(0xf7));_0xe15c58[_0x3ceae8(0x109)](_0x3ceae8(0x113),()=>{var _0x27dc63=_0x3ceae8;console['log'](minhasCartas[_0x36be22][_0x27dc63(0x10c)]),!comparsas[_0x27dc63(0x11f)](_0x3de1eb=>_0x3de1eb[_0x27dc63(0x10c)]===minhasCartas[_0x36be22][_0x27dc63(0x10c)])&&(infelizes['some'](_0x10dffd=>_0x10dffd['nome']===minhasCartas[_0x36be22][_0x27dc63(0x10c)])&&(infelizes=infelizes[_0x27dc63(0x107)](_0x218227=>_0x218227[_0x27dc63(0x10c)]!==minhasCartas[_0x36be22][_0x27dc63(0x10c)])),passados[_0x27dc63(0x11f)](_0xd5eedc=>_0xd5eedc['nome']===minhasCartas[_0x36be22][_0x27dc63(0x10c)])&&(passados=passados[_0x27dc63(0x107)](_0x5109ae=>_0x5109ae[_0x27dc63(0x10c)]!==minhasCartas[_0x36be22][_0x27dc63(0x10c)])),comparsas[_0x27dc63(0xef)]({'nome':minhasCartas[_0x36be22][_0x27dc63(0x10c)],'img':minhasCartas[_0x36be22][_0x27dc63(0xdc)],'gabarito':minhasCartas[_0x36be22]['gabarito'],'resposta':minhasCartas[_0x36be22]['resposta'],'agencia':minhasCartas[_0x36be22]['agencia'],'id_unico':_0x36be22})),id_atual++,_0x366d0c(_0x36be22+0x1);});var _0x56c510=document[_0x3ceae8(0xec)](_0x3ceae8(0x118));_0x56c510[_0x3ceae8(0x109)]('click',()=>{var _0x311c3d=_0x3ceae8;console['log'](_0x311c3d(0xfd)),!infelizes[_0x311c3d(0x11f)](_0x360e1f=>_0x360e1f[_0x311c3d(0x10c)]===minhasCartas[_0x36be22]['nome'])&&(comparsas[_0x311c3d(0x11f)](_0x334974=>_0x334974[_0x311c3d(0x10c)]===minhasCartas[_0x36be22][_0x311c3d(0x10c)])&&(comparsas=comparsas[_0x311c3d(0x107)](_0x2f31c2=>_0x2f31c2[_0x311c3d(0x10c)]!==minhasCartas[_0x36be22]['nome'])),passados[_0x311c3d(0x11f)](_0x407db0=>_0x407db0['nome']===minhasCartas[_0x36be22][_0x311c3d(0x10c)])&&(passados=passados[_0x311c3d(0x107)](_0x269e3e=>_0x269e3e[_0x311c3d(0x10c)]!==minhasCartas[_0x36be22][_0x311c3d(0x10c)])),infelizes[_0x311c3d(0xef)]({'nome':minhasCartas[_0x36be22][_0x311c3d(0x10c)],'img':minhasCartas[_0x36be22][_0x311c3d(0xdc)],'gabarito':minhasCartas[_0x36be22]['gabarito'],'resposta':minhasCartas[_0x36be22][_0x311c3d(0xd4)],'agencia':minhasCartas[_0x36be22][_0x311c3d(0x126)],'id_unico':_0x36be22})),id_atual++,_0x366d0c(_0x36be22+0x1);});var _0x51b4ea=document[_0x3ceae8(0xec)](_0x3ceae8(0xf0));_0x51b4ea[_0x3ceae8(0x109)](_0x3ceae8(0x113),()=>{var _0x28ba8f=_0x3ceae8;console[_0x28ba8f(0x11b)](_0x28ba8f(0xfa)),!passados[_0x28ba8f(0x11f)](_0xb6fe4e=>_0xb6fe4e[_0x28ba8f(0x10c)]===minhasCartas[_0x36be22][_0x28ba8f(0x10c)])&&(comparsas[_0x28ba8f(0x11f)](_0x389a8a=>_0x389a8a['nome']===minhasCartas[_0x36be22][_0x28ba8f(0x10c)])&&(comparsas=comparsas[_0x28ba8f(0x107)](_0x485928=>_0x485928['nome']!==minhasCartas[_0x36be22][_0x28ba8f(0x10c)])),infelizes['some'](_0xd4487c=>_0xd4487c[_0x28ba8f(0x10c)]===minhasCartas[_0x36be22][_0x28ba8f(0x10c)])&&(infelizes=infelizes[_0x28ba8f(0x107)](_0x28d799=>_0x28d799[_0x28ba8f(0x10c)]!==minhasCartas[_0x36be22][_0x28ba8f(0x10c)])),passados[_0x28ba8f(0xef)]({'nome':minhasCartas[_0x36be22][_0x28ba8f(0x10c)],'img':minhasCartas[_0x36be22][_0x28ba8f(0xdc)],'gabarito':minhasCartas[_0x36be22][_0x28ba8f(0xe1)],'resposta':minhasCartas[_0x36be22][_0x28ba8f(0xd4)],'agencia':minhasCartas[_0x36be22][_0x28ba8f(0x126)],'id_unico':_0x36be22})),id_atual++,_0x366d0c(_0x36be22+0x1);});var _0x1a1a4a=document[_0x3ceae8(0xec)]('.cards_comparsas'),_0x425aae=document[_0x3ceae8(0xec)]('.cards_infelizes'),_0x8cb3ea=document[_0x3ceae8(0xec)]('.cards_passados');comparsas['forEach'](function(_0x5e5972){var _0x5eda07=_0x3ceae8,_0x50e082=document[_0x5eda07(0xc1)]('img');_0x50e082[_0x5eda07(0x10e)]=_0x5e5972[_0x5eda07(0xdc)],_0x50e082['alt']=_0x5e5972[_0x5eda07(0x10c)];var _0x13793e=_0x5e5972[_0x5eda07(0xcd)];_0x50e082[_0x5eda07(0xd9)][_0x5eda07(0xdd)]('cards_selecionados'),_0x50e082[_0x5eda07(0x109)](_0x5eda07(0x113),function(){var _0x49a167=_0x5eda07;vidas>=0x1?(vidas--,_0x56678b(_0x13793e)):alert(_0x49a167(0xeb));}),_0x1a1a4a[_0x5eda07(0xc7)](_0x50e082);}),infelizes[_0x3ceae8(0xf9)](function(_0x41955d){var _0x3e6b7c=_0x3ceae8,_0x20af7e=document[_0x3e6b7c(0xc1)](_0x3e6b7c(0xdc));_0x20af7e[_0x3e6b7c(0x10e)]=_0x41955d[_0x3e6b7c(0xdc)],_0x20af7e[_0x3e6b7c(0xcf)]=_0x41955d[_0x3e6b7c(0x10c)];var _0x542f82=_0x41955d['id_unico'];_0x20af7e[_0x3e6b7c(0xd9)][_0x3e6b7c(0xdd)](_0x3e6b7c(0x11c)),_0x20af7e[_0x3e6b7c(0x109)]('click',function(){var _0x282a85=_0x3e6b7c;vidas>=0x1?(vidas--,_0x56678b(_0x542f82)):alert(_0x282a85(0xeb));}),_0x425aae[_0x3e6b7c(0xc7)](_0x20af7e);}),passados[_0x3ceae8(0xf9)](function(_0xd0ec8b){var _0x120b33=_0x3ceae8,_0x441ee7=document[_0x120b33(0xc1)](_0x120b33(0xdc));_0x441ee7[_0x120b33(0x10e)]=_0xd0ec8b[_0x120b33(0xdc)],_0x441ee7['alt']=_0xd0ec8b[_0x120b33(0x10c)];var _0x47b024=_0xd0ec8b[_0x120b33(0xcd)];_0x441ee7[_0x120b33(0xd9)][_0x120b33(0xdd)](_0x120b33(0x11c)),_0x441ee7['addEventListener'](_0x120b33(0x113),function(){vidas>=0x1?(vidas--,_0x56678b(_0x47b024)):alert('Acabaram\x20suas\x20vidas!');}),_0x8cb3ea[_0x120b33(0xc7)](_0x441ee7);});var _0x324b85=document[_0x3ceae8(0xec)](_0x3ceae8(0x112)),_0x4dde3d=document['querySelector'](_0x3ceae8(0xd5)),_0x42158f=document[_0x3ceae8(0xec)]('.cards_passados');_0x324b85['innerHTML'][_0x3ceae8(0x10d)]()===''&&_0x324b85['classList'][_0x3ceae8(0xdd)](_0x3ceae8(0x102)),_0x4dde3d['innerHTML'][_0x3ceae8(0x10d)]()===''&&_0x4dde3d[_0x3ceae8(0xd9)][_0x3ceae8(0xdd)](_0x3ceae8(0x102)),_0x42158f[_0x3ceae8(0xcc)][_0x3ceae8(0x10d)]()===''&&_0x42158f[_0x3ceae8(0xd9)][_0x3ceae8(0xdd)](_0x3ceae8(0x102));}function _0x56678b(_0x572b3a){var _0x2ec184=_0x577c;(_0x572b3a>=minhasCartas['length']||_0x572b3a<0x0)&&(_0x366d0c(0x7),_0x5b780c());console[_0x2ec184(0x11b)](_0x572b3a+'\x20'+minhasCartas[_0x572b3a]['nome']);var _0x8899e8='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22container_cards\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22parte\x22\x20id=\x22parte1\x22><img\x20id=\x22card_img\x22\x20src=\x22'+minhasCartas[_0x572b3a]['img']+_0x2ec184(0xbf)+(id_atual+0x1)+_0x2ec184(0xe0)+minhasCartas[_0x572b3a][_0x2ec184(0xcb)]+_0x2ec184(0xce)+minhasCartas[_0x572b3a]['pais']+_0x2ec184(0x115)+minhasCartas[_0x572b3a][_0x2ec184(0xda)]+_0x2ec184(0xba),_0x19e172=document[_0x2ec184(0xc9)](_0x2ec184(0xc4));_0x19e172[_0x2ec184(0xcc)]=_0x8899e8;var _0x199f8f='';if(vidas===0x3)_0x199f8f=_0x2ec184(0x122);else{if(vidas===0x2)_0x199f8f='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';else vidas===0x1?_0x199f8f='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/Heart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22Heart\x22\x20src=\x22../imgs/noHeart.png\x22\x20alt=\x22Vida\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20':_0x199f8f=_0x2ec184(0x117);}document[_0x2ec184(0xc9)]('contador_de_vidas')[_0x2ec184(0xcc)]=_0x199f8f;var _0x8c316=document['querySelector'](_0x2ec184(0xf7));_0x8c316['addEventListener'](_0x2ec184(0x113),()=>{var _0x549f2e=_0x2ec184;!comparsas['some'](_0x4820cb=>_0x4820cb[_0x549f2e(0x10c)]===minhasCartas[_0x572b3a][_0x549f2e(0x10c)])&&(infelizes[_0x549f2e(0x11f)](_0x213794=>_0x213794[_0x549f2e(0x10c)]===minhasCartas[_0x572b3a][_0x549f2e(0x10c)])&&(infelizes=infelizes[_0x549f2e(0x107)](_0x1a3c65=>_0x1a3c65[_0x549f2e(0x10c)]!==minhasCartas[_0x572b3a]['nome'])),passados[_0x549f2e(0x11f)](_0x38d446=>_0x38d446['nome']===minhasCartas[_0x572b3a][_0x549f2e(0x10c)])&&(passados=passados['filter'](_0x41789a=>_0x41789a[_0x549f2e(0x10c)]!==minhasCartas[_0x572b3a][_0x549f2e(0x10c)])),comparsas[_0x549f2e(0xef)]({'nome':minhasCartas[_0x572b3a][_0x549f2e(0x10c)],'img':minhasCartas[_0x572b3a]['img'],'gabarito':minhasCartas[_0x572b3a][_0x549f2e(0xe1)],'resposta':minhasCartas[_0x572b3a][_0x549f2e(0xd4)],'agencia':minhasCartas[_0x572b3a][_0x549f2e(0x126)],'id_unico':_0x572b3a})),_0x366d0c(id_atual);});var _0x607e4e=document['querySelector'](_0x2ec184(0x118));_0x607e4e[_0x2ec184(0x109)](_0x2ec184(0x113),()=>{var _0x118b86=_0x2ec184;!infelizes[_0x118b86(0x11f)](_0xc334fd=>_0xc334fd[_0x118b86(0x10c)]===minhasCartas[_0x572b3a][_0x118b86(0x10c)])&&(comparsas[_0x118b86(0x11f)](_0x46fd2b=>_0x46fd2b[_0x118b86(0x10c)]===minhasCartas[_0x572b3a][_0x118b86(0x10c)])&&(comparsas=comparsas[_0x118b86(0x107)](_0x37f5a4=>_0x37f5a4[_0x118b86(0x10c)]!==minhasCartas[_0x572b3a]['nome'])),passados[_0x118b86(0x11f)](_0x589b1a=>_0x589b1a[_0x118b86(0x10c)]===minhasCartas[_0x572b3a]['nome'])&&(passados=passados[_0x118b86(0x107)](_0x243c8c=>_0x243c8c[_0x118b86(0x10c)]!==minhasCartas[_0x572b3a]['nome'])),infelizes[_0x118b86(0xef)]({'nome':minhasCartas[_0x572b3a][_0x118b86(0x10c)],'img':minhasCartas[_0x572b3a][_0x118b86(0xdc)],'gabarito':minhasCartas[_0x572b3a]['gabarito'],'resposta':minhasCartas[_0x572b3a][_0x118b86(0xd4)],'agencia':minhasCartas[_0x572b3a][_0x118b86(0x126)],'id_unico':_0x572b3a})),_0x366d0c(id_atual);});var _0x5a3925=document[_0x2ec184(0xec)]('.passar');_0x5a3925['addEventListener'](_0x2ec184(0x113),()=>{var _0x119f1e=_0x2ec184;!passados[_0x119f1e(0x11f)](_0x515766=>_0x515766[_0x119f1e(0x10c)]===minhasCartas[_0x572b3a][_0x119f1e(0x10c)])&&(comparsas[_0x119f1e(0x11f)](_0x4502bf=>_0x4502bf[_0x119f1e(0x10c)]===minhasCartas[_0x572b3a][_0x119f1e(0x10c)])&&(comparsas=comparsas['filter'](_0xdee1fd=>_0xdee1fd[_0x119f1e(0x10c)]!==minhasCartas[_0x572b3a][_0x119f1e(0x10c)])),infelizes[_0x119f1e(0x11f)](_0x41b701=>_0x41b701[_0x119f1e(0x10c)]===minhasCartas[_0x572b3a][_0x119f1e(0x10c)])&&(infelizes=infelizes[_0x119f1e(0x107)](_0x18b47=>_0x18b47[_0x119f1e(0x10c)]!==minhasCartas[_0x572b3a][_0x119f1e(0x10c)])),passados[_0x119f1e(0xef)]({'nome':minhasCartas[_0x572b3a][_0x119f1e(0x10c)],'img':minhasCartas[_0x572b3a]['img'],'gabarito':minhasCartas[_0x572b3a][_0x119f1e(0xe1)],'resposta':minhasCartas[_0x572b3a][_0x119f1e(0xd4)],'agencia':minhasCartas[_0x572b3a][_0x119f1e(0x126)],'id_unico':_0x572b3a})),_0x366d0c(id_atual);});var _0x11f06e=document[_0x2ec184(0xec)](_0x2ec184(0x112)),_0x4c81f9=document[_0x2ec184(0xec)]('.cards_infelizes'),_0x1c8f9a=document[_0x2ec184(0xec)](_0x2ec184(0x106));comparsas[_0x2ec184(0xf9)](function(_0x27b585){var _0x51defb=_0x2ec184,_0x54c0d0=document[_0x51defb(0xc1)](_0x51defb(0xdc));_0x54c0d0['src']=_0x27b585[_0x51defb(0xdc)],_0x54c0d0[_0x51defb(0xcf)]=_0x27b585[_0x51defb(0x10c)];var _0x468ec0=_0x27b585[_0x51defb(0xcd)];_0x54c0d0['classList'][_0x51defb(0xdd)](_0x51defb(0x11c)),_0x54c0d0['addEventListener'](_0x51defb(0x113),function(){var _0x32f41d=_0x51defb;vidas>=0x1?(vidas--,_0x56678b(_0x468ec0)):alert(_0x32f41d(0xeb));}),_0x11f06e['appendChild'](_0x54c0d0);}),infelizes[_0x2ec184(0xf9)](function(_0x5cb649){var _0x2b97cb=_0x2ec184,_0x5f0fae=document['createElement'](_0x2b97cb(0xdc));_0x5f0fae[_0x2b97cb(0x10e)]=_0x5cb649[_0x2b97cb(0xdc)],_0x5f0fae[_0x2b97cb(0xcf)]=_0x5cb649[_0x2b97cb(0x10c)];var _0x5926e7=_0x5cb649[_0x2b97cb(0xcd)];_0x5f0fae[_0x2b97cb(0xd9)]['add'](_0x2b97cb(0x11c)),_0x5f0fae['addEventListener'](_0x2b97cb(0x113),function(){var _0x39bbcd=_0x2b97cb;vidas>=0x1?(vidas--,_0x56678b(_0x5926e7)):alert(_0x39bbcd(0xeb));}),_0x4c81f9[_0x2b97cb(0xc7)](_0x5f0fae);}),passados['forEach'](function(_0x4141a3){var _0xad0bf=_0x2ec184,_0x16b574=document[_0xad0bf(0xc1)]('img');_0x16b574[_0xad0bf(0x10e)]=_0x4141a3[_0xad0bf(0xdc)],_0x16b574[_0xad0bf(0xcf)]=_0x4141a3[_0xad0bf(0x10c)];var _0x222604=_0x4141a3['id_unico'];_0x16b574['classList'][_0xad0bf(0xdd)](_0xad0bf(0x11c)),_0x16b574[_0xad0bf(0x109)]('click',function(){var _0x403201=_0xad0bf;vidas>=0x1?(vidas--,_0x56678b(_0x222604)):alert(_0x403201(0xeb));}),_0x1c8f9a[_0xad0bf(0xc7)](_0x16b574);});var _0x47e434=document[_0x2ec184(0xec)](_0x2ec184(0x112)),_0x3e489d=document[_0x2ec184(0xec)](_0x2ec184(0xd5)),_0x461179=document[_0x2ec184(0xec)](_0x2ec184(0x106));_0x47e434[_0x2ec184(0xcc)][_0x2ec184(0x10d)]()===''&&_0x47e434['classList']['add'](_0x2ec184(0x102)),_0x3e489d[_0x2ec184(0xcc)][_0x2ec184(0x10d)]()===''&&_0x3e489d['classList']['add']('hidden'),_0x461179[_0x2ec184(0xcc)][_0x2ec184(0x10d)]()===''&&_0x461179[_0x2ec184(0xd9)][_0x2ec184(0xdd)](_0x2ec184(0x102));}function _0x5b780c(){var _0x1d3707=_0x577c,_0x483363=_0x1d3707(0xed),_0x264445=document[_0x1d3707(0xc9)]('cardContainer');_0x264445['innerHTML']=_0x483363;const _0x510184=document['querySelector'](_0x1d3707(0xf1)),_0x23d140=document[_0x1d3707(0xec)](_0x1d3707(0xd6)),_0x18466a=document[_0x1d3707(0xec)](_0x1d3707(0xfe));function _0x56e134(){var _0x445c8c=_0x1d3707;comparsas['forEach'](_0x1c57b6=>{var _0x25ae59=_0x577c;const _0x2e880d=document[_0x25ae59(0xc1)]('button');_0x2e880d[_0x25ae59(0x108)]=_0x25ae59(0x104),_0x2e880d['textContent']=_0x25ae59(0xbd);_0x1c57b6['agencia']==agencia?_0x2e880d[_0x25ae59(0xc5)]=()=>_0x1c593e(_0x1c57b6[_0x25ae59(0x10c)],_0x1c57b6[_0x25ae59(0xe1)]):_0x2e880d[_0x25ae59(0xc5)]=()=>_0x1c593e(_0x1c57b6[_0x25ae59(0x10c)],_0x25ae59(0x10f)+_0x1c57b6[_0x25ae59(0x10c)]+_0x25ae59(0xd2)+_0x1c57b6['agencia']);const _0x8ca433=document[_0x25ae59(0xc1)](_0x25ae59(0x105)),_0x5d3ba4=document[_0x25ae59(0xc1)](_0x25ae59(0xdc)),_0x176995=document[_0x25ae59(0xc1)](_0x25ae59(0x105)),_0x11ed7d=document[_0x25ae59(0xc1)]('div');_0x5d3ba4[_0x25ae59(0x10e)]=_0x1c57b6['img'],_0x5d3ba4[_0x25ae59(0xcf)]=_0x1c57b6['nome'],_0x5d3ba4['className']=_0x25ae59(0xf8),_0x176995[_0x25ae59(0x108)]=_0x25ae59(0xfc),_0x11ed7d[_0x25ae59(0x108)]=_0x25ae59(0x120),_0x176995[_0x25ae59(0xfb)]='Click\x20para\x20ver\x20resposta',_0x8ca433[_0x25ae59(0x108)]=_0x25ae59(0xf5),_0x1c57b6[_0x25ae59(0x126)]==agencia&&_0x1c57b6[_0x25ae59(0xd4)]==0x2?(_0x11ed7d['textContent']='Acertou',_0x11ed7d[_0x25ae59(0x108)]=_0x25ae59(0xc0)):(_0x11ed7d['textContent']=_0x25ae59(0xc3),_0x11ed7d[_0x25ae59(0x108)]=_0x25ae59(0xe7)),_0x8ca433[_0x25ae59(0xc7)](_0x11ed7d),_0x8ca433[_0x25ae59(0xc7)](_0x5d3ba4),_0x8ca433['appendChild'](_0x176995),_0x510184[_0x25ae59(0xc7)](_0x8ca433),_0x8ca433['appendChild'](_0x2e880d);}),infelizes['forEach'](_0x18099c=>{var _0x47705e=_0x577c;const _0x45488f=document[_0x47705e(0xc1)](_0x47705e(0xc2));_0x45488f['className']=_0x47705e(0x104),_0x45488f[_0x47705e(0xfb)]='Click\x20para\x20ver\x20o\x20gabarito';_0x18099c[_0x47705e(0x126)]==agencia?_0x45488f['onclick']=()=>_0x1c593e(_0x18099c[_0x47705e(0x10c)],_0x18099c['gabarito']):_0x45488f['onclick']=()=>_0x1c593e(_0x18099c['nome'],_0x47705e(0x10f)+_0x18099c['nome']+_0x47705e(0xd2)+_0x18099c['agencia']);const _0x740762=document['createElement'](_0x47705e(0x105)),_0xb3fe8a=document[_0x47705e(0xc1)]('img'),_0x16ed22=document[_0x47705e(0xc1)](_0x47705e(0x105)),_0x2bbdf8=document['createElement'](_0x47705e(0x105));_0xb3fe8a[_0x47705e(0x10e)]=_0x18099c['img'],_0xb3fe8a['alt']=_0x18099c[_0x47705e(0x10c)],_0xb3fe8a[_0x47705e(0x108)]=_0x47705e(0xf8),_0x16ed22[_0x47705e(0x108)]='overlay',_0x2bbdf8['className']=_0x47705e(0x120),_0x16ed22['textContent']='Click\x20para\x20ver\x20resposta',_0x740762[_0x47705e(0x108)]=_0x47705e(0xf5),_0x18099c['agencia']==agencia&&_0x18099c[_0x47705e(0xd4)]==0x1?(_0x2bbdf8[_0x47705e(0xfb)]=_0x47705e(0xe2),_0x2bbdf8[_0x47705e(0x108)]=_0x47705e(0xc0)):(_0x2bbdf8['textContent']='Errou',_0x2bbdf8['className']=_0x47705e(0xe7)),_0x740762['appendChild'](_0x2bbdf8),_0x740762[_0x47705e(0xc7)](_0xb3fe8a),_0x740762[_0x47705e(0xc7)](_0x16ed22),_0x23d140['appendChild'](_0x740762),_0x740762['appendChild'](_0x45488f);}),passados[_0x445c8c(0xf9)](_0x32494b=>{var _0x22fecb=_0x445c8c;const _0x5682d6=document['createElement'](_0x22fecb(0xc2));_0x5682d6['className']=_0x22fecb(0x104),_0x5682d6['textContent']=_0x22fecb(0xbd),_0x5682d6['onclick']=()=>_0x1c593e(_0x32494b[_0x22fecb(0x10c)],_0x22fecb(0x10f)+_0x32494b[_0x22fecb(0x10c)]+_0x22fecb(0xd2)+_0x32494b['agencia']);const _0x5cadde=document['createElement']('div'),_0xe94030=document[_0x22fecb(0xc1)](_0x22fecb(0xdc)),_0x123dab=document['createElement'](_0x22fecb(0x105)),_0x34718f=document['createElement'](_0x22fecb(0x105));_0xe94030[_0x22fecb(0x10e)]=_0x32494b[_0x22fecb(0xdc)],_0xe94030[_0x22fecb(0xcf)]=_0x32494b[_0x22fecb(0x10c)],_0xe94030[_0x22fecb(0x108)]=_0x22fecb(0xf8),_0x123dab[_0x22fecb(0x108)]=_0x22fecb(0xfc),_0x123dab[_0x22fecb(0xfb)]=_0x22fecb(0x103),_0x5cadde['className']=_0x22fecb(0xf5),_0x32494b[_0x22fecb(0x126)]!=agencia?(_0x34718f[_0x22fecb(0xfb)]=_0x22fecb(0xe2),_0x34718f[_0x22fecb(0x108)]=_0x22fecb(0xc0)):(_0x34718f[_0x22fecb(0xfb)]=_0x22fecb(0xc3),_0x34718f[_0x22fecb(0x108)]=_0x22fecb(0xe7)),_0x5cadde[_0x22fecb(0xc7)](_0x34718f),_0x5cadde['appendChild'](_0xe94030),_0x5cadde[_0x22fecb(0xc7)](_0x123dab),_0x18466a[_0x22fecb(0xc7)](_0x5cadde),_0x5cadde[_0x22fecb(0xc7)](_0x5682d6);});const _0x3c85bc=document[_0x445c8c(0xc1)]('button');_0x3c85bc['className']=_0x445c8c(0x11d),_0x3c85bc[_0x445c8c(0xfb)]='Avançar',_0x264445['appendChild'](_0x3c85bc);const _0x296338=document[_0x445c8c(0xc1)](_0x445c8c(0x105)),_0x1c34f6=document[_0x445c8c(0xc1)]('div'),_0xb94269=document['createElement']('span'),_0x350e32=document[_0x445c8c(0xc1)]('p'),_0x15d668=document[_0x445c8c(0xc1)]('p');_0x296338[_0x445c8c(0xf4)]('id',_0x445c8c(0xff)),_0x296338[_0x445c8c(0xd9)]['add'](_0x445c8c(0x111)),_0x1c34f6['classList'][_0x445c8c(0xdd)]('modal-content'),_0xb94269[_0x445c8c(0xd9)][_0x445c8c(0xdd)]('close'),_0xb94269[_0x445c8c(0xcc)]=_0x445c8c(0x10b),_0x1c34f6['appendChild'](_0xb94269),_0x1c34f6['appendChild'](_0x350e32),_0x1c34f6[_0x445c8c(0xc7)](_0x15d668),_0x296338['appendChild'](_0x1c34f6),document[_0x445c8c(0xbb)][_0x445c8c(0xc7)](_0x296338),_0xb94269[_0x445c8c(0xc5)]=function(){var _0x400624=_0x445c8c;_0x296338[_0x400624(0xe5)][_0x400624(0x11e)]=_0x400624(0x116);},window[_0x445c8c(0xc5)]=function(_0x387a1e){var _0x32ea30=_0x445c8c;_0x387a1e[_0x32ea30(0xd1)]==_0x296338&&(_0x296338[_0x32ea30(0xe5)]['display']=_0x32ea30(0x116));};function _0x1c593e(_0x2a7ac7,_0x1cb9ca){var _0x23dbbe=_0x445c8c;_0x296338['style'][_0x23dbbe(0x11e)]='block',_0x350e32[_0x23dbbe(0xfb)]=_0x2a7ac7,_0x15d668[_0x23dbbe(0xfb)]=_0x1cb9ca;}}_0x56e134();}}