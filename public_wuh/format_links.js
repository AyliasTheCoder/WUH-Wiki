$(document.body).html(
  //   replace all things that match [[...]] with a link to the page and [[...]](...) with a link to the page with the text in the parentheses and replace the spaces with underscores within the anchor tags
  $(document.body)
    .html()
    .replace(/\[\[([^\]]+)\]\]\(([^\)]+)\)/g, '<a href="/$2.html">$1</a>')
    .replace(/\[\[([^\]]+)\]\]/g, '<a href="/$1.html">$1</a>')
    // replace all spaces within anchor tags with underscores without using replace
    .replace(/<a href="\/([^"]+)">([^<]+)<\/a>/g, function (match, p1, p2) {
      return '<a href="/' + p1.replace(/ /g, "_") + '">' + p2 + "</a>";
    })
);
