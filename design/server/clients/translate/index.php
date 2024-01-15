<style>
  

    .skiptranslate iframe {
        z-index: 30;
        visibility: hidden;
        opacity: 0;
    }

    .skiptranslate>span {
        display: none;
    }

    #google_translate-element .skiptranslate {
        font-size: 0px;
    }
</style>

<div id="google_translate-element">

</div>


<script>
    setTimeout(() => {
        let select = document.querySelector('#google_translate-element .skiptranslate div select');
        if (select) {
            select.className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        }
    }, 2000);
</script>
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script>
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
                pageLanguage: 'en'
            },
            'google_translate-element'
        )
    }
    googleTranslateElementInit()
</script>