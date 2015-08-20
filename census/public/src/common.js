var OpenDataCensus = OpenDataCensus || {};

OpenDataCensus.colorScale = {
  totalColorScale: new chroma.ColorScale({
    colors: ['#dd3d3a', '#8bdd3a'],
    limits: [0, 1000]
  })
};

OpenDataCensus.popoverBody = function(answers, details, url, actionurl, actiontext, submissions, submissionslength, year, yearclass) {

  var makeNot = function(reply){
    var not;

    if (reply === true){
      not = '';
    } else if (reply === false){
      not = 'not ';
    } else {
      not = 'unclear if it\'s ';
    }
    return not;
  };

  var truncate = function(s, l) {
    var o;
    if (l === null || typeof l === 'undefined') {
      l = 50;
    }
    o = s.slice(0, l);
    if (s.length > l) {
      o += "&hellip;";
    }
    return o;
  };

  var out = [], not = '';
  // out.push('<ul class="availability icons large">');

  // // These match the order of the bars in the table
  //   not = makeNot(answers.exists );
  //   out.push('<li class="');
  //   if (not === 'not ') {
  //       out.push('no');
  //   }
  //   else if (not === 'unclear if it\'s ') {
  //       out.push('maybe');
  //   }
  //   else {
  //       out.push('yes');
  //   }
  //   out.push('" title="Data exists" data-toggle="tooltip"><i class="icon-file-alt"></i><span class="text">Data exists</span></li>');

  // out.push('</ul>');

  if (answers) {
    out.push('<p>' + answers.value + '</p>');
  }

  if (year) {
    out.push('<p>Last updated <span class="entry-year label ' + yearclass + '">' + year + '</span></p>');
  }
  if (submissions) {
    out.push('<div class="btn-group">');
    if (answers) {
      out.push('<a class="btn btn-primary" href="' + url + '">View</a>');
    }
    if (submissionslength) {
      out.push('<a class="btn btn-warning" href="' + actionurl + '">' + actiontext + ' (' + submissionslength + ')</a>');
    } else {
      out.push('<a class="btn btn-success" href="' + actionurl + '">' + actiontext +'</a>');
    }
    out.push('</div>');
  } else {
    if (answers) {
      out.push('<a class="btn btn-primary" href="' + url + '">View</a>');
    }
  }
  return out.join('');
};
