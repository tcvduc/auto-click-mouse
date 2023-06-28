const func = async () => {
  const response1 = await window.versions.ping();
  const response2 = await window.versions.helloFromPreload();

  console.log(response1);
  console.log(response2);
};

func();
