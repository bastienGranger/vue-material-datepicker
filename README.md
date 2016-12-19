#vue-material-datepicker
This datepicker is a fully customisable Vue(v2.1.6) version of the [material-ui datepicker](http://www.material-ui.com/#/components/date-picker) that fit all your projects.

See below to discover all customisable components.

#Contact
Please give me some feedbacks to improve it !

If you have some issues or if you want to contribute, feel free to email me to !

email : grangerbastien@gmail.com

#Demo
##Simple portrait
![simple datepicker](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/simple-version.png)

![Change Years](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/change-years.png)

##Doubled portrait
![doubled datepicker](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/doubled-version.png)

![change year doubled](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/change-year-doubled.png)

##Simple landscape
![simple landscape](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/landscape-simple.png)
![simple years landscape](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/landscape-simple-years.png)

##Doubled landscape
![doubled landscape](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/landscape-double.png)
![doubled years landscape](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/landscape-double-years.png)


#Installation

## npm

```shell
$ npm install vue-datepicker
```

#Requirements
[moment^2.14.1](http://momentjs.com/)

#Usage

```javascript
import Vue from 'vue';
import Datepicker from 'vue-material-datepicker';

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
Date's format written in the text input
   
![date input](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/input-date.png)

type : `String`   
required : `false`   
default : `"YYYY-MM-DD"`  

e.g :   
```html
<datepicker format="DD/MM/YYYY"></datepicker>
```

result:   
![date format result](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/date-format-result.png)   


##lang
The project's language

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

Traductions were made base on Google Translate... Feel free to email me if there are some mistakes or if your language is not supported yet. 

e.g :   
```html
<datepicker lang="fr"></datepicker>
```

result :     
![lang result](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/lang-result.png)

##disablePassedDays
Boolean to disable passed days

type : `Boolean`   
required : `false`   
default : `false`   

e.g :     
```html
<datepicker :disable-passed-days="true"></datepicker>
```

result :     
![disabledPassedDays](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/disabled-passed-days.png)

##disabledDays
Array of [moment](http://momentjs.com/) or date to disable.     
Date format must be `YYYY-MM-DD`or `YYYY-MM-D`   

type : `Array`   
required : `false`  
default : `[]`   

e.g :      
```html
<datepicker :disabled-days="arrayOfDisabledDays"></datepicker>
```

```javascript   
new Vue({   
    el: 'body',   
    components: { datepicker: Datepicker },   
    data() {   
        return {   
            arrayOfDisabledDays: []   
        }   
    },   
    ready() {   
        for (let i=0; i<31; i++) {   
            var tmp = moment().add(i, 'days');   
            if (i%2) this.arrayOfDisabledDays.push(tmp);   
        }   
    }   
});   
```

result:     
![disabledDays](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/disabled-days.png)


##name
Field's name attribute

type : `String`   
required : `false`   
default : `"datepicker"`   

e.g :   
```html
<datepicker name="event_date"></datepicker
```

##id
Field's id attribute

type: `String`    
required: `false`  
default: `"vue-datepicker"`

e.g :      
```html
<datepicker id="my-datepicker"></datepicker>
```

##class-design
To bind style to datepicker's input you can pass a css class as in the exemple below.

type: `String`  
required: `false`    
default: `""`

e.g:
```css
.input-style {
    display: block;
    padding: 5px;
    font-size: 16px;
    line-height: 16px;
    background-color: #ffffff;
    border: 1px solid #B7B7B7;
    border-radius: 4px;
}
```

    
```html
<datepicker class-design="input-style"></datepicker>
```

result :      
![input style](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/input-style.png)

##Orientation
As shown before, this datepicker can be Protrait or Landscape

type: `String`    
required: `false`      
default: `"portrait"`    

supported orientation: 
"portrait"     
"landscape"     

e.g:     
```html
<datepicker orientation="landscape"></datepicker>
```

result:   
![datepicker landscape exemple](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/landscape-simple.png)

##Color customisation.
Color customisation si not supported yet. But you can overwrite css classes as below : 

```sass
$primary-color: #3F51B5;
$secondary-color: #FFFFFF;

.datepicker-header {
    background-color: $primary-color !important;
}

.datepicker-day-effect {
    background-color: lighten($primary-color, 5%) !important;
}

.datepicker-day {
    &:hover {
        color: $secondary-color !important;
    }

    &.selected {
        color: $secondary-color !important;
    }
}

.datepicker-date, .datepicker-year  {
    color: $secondary-color !important;
}

.datepicker-actions {
    button {
        color: lighten($primary-color, 10%) !important;
        &:hover {
            background-color: darken($secondary-color, 5%) !important;
        }
    }
}

.datepicker-years {
    .datepicker-years-content {
        .datepicker-year {
            &.selected, &:hover {
                color: $primary-color !important;
            }
        }
    }
}
```

result :    
![color customisation](https://s3-eu-west-1.amazonaws.com/npm-images/vue-material-datepicker/color-customisation.png)

#Next steps
- responsive
- color customisation
- date range


