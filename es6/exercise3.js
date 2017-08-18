function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };


  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function escape(literals, ...substitions) {
    let result = '';
    for (let i = 0; i < substitions.length; i++) {
        result += escapeHtml(substitions[i])
    }
}

var html = escapeHtml `<script>alert(\'hello\');</script>`;
console.log(html);

//console.log(escapeHtml('<script>alert(\'hello\');</script>'));

