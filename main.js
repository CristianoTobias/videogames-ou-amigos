document.addEventListener("DOMContentLoaded", function () {
  const respNao = document.querySelector(".resp-nao");
  const setaNao1 = document.querySelector(".seta1-nao");
  const comprePc = document.querySelector(".compre-pc");
  const respSim = document.querySelector(".resp-sim");
  const setaSim1 = document.querySelector(".seta1-sim");
  const amigos = document.querySelector(".amigos");
  const amigosNao = document.querySelector(".resp-amigo-nao");
  const setaAmigoNao = document.querySelector(".seta-amigo-nao");
  const comprePs3 = document.querySelector(".compre-ps3");
  const respAmigoSim = document.querySelector(".resp-amigo-sim");
  const setaAmigoSim = document.querySelector(".seta-amigo-sim");
  const AmigosReaisVirtuais = document.querySelector(".real-virtual");
  const setaAmigoVR1 = document.querySelector(".seta-amigo-vr1");
  const setaAmigoVR2 = document.querySelector(".seta-amigo-vr2");
  const amigoReal = document.querySelector(".real");
  const amigoVirtual = document.querySelector(".virtual");
  const setaAmigoReal = document.querySelector(".seta-amigo-real");
  const setaAmigoVirtual = document.querySelector(".seta-amigo-virtual");
  const compreWii = document.querySelector(".compre-wii");
  const compreXbox = document.querySelector(".compre-xbox");

  respNao.onclick = () => {
    resetRespSim();
    setaNao1.style.visibility = "visible";
    comprePc.style.visibility = "visible";
  };

  respSim.onclick = () => {
    resetRespNao()
    setaSim1.style.visibility = "visible";
    amigos.style.visibility = "visible";
    amigosNao.style.visibility = "visible";
    respAmigoSim.style.visibility = "visible";
  };

  amigosNao.onclick = () => {
    resetAmigosSim()
    setaAmigoNao.style.visibility = "visible";
    comprePs3.style.visibility = "visible";
  };

  respAmigoSim.onclick = () => {
    resetAmigosNao()
    setaAmigoSim.style.visibility = "visible";
    AmigosReaisVirtuais.style.visibility = "visible";
    setaAmigoVR1.style.visibility = "visible";
    setaAmigoVR2.style.visibility = "visible";
    amigoReal.style.visibility = "visible";
    amigoVirtual.style.visibility = "visible";
  };

  amigoReal.onclick = () => {
    resetAmigosVirtuais()
    setaAmigoReal.style.visibility = "visible";
    compreWii.style.visibility = "visible";
  };

  amigoVirtual.onclick = () => {
    resetAmigosReais()
    setaAmigoVirtual.style.visibility = "visible";
    compreXbox.style.visibility = "visible";
  };

  const resetRespSim = () => {
    setaSim1.style.visibility = "hidden";
    amigos.style.visibility = "hidden";
    amigosNao.style.visibility = "hidden";
    respAmigoSim.style.visibility = "hidden";
    setaAmigoNao.style.visibility = "hidden";
    comprePs3.style.visibility = "hidden";
    setaAmigoSim.style.visibility = "hidden";
    AmigosReaisVirtuais.style.visibility = "hidden";
    setaAmigoVR1.style.visibility = "hidden";
    setaAmigoVR2.style.visibility = "hidden";
    amigoReal.style.visibility = "hidden";
    amigoVirtual.style.visibility = "hidden";
    setaAmigoReal.style.visibility = "hidden";
    compreWii.style.visibility = "hidden";
    setaAmigoVirtual.style.visibility = "hidden";
    compreXbox.style.visibility = "hidden";
  };

  const resetRespNao = () => {
    setaNao1.style.visibility = "hidden";
    comprePc.style.visibility = "hidden";
  }

  const resetAmigosSim = () => {
    setaAmigoSim.style.visibility = "hidden";
    AmigosReaisVirtuais.style.visibility = "hidden";
    setaAmigoVR1.style.visibility = "hidden";
    setaAmigoVR2.style.visibility = "hidden";
    amigoReal.style.visibility = "hidden";
    amigoVirtual.style.visibility = "hidden";
    setaAmigoReal.style.visibility = "hidden";
    compreWii.style.visibility = "hidden";
    setaAmigoVirtual.style.visibility = "hidden";
    compreXbox.style.visibility = "hidden";
  }

  const resetAmigosNao = () => {
    setaAmigoNao.style.visibility = "hidden";
    comprePs3.style.visibility = "hidden";

  }

  const resetAmigosReais= () => {
    setaAmigoReal.style.visibility = "hidden";
    compreWii.style.visibility = "hidden";
  }

  const resetAmigosVirtuais= () => {
    setaAmigoVirtual.style.visibility = "hidden";
    compreXbox.style.visibility = "hidden";
  }
});
