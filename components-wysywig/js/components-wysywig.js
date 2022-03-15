if (document.querySelector('body#components') !== null) {

    const compDiv = document.querySelectorAll('.compdiv');
    const baseUrl = window.location.protocol + '//' + document.location.host;


    for (const content of compDiv) {
        const contentTable = content.querySelector('textarea');
        const title = content.querySelector('.editable').innerHTML;


        if (title.indexOf('code_') > -1) {
            //this default form



        } else if (title.indexOf('file_') > -1) {

            //this create uploder



            contentTable.style.display = "flex";
            contentTable.style.height = "40px";

            const buttonFiler = document.createElement('button');
            buttonFiler.classList.add('takePictures');
            buttonFiler.style.width = "10%";
            buttonFiler.style.height = "40px";
            buttonFiler.style.margin = "0";
            buttonFiler.style.padding = "0";
            buttonFiler.innerHTML = "select file";
            buttonFiler.addEventListener('keyDown', () => {
                return event.keyCode != 13;
            })

            contentTable.insertAdjacentElement('afterend', buttonFiler);
            const btnComp = content.querySelector('.takePictures');


            btnComp.addEventListener('click', (eventr) => {
                eventr.preventDefault();
                const winFile = window.open("upload.php", "myWindow", "tolbar=no,scrollbars=no,menubar=no,width=690,height=600");

                winFile.onload = () => {
                    winFile.document.querySelector('.floated').style.display = "none";
                    winFile.document.querySelector('.h5').style.display = "none";
                    winFile.document.querySelector('#header').style.display = "none";
                    winFile.document.querySelector('#sidebar').style.display = "none";
                    winFile.document.querySelectorAll('.folder').forEach(folder => folder.style.display = "none");


                    winFile.document.querySelectorAll('.imgthumb').forEach(thumb => {
                        thumb.style.display = "table-cell";
                        thumb.addEventListener('click', (c) => {
                            const thumbLink = thumb.querySelector('a').getAttribute('href');
                            const thumbLinkLength = thumbLink.length;
                            const newLink = baseUrl + thumbLink.substr('2', thumbLinkLength);

                            contentTable.innerHTML = newLink;

                            winFile.close();


                        });

                    });

                    winFile.document.querySelectorAll('.Images').forEach(lor => {

                        const thumb = lor.querySelector('.imgthumb');
                        const link = lor.querySelector('.primarylink');
                        link.setAttribute('href', thumb.querySelector('a').getAttribute('href'));

                        link.addEventListener('click', (e) => {
                            e.preventDefault;
                            const thumbSrc = thumb.querySelector('a').getAttribute('href');
                            const newLink = baseUrl + thumbSrc.substr('2', thumbSrc.length);
                            contentTable.innerHTML = newLink;
                            winFile.close();
                        })


                    });




                };


            });



            ;



        } else {
            // if file doen't have "code_" or "file_" ckeditor work 

            CKEDITOR.replace(contentTable, {
                filebrowserBrowseUrl: 'filebrowser.php?type=all',
                filebrowserImageBrowseUrl: 'filebrowser.php?type=images',
                filebrowserWindowWidth: '730',
                filebrowserWindowHeight: '500'
                , toolbar: 'advanced'
            });
        }



    };



    window.addEventListener('keydown', function (e) { if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) { if (e.target.nodeName == 'INPUT' && e.target.type == 'text') { e.preventDefault(); return false; } } }, true);



};

;