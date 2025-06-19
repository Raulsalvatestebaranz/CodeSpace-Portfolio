document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById('box');

  const controls = {
    display: document.getElementById('display'),
    flexDirection: document.getElementById('dir'),
    flexWrap: document.getElementById('wrap'),
    justifyContent: document.getElementById('justify'),
    alignItems: document.getElementById('align'),
    alignContent: document.getElementById('content'),
    gap: document.getElementById('gap'),
    width: document.getElementById('box-width'),
    height: document.getElementById('box-height'),
    placeContent: document.getElementById('place'),
    resetBtn: document.getElementById('resetBtn'),
  };

  function applyStyles() {
    const widthValue = controls.width.value;
    const heightValue = controls.height.value;

    const styles = {
      display: controls.display.value,
      flexDirection: controls.flexDirection.value,
      flexWrap: controls.flexWrap.value,
      justifyContent: controls.justifyContent.value,
      alignItems: controls.alignItems.value,
      alignContent: controls.alignContent.value,
      gap: `${controls.gap.value}px`,
      width:
        widthValue === 'auto' || widthValue === 'fit-content' || widthValue.endsWith('%')
          ? widthValue
          : `${widthValue}px`,
      height: heightValue === 'auto' ? 'auto' : `${heightValue}px`,
    };

    Object.assign(box.style, styles);

    if (controls.placeContent.value) {
      box.style.placeContent = controls.placeContent.value;
    } else {
      box.style.removeProperty('place-content');
    }

    applySmartUI();
  }

  function applySmartUI() {
    const wrap = controls.flexWrap.value;
    const direction = controls.flexDirection.value;
    const isColumnNowrap = wrap === 'nowrap' && direction.startsWith('column');
    const heightAlert = document.getElementById('height-alert');

    Array.from(controls.height.options).forEach(opt => {
      opt.disabled = isColumnNowrap && opt.value !== 'auto';
    });

    if (isColumnNowrap) {
      controls.height.value = 'auto';
      heightAlert.classList.remove('d-none');
    } else {
      heightAlert.classList.add('d-none');
    }
  }

  function resetDefaults() {
    controls.display.value = 'flex';
    controls.flexDirection.value = 'row';
    controls.flexWrap.value = 'wrap';
    controls.justifyContent.value = 'center';
    controls.alignItems.value = 'stretch';
    controls.alignContent.value = 'stretch';
    controls.gap.value = '16';
    controls.width.value = '600';
    controls.height.value = '300';
    controls.placeContent.value = '';
    applyStyles();
  }

  // Attach change event to controls
  Object.values(controls).forEach(ctrl => {
    if (ctrl && (ctrl.tagName === 'SELECT' || ctrl.tagName === 'INPUT')) {
      ctrl.addEventListener('change', applyStyles);
    }
  });

  // Reset button
  if (controls.resetBtn) {
    controls.resetBtn.addEventListener('click', resetDefaults);
  }

  // First-time setup
  applyStyles();

  // Enable Bootstrap Tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    new bootstrap.Tooltip(el);
  });

  // Enable Bootstrap Popovers
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    new bootstrap.Popover(el);
  });
});
