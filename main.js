function getLikeText() {
	return 'Alright';
}

function getUnlikeText() {
        return 'Not alright'; 
}

// Returns null if the text should not be replaced
function getReplacementText(originalText) {
    // Main post like button, comment like button
    if (originalText === 'Like') {
        return getLikeText();
    }
    if (originalText === 'Unlike') {
        return getUnlikeText();
    }
    // Main post like count
    if (originalText === ' likes this.') {
        return ' says it\'s alright.';
    }
    if (originalText === ' like this.') {
        return ' says it\'s not alright.';
    }
    return null;
}

function replaceElementText(element) {
    var text = $(element).html();
    var newText = getReplacementText(text);
    if (newText) {
        $(element).html(newText);
    }
}

function replaceLikes() {
    var spans = $('span');
    var anchors = $('a');
    var elements = spans.add(anchors);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        replaceElementText(element);
    }
}

$('body').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    replaceLikes();
});
