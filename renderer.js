const information = document.getElementById("info");
information.innerHTML = `This app is using Chrome (v${window.versions.chrome()})
, Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response1 = await window.versions.ping();
  const response2 = await window.versions.helloFromPreload();

  console.log(response1);
  console.log(response2);
};

func();
