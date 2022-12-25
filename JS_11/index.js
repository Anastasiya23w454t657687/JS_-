let list = document.querySelector('.list');

    list.addEventListener('mouseover', changeDefOver);
    list.addEventListener('mouseout', changeDefOut);

    list.addEventListener('click', Smile);

    function changeDefOver(e) {
      e.target.classList.toggle('opacity-toggle');
    }

    function changeDefOut(e) {
      e.target.classList.toggle('opacity-toggle');
    }
    function Smile(e) {
      e.target.classList.toggle('pup');
    }