(() => {
  const classes = {
    buttonClick: "buttonClick",
  };

  /**
   *
   * @param {HTMLElement} buttonClick
   */
  function handleButtonClickOnClick(buttonClick) {
    let x, y;

    buttonClick.onclick =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { pageX, pageY } = event;

        x = pageX;
        y = pageY;

        console.log(`(${x},${y})`);
      };
  }

  function getMouseInfo() {
    let x, y;

    window.onmousemove = function (event) {
      const { pageX: x, pageY: y } = event;
      // console.log(`(${x},${y})`);

      window.onmousedown = function () {
        window.onmousemove = null;
      };
    };
  }

  function main() {
    const buttonClick = window.document.getElementsByClassName(
      classes.buttonClick
    )[0];

    handleButtonClickOnClick(buttonClick);
    getMouseInfo();
  }

  main();
})();
