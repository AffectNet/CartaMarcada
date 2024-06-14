if (document.querySelector('.btn_SobreAgencias_jogar')){
document.querySelector('.btn_SobreAgencias_jogar').addEventListener('click', function () {
    var iframeContainer = document.getElementById('iframeContainer');
    var iframe = document.getElementById('myIframe');
    var framejogo = document.querySelector('#Frame');

    if (iframe) {
        // Desliga o iframe
        iframeContainer.removeChild(iframe);
        this.textContent = 'Sobre as Agências';
        framejogo.style.display = 'block';
    } else {
        // Liga o iframe
        var newIframe = document.createElement('iframe');
        newIframe.id = 'myIframe';
        newIframe.src = 'SobreAgencias_frame.html';
        iframeContainer.appendChild(newIframe);
        this.textContent = 'Voltar ao Jogo';
        framejogo.style.display = 'none';
    }
});
}

if (document.querySelector('.ComoJogar_play')){
    document.querySelector('.ComoJogar_play').addEventListener('click', function () {
        var iframeContainer = document.getElementById('iframeContainer');
        var iframe = document.getElementById('myIframe');
        var framejogo = document.querySelector('#Frame');
    
        if (iframe) {
            // Desliga o iframe
            iframeContainer.removeChild(iframe);
            this.textContent = 'Como Jogar';
            framejogo.style.display = 'block';
        } else {
            // Liga o iframe
            var newIframe = document.createElement('iframe');
            newIframe.id = 'myIframe';
            newIframe.src = 'ComoJogar_frame.html';
            iframeContainer.appendChild(newIframe);
            this.textContent = 'Voltar ao Jogo';
            framejogo.style.display = 'none';
        }
    });
    }

if (document.querySelector('.btn_SobreAgencias_home')){
document.querySelector('.btn_SobreAgencias_home').addEventListener('click', function () {
    var iframeContainer = document.getElementById('iframeContainer');
    var iframe = document.getElementById('myIframe');
    var framejogo = document.querySelector('#Frame');

    if (iframe) {
        // Desliga o iframe
        iframeContainer.removeChild(iframe);
        this.textContent = 'Como Jogar';
        framejogo.style.display = 'block';
        framejogo.src = 'SobreAgencias_frame.html';
    } else {
        // Liga o iframe
        var newIframe = document.createElement('iframe');
        newIframe.id = 'myIframe';
        newIframe.src = './ComoJogar_frame.html';
        iframeContainer.appendChild(newIframe);
        this.textContent = 'Sobre as Agências';
        framejogo.style.display = 'none';
    }
});
}

if (document.querySelector('.ComoJogar_home')){
    document.querySelector('.ComoJogar_home').addEventListener('click', function () {
        var iframeContainer = document.getElementById('iframeContainer');
        var iframe = document.getElementById('myIframe');
        var framejogo = document.querySelector('#Frame');
    
        if (iframe) {
            // Desliga o iframe
            iframeContainer.removeChild(iframe);
            this.textContent = 'Sobre as Agências';
            framejogo.style.display = 'block';
            framejogo.src = 'ComoJogar_frame.html';
        } else {
            // Liga o iframe
            var newIframe = document.createElement('iframe');
            newIframe.id = 'myIframe';
            newIframe.src = './SobreAgencias_frame.html';
            iframeContainer.appendChild(newIframe);
            this.textContent = 'Como Jogar';
            framejogo.style.display = 'none';
        }
    });
    }