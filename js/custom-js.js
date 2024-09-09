document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var dropdown = document.querySelector('.dropdown');

    function showDropdown() {
      dropdownMenu.classList.add('show');
    }

    function hideDropdown() {
      dropdownMenu.classList.remove('show');
    }

    dropdownToggle.addEventListener('mouseenter', showDropdown);
    dropdown.addEventListener('mouseleave', hideDropdown);

    // Touch device support
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      dropdownMenu.classList.toggle('show');
    });
  });