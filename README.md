#vue-material-datepicker
This Vue component is a Vue version of the [material-ui datepicker](http://www.material-ui.com/#/components/date-picker)

#Contact
Please email me to give me some feedbacks to improve this datepicker !

If you have some issues or if you want to contribute, feel free to email me to !

email : grangerbastien@gmail.com

#Demo
##Simple version
![simple datepicker](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/simple-version.png)

![Change Years](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/change-years.png)

##Doubled version
![doubled datepicker](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/doubled-version.png)

![change year doubled](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/change-year-doubled.png)

#Requirements
- Jquery^3.1.0
- moment^2.14.1

#Installation

## npm

```shell
$ npm install vue-datepicker
```

#Usage

```javascript
import Vue from 'vue';
import Datepicker from 'vue-material-datepicker';
import moment from 'moment';

moment.locale('en');

new Vue({
    el: 'body',
    components: { datepicker: Datepicker }
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
##format
The format of the input's printed date   
![date input](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/input-date.png)

type : `String`   
required : `false`   
default : `"YYYY-MM-DD"`  

e.g :   
```html
<datepicker format="DD/MM/YYYY"></datepicker>
```

##lang
Language date format

type : `String`   
required : `false`   
default : `"en"`   

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

##name
The form field name

type : `String`   
required : `false`   
default : `"datepicker"`   

e.g :   
```html
<datepicker name="event_date"></datepicker
```

##id
The form field

type: `String`    
required: `false`  
default: `"vue-datepicker"`

e.g :      
```html
<datepicker id="my-datepicker"></datepicker>
```

##class-design
To bind style to datepicker's input

type: `String`  
required: `false`    
default: `""`

e.g:    
```html
<datepicker class-design="myInputStyle"></datepicker>
```

#Next steps
- color customisation
- date range


