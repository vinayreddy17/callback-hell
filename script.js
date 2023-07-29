
const cdelement = document.getElementById('cd');

setTimeout(() => {
  cdelement.textContent = '10';
  setTimeout(() => {
    cdelement.textContent = '9';
    setTimeout(() => {
      cdelement.textContent = '8';
      setTimeout(() => {
        cdelement.textContent = '7';
        setTimeout(() => {
          cdelement.textContent = '6';
          setTimeout(() => {
            cdelement.textContent = '5';
            setTimeout(() => {
              cdelement.textContent = '4';
              setTimeout(() => {
                cdelement.textContent = '3';
                setTimeout(() => {
                  cdelement.textContent = '2';
                  setTimeout(() => {
                    cdelement.textContent = '1';
                    setTimeout(() => {
                      cdelement.textContent = 'Happy Independence Day';
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
