function addSticker() {
    let $title = $('.title');
    let $content = $('.content');
    let $list = $('#sticker-list');

    if ($title.val() && $content.val()) {
        createSticker();
        reset();

    }

    function createSticker() {
        let $li = $('<li>').addClass('note-content');
        let $a = $('<a>').addClass('button').text('x');
        $a.on('click', () => $li.remove());

        let $h = $('<h2>');
        $h.text($title.val());
       
        let $p = $('<p>');
        $p.text($content.val());

        $li.append($a);
        $li.append($h);
        $li.append('<hr>');
        $li.append($p);

        $list.append($li);


    }

    function reset() {
        $title.val(' ');
        $content.val(' ');
    }
}