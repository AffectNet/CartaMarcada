var btn_Gestapo = document.querySelector(".btn_Gestapo");
        btn_Gestapo.addEventListener('click', fct_Gestapo);

        var btn_NKVD = document.querySelector(".btn_NKVD");
        btn_NKVD.addEventListener('click', fct_NKVD);

        var btn_Lovra = document.querySelector(".btn_Lovra");
        btn_Lovra.addEventListener('click', fct_Lovra);

        function resetToOriginal() {
            var container = document.querySelector('body');
            container.innerHTML = `
                <div class="flex">
                    <div class="banners Gestapo"><button class="banner btn_Gestapo"></button></div>
                    <div class="banners NKVD"><button class="banner btn_NKVD"></button></div>
                    <div class="banners Lovra"><button class="banner btn_Lovra"></button></div>
                </div>
            `;

            // Reatribui eventos aos botões
            document.querySelector(".btn_Gestapo").addEventListener('click', fct_Gestapo);
            document.querySelector(".btn_NKVD").addEventListener('click', fct_NKVD);
            document.querySelector(".btn_Lovra").addEventListener('click', fct_Lovra);
        }

        function fct_Gestapo() {
            var card = `
                <div class="pagina_Gestapo pagina_agencia">
                    <button class="btn_voltar_agencias">Voltar</button>
                    <p class="texto_txt">A Gestapo, a temida polícia secreta alemã, opera sob a crença na superioridade racial e no nacionalismo extremo. Seu objetivo é erradicar quaisquer opositores do regime nazista, perseguindo implacavelmente aqueles que são considerados uma ameaça ao estado ariano puro. A ideologia nazista é marcada pela perseguição as minorias étnicas, antissemitismo e pela crença na superioridade da raça ariana.</p>
                    <img class="general_png" src="../imgs/Gestapo_General.png"></img>
                </div>
            `;

            var container = document.querySelector('body');
            container.innerHTML = card;

            document.querySelector(".btn_voltar_agencias").addEventListener('click', resetToOriginal);
        }

        function fct_NKVD() {
            var card = `
                <div class="pagina_NKVD pagina_agencia">
                    <button class="btn_voltar_agencias">Voltar</button>
                    <p class="texto_txt">A NKVD, a temida polícia secreta soviética, é guiada pela ideologia comunista que visa a construção de uma sociedade igualitária sem classes. Acreditando na centralização total do poder e na abolição da propriedade privada, os agentes da NKVD reprimem impiedosamente qualquer oposição ao regime comunista. A ideologia comunista promove a coletivização, a economia planificada e a erradicação de inimigos internos para alcançar uma utopia proletária.</p>
                    <img class="general_png" src="../imgs/NKVD_General.png"></img>
                </div>
            `;

            var container = document.querySelector('body');
            container.innerHTML = card;

            document.querySelector(".btn_voltar_agencias").addEventListener('click', resetToOriginal);
        }

        function fct_Lovra() {
            var card = `
                <div class="pagina_Lovra pagina_agencia">
                    <button class="btn_voltar_agencias">Voltar</button>
                    <p class="texto_txt">A L’Ovra, agência de espionagem italiana, é movida pela ideologia fascista que exalta o poder absoluto do estado e o nacionalismo agressivo. Convictos de que a força e a unidade nacional são essenciais, os agentes da L’Ovra trabalham para silenciar qualquer forma de dissidência e garantir a supremacia do regime fascista. A ideologia fascista enfatiza a ordem, a disciplina e a lealdade cega ao líder e ao estado.</p>
                    <img class="general_png" src="../imgs/Lovra_General.png"></img>
                </div>
            `;

            var container = document.querySelector('body');
            container.innerHTML = card;

            document.querySelector(".btn_voltar_agencias").addEventListener('click', resetToOriginal);
        }