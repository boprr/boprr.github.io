// https://github.com/vvivanloc/misc/blob/master/greetings.ts
let Greetings = [
    ["A2", "Satellite Provider", "Hello"],
    ["AD", "Andorra", "Hola"],
    ["AE", "United Arab Emirates", "Marhaba"],
    ["AF", "Afghanistan", "Senga yai"],
    ["AG", "Antigua and Barbuda", "Hello"],
    ["AI", "Anguilla", "Hello"],
    ["AL", "Albania", "Tungjatjeta"],
    ["AM", "Armenia", "Barev"],
    ["AN", "Netherlands Antilles", "Kon ta bai"],
    ["AO", "Angola", "Olá"],
    ["AP", "Asia/Pacific Region", "Hello"],
    ["AQ", "Antarctica", "Hello"],
    ["AR", "Argentina", "Hola"],
    ["AS", "American Samoa", "Hello"],
    ["AT", "Austria", "Hallo"],
    ["AU", "Australia", "Hello"],
    ["AW", "Aruba", "Kon ta bai"],
    ["AX", "Aland Islands", "Hello"],
    ["AZ", "Azerbaijan", "Salam"],
    ["BA", "Bosnia and Herzegovina", "Zdravo"],
    ["BB", "Barbados", "Hello"],
    ["BD", "Bangladesh", "Namaskar"],
    ["BE", "Belgium", "Hallo"],
    ["BF", "Burkina Faso", "Bonjour"],
    ["BG", "Bulgaria", "Zdravei"],
    ["BH", "Bahrain", "Marhaba"],
    ["BI", "Burundi", "Bonjour"],
    ["BJ", "Benin", "Bonjour"],
    ["BM", "Bermuda", "Hello"],
    ["BN", "Brunei Darussalam", "Selamat"],
    ["BO", "Bolivia", "Hola"],
    ["BR", "Brazil", "Olá"],
    ["BS", "Bahamas", "Hello"],
    ["BT", "Bhutan", "Kuzu zangpo"],
    ["BV", "Bouvet Island", "Hello"],
    ["BW", "Botswana", "Dumela"],
    ["BY", "Belarus", "Вітаю"],
    ["BZ", "Belize", "Hello"],
    ["CA", "Canada", "Hello"],
    ["CD", "Congo  The Democratic Republic of the", "Bonjour"],
    ["CF", "Central African Republic", "Bonjour"],
    ["CG", "Congo", "Bonjour"],
    ["CH", "Switzerland", "Hallo"],
    ["CI", "Cote d'Ivoire", "Bonjour"],
    ["CK", "Cook Islands", "Kia orana"],
    ["CL", "Chile", "Hola"],
    ["CM", "Cameroon", "Hello"],
    ["CN", "China", "&#20320;&#22909; (nǐhǎo)"],
    ["CO", "Colombia", "Hola"],
    ["CR", "Costa Rica", "Hola"],
    ["CU", "Cuba", "Hola"],
    ["CV", "Cape Verde", "Olá"],
    ["CY", "Cyprus", "&#915;&#949;&#953;&#945; &#963;&#959;&#965;"],
    ["CZ", "Czech Republic", "Dobrý den"],
    ["DE", "Germany", "Hallo"],
    ["DJ", "Djibouti", "Marhaba"],
    ["DK", "Denmark", "Hej"],
    ["DM", "Dominica", "Hello"],
    ["DO", "Dominican Republic", "Hola"],
    ["DZ", "Algeria", "Marhaba"],
    ["EC", "Ecuador", "Hola"],
    ["EE", "Estonia", "Tervist"],
    ["EG", "Egypt", "Marhaba"],
    ["ER", "Eritrea", "Marhaba"],
    ["ES", "Spain", "Hola"],
    ["ET", "Ethiopia", "Teanastëllën"],
    ["EU", "Europe", "Hello"],
    ["FI", "Finland", "Moi"],
    ["FJ", "Fiji", "Hello"],
    ["FK", "Falkland Islands (Malvinas)", "Hello"],
    ["FM", "Micronesia  Federated States of", "Hello"],
    ["FO", "Faroe Islands", "Hallo"],
    ["FR", "France", "Bonjour"],
    ["GA", "Gabon", "Bonjour"],
    ["GB", "Great Britain", "Hello"],
    ["GD", "Grenada", "Hello"],
    ["GE", "Georgia", "Gamardjobat"],
    ["GF", "French Guiana", "Bonjour"],
    ["GG", "Guernsey", "Hello"],
    ["GH", "Ghana", "Hello"],
    ["GI", "Gibraltar", "Hello"],
    ["GL", "Greenland", "Aluu"],
    ["GM", "Gambia", "Hello"],
    ["GN", "Guinea", "Bonjour"],
    ["GP", "Guadeloupe", "Hello"],
    ["GQ", "Equatorial Guinea", "Hola"],
    ["GR", "Greece", "&#915;&#949;&#953;&#945; &#963;&#959;&#965; (geia sou)"],
    ["GT", "Guatemala", "Hola"],
    ["GU", "Guam", "Hello"],
    ["GW", "Guinea-Bissau", "Olá"],
    ["GY", "Guyana", "Hello"],
    ["HK", "Hong Kong", "&#20320;&#22909; (nei5 hou2)"],
    ["HN", "Honduras", "Hola"],
    ["HR", "Croatia", "Bok"],
    ["HT", "Haiti", "Bonjour"],
    ["HU", "Hungary", "Jó napot"],
    ["ID", "Indonesia", "Selamat"],
    ["IE", "Ireland", "Haileo"],
    ["IL", "Israel", "שָׁלוֹם (Shalom)"],
    ["IM", "Isle of Man", "Hello"],
    ["IN", "India", "&#2344;&#2350;&#2360;&#2381;&#2340;&#2375; (namaste)"],
    ["IO", "British Indian Ocean Territory", "Hello"],
    ["IQ", "Iraq", "Marhaba"],
    ["IR", "Iran  Islamic Republic of", "Salâm"],
    ["IS", "Iceland", "Góðan daginn"],
    ["IT", "Italy", "Buon giorno"],
    ["JE", "Jersey", "Hello"],
    ["JM", "Jamaica", "Hello"],
    ["JO", "Jordan", "Marhaba"],
    ["JP", "Japan", "&#12371;&#12435;&#12395;&#12385;&#12399; (konnichi wa)"],
    ["KE", "Kenya", "Habari"],
    ["KG", "Kyrgyzstan", "Kandisiz"],
    ["KH", "Cambodia", "Sua s'dei"],
    ["KI", "Kiribati", "Mauri"],
    ["KM", "Comoros", "Bariza djioni"],
    ["KN", "Saint Kitts and Nevis", "Hello"],
    ["KP", "Korea  Democratic People's Republic of", "&#50504;&#45397;&#54616;&#49464;&#50836; (annyeonghaseyo)"],
    ["KR", "Korea  Republic of", "&#50504;&#45397;&#54616;&#49464;&#50836; (annyeonghaseyo)"],
    ["KW", "Kuwait", "Marhaba"],
    ["KY", "Cayman Islands", "Hello"],
    ["KZ", "Kazakhstan", "Salam"],
    ["LA", "Lao People's Democratic Republic", "Sabaidee"],
    ["LB", "Lebanon", "Marhaba"],
    ["LC", "Saint Lucia", "Hello"],
    ["LI", "Liechtenstein", "Hallo"],
    ["LK", "Sri Lanka", "A`yubowan"],
    ["LR", "Liberia", "Hello"],
    ["LS", "Lesotho", "Hello"],
    ["LT", "Lithuania", "Laba diena"],
    ["LU", "Luxembourg", "Moïen"],
    ["LV", "Latvia", "Sveiki"],
    ["LY", "Libyan Arab Jamahiriya", "Marhaba"],
    ["MA", "Morocco", "Marhaba"],
    ["MC", "Monaco", "Bonjour"],
    ["MD", "Moldova  Republic of", "Salut"],
    ["ME", "Montenegro", "Zdravo"],
    ["MG", "Madagascar", "Manao ahoana"],
    ["MH", "Marshall Islands", "Yokwe"],
    ["MK", "Macedonia", "&#1047;&#1076;&#1088;&#1072;&#1074;&#1086;"],
    ["ML", "Mali", "Bonjour"],
    ["MM", "Myanmar", "Mingalarba"],
    ["MN", "Mongolia", "Sain baina uu"],
    ["MO", "Macao", "&#20320;&#22909; (nei5 hou2)"],
    ["MP", "Northern Mariana Islands", "Hello"],
    ["MQ", "Martinique", "Hello"],
    ["MR", "Mauritania", "Marhaba"],
    ["MS", "Montserrat", "Hello"],
    ["MT", "Malta", "Bongu"],
    ["MU", "Mauritius", "Hello"],
    ["MV", "Maldives", "Kihineth"],
    ["MW", "Malawi", "Muribwanji"],
    ["MX", "Mexico", "Hola"],
    ["MY", "Malaysia", "Selamat"],
    ["MZ", "Mozambique", "Olá"],
    ["NA", "Namibia", "Hello"],
    ["NC", "New Caledonia", "Bozo"],
    ["NE", "Niger", "Bonjour"],
    ["NF", "Norfolk Island", "Whataway"],
    ["NG", "Nigeria", "Hello"],
    ["NI", "Nicaragua", "Hola"],
    ["NL", "Netherlands", "Hallo"],
    ["NO", "Norway", "Hallo"],
    ["NP", "Nepal", "Namaste"],
    ["NR", "Nauru", "Hello"],
    ["NU", "Niue", "Faka lofa lahi atu"],
    ["NZ", "New Zealand", "Hello"],
    ["OM", "Oman", "Marhaba"],
    ["PA", "Panama", "Hola"],
    ["PE", "Peru", "Hola"],
    ["PF", "French Polynesia", "Bonjour"],
    ["PG", "Papua New Guinea", "Hello"],
    ["PH", "Philippines", "Halo"],
    ["PK", "Pakistan", "Adaab"],
    ["PL", "Poland", "Dzień dobry"],
    ["PM", "Saint Pierre and Miquelon", "Hello"],
    ["PR", "Puerto Rico", "Hola"],
    ["PS", "Palestinian Territory", "Marhaba"],
    ["PT", "Portugal", "Olá"],
    ["PW", "Palau", "Alii"],
    ["PY", "Paraguay", "Hola"],
    ["QA", "Qatar", "Marhaba"],
    ["RE", "Reunion", "Hello"],
    ["RO", "Romania", "Salut"],
    ["RS", "Serbia", "Zdravo"],
    ["RU", "Russian Federation", "&#1047;&#1076;&#1088;&#1072;&#1074;&#1089;&#1090;&#1074;&#1091;&#1081;&#1090;&#1077; (zdrávstvujte)"],
    ["RW", "Rwanda", "Hello"],
    ["SA", "Saudi Arabia", "Marhaba"],
    ["SB", "Solomon Islands", "Hello"],
    ["SC", "Seychelles", "Hello"],
    ["SD", "Sudan", "Marhaba"],
    ["SE", "Sweden", "God dag"],
    ["SG", "Singapore", "Selamat"],
    ["SI", "Slovenia", "Živijo"],
    ["SK", "Slovakia", "Dobrý deň"],
    ["SL", "Sierra Leone", "Hello"],
    ["SM", "San Marino", "Buon giorno"],
    ["SN", "Senegal", "Bonjour"],
    ["SO", "Somalia", "Maalim wanaqsan"],
    ["SR", "Suriname", "Hallo"],
    ["ST", "Sao Tome and Principe", "Hello"],
    ["SV", "El Salvador", "Hola"],
    ["SY", "Syrian Arab Republic", "Marhaba"],
    ["SZ", "Swaziland", "Hello"],
    ["TC", "Turks and Caicos Islands", "Hello"],
    ["TD", "Chad", "Marhaba"],
    ["TG", "Togo", "Bonjour"],
    ["TH", "Thailand", "Sawatdi"],
    ["TJ", "Tajikistan", "Salom"],
    ["TK", "Tokelau", "Taloha"],
    ["TM", "Turkmenistan", "Salam"],
    ["TN", "Tunisia", "Marhaba"],
    ["TO", "Tonga", "Malo e lelei"],
    ["TR", "Turkey", "Merhaba"],
    ["TT", "Trinidad and Tobago", "Hello"],
    ["TV", "Tuvalu", "Talofa"],
    ["TW", "Taiwan", "&#20320;&#22909; (lí hó)"],
    ["TZ", "Tanzania  United Republic of", "Habari"],
    ["UA", "Ukraine", "Pryvit"],
    ["UG", "Uganda", "Habari"],
    ["UK", "United Kingdom", "Hello"],
    ["UM", "United States Minor Outlying Islands", "Hello"],
    ["US", "United States", "Hello"],
    ["UY", "Uruguay", "Hola"],
    ["UZ", "Uzbekistan", "Salom"],
    ["VA", "Holy See [Vatican City State]", "Buon giorno"],
    ["VC", "Saint Vincent and the Grenadines", "Hello"],
    ["VE", "Venezuela", "Hola"],
    ["VG", "Virgin Islands  British", "Hello"],
    ["VI", "Virgin Islands  U.S.", "Hello"],
    ["VN", "Vietnam", "Xin Chào"],
    ["VU", "Vanuatu", "Halo"],
    ["WF", "Wallis and Futuna", "Malo le kataki"],
    ["WS", "Samoa", "Talofa"],
    ["YE", "Yemen", "Marhaba"],
    ["YT", "Mayotte", "Hello"],
    ["ZA", "South Africa", "Hello"],
    ["ZM", "Zambia", "Hello"],
    ["ZW", "Zimbabwe", "Hello"],
    ["RD", "Reserved", "Hello"]
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function changeGreetings()
{
    let o = Math.random() * Greetings.length;
    await sleep(4000)
    //console.log(Greetings[o.toFixed(0)]);
    if(Greetings[o.toFixed(0)][2].length > 10)
    {
        o = Math.random() * Greetings.length; //idk
    }
    else
    {
        document.getElementById("bigtext").innerHTML = Greetings[o.toFixed(0)][2];
        document.getElementById("grtext").innerHTML = Greetings[o.toFixed(0)][0] + ", " + Greetings[o.toFixed(0)][1];
    }
    changeGreetings();
}

changeGreetings();