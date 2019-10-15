const url = "https://phonebook-76da2.firebaseio.com/";

function LoadData() {

    $.ajax({
        url: url + '' + '.json',
        method: "GET",
        success: contactsLoad,

    });
}

function contactsLoad(data) {

    $phonebook = $('#phonebook');
    $phonebook.empty();

    Object.entries(data).forEach(x => {
        $li = $('<li>');
        $btn = $('<button>').on('click', () => {

            var url_id = x[0];

            $.ajax({
                url: url + '' + url_id + '' + '.json',
                method: 'DELETE',
                success: deleteContact
            })

            function deleteContact() {
                $phonebook = $('#phonebook');
                $phonebook.empty();
            }
        });
        $btn.text('Delete');
        $li.text(`${x[1].Person}: ${x[1].Phone} `);

        $li.append($btn);
        $phonebook.append($li);
    })
}

function Create() {

    $person = $('#person').val();
    $phone = $('#phone').val();

    let personPattern = "^[A-Z][a-z]+\\b";
    let phonePattern = "\\+359[1-9]{9}";

    let matchPerson = $person.match(personPattern);
    let matchPhone = $phone.match(phonePattern);

    if (matchPerson && matchPhone) {

        $.ajax({
            url: url + '' + '.json',
            method: 'POST',
            data: JSON.stringify({
                Person: $person,
                Phone: $phone
            }),
            success: CleanInputs()
        })

    }

    function CleanInputs() {
        $('#person').val('');
        $('#phone').val('');
    }
}




