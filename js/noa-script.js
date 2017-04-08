var noa = (function() {

  function closeFooter() {
    $('.floating-footer').css('display', 'none');
  };

  function closeForm() {
    $('.fq-form').css('height', '0px');
  };

  function showSentMsg() {
    $('.sent-msg').css('opacity', '1');
  };

  function submitForm(e) {
    e.preventDefault();
    showSentMsg();
    $(this).closest('form[name="fq-form"]').find("input[type=text], textarea").val("");
    deselectBtns();
  };

  function deselectBtns() {
    $('.fq-btn').each(function () {
      $(this).removeClass('selected-fq-btn');
    });
  };

  function selectBtn(e) {
    deselectBtns();
    $(this).addClass('selected-fq-btn');
  };

  function setupEventListeners() {
    $('.floating-close').click(closeFooter);
    $('.form-close').click(closeForm);
    $(document).on('submit', 'form[name="fq-form"]', submitForm);
    $('.fq-btn').click(selectBtn);
  };

  return {
    init: function () {
      console.log("App has started.");
      setupEventListeners();
    }
  }

})();

noa.init();
