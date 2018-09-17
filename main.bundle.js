webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_info_users_info_component__ = __webpack_require__("../../../../../src/app/users-info/users-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_chat_user_chat_component__ = __webpack_require__("../../../../../src/app/user-chat/user-chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRouts = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__users_users_component__["a" /* UsersComponent */] },
    { path: 'users/:login/info', component: __WEBPACK_IMPORTED_MODULE_3__users_info_users_info_component__["a" /* UsersInfoComponent */] },
    { path: 'users/:login/chat', component: __WEBPACK_IMPORTED_MODULE_4__user_chat_user_chat_component__["a" /* UserChatComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRouts)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-header {\r\n  background-image: linear-gradient(to right, #11060a, #532331);\r\n  color: #ffffff;\r\n  padding: 10px 0;\r\n}\r\n\r\n.app-header .fix-width {\r\n  max-width: 800px;\r\n}\r\n\r\n.app-header h1 {\r\n  font-size: 28px;\r\n  margin: 0 20px;\r\n}\r\n\r\n.app-body {\r\n  background-color: #ffffff;\r\n  height: calc(100% - 50px);\r\n  color: #574651;\r\n  padding: 0 10px;\r\n}\r\n\r\n.container {\r\n  max-width: 800px;\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"app-header\">\r\n  <div class=\"center-block fix-width\"><h1>Solovey dev</h1></div>\r\n</div>\r\n<div class=\"app-body\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_info_users_info_component__ = __webpack_require__("../../../../../src/app/users-info/users-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_chat_user_chat_component__ = __webpack_require__("../../../../../src/app/user-chat/user-chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__users_info_users_info_component__["a" /* UsersInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_chat_user_chat_component__["a" /* UserChatComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/mock-user-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MESSAGES_HISTORY; });
var USER_LIST = [
    {
        login: 'king',
        firstName: 'Jon',
        lastName: 'Snow',
        avatar: 'https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg'
    },
    {
        login: 'queen',
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        avatar: 'https://www.kialo.com/images/5ac0fd69-e6b3-4e86-b53a-ea19c8bfd6cd_128x128@2x.jpeg'
    },
    {
        login: 'lady',
        firstName: 'Sansa',
        lastName: 'Stark',
        avatar: 'https://pbs.twimg.com/profile_images/378800000485399442/821a35fdefa3651231233db5a6b8a750.jpeg'
    },
    {
        login: 'little_lion',
        firstName: 'Tyrion',
        lastName: 'Lannister',
        avatar: 'https://pm1.narvii.com/6904/e54dbaca42aeb19140fd382340a3fcb803a58d2cr1-235-307v2_128.jpg'
    },
    {
        login: 'faceless_girl',
        firstName: 'Arya',
        lastName: 'Stark',
        avatar: 'http://show-biz.by/blog/image/blog_image/2996/large/_v=1500294440'
    },
    {
        login: 'three_eyed_raven',
        firstName: 'Brandon',
        lastName: 'Stark',
        avatar: 'https://78.media.tumblr.com/avatar_fbd7b7d18b24_128.pnj'
    },
    {
        login: 'queen_always',
        firstName: 'Cersei',
        lastName: 'Lannister',
        avatar: 'https://www.jcbtechno.com/wp-content/uploads/2013/09/Tyrion-et-Cersei-Lannister.jpg'
    },
    {
        login: 'kingslayer',
        firstName: 'Jaime',
        lastName: 'Lannister',
        avatar: 'https://www.kialo.com/images/6ffa7320-2be4-4687-abb8-c0f39bb389c6_128x128@2x.jpeg'
    },
    {
        login: 'maester',
        firstName: 'Samwell',
        lastName: 'Tarly',
        avatar: 'https://pbs.twimg.com/profile_images/378800000445135948/d080c99716fecb9ae9b73558c08df192.jpeg'
    },
    {
        login: 'spider',
        firstName: 'Varys',
        lastName: '',
        avatar: 'https://pbs.twimg.com/profile_images/694825799501942784/VzrN4eTy_400x400.jpg'
    },
];
var USER_INFO = {
    king: {
        firstName: 'Jon',
        lastName: 'Snow',
        about: 'I\'m the watcher on The Wall.',
        age: '22',
        city: 'Winterfell',
        avatar: 'https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg'
    },
    queen: {
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        about: 'Daenerys of the House Targaryen, the First of Her Name Daenerys Stormborn, The Mother of Dragons, The Queen Across the Sea',
        age: '22',
        city: 'Dragonstone',
        avatar: 'https://www.kialo.com/images/5ac0fd69-e6b3-4e86-b53a-ea19c8bfd6cd_128x128@2x.jpeg'
    },
    lady: {
        firstName: 'Sansa',
        lastName: 'Stark',
        about: 'I did what I had to do to survive, my lady. But I am a Stark, I will always be a Stark',
        age: '19',
        city: 'Winterfell',
        avatar: 'https://pbs.twimg.com/profile_images/378800000485399442/821a35fdefa3651231233db5a6b8a750.jpeg'
    },
    little_lion: {
        firstName: 'Tyrion',
        lastName: 'Lannister',
        about: 'Let me give you some advice, bastard. Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.',
        age: '38',
        city: 'Casterly Rock',
        avatar: 'https://pbs.twimg.com/profile_images/638039233748430848/7J1qNIXT_400x400.jpg'
    },
    faceless_girl: {
        firstName: 'Arya',
        lastName: 'Stark',
        about: 'When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.',
        age: '17',
        city: 'Winterfell',
        avatar: 'http://show-biz.by/blog/image/blog_image/2996/large/_v=1500294440'
    },
    three_eyed_raven: {
        firstName: 'Brandon',
        lastName: 'Stark',
        about: 'I need to learn to see better. When the Long Night comes again...I need to be ready.',
        age: '16',
        city: 'Winterfell',
        avatar: 'https://thefilmchronicles.files.wordpress.com/2016/05/game-of-thrones-s6-ep5-the-door-max-von-sydow-as-the-three-eyed-raven-and-isaac-hempstead-wright-as-bran-stark-21.jpg?w=256&h=256&crop=1' // tslint:disable-line
    },
    queen_always: {
        firstName: 'Cersei',
        lastName: 'Lannister',
        about: 'When you play the game of thrones, you win or you die. There is no middle ground.',
        age: '42',
        city: 'Casterly Rock',
        avatar: 'https://www.jcbtechno.com/wp-content/uploads/2013/09/Tyrion-et-Cersei-Lannister.jpg'
    },
    kingslayer: {
        firstName: 'Jaime',
        lastName: 'Lannister',
        about: 'There are no men like me. Only me.',
        age: '42',
        city: 'Casterly Rock',
        avatar: 'https://www.kialo.com/images/6ffa7320-2be4-4687-abb8-c0f39bb389c6_128x128@2x.jpeg'
    },
    maester: {
        firstName: 'Samwell',
        lastName: 'Tarly',
        about: 'Sometimes a man has to make hard choices, choices that might look wrong to others, but you know are right in the long run.',
        age: '24',
        city: 'Horn Hill',
        avatar: 'https://pbs.twimg.com/profile_images/378800000445135948/d080c99716fecb9ae9b73558c08df192.jpeg'
    },
    spider: {
        firstName: 'Varys',
        lastName: '',
        about: 'Storms come and go, the big fish eat the little fish, and I keep on paddling',
        age: '',
        city: 'Lys',
        avatar: 'https://pbs.twimg.com/profile_images/694825799501942784/VzrN4eTy_400x400.jpg'
    },
};
var MESSAGES_HISTORY = {
    king: {
        firstName: 'Jon',
        lastName: 'Snow',
        avatar: 'https://pbs.twimg.com/profile_images/664286819333246982/Vv7k2UN4_400x400.jpg',
        messages: [
            { type: 'incoming', text: 'Hi! How are you?' },
            { type: 'outgoing', text: 'Hi, Jon! I\'m fine. And u? What is something new on the Wall?' }
        ]
    },
    queen: {
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        avatar: 'https://www.kialo.com/images/5ac0fd69-e6b3-4e86-b53a-ea19c8bfd6cd_128x128@2x.jpeg',
        messages: [
            { type: 'outgoing', text: 'Hi, Daeny! I would like to ask you one question. Where do you color your hair? I need your master phone quickly!!!' },
            { type: 'incoming', text: 'Hello! I\'m sorry but it\'s my secret=(' },
            { type: 'outgoing', text: 'Oh(..... Ok, I understand.' },
            { type: 'outgoing', text: 'So, what did you do today?' },
            { type: 'incoming', text: 'I was flying by Dracaris to Vesteros for shopping. And u?' },
        ]
    },
    lady: {
        firstName: 'Sansa',
        lastName: 'Stark',
        avatar: 'https://pbs.twimg.com/profile_images/378800000485399442/821a35fdefa3651231233db5a6b8a750.jpeg',
        messages: [
            { type: 'outgoing', text: 'Sansa, good morning!' },
            { type: 'incoming', text: 'Hi, Tania) Are you going to Big Party this Friday?' },
            { type: 'outgoing', text: 'Unfortunately, no( I have nothing to wear((( I need some new dress' },
            { type: 'incoming', text: 'It\'s a pity(((' },
            { type: 'incoming', text: 'Mm..... I think I have a solution!' },
            { type: 'incoming', text: 'You can take one of my dresses.' },
            { type: 'outgoing', text: 'Really?? Thank you my dear! It will be nice!' },
        ]
    },
    little_lion: {
        firstName: 'Tyrion',
        lastName: 'Lannister',
        avatar: 'https://pm1.narvii.com/6904/e54dbaca42aeb19140fd382340a3fcb803a58d2cr1-235-307v2_128.jpg',
        messages: [
            { type: 'outgoing', text: 'Hi, Tyrion!' },
        ]
    },
    faceless_girl: {
        firstName: 'Arya',
        lastName: 'Stark',
        avatar: 'http://show-biz.by/blog/image/blog_image/2996/large/_v=1500294440',
        messages: [],
    },
    three_eyed_raven: {
        firstName: 'Brandon',
        lastName: 'Stark',
        avatar: 'https://78.media.tumblr.com/avatar_fbd7b7d18b24_128.pnj',
        messages: [
            { type: 'outgoing', text: 'Hi, Bran!' },
            { type: 'incoming', text: 'Hello! I saw you yesterday in my dream)' },
        ]
    },
    queen_always: {
        firstName: 'Cersei',
        lastName: 'Lannister',
        avatar: 'https://www.jcbtechno.com/wp-content/uploads/2013/09/Tyrion-et-Cersei-Lannister.jpg',
        messages: []
    },
    kingslayer: {
        firstName: 'Jaime',
        lastName: 'Lannister',
        avatar: 'https://www.kialo.com/images/6ffa7320-2be4-4687-abb8-c0f39bb389c6_128x128@2x.jpeg',
        messages: []
    },
    maester: {
        firstName: 'Samwell',
        lastName: 'Tarly',
        avatar: 'https://pbs.twimg.com/profile_images/378800000445135948/d080c99716fecb9ae9b73558c08df192.jpeg',
        messages: []
    },
    spider: {
        firstName: 'Varys',
        lastName: '',
        avatar: 'https://pbs.twimg.com/profile_images/694825799501942784/VzrN4eTy_400x400.jpg',
        messages: []
    }
};
//# sourceMappingURL=mock-user-list.js.map

/***/ }),

/***/ "../../../../../src/app/user-chat/user-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fix-width {\r\n  max-width: 800px;\r\n  height: 100%;\r\n}\r\n\r\n.fix-width .row {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.user-chat {\r\n  padding: 20px;\r\n  height: 100%;\r\n  max-height: 700px;\r\n}\r\n\r\n.user-chat-item {\r\n  margin: 10px 0;\r\n  position: relative;\r\n}\r\n\r\n.user-chat-avatar {\r\n  position: absolute;\r\n  width: 40px;\r\n}\r\n\r\n.user-chat-message {\r\n  margin: 26px 0 26px 46px;\r\n  min-height: 40px\r\n\r\n}\r\n\r\n.user-chat-message p {\r\n  margin: 0;\r\n}\r\n\r\n.user-chat-name {\r\n  display: block;\r\n  font-weight: bold;\r\n}\r\n\r\n.user-img {\r\n  width: 36px;\r\n  height: 36px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.message-container {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 20px;\r\n}\r\n\r\n.chat-container {\r\n  height: calc(100% - 200px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.no-message-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.no-message-container p {\r\n  margin: auto;\r\n  color: rgba(87, 70, 81, 0.48);\r\n}\r\n\r\n\r\n.gold-button {\r\n  background-color: #c69972;\r\n  margin-top: 10px;\r\n  color: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n\r\n.gold-button:hover {\r\n  background-color: #e7cb8b;\r\n}\r\n\r\n.gold-button:focus {\r\n  outline: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-chat/user-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container fix-width\">\n  <div class=\"row\">\n    <div class=\"col-xs-1 col-md-1\">\n      <app-user-list view=\"small\" [selectedLogin]=\"selectedLogin\"></app-user-list>\n    </div>\n    <div class=\"col-xs-11 col-md-11 user-chat\">\n      <div *ngIf=\"userChat\" class=\"chat-container\">\n        <div *ngFor=\"let message of userChat.messages\" class=\"user-chat-item\">\n          <div class=\"user-chat-avatar\">\n            <img *ngIf=\"message.type === 'incoming'\" [src]=\"userChat.avatar\" class=\"img-circle responsive user-img\">\n            <img *ngIf=\"message.type === 'outgoing'\" src=\"https://habrastorage.org/getpro/moikrug/uploads/user/100/021/586/1/avatar/medium_1a20615b74f7e0999a4786d0c31d3cf5.jpg\" class=\"img-circle responsive user-img\">\n          </div>\n          <div class=\"user-chat-message\">\n            <p *ngIf=\"message.type === 'incoming'\" class=\"user-chat-name\">{{userChat.firstName}} {{userChat.lastName}}</p>\n            <p *ngIf=\"message.type === 'outgoing'\" class=\"user-chat-name\">Tatiana Solovey</p>\n            <p>{{message.text}}</p>\n          </div>\n        </div>\n        <div *ngIf=\"!(userChat.messages.length > 0)\" class=\"no-message-container\">\n          <p>Here will be your chat with {{userChat.firstName}}</p>\n        </div>\n      </div>\n      <div class=\"message-container\">\n        <div class=\"form-group\">\n          <label for=\"comment\">Your message</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"currentMessage\" (keyup.enter)=\"sendMessage()\"></textarea>\n        </div>\n        <button type=\"button\" class=\"btn btn-default gold-button\" [disabled]=\"currentMessage === ''\" (click)=\"sendMessage()\">Send message</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-chat/user-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserChatComponent = (function () {
    function UserChatComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.currentMessage = '';
    }
    UserChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.selectedLogin = params.get('login');
            return _this.userService.getUserChat(params.get('login'));
        })
            .subscribe(function (chat) { return _this.userChat = chat; });
    };
    UserChatComponent.prototype.sendMessage = function () {
        var _this = this;
        this.currentMessage = this.currentMessage.replace(/\r?\n|\r/, '');
        if (this.currentMessage.length > 0) {
            this.userService.addUserMessage(this.selectedLogin, this.currentMessage);
            this.userService.getUserChat(this.selectedLogin).then(function (chat) { return _this.userChat = chat; });
            this.currentMessage = '';
        }
    };
    return UserChatComponent;
}());
UserChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-chat',
        template: __webpack_require__("../../../../../src/app/user-chat/user-chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-chat/user-chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], UserChatComponent);

var _a, _b;
//# sourceMappingURL=user-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-full-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFullInfo; });
var UserFullInfo = (function () {
    function UserFullInfo() {
    }
    return UserFullInfo;
}());

//# sourceMappingURL=user-full-info.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".small-user-list,\r\n.user-list {\r\n  background-color: #ffffff;\r\n  margin-top: 20px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 5px;\r\n}\r\n\r\n.small-user-list {\r\n  padding: 6px;\r\n}\r\n\r\n.user-list {\r\n  padding: 8px 16px;\r\n}\r\n\r\n.user-list ul, .small-user-list ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.user-list-separator {\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: rgba(128, 42, 58, 0.2);\r\n}\r\n\r\n.user-list-item {\r\n  padding: 12px;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.small-user-list .user-list-item {\r\n  padding: 12px 0;\r\n  text-align: center;\r\n}\r\n\r\n.user-list-item:hover {\r\n  color: #e7cb8b;\r\n}\r\n\r\n.user-list .user-list-item:hover .user-img {\r\n  margin-left: -10px;\r\n}\r\n\r\n.user-img {\r\n  width: 40px;\r\n  height: 40px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.user-list .user-img {\r\n  margin-right: 10px;\r\n}\r\n\r\n.user-list .selected-list-item {\r\n  margin-left: -10px;\r\n}\r\n\r\n.selected-item-icon, .item-icon {\r\n  line-height: 40px;\r\n  font-size: 13px;\r\n}\r\n\r\n.selected-item-icon {\r\n  margin-right: -12px;     /* Chrome and other webkit browsers */        /* FF */          /* Opera */         /* IE9 */\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.small-user-list .selected-list-item .vertical-separator,\r\n.small-user-list .user-list-item:hover .vertical-separator{\r\n  float: right;\r\n  width: 2px;\r\n  height: 40px;\r\n  margin-left: 5px;\r\n  background-color: #802a3a;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [ngClass]=\"view === 'small' ? 'small-user-list' : 'user-list'\">\n  <div class=\"col-12\">\n    <div *ngFor=\"let user of userList; let i = index\" >\n      <div (click)=\"swapPage(user)\" class=\"user-list-item\" [ngClass]=\"user.login === selectedUser ? 'selected-list-item' : ''\">\n        <img [src]=\"user.avatar\" class=\"img-circle responsive user-img\">\n        <span *ngIf=\"view !== 'small'\">{{user.firstName}} {{user.lastName}}</span>\n        <span class=\"glyphicon glyphicon-user pull-right item-icon\" *ngIf=\"view === 'large'\"></span>\n        <span class=\"glyphicon glyphicon glyphicon-play pull-right selected-item-icon\" *ngIf=\"user.login === selectedUser && view !== 'small'\"></span>\n        <div *ngIf=\"view === 'small'\" class=\"vertical-separator\"></div>\n      </div>\n      <div *ngIf=\"i < userList.length - 1\" class=\"user-list-separator\"></div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUserList();
        this.selectedUser = this.selectedLogin;
    };
    UserListComponent.prototype.getUserList = function () {
        var _this = this;
        this.userService.getUserList().then(function (userList) { return _this.userList = userList; });
    };
    UserListComponent.prototype.swapPage = function (user) {
        if (this.selectedUser === user.login) {
            this.router.navigate(['/users']);
        }
        else if (this.view === 'middle' || this.view === 'large') {
            this.selectedUser = user.login;
            this.router.navigate(['/users', user.login, 'info']);
        }
        else if (this.view === 'small') {
            this.selectedUser = user.login;
            this.router.navigate(['/users', user.login, 'chat']);
        }
    };
    return UserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], UserListComponent.prototype, "view", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], UserListComponent.prototype, "selectedLogin", void 0);
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_user_list__ = __webpack_require__("../../../../../src/app/mock-user-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
        this.messagesHistory = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__mock_user_list__["a" /* MESSAGES_HISTORY */]);
    }
    UserService.prototype.getUserList = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_user_list__["c" /* USER_LIST */]);
    };
    UserService.prototype.getUserFullInfo = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_user_list__["b" /* USER_INFO */]);
    };
    UserService.prototype.getUserInfo = function (login) {
        return this.getUserFullInfo().then(function (info) { return info[login]; });
    };
    UserService.prototype.getUserChat = function (login) {
        return Promise.resolve(this.messagesHistory[login]);
    };
    UserService.prototype.addUserMessage = function (login, text) {
        this.messagesHistory[login].messages.push({ type: 'outgoing', text: text });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/users-info/users-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fix-width {\r\n  max-width: 800px;\r\n  padding: 0;\r\n}\r\n\r\n.user-info-card {\r\n  padding: 20px;\r\n}\r\n\r\n.user-info-card h2{\r\n  font-size: 20px;\r\n}\r\n\r\n.separator {\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: rgba(128, 42, 58, 0.2);\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.user-info-card .img-thumbnail {\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.user-age-city {\r\n  position: relative;\r\n}\r\n\r\n.user-age-city span {\r\n  color: rgba(87, 70, 81, 0.56);\r\n  font-size: 13px;\r\n  line-height: 26px;\r\n  display: block;\r\n  position: absolute;\r\n  width: 100px;\r\n}\r\n\r\n.user-age-city p {\r\n  color: #532331;\r\n  font-size: 15px;\r\n  margin-left: 100px;\r\n}\r\n\r\n.gold-button {\r\n  background-color: #c69972;\r\n  margin-top: 10px;\r\n  color: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n\r\n.gold-button:hover {\r\n  background-color: #e7cb8b;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-info/users-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container fix-width\">\n  <div class=\"row\">\n    <div class=\"col-xs-5 col-md-4\">\n      <app-user-list view=\"middle\" [selectedLogin]=\"selectedLogin\"></app-user-list>\n    </div>\n    <div class=\"col-xs-7 col-md-8 user-info-card\">\n      <div *ngIf=\"user\">\n        <div class=\"row\">\n          <div class=\"col-xs-5 col-md-5\">\n            <img [src]=\"user.avatar\" class=\"img-thumbnail\">\n            <button type=\"button\" class=\"btn btn-default gold-button\" (click)=\"swapPage(selectedLogin)\">Write a message</button>\n          </div>\n          <div class=\"col-xs-7 col-md-7\">\n            <h2>{{user.firstName}} {{user.lastName}}</h2>\n            <div class=\"separator\"></div>\n            <div class=\"user-age-city\">\n              <span>Age:</span><p>{{user.age}}</p>\n              <span>Place of Birth:</span><p>{{user.city}}</p>\n            </div>\n            <div class=\"separator\"></div>\n            <div>{{user.about}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users-info/users-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_full_info__ = __webpack_require__("../../../../../src/app/user-full-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersInfoComponent = (function () {
    function UsersInfoComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UsersInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.selectedLogin = params.get('login');
            return _this.userService.getUserInfo(params.get('login'));
        })
            .subscribe(function (user) { return _this.user = user; });
    };
    UsersInfoComponent.prototype.swapPage = function (login) {
        this.router.navigate(['/users', login, 'chat']);
    };
    return UsersInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_full_info__["a" /* UserFullInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_full_info__["a" /* UserFullInfo */]) === "function" && _a || Object)
], UsersInfoComponent.prototype, "user", void 0);
UsersInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/users-info/users-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users-info/users-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], UsersInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=users-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-list view=\"large\" selectedLogin=\"\"></app-user-list>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () { };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map