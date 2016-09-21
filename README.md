#vue-material-datepicker
This Vue component is a Vue version of the [material-ui datepicker](http://www.material-ui.com/#/components/date-picker)

#Contact
If you have some issues or if you want to contribute, feel free to email me.

email : grangerbastien@gmail.com

#Demo
![simple datepicker](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/simple-version.png)

![Change Years](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/change-years.png)

#Requirements
- Jquery^3.1.0

#Installation

## npm

```shell
$ npm install vue-datepicker
```

#Usage

```javascript
import Vue from 'vue';
import Datepicker from 'vue-material-datepicker';

new Vue({
  el: 'body',
  components: {
    'datepicker': Datepicker
  }
});

```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>datepicker</title>

    <script   src="https://code.jquery.com/jquery-3.1.0.min.js"   integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="   crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">

    <style>
    	body {
    		font-family: 'Roboto', sans-serif;
    	}
    </style>
  </head>
  <body>

    <datepicker></datepicker>

  </body>
</html>

```

#API
## Dateformat
type : `String`   
required : `false`   
default : "YYYY-MM-DD"   

e.g :   
```html
<datepicker format="DD/MM/YYYY"></datepicker>
```

## Lang
Language date format

type : `String`   
required : `false`   
default : "en"   

supported languages:   
"da" Danish   
"nl" Dutch   
"de" German   
"es" Spanish   
"fi" Finnish  
"fr" French   
"fr-ca" French(Canada)   
"fr-ch" French(Switzerland)   
"hu" Hugarian   
"it" Italian   
"lb" Luxembourgish   
"nb" Norvegian   
"pl" Polish   
"pt" Portuguese   
"pt-br" Portuguese(Brazil)   
"ro" Romanian   
"ru" Russian   
"sk" Slovak   
"sl" Slovenian   
"sv" Swedish   
"uk" Ukrenian   

Traductions were made base on Google Translate ! Feel free to email me if there are some mistakes. 

e.g :   
```html
<datepicker lang="fr"></datepicker>
```

don't forget to set the moment.locale
e.g :  
```javascript
moment.locale('fr');
```

## Name
The form field name

type : `String`   
required : `false`   
default : "datepicker"   

e.g :   
```html
<datepicker name="event_date"></datepicker
```


#Next steps
- month doubled
- color customisation
- date range


