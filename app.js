const btn = document.getElementById('capture-btn');
      const laser = document.getElementById('laser');
      const sheet = document.getElementById('result-sheet');
      const reset = document.getElementById('reset-btn');
      
      btn.onclick = () => {
        laser.classList.add('active');
        btn.disabled = true;
        setTimeout(() => {
          laser.classList.remove('active');
          sheet.classList.add('show');
        }, 2000);
      };
      reset.onclick = () => {
        sheet.classList.remove('show');
        btn.disabled = false;
      };