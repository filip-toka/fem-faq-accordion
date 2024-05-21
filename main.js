const accordionElements = document.querySelectorAll('.accordion');
accordionElements.forEach(accordion => {
  initAccordion(accordion);
});

function initAccordion(accordionElement) {
  if(accordionElement.classList.contains('accordion-inited')) {
    return;
  }
  accordionElement.classList.add('accordion-inited');
  const accordionButtons = accordionElement.querySelectorAll('.accordion__heading--button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('accordion__heading--button-opened');
      this.setAttribute("aria-expanded", this.getAttribute("aria-expanded") === 'false'? 'true': 'false');
      const ariaControlsID = this.getAttribute("aria-controls");
      const controlledContent = accordionElement.querySelector('#' + ariaControlsID);
      if(controlledContent) {
        controlledContent.classList.toggle('accordion__content--opened');
      }
    })
   
  })
}