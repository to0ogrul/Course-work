const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

/** @param {Event} event */
function handleSubmit(event) {
  // The rest of the logic will go here.
}
/** @param {Event} event */
function handleSubmit(event) {
    // Any JS that could fail goes here
    event.preventDefault();
  }
/** @param {Event} event */
function handleSubmit(event) {
    const form = event.currentTarget;
    const url = new URL(form.action);
  
    fetch(url);
  
    event.preventDefault();
  }
  const url = new URL(form.action);

/** @type {Parameters<fetch>[1]} */
const fetchOptions = {
  method: form.method,
};

fetch(url, fetchOptions);
const url = new URL(form.action);
const formData = new FormData(form);

/** @type {Parameters<fetch>[1]} */
const fetchOptions = {
  method: form.method,
  body: formData,
};

fetch(url, fetchOptions);
/** @param {Event} event */
function handleSubmit(event) {
    const url = new URL(form.action);
    const formData = new FormData(form);
  
    /** @type {Parameters<fetch>[1]} */
    const fetchOptions = {
      method: form.method,
      body: formData,
    };
  
    fetch(url, fetchOptions);
  
    event.preventDefault();
  }
  /** @param {Event} event */
function handleSubmit(event) {
    /** @type {HTMLFormElement} */
    const form = event.currentTarget;
    const url = new URL(form.action);
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
  
    /** @type {Parameters<fetch>[1]} */
    const fetchOptions = {
      method: form.method,
    };
  
    if (form.method.toLowerCase() === 'post') {
      if (form.enctype === 'multipart/form-data') {
        fetchOptions.body = formData;
      } else {
        fetchOptions.body = searchParams;
      }
    } else {
      url.search = searchParams;
    }
  
    fetch(url, fetchOptions);
  
    event.preventDefault();
  }