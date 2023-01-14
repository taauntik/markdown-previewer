const markdownField = document.querySelector('.markdown__field');
const markdownPreviewer = document.querySelector('.markdown__previewer');

markdownField.addEventListener('keyup', (event) => {
    markdownPreviewer.innerHTML = marked.parse(markdownField.value);
})
