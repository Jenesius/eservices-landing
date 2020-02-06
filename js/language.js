import {_obj} from './languageArray.js';


class Language{

    constructor(_obj){
        this._arrayIdLanguage = ['ru','en'];
        this._obj = _obj;
        this._defaultIdLanguage = this._arrayIdLanguage[0];
    }

    checkLanguage(){
        let path = window.location.pathname;

        let _arrPath = path.split('/');
        let fileName = _arrPath[_arrPath.length - 1].split('.')[0];


        let _idLanguage = this._defaultIdLanguage;

        if (this._arrayIdLanguage.indexOf(fileName) !== -1){
            _idLanguage = fileName;
        }

        return _idLanguage;
    }
    translateElem(elem, idLang){

        let _text = (_obj[elem.getAttribute('t-name')])[idLang];

        elem.textContent = _text;
    }
    translateText(){


        let _idLanguage = this.checkLanguage();


        let listElem = document.querySelectorAll('*[t-name]');

        listElem.forEach(elem => {
            this.translateElem(elem, _idLanguage);
        });


    }
}

export default new Language(_obj);

