import { validator } from "./validation";

export const addSelectArrow = () => {
  const arrow =
    '<svg class="icon icon--arrow-down"><use xlink:href="img/svg-sprite.svg#arrow-down"></use></svg>';
  $(".jq-selectbox__select .jq-selectbox__trigger").html(arrow);
};

export const customSelectInit = () => {
  const selectInit = () => {
    $("select").styler({
      selectSearch: true,
      selectSearchLimit: 6,
      selectPlaceholder: "Выберите регион",
      selectSmartPositioning: false,
      onSelectOpened: function () {
        $(this).find(".jq-selectbox__search input").focus();
      },
      onSelectClosed: function () {
        validator.element("select");
      },
      onFormStyled: function () {
        addSelectArrow();
      },
    });
  };
  $(".select-wrap__label").click(() => {
    selectInit();
  });
  selectInit();
};
