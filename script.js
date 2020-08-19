function getStory() {
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adjective = document.getElementById('adjective').value;
    var adverb = document.getElementById('adverb').value

    document.getElementById('postNoun').innerHTML = noun;
    document.getElementById('postVerb').innerHTML = verb;
    document.getElementById('postAdjective').innerHTML = adjective;
    document.getElementById('postAdverb').innerHTML = adverb;
}