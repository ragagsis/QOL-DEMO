const hash = '?First Name=some_text&email=more%20text';
const example = "https:/qol-demo.rgserver.in/form.html" + hash;

(new URL(example)).searchParams.forEach((x, y) =>
    document.getElementById(y).value = x);
