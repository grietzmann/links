const abas = document.querySelectorAll(".aba");

abas.forEach(aba =>{
	aba.addEventListener('click',function() {
		const abaSelecionada = document.querySelector(".aba.selecionado");
		if (aba.classList.contains("selecionado")) {return
		}
		else {
			abaSelecionada.classList.remove("selecionado");
			aba.classList.add("selecionado");

			const informacaoSelecionada = document.querySelector(".informacao.selecionada");
			informacaoSelecionada.classList.remove("selecionada");

			const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

			const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
			informacaoASerMostrada.classList.add("selecionada")
		}
	})
})

// PLAY PAUSE
const playPause = document.querySelector("#play-pause-butao");

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-butao');



playPauseBtn.addEventListener('click', function(){
	if (audio.paused) {
		audio.play();
		playPause.classList.remove("play");
		playPause.classList.add("pause");
	} else {
		audio.pause();
		playPause.classList.add("play");
		playPause.classList.remove("pause");
	}

})
