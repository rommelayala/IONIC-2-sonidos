webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_animales__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage() {
        this.animales = [];
        this.audio = new Audio();
        this.ordenando = false;
        this.animales = __WEBPACK_IMPORTED_MODULE_1__data_data_animales__["a" /* ANIMALES */].slice(0);
    }
    HomePage.prototype.reproducir = function (animal) {
        console.log(animal);
        //this.pausar_audio(animal);
        if (animal.reproduciendo) {
            this.reproduciendo = false;
            return;
        }
        this.audio.src = animal.audio;
        this.audio.load();
        this.audio.play();
        animal.reproduciendo = true;
        this.audioTiempo = setTimeout(function () { return animal.reproduciendo = false; }, animal.duracion * 1000);
    };
    HomePage.prototype.pausar_audio = function (animalSel) {
        clearTimeout(this.audioTiempo);
        this.audio.pause();
        this.audio.currenTime = 0;
        console.log(animales);
        console.log(animalSel);
        for (var _i = 0, _a = this.animales; _i < _a.length; _i++) {
            var animal = _a[_i];
            if (animal.nombre != animalSel.nombre) {
                this.animal.reproduciendo = false;
            }
        }
    };
    HomePage.prototype.borrar_animal = function (idx) {
        this.animales.splice(idx, 1);
    };
    HomePage.prototype.recargar_animales = function (refresher) {
        var _this = this;
        console.log("inicio del refres");
        setTimeout(function () {
            console.log("Fin de refresh");
            _this.animales = __WEBPACK_IMPORTED_MODULE_1__data_data_animales__["a" /* ANIMALES */].slice(0);
            refresher.complete();
        }, 1500);
    };
    HomePage.prototype.reordenar_animales = function (idx) {
        console.log(idx);
        this.animales = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* reorderArray */])(this.animales, idx);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Melo/ionic/2-sonidos/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sonidos\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="!ordenando" (click)="ordenando = true">\n              ordenando\n            </button>\n      <button ion-button *ngIf="ordenando" (click)="ordenando = false">\n                    Listo\n                  </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher [enabled]="!ordenando" (ionRefresh)="recargar_animales($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Sigue jalando" refreshingSpinner="circles" refreshingText="Recargando..."></ion-refresher-content>\n  </ion-refresher>\n  <ion-list [reorder]="ordenando" (ionItemReorder)="reordenar_animales($event)">\n    <ion-item-sliding *ngFor="let animal of animales; let i =index">\n      <ion-item (click)="reproducir(animal)">\n        <ion-avatar item-start>\n          <img [src]="animal.imagen">\n        </ion-avatar>\n        <h2>{{animal.nombre}}</h2>\n        <ion-icon *ngIf="!animal.reproduciendo" item-end name="play"></ion-icon>\n        <ion-icon *ngIf="animal.reproduciendo" item-end name="pause"></ion-icon>\n        <p>este es un texto de descripcion</p>\n\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="borrar_animal(i)">\n          <ion-icon name="trash"></ion-icon>\n            Borrar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer >\n  <ion-toolbar >\n    <p align="center">Powered by ©Rommel</p>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/Melo/ionic/2-sonidos/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Melo/ionic/2-sonidos/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Melo/ionic/2-sonidos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANIMALES; });
var ANIMALES = [
    {
        nombre: "Caballo",
        imagen: "assets/animales/caballo.png",
        audio: "assets/sonidos/caballo.mp3",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Cabra",
        imagen: "assets/animales/cabra.png",
        audio: "assets/sonidos/cabra.wav",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Cerdo",
        imagen: "assets/animales/cerdo.png",
        audio: "assets/sonidos/cerdo.wav",
        duracion: 2,
        reproduciendo: false
    },
    {
        nombre: "Gallo",
        imagen: "assets/animales/gallo.png",
        audio: "assets/sonidos/gallo.mp3",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Mono",
        imagen: "assets/animales/mono.png",
        audio: "assets/sonidos/mono.mp3",
        duracion: 8,
        reproduciendo: false
    },
    {
        nombre: "Perro",
        imagen: "assets/animales/perro.png",
        audio: "assets/sonidos/perro.mp3",
        duracion: 5,
        reproduciendo: false
    },
    {
        nombre: "Serpiente",
        imagen: "assets/animales/serpiente.png",
        audio: "assets/sonidos/serpiente.mp3",
        duracion: 2,
        reproduciendo: false
    },
    {
        nombre: "Tigre",
        imagen: "assets/animales/tigre.png",
        audio: "assets/sonidos/tigre.mp3",
        duracion: 2,
        reproduciendo: false
    }
];
//# sourceMappingURL=data.animales.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map